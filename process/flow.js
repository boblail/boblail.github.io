FLOW = (function() {
  const PROCESSES = [];

  const QUEUE_PADDING = 6;
  const QUEUE_GUTTER = 1;
  const DEFAULT_INTERVAL = 200;
  const DEFAULT_WORKER_RATE = 4;
  const DEFAULT_TASK_EFFORT = 1;
  // const STRIDE = 8.3333333333333;
  // const STRIDE = 12.5;
  const STRIDE = 0.25;
  // const STRIDE = 4;



  class Clock {
    constructor() {
      this.interval(DEFAULT_INTERVAL);
    }

    interval(value) {
      this._delay = value;
      this._start();
    }

    _start() {
      if(this._interval) {
        window.clearInterval(this._interval);
      }
      this._interval = window.setInterval(this._tick, this._delay);
    }

    _tick() {
      PROCESSES.forEach((process) => {
        if(process.isPlaying) {
          process.tick();
        }
      });
      PROCESSES.forEach((process) => {
        if(process.isPlaying) {
          process.draw();
        }
      });
    }
  }



  class Observer {
    constructor() {
      this._observations = [];
    }

    observe(event, callback) {
      let exists = this._observations.find((o) => {
        return o.event === event && o.callback === callback;
      });

      if(!exists) {
        this._observations.push({ event, callback });
      }
    }

    unobserve(event, callback) {
      for(let i = 0, o; i < this._observations.length;) {
        o = this._observations[i];
        if(o.event === event && o.callback === callback) {
          this._observations.splice(i, 1);
        } else {
          i += 1;
        }
      }
    }

    fire(event, data, scope) {
      if(!(data instanceof Array)) data = [data];
      this._observations.forEach((o) => {
        if(o.event === event) {
          o.callback.apply(scope, data);
        }
      });
    }
  }



  class Process {
    constructor(element) {
      this.start = new Start(this);
      this.end = new End(this, this.start);
      this.element = document.getElementById(element);

      this.axis = document.createElement('div');
      this.axis.classList.add('axis');
      this.element.appendChild(this.axis);

      this.tasks = document.createElement('div');
      this.tasks.classList.add('tasks');
      this.element.appendChild(this.tasks);

      this.isPlaying = false;

      this.observer = new Observer();
    }

    static create(element) {
      let process = new Process(element);
      PROCESSES.push(process);
      return process;
    }

    play() {
      this.isPlaying = true;
    }

    pause() {
      this.isPlaying = false;
    }

    addLine(callback) {
      let line = this.end.addLine();
      if(callback) callback(line);
      return this;
    }

    addQueue(callback) {
      let queue = this.end.addQueue();
      if(callback) callback(queue);
      return this;
    }

    addWorker(callback) {
      let worker = this.end.addWorker();
      if(callback) callback(worker);
      return this;
    }

    tasks(value) {
      this.start.tasks(value);
    }

    tick() {
      this.eachComponent((component) => component.tick());
    }

    draw() {
      this.eachComponent((component) => component.draw());
    }

    eachComponent(callback) {
      let component = this.end;
      while(component) {
        callback(component);
        component = component.previous();
      }
    }

    on(event, callback) {
      this.observer.observe(event, callback);
    }

    off(event, callback) {
      this.observer.unobserve(event, callback);
    }
  }



  class Component {
    constructor(process, previousComponent) {
      this.process = process;
      this.previousComponent = previousComponent;
      this._tasks = [];
    }

    previous() {
      return this.previousComponent;
    }

    tick() {
      this.left = this.element().offsetLeft;
      this.width = this.element().offsetWidth;

      if(this.previousComponent) {
        if(this.canPullTask()) {
          this.previousComponent.unblocked();
          let task = this.previousComponent.yieldTask();
          if(task) this.acceptTask(task);
        } else {
          this.previousComponent.blocked();
        }
      }
    }

    draw() {
      if(this.isBlocked()) {
        this._element.classList.add('blocked');
      } else {
        this._element.classList.remove('blocked');
      }

      this._tasks.forEach((task) => {
        task.draw();
      });
    }

    element() {
      if(!this._element) this.append();
      return this._element;
    }

    append() {
      this._element = document.createElement('div');
      this._element.classList.add('component');
      let parent = this.process.axis;
      parent.insertBefore(this._element, parent.firstElementChild);
      return this._element;
    }


    yieldTask() {
      return null;
    }

    blocked() {
      this._isBlocked = true;
    }

    unblocked() {
      this._isBlocked = false;
    }

    canPullTask() {
      return !this.isBlocked();
    }

    isBlocked() {
      return this._isBlocked;
    }

    acceptTask(task) {
      let taskElement = task.element();
      this.acceptTaskElement(taskElement);
      this._tasks.unshift(task);
      return task;
    }

    acceptTaskElement(element) {
      element.style.left = this.left;
      element.style.bottom = 2;
    }

    tasksCount() {
      return this._tasks.length;
    }
  }



  class Start extends Component {
    constructor(process) {
      super(process, null);
      this.ticksSinceLastPull = Infinity;
      this.i = 1;
      this._tasks = Infinity;
    }

    tasks(value) {
      this._tasks = value;
    }

    draw() {
      // Do nothing
    }

    append() {
      super.append().classList.add('start');
    }

    yieldTask() {
      if(this._tasks.length !== undefined) {
        let nextTaskEffort = this._tasks.shift();
        return nextTaskEffort && this.newTask().effort(nextTaskEffort);
      } else if(this.i < this._tasks) {
        return this.newTask();
      }
    }

    newTask() {
      let task = new Task(this.i++);
      this.process.tasks.appendChild(task.element());
      return task;
    }
  }



  class End extends Component {
    addLine() {
      return this.addComponent(Line);
    }

    addQueue() {
      return this.addComponent(Queue);
    }

    addWorker() {
      return this.addComponent(ProcWorker);
    }

    addComponent(klass) {
      this.previousComponent = new klass(this.process, this.previousComponent);
      return this.previousComponent;
    }

    append() {
      super.append().classList.add('end');
    }

    acceptTask(task) {
      this._tasks.push(task);
      task.element().remove();
      this.process.observer.fire('task:completed', task);
    }
  }



  class Line extends Component {
    tick() {
      super.tick();
      if(!this.isBlocked()) {
        this.width = this.element().offsetWidth;
        this._tasks.forEach((task) => {
          task.percentLeft += STRIDE;
        });
      }
    }

    draw() {
      super.draw();
      this._tasks.forEach((task) => {
        task.element().style.left = this.left + (this.width * task.percentLeft);
      });
    }

    append() {
      super.append().classList.add('line');
    }

    yieldTask() {
      let lastTask = this._tasks[this._tasks.length - 1];
      if(!lastTask) return null;
      if(lastTask.percentLeft < (1.0 - STRIDE)) return null;
      return this._tasks.pop();
    }

    acceptTask(task) {
      task.percentLeft = 0;
      return super.acceptTask(task)
    }
  }



  class Queue extends Component {
    wipConstraint(value) {
      this._wipConstraint = value;
      return this;
    }

    tick() {
      super.tick();
      this.taskLefts = [];

      if(this._wipConstraint) {
        let lefts = this.fixedTaskLefts.slice(0);
        for(let i = this._tasks.length - 1; i >= 0; i--) {
          this.taskLefts[i] = this.left + (lefts.pop() / 100.0 * this.width);
        }
      } else {
        let taskWidths = this._tasks.map((task) => task.element().offsetWidth);
        let uncompressedWidth = (
          QUEUE_PADDING * 2 +
          taskWidths.reduce(((width, total) => width + total), 0) +
          QUEUE_GUTTER * (this._tasks.length - 1)
        );

        let right = this.left + this.width - QUEUE_PADDING;

        if(uncompressedWidth > this.width) {
          let maxLeft = right - taskWidths[this._tasks.length - 1];
          let minLeft = this.left + QUEUE_PADDING;
          let increment = Math.max(3, (maxLeft - minLeft) / (this._tasks.length - 1));
          let left = maxLeft;
          for(let i = this._tasks.length - 1; i >= 0; i--) {
            this.taskLefts[i] = left + (taskWidths[i] / 2); // uncenter
            left = Math.max(minLeft, left - increment);
          }
        } else {
          // The first task scoots to the rightmost position
          // and tasks backfill into the queue from there.
          for(let left, i = this._tasks.length - 1; i >= 0; i--) {
            left = right - taskWidths[i];
            this.taskLefts[i] = left + (taskWidths[i] / 2); // uncenter
            right = left - QUEUE_GUTTER;
          }
        }
      }
    }

    draw() {
      super.draw();
      for(let i = 0; i < this._tasks.length; i++) {
        let element = this._tasks[i].element();
        element.style.left = this.taskLefts[i];

        // so that, when depicted with compression,
        // the rightmost task is on top of the rest.
        element.style.zIndex = i;
      }
    }

    append() {
      let queue = super.append()
      queue.classList.add('queue');

      if(this._wipConstraint) {
        let increment = 100 / (this._wipConstraint + 1);
        let x = 0;
        this.fixedTaskLefts = [];
        for(let i = 0; i < this._wipConstraint; i++) {
          this.fixedTaskLefts.push(x += increment);

          let ghostTask = document.createElement('div');
          ghostTask.classList.add('task', 'ghost');
          ghostTask.style.left = `${this.fixedTaskLefts[i]}%`;
          queue.appendChild(ghostTask);
        }
      }
    }

    yieldTask() {
      return this._tasks.pop();
    }

    isBlocked() {
      if(this._wipConstraint) {
        return this._tasks.length >= this._wipConstraint;
      } else {
        return false;
      }
    }

    acceptTask(task) {
      task.left = 0;
      return super.acceptTask(task)
    }

    acceptTaskElement(element) {
      element.style.bottom = 7;
    }
  }



  class ProcWorker extends Component {
    constructor(...args) {
      super(...args);
      this._rate = DEFAULT_WORKER_RATE;
      this._isDefective = false;
    }

    rate(value) {
      this._rate = value;
      return this;
    }

    tick() {
      super.tick();
      this.workRequired--;
    }

    append() {
      super.append().classList.add('worker');
    }

    yieldTask() {
      if(this.workRequired > 0) return null;
      return this._tasks.pop();
    }

    canPullTask() {
      return this._tasks.length === 0;
    }

    acceptTask(task) {
      this.workRequired = this._rate * task._effort;

      if(task._isDefective) {
        this.process.observer.fire('task:defectDiscovered', task);
      }

      if(this._isDefective) {
        this.markTaskDefective(task)
      }
      return super.acceptTask(task)
    }

    acceptTaskElement(element) {
      element.style.left = this.left + (this.width / 2);
      element.style.bottom = 0;
    }

    introduceDefect() {
      this._isDefective = true;

      this._tasks.forEach((task) => {
        task.introduceDefect();
      });
    }

    markTaskDefective(task) {
      task.introduceDefect();
    }
  }



  class Task {
    constructor(number) {
      this.number = number;
      this._effort = DEFAULT_TASK_EFFORT;
      this._isDefective = false;
    }

    effort(value) {
      this._effort = value;
      this.setElementSize();
      return this;
    }

    element() {
      if(!this._element) {
        this._element = document.createElement('div');
        this._element.classList.add('task');

        this.setElementSize();

        let span = document.createElement('span');
        span.appendChild(document.createTextNode(this.number));
        this._element.appendChild(span);
      }
      return this._element;
    }

    setElementSize() {
      let size = Math.sqrt(this._effort);
      this._element.style.width = `${size}em`;
      this._element.style.height = `${size}em`;
      this._element.style.marginLeft = `-${size / 2}em`;
    }

    introduceDefect() {
      this._isDefective = true;
    }

    draw() {
      if(this._isDefective) {
        this._element.classList.add('defective');
      } else {
        this._element.classList.remove('defective');
      }
    }
  }

  const clock = new Clock();

  return {
    createProcess: Process.create,
    clock: clock
  };
})();

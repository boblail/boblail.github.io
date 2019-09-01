---
layout: post
title: Most Of What I've Learned, in Five Verbs
date: 2019-09-15
read_time: 10
excerpt_separator: <!--more-->
---

This year I started a new job. I wanted to approach my craft with a beginner’s mind, so I purposefully set aside the processes, tools, and language I knew so well. These were things I’d helped to evolve through years of iteration, and after setting them aside, something unexpected happened. I started finding it difficult to access the lessons that led me to those solutions. Trying to recall and apply them felt like rummaging through a junk drawer. 😕 The lessons, apparently, were not organized and not handy.

<!--more-->

I dumped out the junk drawer and arranged its contents different ways. Some lessons were patently similar. For example, **_Write small methods_**, **_Deploy in small batches_**, and **_Slice tasks vertically_** clustered around a theme of _smallness._ I wondered why. (Were there other clusters like that?)

I thought I was looking for principles (clusters around _Why?_) so, of each acquired habit, I asked _Why do I do this?_ recursively. It wasn’t helpful. I “discovered” that I write small methods to produce readable and malleable code — and that I value readability and malleability because they help a team deliver value through time. In fact, that objective — helping a team deliver value through time — turned out to be the ultimate _Why?_ of every habit in my drawer!

Eventually I noticed that <u><strong><em>Write small methods</em></strong> and <strong><em>Slice tasks vertically</em></strong> are more similar in their <em>How?</em> than their <em>Why?</em></u> When I started asking _How?_ of my acquired habits, I found clusters, _immediately compelling clusters,_ around verbs. They were simple to understand but hard to master, few in number, and the lessons around them crossed contexts and scales.

<p class="nomargin">These are the verbs that emerged from my experience so far:</p>
1. [Explaining Why](#1-explaining-why)
2. [Slicing](#2-slicing)
3. [Holding your Action](#3-holding-your-action-)
4. [Automating](#4-automating)
5. [Failing Early](#5-failing-early)

---


## 1. Explaining Why
### Personal Rules
- Pick intention-revealing names
- Use commit messages to describe your goal
- _Why?_ is the most valuable documentation of any process
- Why a customer requests a feature is more valuable than What they request [¹](#endnote1)
- (Indoctrinate in the Commander’s Intent) [²](#endnote2)

### The Goal
**Explaining Why empowers your audience to change.** It links your solution to the problem it solves. This _de-risks_ change the way that unit tests do — by allowing future colleagues to check whether a new solution (process, UI, architecture, etc) also solves the original problem. And it _invites_ change the way an expiration date does — by revealing the conditions under which the existing solution is no longer needed.

Neglecting to Explain Why hamstrings your future teammates. Faced with a change but unable to say why the current code, process, or roadmap exists, they must choose between caution and recklessness: either changing too slowly or taking preventable risks.

### What to Practice
**Dig for it.** _Why_ can be hard to write because it’s often, at least partially, implicit. A plan will seem sensible to us (or code smelly or a process natural) because of subconscious factors like our beliefs and habits — because of what we believe the problem and goal to be and because of what tradeoffs and judgments we are accustomed to making. In both cases, some of what we need to verbalize to Explain Why must be dredged up from nonverbal places.

The goal of writing code, commit messages, handbooks, design docs, and feature requests is not to lob information over a fence to a stranger but to come alongside a friend and give them a warm handoff. Explaining Why invites someone into your thought process and encourages them to see the problem, tradeoffs, and solution as you do. It is gentle, cordially persuasive writing.

## 2. Slicing
### Personal Rules
- Isolate responsibilities (in methods, objects, microservices)
- Make commits atomic
- Slice tasks vertically [³](#endnote3)
- Keep deploys small
- (Break monolith organizations into small, autonomous teams) [⁴](#endnote4)

### The Goal
**Slicing improves flow.** It allows work to move through a system in smaller batches. (Picture the difference between an animation at 30fps and one at 5fps or between an hourglass filled with sand and another filled with gravel.) Slicing _tasks_ lets you start delivering value sooner, be more transparent about your progress, and get blocked less often.

<u>Complexity is also a batch:, a set of things that must be comprehended together.</u> Slicing _methods_ and _objects_ until they have just one responsibility (and one level of abstraction) improves the flow of reading and makes maintenance easier.

> Breaking down a complex thing into understandable chunks is essential for understanding, perhaps the essence of understanding.
> <span class="author">Bret Victor</span>

### What to Practice
Find the seams. The ideal batch size is one: one thought at a time, an atomic change, a single responsibility. These Batches of One are obvious _after_ we slice but seldom before. Prior to slicing, we tend to find thoughts, responsibilities, and tasks tangled together, and their seams aren’t easy to see.

<p class="nomargin">It’s possible to slice <em>across seams.</em> For example, we might slice a project into tasks that have to do with the same layer of the architecture:</p>
1. Create all the models
2. Create all the controllers
3. Create all the views

<p class="nomargin">Or we might break up a large <code>Person</code> model by extracting into modules:</p>
1. All the methods that have to do with contact information
2. All the methods that have to do with employment
3. All the methods that have to do with posts and comments

These crosscuts aren’t Batches of One, however, because they aren’t independent of each other. The three tasks _deliver no value until all of them are completed._ And the three modules don’t reduce the complexity of `Person` at all; they just spread it across more files. Instead of achieving the benefits of Slicing, these examples introduce a new obstacle: they make it harder to see the _true_ seams in the original project and model. To make progress in this situation, it’s often helpful to merge the bad slices and start fresh.

Good slices are independent of each other. To slice effectively, we learn to find seams that create standalone chunks of work or thought. Each task ships a sliver of value. Each commit could be deployed by itself. Each method or object owns a single tiny responsibility.

## 3. Holding your Action [⁵](#endnote5)
### Personal Rules
- Write the simplest thing that could work, then refactor
- Design from the outside in
- Measure before you optimize
- Don’t build a feature before it’s needed (i.e. [Yagni](https://martinfowler.com/bliki/Yagni.html))
- Adjust roadmaps continually

### The Goal
**Holding your action reduces waste.** Hitting pause on work that isn’t needed _yet_ avoids wasted effort in the form of overproduction, overthinking, and overspecifying. Wasted effort is plainly bad, but the unneeded features and decisions themselves can be worse. While seeming harmless (valuable even), maintaining, revisiting, and following-through on them ties the team up in pointless work.

> There is surely nothing quite so useless as doing with great efficiency what should not be done at all.
> <span class="author"><a href="https://hbr.org/1963/05/managing-for-business-effectiveness">Peter Drucker</a></span>

### What to Practice
**Apply the brakes.** In the midst of overproducing, overthinking, or overspecifying, our activity will not feel like waste. (It isn’t yet! We will only know that in hindsight.) Instead, we will be caught up in the momentum of excitement, anxiety, or inevitability. An engineer will be eager to solve an edge case that’s just occurred to her. A project sponsor will be anxious to seize a possible opportunity. A team will feel obligated to fulfill all the expectations fueled by their roadmap.

To check a momentum-fueled goose chase, get in the habit of taking a few seconds to ask, _“Do I need to build/decide/answer this right now?”_ If your answer is “no,” then ask two followup questions: _“When the need arises, will I realize it?”_ and _“When the need arises, will I be able to build/decide/answer this then?”_ If your answer to either followup question is “no,” is there a way to adjust your process that will switch it to “yes”?

> What is the future cost of doing nothing now?
> <span class="author"><a href="https://www.youtube.com/watch?v=xi3DClfGuqQ">Sandi Metz</a><span>

## 4. Automating
### Personal Rules
- Handle alerts once
- Create jigs [⁶](#endnote6)
- Automate deploys
- Use information-radiators
- (Don't make a hundred decisions when one will do) [⁷](#endnote7)

### The Goal
**Automating builds momentum.** In the book _[Good to Great](https://www.amazon.com/Good-Great-Some-Companies-Others/dp/0066620996/ref=sr_1_1?keywords=good+to+great&qid=1568594458&s=gateway&sr=8-1),_ Jim Collins evoked the image of a giant, heavy [flywheel](https://www.jimcollins.com/concepts/the-flywheel.html). You push it. It turns slowly at first, but as it builds momentum it moves faster and faster. With each turn, you apply the same effort as before, but the flywheel’s momentum works for you and your effort is magnified. The flywheel accelerates because, with each turn, you _compound_ the kinetic energy you have transferred to it. In a similar way, teams accelerate when they offload work to their environment: to toolchains, processes, cadences, simple rules, dashboards, and other automata.

> I've known people who have not mastered their tools who are good programmers, but not a tool master who remained a mediocre programmer.
> <span class="author"><a href="https://twitter.com/kentbeck/status/398623270917771264">Kent Beck</a></span>

### What to Practice
Notice what pulls you away from your essential work. The flywheel can build momentum in negative directions as easily as it can in positive directions. Automations can create busywork for humans. They can entrench work that wasn’t necessary in the first place, masking an inefficient process. So first focus on what your essential work is. Then be rigorous about not doing what you don't need to do.

Your essential work may differ from what you do day-to-day. Your daily tasks might include a host of helpful activities that _can_ be offloaded to the environment. By doing these, though, you spend less time doing the hard (but critical) work of empathizing with your customers, learning, brainstorming, analyzing, recognizing patterns, and articulating your intentions. Your essential work is what _can’t_ be offloaded to the environment, not just what isn’t obvious to offload.

Notice friction, repetitive tasks, non-value-add work, checklists (a regular task that takes more than one step), rework (like when you do a task infrequently but have to figure it out each time), waiting (like for a script to finish), extra context-switches (like if you’re waiting for a script to finish and it takes just long enough for you to check your email). These are jobs that can be offloaded to your environment — to scripts, chat bots, policies, information radiators, and all sorts of nonhuman collaborators.

> Design your environment so that it nudges and motivates you to do the stuff you believe you should be doing.
> <span class="author"><a href="https://twitter.com/RyanMcGreal/status/281445643262763009">Ryan McGreal</a></span>

## 5. Failing Early
### Personal Rules
- Write unit tests
- Raise exceptions at root causes not symptoms
- Do the riskiest task first
- Ship the smallest thing that will let you start testing assumptions (e.g. [MVP](http://theleanstartup.com/principles#develop_mvp))

### The Goal
**Failing Early reduces risk.** It converts assumptions into hypotheses and then tests them. In so doing, it minimizes the downsides of failure (its impact on customers, the time it takes to correct it) by reducing the distance between a failure and the first sign of it. An assumption about user behavior that is falsified _sooner_ costs less in wasted effort. Similarly, an exception raised _nearer_ its root cause is easier to troubleshoot than one triggered by a distant side-effect.

### What to Practice
**Anticipate Failure.** To fail early, we must get in the habit of _creating hypotheses of failure._ Then we can test those hypotheses by writing specs, asserting a method’s preconditions, or A/B testing a feature. Testing assumptions is easy compared to identifying them! How do we get better at noticing what our brains are taking for granted? In his book _[Design Paradigms](https://www.amazon.com/Design-Paradigms-Henry-Petroski/dp/0521466490/ref=sr_1_1?keywords=design+paradigms&qid=1568594603&s=gateway&sr=8-1),_ Henri Petroski asserts that judgment (by which he means the ability to anticipate failure) is an engineer’s most important faculty — and that the best way of improving our judgment is to study failures. By doing incident reviews, by reading postmortems and case studies, we sensitize ourselves to our own assumptions and get better at anticipating failures.


> In case after case, the proper anticipation of failure has always been the mark of the most successful of engineers.
> <span class="author">Henri Petroski</span>


---


## Conclusion

### Synergies
Certain pairs of these skills play well together and enable [combo moves](https://en.wikipedia.org/wiki/Combo_(video_gaming)). A few examples include:
- Slicing methods, objects, and services creates the need for more names; and clear names reveal seams.
- Slicing tasks may reveal work that can be held until later.
- Holding your Action will keep you from obviating every anticipated failure and steer you toward designing better signals of failure.


### Optimizing the System
All of these skills are aimed at removing waste, but they don’t all remove work. Explaining Why, for example, _adds_ work at every step. This would be inefficient if we were optimizing ourselves; but we’re not. We’re optimizing a system which includes the team of humans we work with, whoever will join later, and [the robots on our team](https://blog.atomist.com/principles-of-collaborative-automation/) that run specs, perform deploys, and deliver information to us.

### Fractals
These skills apply at different scales because the work itself is fractal. We apply the same principles when we slice tasks and teams as when we slice methods and objects. We can leverage that. In _[The Art of Learning](https://www.amazon.com/Art-Learning-Journey-Optimal-Performance/dp/0743277465/ref=sr_1_1?keywords=the+art+of+learning&qid=1568594664&s=gateway&sr=8-1),_ Joshua Waitzkin described his technique for elite performance:[⁸](#endnote8) he translates mastery from the small to the large. He practices simple moves (a basic punch, a chessboard with just 3 or 4 pieces) until he deeply internalizes the forces and constraints at play. When the same forces and constraints apply in more complex scenarios, his intuition is primed to perceive them. Software development is staggeringly complex, but it is a fractal. A few skills (maybe even some of these) apply at every level.

> It is rarely a mysterious technique that drives us to the top, but rather a profound mastery of what may well be a basic skill set.
> <span class="author">Josh Waitzkin</span>


---

### Endnotes
{:.endnotes}

¹<a name="endnote1"></a>
: The customer’s _Why?_ comes from their deep knowledge of the [Problem Space](https://medium.com/@nikhilgupta08/problem-space-vs-solution-space-f970d4ace5c). _What?_ is a point in the Solution Space. Your map of the Solution Space is likely better than your customer’s, but their map of the Problem Space is better than yours — they _live_ there. Your ability to create value for them depends entirely on how well you can acquire their map. (See Clayton Christensen’s [Jobs to Be Done](https://www.christenseninstitute.org/jobs-to-be-done/) framework and the first three chapters of _[About Face](https://www.amazon.com/About-Face-Essentials-Interaction-Design/dp/1118766571/ref=sr_1_2?keywords=About+Face&qid=1568594161&s=gateway&sr=8-2)_) [back](#1-explaining-why){:.back}

²<a name="endnote2"></a>
: I’ve included with my “Personal Rules” a few parenthesized statements: these are not lessons I learned directly by experience but principles I’ve read about that seem to fit with one of the five verbs. This principle, _**Indoctrinate in the Commander’s Intent**,_ is how the modern military decentralizes decision-making while coordinating effort. (See chapter 9 of _[The Principles of Product Development Flow](https://www.amazon.com/Principles-Product-Development-Flow-Generation/dp/1935401009/ref=sr_1_1?crid=2PI813DPT6KAT&keywords=the+principles+of+product+development+flow&qid=1568594196&s=gateway&sprefix=The+Principles+of+Product%2Caps%2C173&sr=8-1)_) [back](#1-explaining-why){:.back}

³<a name="endnote3"></a>
: "Vertically" refers to slicing a cake or a sandwich. If you cut a sandwich vertically, across its layers, you get smaller sandwiches. If you cut it horizontally, with its layers, you get bread, meat, or a slice of cheese — _not a sandwich._ Tasks should be sliced so each delivers a smaller piece of value. [back](#2-slicing){:.back}

⁴<a name="endnote4"></a>
: “The way to grow an organization is similar to the way to grow a code base. Whether it’s a monolith organization or monolith code base, you constantly figure out how to do cell divide, how to decompose or break apart so that you can get stronger boundaries and the ability to iterate in a way that you can make changes that don’t ripple through everything else so that you can reason about them independently.” ([Interview with Alyssa Henry, April 2019](https://news.greylock.com/zooming-out-from-engineering-43c7c92b9797)) [back](#2-slicing){:.back}

⁵<a name="endnote5"></a>
: I borrowed the phrase "Holding your action" from Dungeons & Dragons. In a round of combat, a player gets one or more actions. Instead of using them immediately, they may choose to "hold their action" by saying so and describing the trigger that would release their action. For example, "I will hold my action until I can see the Gnoll and then I will fire a crossbow bolt." [back](#3-holding-your-action-){:.back}

⁶<a name="endnote6"></a>
: “Jig” is a woodworking term for a custom tool that makes an action repeatable. A crosscut sled is a simple jig that holds a workpiece perpendicular to a table saw. By pouring your effort into creating a perfect crosscut sled _once,_ you get the ability to replicate square corners endlessly. [back](#4-automating){:.back}

⁷<a name="endnote7"></a>
: Advice given to Jim Collins by Peter Drucker ([Interview with Jim Collins, February 2019](https://tim.blog/2019/02/18/jim-collins/)) and expanded on in [this blog post](https://awealthofcommonsense.com/2019/03/from-chaos-to-concept/). [back](#4-automating){:.back}

⁸<a name="endnote8"></a>
: Josh is an International Master chess-player and World Champion Tai Chi Chuan combatant. The book and film _Searching for Bobby Fischer_ are based on his childhood. [back](#fractals){:.back}
{:.endnotes}

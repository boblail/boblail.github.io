---
layout: post
title:  "The Principles of Product Development Flow"
date:   2012-05-05
categories: book-reports
redirect_from:
 - /post/22482443493/the-principles-of-product-development-flow
 - /day/2012/05/05
excerpt_separator: <!--more-->
---

<figure class="book-cover">
  <img src="/assets/the-principles-of-product-development-flow.jpg" />
</figure>


> In the past you may have been told that the key to economic success is efficiency…[or] conformance to plan… I would suggest that both of these popular beliefs are fundamentally wrong. The key to economic success is <u>making good economic choices</u> with <u>the freshest possible information</u>. (p235, emphasis mine)

<!--more-->

Armed with the wrong definition of economic success, we would naturally measure—and _optimize_—the wrong things. At best this wastes effort, at worst it invites failure. Reinertsen’s goal in _The Principles of Product Development Flow_ is to identify flaws in the conventional wisdom and to equip the reader with modern insights into product development. In support of his arguments, he draws on fields as diverse as lean manufacturing, economic theory, queueing theory, telecommunications, operating system design, and maneuver warfare.

_The Principles of Product Development Flow_ is organized into 9 chapters and 175 brief principles.

### Making Good Economic Choices
> Perhaps the single most important weakness of the current orthodoxy is its failure to correctly quantify economics. (p4)

Product developers measure things like cycle time, value-add time, and other “proxy variables”. What we don’t measure is how these variables interact. As a result, we can’t answer questions like _Which is less expensive: a 1-month delay or a $5,000 increase in expense?_ or _Is this feature worth pursuing if it will take twice as long to implement?_

To answer these questions we must express metrics in a common unit, lifecycle profits. Converting everything to dollars also reveals a critical insight: <u>the best business plan is seldom the optimization of a _single_ proxy variable.</u> (It’s seldom the _most efficient_ or _quickest-to-market_ plan.) The best plan tends to be a “u-curve optimization” that optimizes the _trade-offs_ between single variables.

### The Freshest Possible Information
> To manage product development effectively, we must recognize that valuable new information is constantly arriving throughout the development cycle. (p38)

Reinertsen likens product development to warfare. There are significant unknowns; new threats and opportunities appear continually; small advantages or disadvantages can yield disproportionate results. _Payoff_ changes constantly: endeavors become more or less costly and more or less profitable, continually altering the optimal strategy.

<u>When the best-laid plans have short shelf lives, learning becomes a vital competence.</u> Faster feedback, earlier validation, and shorter cycles all fuel learning and enable product developers to make good economic choices with fresh information.

### Queues

Optimizing trade-offs and maximizing learning are insights basic to Reinertsen’s view of product development, but they are not the focus of his book. Reinertsen spends more time developing the powerful concept of queues.

> Today we realize that inventory is the biggest source of waste in manufacturing. Work product lying idle on the factory floor destroys quality, efficiency, and cycle time. (p34)

Queues are invisible inventory. <u>Long queues of work-in-progress destroy quality, efficiency, and cycle time.</u> They have many detrimental effects, but because intellectual work-in-progress is difficult to see, queues often go unmeasured.

Queue size is an invaluable metric, but like any proxy variable we do best to express it in economic terms. Estimating the **cost of delay** for a feature or product enables us to manage queues from economic facts.

### Recommendations

_The Principles of Product Development Flow_ contains 175 principles. Many of them cluster around a few important themes:

- **Make queues visible.** A <u>Kanban</u> can be used to show work-in-progress in real time while <u>Continuous Flow Diagrams</u> give many insights into queues over time.
- **Reduce batch size.** Iterating quickly minimizes the impact of queues without adding resources. It also accelerates feedback and learning. Focus on reducing <u>transaction cost</u>—the cost of releasing a batch—to make smaller batches more affordable. <u>Unit Testing</u> and <u>Continuous Integration</u> are strategies for lowering transaction cost in software development.
- **Plan in advance for flexibility.** Flexibility enables you to react to emerging queues. Reinertsen’s most frequent example of planned flexibility is <u>cross-training employees</u>. <u>Hiring reserves</u> is another.
- **Prize initiative.** Those closest to a problem can react quickest—and with the freshest possible information. Empower them to seize opportunities while coordinating a team’s efforts by <u>establishing a shared vision</u> and <u>setting parameters for decisions.</u>
- **Co-locate workers.** The best way to shrink transaction cost in communication and to foster a shared vision within a team is to put teammates in the same room.

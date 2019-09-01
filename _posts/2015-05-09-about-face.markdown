---
layout: post
title: About Face
date: 2015-05-09
read_time: 4
categories: book-reports
redirect_from:
 - /post/112451437742/about-face
 - /day/2015/05/09
excerpt_separator: <!--more-->
---

<figure class="book-cover">
  <img src="/assets/about-face.jpg" />
</figure>

> Engineering departments follow rigorous methods that ensure the _feasibility_ and quality of the technology. Similarly, marketing, sales, and other business units follow methods for ensuring the commercial _viability_ of new products. What’s left out is a repeatable, predictable, and analytical process for ensuring **_desirability_**. (p9, 4th ed.)

<!--more-->

### Three degrees of separation
The obstacle to building a desirable product is seldom technical. It is [the difference between you and your customer](https://uxmyths.com/post/715988395/myth-you-are-like-your-users). There are counterexamples, of course — like James Dyson, Mary Kay, [GitHub](https://zachholman.com/talk/how-github-uses-github-to-build-github/), and 37Signals — who have built products for themselves ([and people like them](https://archive.uie.com/articles/self_design)) with great success. But most of us are separated from those we intend to help by three things: identity, space/time, and intermediaries. I mean:

1. We are not our customers
2. We do not work _physically_ with them (and so do not get “live” feedback)
3. We do not communicate _directly_ with them (but listen through a support team’s ears and reply through an interface)

Designing for oneself is exciting. You get the benefit of instant, visceral feedback as to whether your product is desirable or not. You get that same feedback when designing for others, of course, but _then_ [it can be misleading](https://uxmyths.com/post/715988395/myth-you-are-like-your-users).

Alan Cooper’s _[About Face](https://www.amazon.com/dp/0470084111/ref=asc_df_04700841115833972)_ details a process for building the _right product._ And the first step is to tackle those three degrees of separation.

### Understanding customers
> If you want to create good design solutions, there is no avoiding the hard work of really understanding the people who will interact with your product. (xxxiii)

“Really understanding” customers goes deeper than identifying their chief complaints with the competition, recording all your conversations with them, or identifying the tasks they need to perform. These methods are quite enough to create lists of features to develop; but they can not discover whether those features are, in the end, _desirable_ to your customers.

It’s impossible to know if something will be desirable just by listening to what the customer asks for — or even by looking at what the customer _does._ One must understand her _context_ and her _motivations_ as well.

> Goals, not features, are the key to product success (p25)

Goals are the centerpiece of Cooper’s method. He outlines how to conduct research to ascertain them and how to design in light of them.

### Research
The Research phase begins with **ethnographic interviews.** These are in-person interviews where the interviewer behaves like an apprentice to the customer: watching the customer’s behavior _in-context_ and asking questions to elicit her thought-processes and motivations.

Back at the office, researchers identify the ways their subjects’ behavior varied, map subjects to those **behavior variables**, and look for patterns among them. Goals are deduced from patterns of behavior; and clusters of goals are fleshed out into **personas**. (Personas are not average or stereotypical users but exemplary users with specific goals.)

Understanding customers’ goals gives us the insight we need to make desirable products; but taking the extra step to collect them into personas nets us two more benefits:

1. Personas elicit empathy and become a shorthand for empathic knowledge (which boosts the accuracy and usefulness of our built-in, visceral barometer of desirability).
2. Personas are typically ranked (and this gives us the perspective to say “no” to any feature for a secondary persona that would detract from the success of the primary persona).

### Design
Armed with an understanding of the customer’s goals, a product team is poised to do something it would otherwise have no hope of: [help the customer be awesome](https://businessofsoftware.org/2013/02/kathy-sierra-building-the-minimum-badass-user-business-of-software-a-masterclass-in-thinking-about-software-product-development/).

Interaction Designers at Cooper pivot from Research to Design by storyboarding **scenarios** of ideal interactions between the customer and the still-imaginary product. These scenarios define the customer’s needs; and those needs form the product’s vision: a statement of the problem the product is solving.

> It is absolutely critical to define and agree upon the _what_ before we move on to the next questions: _how_ the product looks, behaves, operates, and feels. (p114)

Without that clear vision, there’s no way of testing the fitness of a design (which results in development taking a more meandering/expensive path to success). _With_ that kind of focus, however, [every team member can see how every detail of their work contributes to the customer’s success](https://medium.com/@stewart/we-dont-sell-saddles-here-4c59524d650d).

### Interaction Design
Alan Cooper calls this process Interaction Design. It differs from Visual Design (which concerns itself less with behavior and more with brand to achieve an emotional response) and Architectural Design (which concerns itself more with the organization of code), although they are closely related. Interaction Design determines in large part _what_ the product does, how it makes its state and options apparent, and how it responds to users’ input.

> Humans treat and respond to computers and other interactive products as if they were people. We should thus pay real attention to the “personality” projected by our digital products. (p218)

Understanding customers’ goals enables interaction designers to articulate features in customers’ terms rather than implementation terms and to put users’ needs ahead of the computer’s. A deep understanding of—and empathy for—them makes it easier to see what tasks are superfluous and can be eliminated, what error messages or notices are irrelevant, and what input constraints do more to serve the database than the customer. The result is a product with a more courteous, intelligent, and respectful “personality”: a more likable product.

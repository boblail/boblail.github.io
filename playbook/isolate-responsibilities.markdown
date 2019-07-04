---
layout: playbook
title: Isolate responsibilities
categories: playbook
---

Teasing responsibilities apart into separate methods or objects promotes understanding by:
1. Requiring the reader to comprehend only one thing at a time rather than several things at once.
2. Giving you more opportunities to name things.

If you have few nouns, you have complex things. If you have many nouns, you have simple things in interesting relationships.

> Breaking down a complex thing into understandable chunks is essential for understanding, perhaps the essence of understanding.
> — Bret Victor

> One of the primary features of internal quality is making it easier for me to figure out how the application works so I can see how to add things. If the software is nicely divided into separate modules, I don't have to read all 500,000 lines of code, I can quickly find a few hundred lines in a couple of modules. If we've put the effort into clear naming, I can quickly understand what the various part of the code does without having to puzzle through the details. If the data sensibly follows the language and structure of the underlying business, I can easily understand how it correlates to the request I'm getting from the customer service reps. Cruft adds to the time it take for me to understand how to make a change, and also increases the chance that I'll make a mistake.
> — [Martin Fowler](https://martinfowler.com/articles/is-quality-worth-cost.html)

### See Also
- [The Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)

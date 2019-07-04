---
layout: playbook
title: Measure before you optimize
categories: playbook
---

Measuring tells us three things:
1. Where the bottlenecks are — Depending on the system, optimizations applied elsewhere than the bottleneck will deliver minimal value, no value, or in some cases, harm.
2. Which code is fast enough — Most applications wouldn’t benefit from being instantaneous. Instead, their performance just needs to be _within a threshold_ (for example, human perception). Code that is fast enough should be optimized for other things (like readability) than speed.
3. Whether our optimization was effective or not

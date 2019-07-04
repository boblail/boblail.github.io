---
layout: playbook
title: Make commits atomic
categories: playbook
---

It’s easier to review one 300-line change which “converts tabs to spaces” plus one 30-line change which “implements feature z” than a 330-line change which “implements feature z and also converts a bunch of tabs to spaces.” (credit: [Writing Reviewable Code](https://secure.phabricator.com/book/phabflavor/article/writing_reviewable_code/#many-small-commits))

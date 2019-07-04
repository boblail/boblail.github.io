---
layout: playbook
title: Rely on the database (not the ORM) for data integrity validations
categories: playbook
---

1. The database is designed and optimized for doing this
2. The database may have more clients than your current ORM
3. The database is the ultimate source of truth for data so this rule also causes exceptions to be raised closer to where assumptions are made.

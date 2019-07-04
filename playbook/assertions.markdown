---
layout: playbook
title: Raise an exception wherever you make an assumption
categories: playbook
---

Exceptions that are raised closer to the actual problem will reveal the problem sooner and be easier to troubleshoot.

### Example (Ruby)

If you expect a hash to contain a key, access it with [`Hash#fetch`](https://ruby-doc.org/core-2.6.3/Hash.html#method-i-fetch) (which raises when a key is missing) instead of [`Hash#[]`](https://ruby-doc.org/core-2.6.3/Hash.html#method-i-5B-5D) (which returns `nil`).

If the required key is missing, `fetch` will give you an exception report that points you directly at the problem whereas `[]` will hide the problem — either until a subsequent line of code tries to call tried to call a method on `nil` and raises `NoMethodError` or until another part of the program fails because null was unexpectedly saved to the database.

### See Also
- The chapter on Assertive Programming in _The Pragmatic Programmer_ (Hunt & Thomas, ch. 23)

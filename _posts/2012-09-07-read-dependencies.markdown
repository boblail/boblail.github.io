---
layout: post
title: How to read a project’s dependencies directly from git
date: 2012-09-07
read_time: 1
redirect_from:
 - /post/31102005688/how-to-read-a-projects-dependencies-directly-from
 - /day/2012/09/07
categories: ruby
---

I have a program that lists all of my company’s projects and various statistics about them. Between little APIs, background services, and large applications, we’re getting quite a collection of Rails projects. I decided to add a column to show which version of Rails each was running—a column that would be automatically updated.

It turns out, it’s pretty easy to do with [grit](https://github.com/mojombo/grit) and [bundler](https://github.com/bundler/bundler).

```ruby
require "grit"
require "bundler"

repo = Grit::Repo.new(PROJECT_PATH)
lockfile = repo.tree/"Gemfile.lock"
locked_gems = Bundler::LockfileParser.new(lockfile.data)
rails = locked_gems.specs.find { |spec| spec.name == "rails" }
rails.version
```

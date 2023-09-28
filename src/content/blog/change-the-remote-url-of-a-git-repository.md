---
title: Change the remote URL of a Git repository
date: 2022-11-13T23:26:02-08:00
description: How to change the remote URL of a git repository.
keywords:  
- https
- ssh
tags:
- git
math: false
toc: false
draft: false
pubDate: 2022-11-23
lastMod:
---

```bash
git remote set-url origin <URL>
```
At the time of writing this, I've only had to use this in two situations:

1. I no longer wanted to work out of my own fork, and wanted to work directly on the remote repository itself. 
2. I needed to change the URL from `https` to `ssh`.

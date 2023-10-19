---
title: Change the remote URL of a Git repository
created: 2022-11-13
description: A quick guide on how to change the remote URL of a Git repository.
keywords:
tags:
- git
math: false
toc: false
draft: false
datePublished: 2023-10-17
lastModified:
---

```bash
git remote set-url origin <URL>
```
At the time of writing this, I've only had to use this in two situations:

1. I no longer wanted to work out of my own fork, and wanted to work directly on the remote repository itself. 
2. I needed to change the URL from `https` to `ssh`.

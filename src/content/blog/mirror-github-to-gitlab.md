---
title: Mirror my GitHub repositories to GitLab
created: 2024-04-12
description: A blog post on my experience with mirroring my GitHub repositories to GitLab as backup.
keywords:
tags:
- git
- journal
math: false
toc: false
draft: true
datePublished:
lastModified:
---

## Background

I've recently been working on getting my Raspberry Pi Zero setup to routinely mirror my GitHub
repositories to GitLab to back up my work in case something ever happens to one service or the
other. It's not likely that they'll vanish overnight, but I've seen a few Reddit posts of people
claiming that they suddenly got locked out of their GitHub accounts. As far as I've seen, they've
all been able to recover their accounts by contacting GitHub support, but separately, people in the
comments will urge others to mirror their repositories to another service as insurance. I thought
this was a good idea and a fun project, so I decided to set up an automation for myself.


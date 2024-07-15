---
title: Advent of Code - 2023, Day 01
created: 2023-12-07 12:11:20 AM
description: My thoughts on Advent of Code, 2023, Day 1.
keywords:
tags:
  - advent-of-code
math: false
toc: false
draft: false
datePublished: 2023-12-01
lastModified:
---

[Advent of Code, Day 1](https://adventofcode.com/2023/day/1)

My code can be found [here](https://github.com/pcheng17/advent-of-code-python/blob/main/2023/01.py).

Part A was fine, but part B caught me off guard. The solution I came up with in the moment was
extremely brute-force; I essentially duplicated the logic for finding the first and last digits from
part A and applied it to the English representations. Then, I compared to see which one came
first/last: digit or English representation. After solving it and discussing with a friend, we
realized that the trick was to first do a clever string replacement to essentially replace each
English representation with the digit itself; it needs to be clever to account for potential cases
where two English representations share a letter, e.g. `eightwo`. Once the replacement was done,
the problem boiled down to solving part A again.

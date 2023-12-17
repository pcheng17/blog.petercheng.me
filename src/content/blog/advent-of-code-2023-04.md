---
title: Advent of Code - 2023, Day 04
created: 2023-12-16 04:27:11 PM
description: My thoughts on Advent of Code, 2023, Day 4.
keywords: 
tags:
  - advent-of-code
math: false
toc: false
draft: false
datePublished: 2023-12-04
lastModified:
---

## Thoughts

[Advent of Code, Day 4](https://adventofcode.com/2023/day/4)

My code can be found [here](https://github.com/pcheng17/advent-of-code-python/blob/main/2023/04.py).

This was much easier than Day 3, which was a relief. I made a silly mistake that I accidentally
fixed with an extra cast to `int`. My formula for computing the number of points from a card was 
`2 ** (len(matches) - 1)`, which is only correct if the number of matches is nonzero! Coincidentally, using the formula `int(2 ** (len(matches) - 1))` saved me because this new formula returns 0 if there are no matches. Dumb, but I admit I overlooked this edge case.

Part B was pretty straightforward, but only after stopping to read the instructions more carefully.
I don't know, something about the problem setup made it difficult for me to figure out how the game was changed.

I got to use `defaultdict` for this one, which was an opportunity to practice something I learned about yesterday. Turns out, one way of specifying that you want a dict where the default value is 0 is `defaultdict(lambda: 0)`.
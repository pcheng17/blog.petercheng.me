---
title: Advent of Code - 2023, Day 03
created: 2023-12-16 04:24:13 PM
description: My thoughts on Advent of Code, 2023, Day 3.
keywords:
tags:
  - advent-of-code
math: false
toc: false
draft: false
datePublished: 2023-12-03
lastModified:
---

[Advent of Code, Day 3](https://adventofcode.com/2023/day/3)

My code can be found [here](https://github.com/pcheng17/advent-of-code-python/blob/main/2023/03.py).

I thought this was quite a difficult problem for Day 3. A grid-based problem on Day 3, along with the caveat that not every element in the grid is the same size. Sure, digits and symbols are all one character long, but adjacent digits needed to be understood as a larger number that took up multiple adjacent spots in the grid.

This was probably the first time I've ever reached for regex to solve a problem, ever. I was pretty relieved that the regex itself wasn't difficult, but even then, I needed to pull up a regex checker online to figure out the correct regex.

The solution I came up with on the spot was extremely janky. For some reason, I was convinced that I needed to do adjacency checks case by case, i.e., above, below, corners, left, right. This ended up bloating my code up to approximately 150 lines just for visiting neighbors in the grid...

My cleaned up version, though probably not the most clean, is much nicer in comparison. The biggest change was doing the adjacency checks with a single nested for loop over the window (bounding box) of the region around each number.

Thanks to people online, I was reminded of `defaultdict` from `collections`. It's a dictionary that allows you to specify the default value for a key that doesn't exist.


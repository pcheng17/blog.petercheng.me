---
title: Python pip requirements file
date: 2022-11-26
description: How to create and ingest a Python pip requirements file.
keywords:
tags:
- python
math: false
toc: false
draft: false
pubDate: 2022-11-26
lastmod:
---

Oftentimes, it's very useful to record all of the required modules/packages of a Python project. For example, this makes it very easy to get your project up and running on different computers. 

Assuming you're using [`pip`](https://pypi.org/project/pip/) to manage your packages, run the following command:

```python
pip freeze > requirements.txt
```

This generates a text file, `requirements.txt`, with all of the modules/packages that are managed by `pip` in the active virtual environment.

If you're on a new machine and need to install of the required packages listed in a `requirements.txt` file, run the following command:

```python
pip install -r requirements.txt
```

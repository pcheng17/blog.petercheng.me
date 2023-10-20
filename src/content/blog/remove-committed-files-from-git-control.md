---
title: Remove committed files from Git control
created: 2023-10-19 11:41:03 PM
description: How to remove committed files or directories from Git control.
keywords: 
tags: 
- git
math: false
toc: false
draft: false
datePublished: 2023-10-20
lastModified:
---

To remove a single file from Git-version control, use

```bash
git rm --cached path/to/file
```

To remove an entire directory from Git-version control, use

```bash
git rm -r --cached path/to/directory
```

The `--cached` flag is important if you'd like to keep the local copy of the file or directory while removing it from version control! Finally, make sure the `.gitignore` file has been updated accordingly so it contains the file or directory to be ignored.

Note that if something has already been added to version control, simply modifying the `.gitignore` file to ignore said object **won't do anything**; hence, the two commands above.

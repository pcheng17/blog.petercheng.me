---
title: Copy files over ssh
created: 2024-04-12
description: A quick tip on how to copy files over ssh.
keywords:
tags:
- ssh
- terminal
math: false
toc: false
draft: false
datePublished: 2024-04-12
lastModified:
---

Copying a file from your local machine to a remote machine or vice versa over SSH can be done using
the `scp` (secure copy) command. To read more about it, take a look at `man scp`. However, for basic
use cases, it's straightforward to use.

Basically, the syntax to remember is `scp source target`. So, to copy a file from your local machine
to a remote machine, the command will be

```bash
scp /path/to/local/file username@remote_host:/path/to/remote/directory
```

Similarly, to copy a file from a remote machine to your local machine, the command will be

```bash
scp username@remote_host:/path/to/remote/file /path/to/local/directory
```

## Additional tips

If you need to copy a directory, you must include the `-r` flag to copy recursively:

```bash
scp -r /path/to/local/directory username@remote_host:/path/to/remote/directory
```

If you need to specify a private key for public key authentication, you can do so with the `-i`
flag:

```bash
scp -i /path/to/private_key /path/to/local/file username@remote_host:/path/to/remote/directory
```






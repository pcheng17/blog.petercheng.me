---
title: Disable option-key symbols on Mac
created: 2023-10-19 12:38:28 AM
description: How to disable the option-key symbol key combination on Mac.
keywords: 
tags:
  - configuration
  - keyboard
math: false
toc: false
draft: false
datePublished: 2023-10-18
lastModified:
---

I recently discovered that Mac users have the ability to easily type out various symbols using `⌥ + <letter>` combinations (that's the symbol for the Option key). For example,
 
- `⌥ s` inserts `ß` at cursor, and 
- `⌥ w` inserts `∑` at cursor.

[Here](https://mackeeper.com/blog/special-characters-mac-keyboard/) is a list of these symbols and their trigger. However, this wasn't a feature I wanted or needed on my keyboard[^1].

I dug around for a little longer than expected, but finally came across a nice solution to disable the `⌥ + <letter>` combinations. See [here](https://superuser.com/a/942256) for the solution along with an explanation. However, I will copy and paste the gist of it here 

> Save the following to `~/Library/KeyBindings/DefaultKeyBinding.dict` (create if necessary).
>
>```
>{ "~a" = (); "~b" = (); "~c" = (); "~d" = (); "~e" = (); "~f" = (); "~g" = (); "~h" = (); "~i" = (); "~j" = (); "~k" = (); "~l" = (); "~m" = (); "~n" = (); "~o" = (); "~p" = (); "~q" = (); "~r" = (); "~s" = (); "~t" = (); "~u" = (); "~v" = (); "~w" = (); "~x" = (); "~y" = (); "~z" = (); }
>```
>
>This disables all the `⌥ + <letter>` combinations. Restart apps to take effect.

[^1]: I use a non-standard keyboard, and these Option-key symbol combinations might accidentally get triggered if I'm being a little sloppy about how I type - this is how they're getting in the way in the first place 🙃

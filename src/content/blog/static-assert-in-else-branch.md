---
title: "`static_aseert` in `else` branch"
created: 2023-03-24 02:45:00 AM
description:
keywords:
tags:
  - c++
math: false
toc: false
draft: true
datePublished:
lastModified:
---

## Background

Recently, I was working on some code where I was in a situation similar to the following:

```cpp
#include <iostream>

enum class Color {
    Red,
    Blue
};

void doSomethingIfRed();
void doSomethingIfBlue();

template <Color C>
void foo() {
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    }
}

int main() {
    foo<Color::Red>();
    foo<Color::Blue>();
}
```

Everything looks fine as is, but this code isn't future proof. What happens if a future developer
decides to add more options to the `Color` enum? Without proper documentation, it would be very easy
to not realize that there is a method somewhere else in the code base, `foo` in this case, that
might also require an update. Observe:


```cpp
#include <iostream>

enum class Color {
    Red,
    Blue,
    Yellow,
};

// Let's pretend future developer doesn't realize that this set of functions might need to be
// expanded upon?
void doSomethingIfRed();
void doSomethingIfBlue();

// And same with the definition of this method to account for the new enum option?
template <Color C>
void foo() {
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    }
}

int main() {
    foo<Color::Red>();
    foo<Color::Blue>();
    foo<Color::Yellow>();
}
```

The call `foo<Color::Yellow>();` will do nothing! Since the `constexpr if` block in `foo` doesn't
have a branch for any color other than `Red` or `Blue`, nothing will be left in `foo`'s definition.
Remember, `contexpr if` is evaluated at compile-time, meaning the branching doesn't exist in the
compiled code - only the appropriate branch based on the template argument will remain.


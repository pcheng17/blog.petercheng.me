---
title: "static_assert in a constexpr-if branch"
created: 2023-03-24 02:45:00 AM
description:
keywords:
tags:
  - c++
math: false
toc: false
draft: true
datePublished: 2024-04-01
lastModified:
---

## Background

Recently, I was working on some code where I was in a situation like the following:

```cpp
enum class Color {
    Red,
    Blue
};

void doSomethingIfRed();
void doSomethingIfBlue();

template <Color C>
void foo() {
    // Code here
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    }
    // More code here
}

int main() {
    foo<Color::Red>();
    foo<Color::Blue>();
}
```

Everything looks fine as is, but this code isn't future proof: what happens if a future developer
decides to add more options to the `Color` enum? Without proper documentation, it would be very easy
to not realize that there is a method somewhere else in the code base, `foo` in this case, that
might also require an update. Observe:

```cpp
enum class Color {
    Red,
    Blue,
    Yellow,
};

// Let's pretend future developer doesn't realize that this set of functions might need to be
// expanded upon
void doSomethingIfRed();
void doSomethingIfBlue();

// And same with the definition of this method to account for the new enum option
template <Color C>
void foo() {
    // Code here
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    }
    // More code here
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

Thus, I wanted to implement some sort error message that would be helpful for future developers in a
situation like the one described above.

## Attempt #1

My first was thought was to do the following:

```cpp
template <Color C>
void foo() {
    // Code here
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    } else {
        assert(false);
    }
    // More code here
}
```

This is an improvement in the sense that invoking `foo<C>()` with a new color `C` **in debug mode**
will no longer quietly do nothing, and instead, will hit an assert failure since the `else` branch
was evaluated. However, this isn't ideal since the assert will only be evaluated at runtime, whereas
the bug is a compile-time issue.

## Attempt #2

Okay, let's try and use `static_assert` since that will be evaluated at compile-time:

```cpp
template <Color C>
void foo() {
    // Code here
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    } else {
        static_assert(false, "constexpr-if branch not implemented for new color");
    }
    // More code here
}
```

Looks good, but this won't compile! The reason is that the check in the `static_assert` will always
evaluate to `false` no matter what, which causes an incorrect compiler error when `C` is one of
`Color::Red` or `Color::Blue`. Therefore, we need the check inside the `static_assert` to only be
evaluated when we've reached the `else` branch.

## Solution

The solution that I settled on was to create a helper class that will evaluate to `false` if it is
instantiated, and then use that in the `static_assert`:

```cpp
#include <type_traits> // std::false_type

enum class Color {
    Red,
    Blue,
    Yellow
};

template <Color C>
class FalseIfInstantiated : public std::false_type {};

template <Color C>
void foo() {
    // Code here
    if constexpr (C == Color::Red) {
        doSomethingIfRed();
    } else if constexpr(C == Color::Blue) {
        doSomethingIfBlue();
    } else {
        static_assert(FalseIfInstantiated<C>::value,
            "constexpr-if branch not implemented for new color");
    }
    // More code here
}

int main() {
    foo<Color::Red>();
    foo<Color::Blue>();
    foo<Color::Yellow>();
}
```



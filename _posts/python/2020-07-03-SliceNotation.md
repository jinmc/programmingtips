---
layout: post
comments: true
title:  "Slicing - Python"
date:   2020-07-04
categories: python
---

Python has a slicing notation that is quite powerful and useful skill. They are applied when accesing array or array-like data structure like strings. We can have two params as well as three params.

```python
a[start:stop]  # items start through stop-1
a[start:]      # items start through the rest of the array
a[:stop]       # items from the beginning through stop-1
a[:]           # a copy of the whole array
```
Also, we can have negative numbers as parameters. The negative numbers would be counting from the back.

```
a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
```

This is pretty straightforward, but it becomes trickier when you have one more step parameter.

```python
a[start:stop:step] # start through not past stop, by step

a[::-1]    # all items in the array, reversed
a[1::-1]   # the first two items, reversed
a[:-3:-1]  # the last two items, reversed
a[-3::-1]  # everything except the last two items,

```

This is similar to using slice() object. In other words,

```python
a[start:stop:step]
```

is similar to

```python
a[slice(start, stop, step)]
```

Unlike slicing operators, [] slice object has to put a None to skip a parameter, as well as 

```python
a[slice(None, None, -1)] similsar to a[::-1]

a[slice(start, None)] similar to a[start:]
```
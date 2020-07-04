---
layout: post
comments: true
title:  "Reversing string in python"
date:   2020-07-04
categories: python
---

## 1. looping with a for loop

This is a method that can be used in any other languages. That is, we can use a for loop like this

```python
s = 'abcd'
rev = ''
for c in s:
    rev = c + rev
print(rev)
```

## 2. Slicing Method

As I have mentioned in other post, this might be the most pythonic way of reversing a string.

```python
s = 'hello World'
print(s[::-1])
print(s[-1::-1]) # this also works
```

## 3. using reversed function

Reversed function will make and return string into a reversed character list, 
and we can use the join method on an empty string


```python
s = 'hello World'
rev = reversed(s)
print(''.join(rev))
```

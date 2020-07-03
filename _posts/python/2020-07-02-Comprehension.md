---
layout: post
comments: true
title:  "Comprehension"
date:   2020-07-03
categories: python
---
<p>
The content is mainly from Corey Schafer's youtube video. link[https://www.youtube.com/watch?v=3dt4OGnU5sM]
</p>

<p>
Comprehension, by definition is a way to build an iterable object in one expression, without a need for a traditional for loop. We can use comprehensions in list, set, and dictionary. Generator expresions are also similar to comprehensions and will be looking at some examples.
</p>

## List Comprehension

This is a example for traditional for loop for appending to the list.

```python
nums = [1,2,3,4,6]
my_list = []
for n in nums:
    my_list.append(n)
print(my_list)
```

to make this as list comprehension, 

```python
my_list = [n for n in nums]
print(my_list)
```

we can also use map and lambda function to make similar behavior

```python
my_list = map(lambda n: n, nums)
```

we can also do two for loops

```python
my_list = []
for letter in 'abcd':
    for num in range(4):
        my_list.append((letter, num))

```

would be a one liner in list comprehension as 

```python
my_list = [(letter, num) for letter in 'abcd' for num in range(4)]
```

## Dictionary comprehension



```python
my_dict = {}

names = ['peter', 'clark']
heros = ['spiderman', 'superman']
for name hero in zip(names, heros)
    my_dict[name] = hero
print(my_dict)
```

can be changed with comprehension as 
```python
my_dict = {name:hero for name, hero in zip(names, heros)}
```

## Set Comprehension

Set comprehensions are pretty similar to list comprehensions

```python
my_set = { n for n in nums}
```

## Generator expressions

```python
def gen_func(nums):
    for n in nums:
        yield n*n
my_gen = gen_func(nums)
for i in my_gen:
    print(i)
```

Can be written in list comprehension as 

```python
my_gen = (n*n for n in nums)
```


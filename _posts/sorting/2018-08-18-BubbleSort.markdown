---
layout: post
comments: true
title:  "Bubble sort - Java and Python"
date:   2018-08-18
categories: sorting
---

Reference : Hackerank's bubble sort and Gayle Laakmann McDowell 
<br><i>https://www.youtube.com/watch?v=6Gv8vg0kcHc</i><br>

Bubble sort is one of the easiest sorting algorithms that exist.
But it is not the most efficient algorithm, although in some special cases,
it can be. When the entity is already almost sorted, it will be sorted in O(N),
but if in the worst case scenarios, it will be sorted in O(N^2), making it as a brute force algorithm.
Although, it has the advantage of using only in-space, unlike from other divide and conquer algorithms.
<br><br>
Let's first take a look at the code in Hackerrank.

{% highlight Java %}
for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
    
}
{% endhighlight %}

And swap would be a simple swap with just one additional integer space.
<br><br>
So the idea basically is, you do a O(N) operation that iterates through the array
and if the array's two elements are not in order, we would swap, and do this until the end,
and if we do this N times, then the array will be sorted.
<br><br>
Gayle improved this algorithm by using a while loop rather than a for loop 
and making each iteration 1 lesser than before. For me honestly, I'm not sure 
how much optimization will the 1 lesser thing will do, but using the while
loop can seriously have a big impact, because it can even make the algorithm 
O(N) if the array is almost sorted.
<br><br>
This is the example code : 
<br><br>

{% highlight Java %}

public static void bubbleSort(int[] array) {
    boolean isSorted = false; // we will start and assume the array is not sorted

    while (!isSorted) { // loop this until sorted
        isSorted = true; // do this because if after the for loop isSorted is true, it will just get out of the loop
        int len = array.length;
        for (int i = 0;i < len - 1;i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                isSorted = false;
            }
            len--;
        }

    }

}

{% endhighlight %}
<br><br>
The point of this algorithm is that the after each for loop,
the end of the array would be the largest element.
That is the reason we can do the optimization of doing the for loop
1 step lesser.

And that is also the proof that we can only do the 
for loop N times and that would be the maximum that 
we should do, because every time we do a for loop 
the last element would be the right position, so N times after
every elements will be in the correct position.

Also, the python solution in Hackerrank is :

{% highlight python %}

n = int(input())
a = [int(i) for i in input().strip().split(' ')]
numSwaps = 0

for i in range(n):
    currentSwaps = 0

    for j in range(0, n - 1):
        if a[j] > a[j + 1]:
            a[j], a[j + 1] = a[j + 1], a[j]
            currentSwaps += 1
            
    numSwaps += currentSwaps
            
    if currentSwaps == 0:
        break
        
        
print("Array is sorted in " + str(numSwaps) + " swaps.")
print("First Element: " + str(a[0]))
print("Last Element: " + str(a[-1]))

{% endhighlight %}



{% include disqus2.html %}

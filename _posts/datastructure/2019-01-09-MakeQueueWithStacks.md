---
layout: post
comments: true
title:  "Make a queue with two stacks"
date:   2019-01-09
categories: datastructure
---

This is fairly simple problem,
and it is also in CTCI.

First, 
Queue should have Enqueue, Dequeue, peek, isEmpty functionalities.

in : 1->2->3->4->5 : out in by order of 1, 2, 3, 4, 5

stack 1 : 1->2->3->4->5
stack 2 : 5->4->3->2->1

If we input, we should put everything inside stack 1 and then input. 
and when we output, we should put everything inside stack 2 and then we should pop it from stack2. When we peek, we should put everything inside stack 2 and then peek from stack 2.

So in default, I think we should put everything inside stack 2.
We could do it otherwise, to put everything inside stack1.
In that case, enqueue will take O(1), and dequeue will take O(N).
In that way, we can have dequeue and peek functionalities to have O(1) runtime,
but enqueue will have O(n) runtime, because we should first put everything from stack 2 to stack 1 and then push it into stack 1.


```java
public class MyQueue {
	priavte Stack stack1 = new Stack(); // for inputting
	private Stack stack2 = new Stack(); // for output

	public void Enqueue(int v) {
		if (stack2.isEmpty)  {
			stack2.push(v); // it’s equivalent to pushing into stack 1 and then moving 
		 			// to stack 2
		} else {
			moveStack(stack2, stack1); // move everything from stack2 to stack1
			stack1.push(v);
			moveStack(stack1, stack2); // move everything from stack 1 to stack 2
		}
	}

	public int Dequeue() {
		return stack2.pop();
	}

	public int peek() {
		return stack2.peek();
	}

	public boolean isEmpty() {
		return stack2.isEmpty();
	}


	public moveStack(Stack s1, Stack s2) {
	// move eveything from s1 to s2
		while (!s1.isEmpty()) {
			s2.push(s1.pop());
		}
	}
}	

```

I thought this was a good solution,
but the book had a better solution.

I was right to put one stack for input and the other for output.

but what I didn't think of was that we do not have to shift from one stack to other
every time we do one operation.

Say, for my implementation, 
I made O(1) runtime for peek and dequeue but the push function will have
O(N) runtime always.

We can fix this by lazy operation.
We will make enqueue operation O(1).

When we do dequeue, we will check if the stack2 is empty.
If empty, we will shift everything from stack 1 and pop it.
But if not empty, it will just pop the top element of stack 2.

It is a little confusing at first, 
so I will provide some examples below.

enqueue in the order of 1,2,3
stack1 : 1->2->3
stack2 : empty

when dequeue:
stack1 : empty
stack2 : 3->2

when enqueue:
stack1 : 4
stack2 : 3->2

exact code for Java : 

```java
public class MyQueue {
	priavte Stack stack1 = new Stack(); // for inputting
	private Stack stack2 = new Stack(); // for output

	public void Enqueue(int v) {
		stack1.push(v);
	}

	public int Dequeue() {
		if (stack2.isEmpty()) {
			moveStack(stack1, stack2);
		}
		return stack2.pop();
	}

	public int peek() {
		if (stack2.isEmpty()) {
			moveStack(stack1, stack2);
		}
		return stack2.peek();
	}

	public boolean isEmpty() {
		
		return stack2.isEmpty() && stack1.isEmpty();
	}


	public moveStack(Stack s1, Stack s2) {
	// move eveything from s1 to s2
		while (!s1.isEmpty()) {
			s2.push(s1.pop());
		}
	}
}	
```

So in this case, whenever there are elements inside stack2, 
the runtime will be O(1).

This is great improvement compared to the one I made.


{% include disqus2.html %}

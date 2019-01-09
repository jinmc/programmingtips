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


```
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


{% include disqus2.html %}

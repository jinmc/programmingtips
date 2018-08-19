---
layout: post
comments: true
title:  "Trees basics and tree traversals"
date:   2018-08-19
categories: graphs
---

Reference : Cracking the coding interview ( Gayle Laakmann Mcdowell )
<br><br>
Trees are the most common graphs seen in coding interviews,
and also they are tricky and require additional knowledge 
such as object oriented programming details.
<br><br>
Very basic node definition in the book is

{% highlight Java %}

class Node {
    public String name;
    public Node[] children;
}

{% endhighlight %}

or we can implement it something like

<br><br>

{% highlight Java %}

public class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode(int x) { val = x; }
}

{% endhighlight %}

if it's a binary tree.

<br><br>
For tree traversals,
there are in-order traversal, pre-order traversal, and post-order traversal.

For in-order traversal, we are visiting the left, the current, and the right branch.
The java code is :

{% highlight Java %}

void inOrderTraversal(TreeNode node) {
    if (node != null) {
        inOrderTraversal(node.left);
        visit(node);
        inOrderTraversal(node.right);
    }
}

{% endhighlight %}

For pre-order traversal :

{% highlight Java %}

void inOrderTraversal(TreeNode node) {
    if (node != null) {
        visit(node);    
        inOrderTraversal(node.left);
        inOrderTraversal(node.right);
    }
}

{% endhighlight %}

For post-order traversal : 

{% highlight Java %}

void inOrderTraversal(TreeNode node) {
    if (node != null) {
        inOrderTraversal(node.left);
        inOrderTraversal(node.right);
        visit(node);    
    }
}

{% endhighlight %}


{% include disqus2.html %}
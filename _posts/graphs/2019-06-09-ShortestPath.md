---
layout: post
comments: true
title:  "Shortest path problem"
date:   2019-06-09
categories: graphs
---

Reference : interviewCake
<br><br>

The problem is to find the shortest path within the graph.
So basically, the graph will be given as a hashmap of string and hashSet of string
which will be the adjacency List, and the goal is to return the string array(in Java)
from startNode to endNode. Simply, to complete this function.

```Java
    public static String[] getPath(Map<String, String[]> graph, String startNode, String endNode) {

        // find the shortest route in the network between the two users
        

        return null;
    }
```

First, we would like to use BFS for the searching.
The BFS algorithm will guarantee that if we find the endNode in the process of BFS,
we can assure that it will be the shortest path.
If we use DFS, we cannot guarantee that it is the shortest path. 
We have to traverse the whole graph to make sure that it is the shortest path.

Also, we have to traverse backtrack the path.
To do this, we will use the hashmap to do this.
Also, the same hashmap will check that the nodes if we touched or not.

After making the HashMap, 
we will track the HashMap to make the path.
By arraylist and array, we should go trhough some syntax correcting.

The final solution would be,

```Java

    public static String[] getPath(Map<String, String[]> graph, String startNode, String endNode) {

        // check for exception
        if (!graph.containsKey(startNode)) {
            throw new IllegalArgumentException();
        }
        
        if (!graph.containsKey(endNode)) {
            throw new IllegalArgumentException();
        }
        

        // find the shortest route in the network between the two users
        
        // Make Queue for BFS
        Queue<String> q = new LinkedList<>();
        
        // Make HashMap for BackTracing
        HashMap<String, String> record = new HashMap<String, String>();
        
        
        q.add(startNode);
        record.put(startNode, null);
        
        // boolean to break out of while loop
        boolean breakout = false;
        
        while (q.size() != 0 && breakout == false) {
            
            String thisNode = q.remove();
            String[] children = graph.get(thisNode);
            for (String child : children) {
                if (!record.containsKey(child)) {
                    q.add(child);
                    record.put(child, thisNode);
                }
                if (child.equals(endNode)) {
                    breakout = true;
                    break;
                }
            }
        }
        
        if (breakout == false) {
            return null;
        }
        
        ArrayList<String> al = new ArrayList<String>();
        String str = endNode;
        while (str != startNode) {
            al.add(str);
            str = record.get(str);
        }
        al.add(startNode);
        
        // reverse order
        String[] result = new String[al.size()];
        for (int i = 0;i < al.size();i++) {
            result[i] = al.get(al.size() - 1 - i);
        }

        return result;
    }

```


{% include disqus2.html %}

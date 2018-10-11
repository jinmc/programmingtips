---
layout: post
comments: true
title:  "C++ Basics - io, compile, string"
date:   2018-09-10
categories: CPP
---

- you should use cin and cout

		int a;
		cin >> a;
		cout << "your input : " << a << endl;
		
and your output will be `your input : 23`

also we can do 

		string input;
		getline(cin, input);

and after, we can change it to other data types by
stoi or stod .. or whatever.


- compiling

		$ g++ hello.cpp
		$ ./a.out

- string

string can be initiailized as a charcter array or a string class

		string str1 = {'a', 'b', 'c', 'd', '\0'};
		string str2 = "abcd";		
		
		string str3("alsoCanDoThis");

we can also use `str1.size()` and `str2.empty()` to check their size and whether if they're empty.

		string input;
		getline(cin, input);
		string uid = input.assign(input);
		string uidFirstFive = input.assgin(input, 0, 5);
		
		uid.insert(0, "idIs : "); // will insert the string to 0 position 
		uid.erase(5, 4); // erase 4 characters from position 5
		uid.replace(3, 4, "abc"); // will erase the 4 characters from position 3 and replace it with abc
		uid.find("jinmo", 0); // will get the index of the first occurence of the string, and 0 is where I want to start searching

		string str("abc is abc but not dmc");
		string str2("abc");
		
		size_t found = str.find(str2);
		if (found != std::string::npos) { // npos is the largest value of integer. often used as until the end of the string
			std::cout >>  "first abc found at : " << found << '\n' << endl;
		}

`str1.compare(str);` will return 0 because the're the same.
If str1 is bigger (if starts with b or else) it will return 1, else it will return -1;

{% include disqus2.html %}

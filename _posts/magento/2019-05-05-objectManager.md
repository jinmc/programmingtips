---
layout: post
comments: true
title:  "Magento 2 Object Manager and Automatic Dependency Injection"
date:   2019-05-05
categories: magentobackend
---

disclaimer : This article heavily depends on the series object manager  of alanstorm.com
I just wanted to write this to first, wrap up my own knowledge, and second to put in to my own words.
Whenever in doubt, go to https://alanstorm.com/category/magento-2/#magento-2-object-system, 1st and 2nd article in specific.

ObjectManager and Automatic dependency injection is a huge part of magento 2 and 
without understanding it it is impossible to understand how magento 2 works. (at least that's how I feel).
ObjectManager is a tool made by Magento 2 system developers and handles objects initiation and automatic dependency injection through di.xml file. In fact, there are lots of prerequisites and important terms(concepts) with this topics, such as namespaces, type hints, constructor injection, and also about the initial entry points, interfaces. I will just suppose we all know this, and if you don't go ahead and read the alanstorm blog's first and second object manager series article. 
<br><br>
Alanstorm shows that we can actually call the objectmanger by itself, 
by this code.

```php
<?php
namespace MyVendor\MyProgram\MyClass;
use \Magento\Framework\ObjectManagerInterface;

class MyThing {

    protected $objectManager;    

    public function __construct(ObjectManagerInterface $manager) {
        $this->objectManager = $manager;
        parent::construct();
    }

    protected function getObjectManager() {
        return $this->objectManager();
    }

}
``` 

There is a lot going on in this code, but let's focus on one thing 
alan doesn't goes deep in the objectManager series. In his third article, 
he says that the interface typehints can actually be replaced(class rewrites in Magento 1)
by di.xml. But in the di.xml file in his tutorial source code, there is no class preference with ObjectManagerInterface.
Turns out that objectmanager is actually a special object treated by objectmanager itself,
as I posted a question in stack overflow and someone answered kindly.
[This](https://magento.stackexchange.com/questions/273694/how-does-objectmanager-instantiated-by-objectmanagerinterface) is the post.
With the objectManager, we can use its power at its greates. The greates power it has is create and get, and create is a factory method to create a fresh new instance,
and get is a singleton method, that is, the get method creates an instance when not initiated,
and returns the initiated instanc.

```php
protected function execute() 
{
    // provided that we have the getObjectManager method
    $objectManager = $this->getObjectManager();
    $object = $manager->create('MyVendor\MyMethod\Model\Example');
    $message = $object->getHelloMessage(); 
    echo $message; // "hello!!" the default message

    $object->message = 'Hello PHP';
    $message2 = $object->getHelloMessage();
    echo $message2; // "Hello PHP" as we changed it.
    
    $object = $manager->create('MyVendor\MyMethod\Model\Example');
    $message3 = $object->getHelloMessage();
    echo $message3; // "hello!!" as we made fresh;

}
```

There is actually a whole lot more to get the echo print on the frontend,
and because of that alan uses the CLI for debugging purposes.
<br><br>
Note that it will output the original message if create a new object, 
but it will output 'Hello PHP' if we did $manager->get('') in the last code. 
<br><br>
As we've seen above, the object is not instantiated by new command, 
but it is instantiated through dependency injection, 
and the type hint is the must. In Java world, this is common as 
in function parameters it is mandatory to typecast it, but php it is not.
Actually, magento is using typescript as a way for reflection as it auto-gets.
This happens because as PHP is not a compile language but a scripting language,
there is no compile step do the type casting manually.
<br><br>
Magento uses objectmanager in this way, 
it also creates itself with auto-dependency injection.
The drawbacks of this would be that it is difficult to follow,
but there are other pros, such as, easy testing and class rewrites with di.xml file,
and application-wide management of objects by object manager.
<br><br>
Two things to keep in mind.
Magento is configuration over convention language.
It knows the entry points of where the objects get instantiated.
And another is, henever di.xml don't seem like working, clean the cache and try again!




{% include disqus2.html %}

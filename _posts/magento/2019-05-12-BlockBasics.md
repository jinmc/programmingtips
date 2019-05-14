---
layout: post
comments: true
title:  "Magento 2 Frontend - Block Basics"
date:   2019-05-12
categories: magento
---

Disclaimer : Most of the knowledge here is from the alanstorm's book NoFrillsLayout which is 25$. 
I learned a lot from it, and anyone who wants to know and have better understanding should look into it.

In the Module development video, we have used blocks but didn't provide enough explanation about it.
Blocks are php code that is intantiated as an object that contains and renders a part of html.
In Devdocs, they say 
*Block as a class represents a set of methods to manipulate with Magento UI blocks*.
*It contains all logic you want to apply to the Magento block under test*.
It can contain other blocks, and can be used in several pages as well.
It is added from the controller or the layout handle XML file.
We might have no idea what's going on if we just look at the view file(phtml) and even sometimes the controller itself,
because many other frameworks don't have layout XML handles.
Layout handle XML file is another big topic so we'll just focus on controller and blocks here.

Blocks can be extend from other things (such as Text) but it usually extends Tempalte,
which is at `\Magento\Framework\View\Element\Template`.
This [Template object](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Element/Template.php)
extends [AbstractBlock](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Element/AbstractBlock.php) 
which extends [DataObject](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/DataObject.php) and implements  [BlockInterface](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Element/BlockInterface.php).
We can see that in BlockInterface there is `toHtml` method. Blocks may also directly implement from BlockInterface class, or get an object directly from [Text](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Element/Text.php) which also has `toHtml` method.

```php
// app/code/Pulsestorm/HelloWorldMVVM/Controller/Hello/World.php
<?php
namespace Pulsestorm\HelloWorldMVVM\Controller\Hello;

class World extends \Magento\Framework\App\Action\Action
{   
    public function execute()
    {
        $objectManager = $this->getObjectManager();
        $block = $objectManager->get('Magento\Framework\View\Element\Template');
        $block->setTemplate('Pulsestorm_Nofrillslayout::chapter1/user/hello.phtml');
        echo $block->toHtml();   
    }
}
``` 
<br>
But the block is also useful for setting up other functions.
The code is from the book nofrillslayout from alanstorm.

```php
// app/code/Pulsestorm/Nofrillslayout/Block/Chapter1\User

<?php
namespace Pulsestorm\NoFrillslayout\Block\Chapter1\User;
class Template extends Magento\Framework\View\Element\Template
{
    public function getStr()
    {
        return ['first string', 'second string', 'third string', 'fourth string'];]
    }
}
```
and then we can use the method from the template.

```php
// app/code/Pulsestorm/Nofrillslayout/view/frontend/templates/chapter1/user/hello.phtml

<?php $all_thing = $block->getStr(); ?>
<h1>Hello Strings...</h1>
<ul>
<?php foreach($all_thing as $thing) : ?>
    <li><?php echo $block->escapeHtml($thing); ?></li>
<?php endforeach; ?>
</ul>

```
Blocks can be a child/parent blocks. To watch this, 
we can instantiate a [*layout*](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Layout.php) object,
which is usually instantiated when creating a page in magento.
When adding a new block, we would have to call createBlock method, which is a factory method.
Let's look at this code

```php
// app/code/MyVendor/MyMethod//Controller/Index/Index.php

public function execute()
{
    $objectManager = $this->getObjectManager();
    $layout = $objectManager->get('Magento\Framework\View\Layout');
    $blockParent = $layout->createBlock('Magento\Framework\View\Element\Template');
    $blockParent->setTemplate('MyVendor_MyMethod::user/example.phtml');

    $blockChild = $layout->createBlock('Magento\Framework\View\Element\Template');
    $blockChild->setTemplate('MyVendor_MyMethod::user/example2.phtml');

    $blockParent->append($blockChild);
    echo $blockParent->toHtml();
//  echo $blockChild->toHtml();
}

```
and following would be content of example1 and example2.

```php
// app/code/MyVendor/MyMethod/View/Templates/user/example.phtml
<h1>This is Parent Block</h1>
<?php 
    echo $this->getChildHtml();
?>
```

```php
<h2>This is Child Block</h2>
```

So this is how the parent block prints out child block as well.
Also, it is also possible that we selectively set what to print out by setting their names.

```php
$blockChild1 = $layout->createBlock(
                 'Magento\Framework\View\Element\Template',
                 'myvendor_mymethod_child1');
$blockChild1->setTemplate('MyVendor_MyMethod::user/child1.phtml');
$blockChild2 = $layout->createBlock(
                 'Magento\Framework\View\Element\Template',
                 'myvendor_mymethod_child2');                    
$blockChild2->setTemplate('MyVendor_MyMethod::user/child2.phtml');
$blockParent->append($blockChild1);
$blockParent->append($blockChild2);
echo $blockParent->toHtml();
```

```php
// parent.phtml file
<h1>Parent Block</h1>
<?php
    echo $this->getChildHtml('myvendor_mymethod_child1');
?>

```

{% include disqus2.html %}


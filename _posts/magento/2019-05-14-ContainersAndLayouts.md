---
layout: post
comments: true
title:  "Magento 2 Frontend - Containers and Layouts"
date:   2019-05-14
categories: magento
---

Continer is similar to a block but different by three ways.
<ol>
<li>Has no associated class file</li>
<li>Has no template</li>
<li>Has no content</li>
</ol>

```php
// app/code/MyVendor/MyMethod/Controller/Index/Index.php

public function execute()
{
    $objectManager = $this->getObjectManager();
    $layout = $objectManager->get('Magento\Framework\View\Layout');
    $blockParent = $layout->createBlock(
                    'Magento\Framework\View\Element\Template',
                    'myvendor_mymethod_parent'
                    );
    $blockParent->setTemplate('MyVendor_MyMethod::user/parent.phtml');
    $blockChild1 = $layout->createBlock(
                    'Magento\Framework\View\Element\Template',
                    'myvendor_mymethod_child1'
                    );
    $blockChild1->setTemplate('MyVendor_MyMethod::user/child1.phtml');
    $blockParent->append($blockChild1);
    $layout->addContainer('top', 'The top level Container');

    // Magento\Framework\View\Layout\Data\Structure
    $structure = $layout->getStructure();
    $structure->setAsChild('myvendor_mymethod_parent', 'top');
    $layout->generateElement();
    echo $layout->getOutput();

}

```

First, we make a root level container named top.
We make parent block as a child block of top container, 
which also has child block to parent block.
<br><br>
When we call getOutput from layout, it does
<ol>
<li>Find every root level container added with addContainer</li>
<li>Render every top level block inside that container</li>
</ol>

```php
// app/code/MyVendor/MyMethod/Controller/Index/Index.php

public function execute()
{
    $objectManager = $this->getObjectManager();
    $layout = $objectManager->get('Magento\Framework\View\Layout');
    
    $updateManager = $layout->getUpdate();
    $updateManager->addUpdate('<container name="top"></container>');

    $updateManager->addUpdate(
      '<referenceContainer name="top">
           <block
               class="Magento\Framework\View\Element\Template"
               name="myvendor_mymethod_block1"
               template="MyVendor_MyMethod::user/block1.phtml">
           </block>
       </referenceContainer>'
    );
}

```


{% include disqus2.html %}


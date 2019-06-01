---
layout: post
comments: true
title:  "Magento 2 Frontend - Layout Handle"
date:   2019-05-18
categories: magento
---

Even though making everything in the controller and echoing is straightforward,
it requires a lot of work. The ideal thing would be we want to set all the 
html and css javascript in a simple way for the most basic page and theme/layouts.
This is done by calling [result page](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Result/Page.php), and extend the abstract class [action](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/App/Action/Action.php).

```php
// app/code/MyVendor/MyMethod/Controller/Index/Index.php

<?php
namespace MyVendor\MyMethod\Controller\Index;
use Magento\Framework\App\Action\Action;

class Index extends Action
{
    protected $resultPageFactory;
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory
    )
    {    
        $this->resultPageFactory = $resultPageFactory;
        return parent::__construct($context);
    }           
    public function execute()
    {
	$pageObject = $this->resultPageFactory->create();
	$pageObject->addHandle('custom_handle');
	return $pageObject;
    }
}

```

Here, we added the handle by directly making a handle and adding to pageObject.
The custom_handle will look like this.

```
\\ app/code/MyVendor/MyMethod/view/frontend/layout/custom_handle.xml

<page xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd" layout="1column">>
</page>

```
Here, we are loading a `1column` page layout.
Without adding this page layout xml, it will render a blank page with  
just basic javascript and css files. So it means the html layout files is within the page layout.
We can think of layout handles as an event firing.
Even though we added a custom handle here, magento pages will always load two pages for sure,
first, the `default` handle, and the `full action name` handle.
The `default` handle will fire on every page.
The `full action name` will be modulename and controller name, action name combined as all lowercase with underbar. That means, even though we comment out the addHandle part and make a xml file as `mymodule_mymethod_index_index` then we would be able to see the same result.
<br><br>
Also, this is an example of displaying some text in a file
It is within page_configuration file pointing as a xsd, 
and the content should be inside the body, and find the container called content,
and display the text inside it.

```
// app/code/MyVendor/MyMethod/view/frontend/layout/mymethod_mymodule_index_index.xml 

<page xsi:noNamespaceSchemaLocation="urn:magento:framework: View/Layout/etc/page_configuration.xsd" layout="1column">
  <body>
    <referenceContainer name="content">
      <block name="pulsestorm_nofrills_chapter3_text" class="Magento\Framework\View\Element\Text">
        <arguments>
          <argument name="text" xsi:type="string">
            This is a test.
          </argument> 
        </arguments>
      </block> 
    </referenceContainer>
  </body> 
</page>

```






{% include disqus2.html %}


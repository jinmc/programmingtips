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
Without adding this page layout xml, 


{% include disqus2.html %}


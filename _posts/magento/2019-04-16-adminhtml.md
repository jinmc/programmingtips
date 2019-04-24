---
layout: post
comments: true
title:  "AdminHtml of Magento 2"
date:   2019-04-16
categories: magento
---

Reference : alanstorm.com/category/magento-2/

There are five areas in Magento2, which are frontend, adminhtml, restapi, soapapi, and cronjob.
Adminhtml are quite similar to making a view in a frontend.
It is to some extent that you should make a new module(registration.php, module.xml)
and that you should enable the module, and upgrade the setup(php bin/magento module:enable, setup:upgrade).
<br><br>
But even though you know well enough frontend, Adminhtml has a lot more.
For one thing, **ACL**.
If you don't know about ACL, they're basically authentifiaction for Magento 2,
and you can read all about them in [alanstorm's blog](https://alanstorm.com/magento_2_understanding_access_control_list_rules/). This is because you can't let anyone to access your admin panel, as there are sensitive information there. The acl.xml would locate in etc foler. The following is the example of one of magento's acls.

```
// vendor/magento/module-google-analytics/etc/acl.xml

<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Acl/etc/acl.xsd">
    <acl>
        <resources>
            <resource id="Magento_Backend::admin">
                <resource id="Magento_Backend::stores">
                    <resource id="Magento_Backend::stores_settings">
                        <resource id="Magento_Config::config">
                            <resource id="Magento_GoogleAnalytics::google" title="Google API" />
                        </resource>
                    </resource>
                </resource>
            </resource>
        </resources>
    </acl>
</config>

```

The next thing which is different is the routing.
For frontend, after the basic url, the `frontName/ControllerName/Action` was the url route.
(or routeId.. those two are quite interchangeable and tricky, but most of the time it's gonna be the same)
For adminhtml, this is similar but differs a little.
First of all, the baseUrl, would be `baseUrlofMagentoStore/admin/admin/action/key/<23234234234>`.
Here, the first admin is what you set has the admin panel homepage url, and it's better practice not to use 
the literal admin but something else. (i.e. admin_jim) and the latter admin is literal admin which is frontname of the router that lets you know that you're in the adminhtml area. admin and adminhtml are quite interchangeable in this region.
Also, it will have a key component that is composed automatically for security purpose.
The route file would look similar but a little bit different.
As you can see, router id has changed from standard to admin, and rest is same.
```
// app/code/Pulsestorm/HelloAdminBackend/etc/adminhtml/routes.xml

<?xml version="1.0"?>
<config xmlns:xsi="http:/www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">
    <router id="admin">
        <route id="pulsestorm_hello_admin_backend" frontName="pulsestorm_hello_admin_backend">
            <module name="Pulsestorm_HelloAdminBackend" />
        </route>
    </router>
</config>

```
But the problem is, we cannot access this url because we actually don't know the url key..
it's auto created. So we should create a way to access the page. 
But let's take care of the controllers, blocks and layouts first, the ones we're used to from the frontend modules.
The controller file is again almost similar to the frontend file.

```
// app/code/Pulsestorm/HelloAdminBackend/Controller/Adminhtml/Index/Index.php

<?php
namespace Pulsestorm\HelloAdminBackend\Controller\Adminhtml\Index
class Index extends \Magento\Backend\App\ACtion
{
    protected $resultPageFactory;
    public function __construct(
        \Magento\Backend\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory
    ) {
        $this->resultPageFactory = $resultPageFactory;
        return parent::__construct($context);
    }

    public function execute()
    {
        $page = $this->resultPageFactory->create();
// only when attached to menu
//        $page->setActiveMenu('Pulsestorm_HelloAdminBackend::a_menu_item');
        $page->getConfig()->getTitle()->prepend(__('Custom Title'));
        return $page;
    }

    public function _isAllowed()
    {
        return $this->_authorization->isAllowed('ACL RULE HERE');
    }
}

```
The isAllowed method is required here, and only allow users
when isAllowed returns true. But for super users, 
this would ignore the return value.
The block are not that different, but for the path has additional Adminhtml
compared to the frontend. Also, it should extend Magento\Backend\Block\Template,
when frontend extend Magento\Framework\View\Element\Template.

```
// app/code/Pulsestorm/HelloAdminBackend/Block/Adminhtml/Main.php

<?php
namespace Pulsestorm\HelloAdminBackend\Block\Adminhtml;

class Main extends \Magento\Backend\Block\Template
{
    function _prepareLayout(){}
}

```
The phtml file is in
```
// app/code/Pulsestorm/HelloAdminBackend/view/adminhtml/templates/content.phtml

<h1>block</h1>
```
Layout handle would look like this.

```
// app/code/Pulsestorm/HelloAdminBackend/view/adminhtml/layout/pulsestorm_hello_admin_backend_index_index.xml

<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <referenceBlock name="content">
        <block template="content.phtml"
               class="Pulsestorm\HelloAdminBackend\Block\Adminhtml\Main"
               name="pulsestorm_helloadminbackend_block_main" />
    </referenceBlock>
</page>

```
So how actually do we get to the page?
The solution is to set a adminhtml menu so that it can redirect to it.

```
// app/code/Pulsestorm/HelloAdminBackend/etc/adminhtml/menu.xml

<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">
    <menu>
        <add id="Pulsestorm_HelloAdminBackend::unique_identifier"
             resource="Magento_GoogleAnalytics::google"
             title="helloAdmin Backendmenu"
             action="pulsestorm_helloadminbackend/index/index"
             module="Pulsestorm_HelloAdminBackend"
             sortOrder="10"/></menu>
</config>

```
id is whatever it can be if it's unique.
Resource is what you have in ACL.
title is what it will show on the menu.
action and module are quite self-explanatory.

{% include disqus2.html %}

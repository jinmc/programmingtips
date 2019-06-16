---
layout: post
comments: true
title:  "Magento 2 Frontend - Page Layout"
date:   2019-06-01
categories: magento
---

Page Layouts are formats in magento that enable us to use the structure of the 
basic html and css, javascript without much effort.
These are the basic page layouts by magento default for frontend.

><ol>
>  <li>checkout</li>
>  <li>1column</li>
>  <li>2columns-left</li>
>  <li>2columns-right</li>
>  <li>3columns</li>
>  <li>empty</li>
></ol>

in admin, these are the default.

><ol>
>  <li>admin-1column</li>
>  <li>admin-2column</li>
>  <li>admin-empty</li>
>  <li>admin-login</li>
>  <li>admin-popup</li>
></ol>

Even the empty page layout is one of the default page layouts.
If you would select a page layout which is different to these default page layouts,
Without further explanations, these are the variables loaded in the page layouts.
These variables can be seen in the [result page](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/View/Result/Page.php) in the render function.

><ul>
><li>$htmlAttributes</li>
><li>$headAttributes</li>
><li>$requireJs</li>
><li>$headContent</li>
><li>$headAdditional</li>
><li>$loaderIcon</li>
><li>$bodyAttributes</li>
><li>$layoutContent</li>
></ul>

The empty layout has containers as we can see in the xml file
[empty.xml](https://github.com/magento/magento2/blob/2.0/app/code/Magento/Theme/view/base/page_layout/empty.xml)
```
root 
    after.body.start
    page.wrapper global.notices
        main.content 
            columns.top
            columns 
                main
            page.bottom.container 
            before.body.end
```

But we don't see the content container, which we added for the full action handle(modulename_controllername_actionname) 
for the reference container. It is added by the default layout handle, but we can see that the default 
layout handle relies on the main container, which would not be there for more_empty.xml.


```
// vendor/magento/module-theme/view/frontend/layout/default.xml
<referenceContainer name="main">
    <container name="content.top" label="Main Content Top" />
    <container name="content" label="Main Content Area" />
    <container name="content.aside" label="Main Content Aside" />
    <container name="content.bottom" label="Main Content Bottom" />
</referenceContainer>
```


{% include disqus2.html %}


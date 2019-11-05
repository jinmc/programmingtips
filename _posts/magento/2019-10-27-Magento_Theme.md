---
layout: post
comments: true
title:  "Magento 2 Themes"
date:   2019-10-27
categories: magentofrontend
---

<p>
Honestly, I'm quite surprised I didn't make a post about magento theme because this is one of the most basics of Magento 2.
I have mostly talked about magento backend functionalities, and theme is the most basic topic and important one when talking about magento frontend.
You could do almost every thing inside theme and could do it in modules, but makes much more sense to do it in theme just because the seperation of concerns.
In theming in magento, you would be getting the layout xml, css/Less, Javascript(ko.js, requirejs configuration), and of course, html as well as phtml.
</p>

<p>
It will be a rare occasion to create a magento theme from scratch, just because we have a blank theme which is not actually blank but blank enough that we could create enough customizations on our own. 
As similar as creating modules, we would have to create a theme inside app folder, but we would have to create it inside the design folder, not the code folder.
We would have to create registration.php, as well as theme.xml, when module had etc/module.xml.
</p>

```php
// app/design/frontend/MyCompany/MyTheme/registration.php
<?php
<?php
  \Magento\Framework\Component\ComponentRegistrar::register(
      \Magento\Framework\Component\ComponentRegistrar::THEME,
      'frontend/MyCompany/MyTheme',
      __DIR__
  );
```

<p>
The registration.php file will be caught by the NonComposerComponentRegistration.php globpattern inside app/etc, which is required by maento components.
And also the theme.xml would be the file that would be identifying the theme, and configuring it from start. If inheriting from a parent theme, 
it would have a row inside the theme table that would have the name and parent of it, and the preview_image. 
You can also see the relationship and where it's inheriting inside the magento admin panel itself.
</p>

```
// app/design/frontend/MyCompany/MyTheme/theme.xml
<?xml version="1.0"?>
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
    <title>MyCompany Mytheme</title>
    <parent>Magento/blank</parent>
</theme>
```
<p>
Another important file in themes are view.xml. They live in app/etc/ and it is responsible for setting the image configurations.
Here is the link to the defautlt magento theme's view.xml. https://github.com/magento/magento2/blob/2.3/app/design/frontend/Magento/blank/etc/view.xml
reference : https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/themes/theme-images.html
</p>



{% include disqus2.html %}


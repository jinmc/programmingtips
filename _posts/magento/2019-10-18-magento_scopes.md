---
layout: post
comments: true
title:  "Magento 2 Scope"
date:   2019-10-18
categories: magento
---

reference link : https://docs.magento.com/m2/ce/user_guide/configuration/scope.html

<p>
In Magento 2, there are 4 scopes. Global, Website, Store, Storeview.
Each Website has a default store. Also, for each Store, there is a default root category (main menu)
and default store view.
</p>


<p>
This is more of knowing the magento structure than developing of Magento 2. 
Especially, this is applied to multi-website and multi-store, multi-storeviews.
You can use default values as 'Use system value', 'Use Default', 'Use Website'.
</p>

<p>
Catalog in magento refers to the whole product database, and each stores are assigned to root category.
The main menu, which is the top menu is based on root caegory.
</p>

<p>
For the product view, it might be possible that we might want to have different views for the same item.
It is like adding a layer to a view. It is also possible to have one product in one website, and not inside other website.
</p>

<p>
For Price, if there are same products, we can make prices separate for each websites.
It makes sense that in some country it might be pricier or cheaper than the other country, even it's the same product.
</p>

<p>
For customer account, we can set the customer account only for the specific website, or we can make it global, 
so that all the accounts can be accessed on the same website.
</p>
{% include disqus2.html %}


---
layout: post
comments: true
title:  "Magento 2 - Service Contract"
date:   2019-10-28
categories: magento
---

<p>
reference : https://devdocs.magento.com/guides/v2.3/extension-dev-guide/service-contracts/service-contracts.html
</p>

<p>
This is one of the most complicated subjects yet importanat subjects in magento.
Service contracts play an important role in magento ORM(Object Relational Mapping), such as Entity Framework in C#. 
Which also connects to model/collection in Magento 2.
</p>

<p>
In service contracts, there are two interface, first the service interface and the data interface.
Service interface is in the someModule/Api directory as well as data interface is in someModule/Api/Data directory.
The data interface preserves the data integrity, while the service interface hides the business logic.
This can be beneficiary because the service contracts would guarantee the compatibility and enable third party developers to report system dependencies through composer.json also.
</p>

<p>
For example, let's look at the module Module_CMS.
The data interface has all the getters and setters of the columns when the service interface only has the crud functionality functions.
The Model php file that implements the data interface would have all the getters and setters that the data interface has, when 
the resourceModel php file that implements the service contract would have only the crud functionalities.
</p>


<p>
Note that the Model is connecting the db by resourcemodel, which is within Model/ResourceModel.
Also, note that the Model is extending abstractModel, and implementing the data interface and identityInterface. 
</p>

<p>
The service interface is implemnted by the resoucemodel, which also uses the Magento\Framework\Api\SearchCriteriaInterface,
to filter by which column.
</p>

{% include disqus2.html %}


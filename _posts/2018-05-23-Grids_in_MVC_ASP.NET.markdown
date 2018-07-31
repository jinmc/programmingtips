---
layout: post
comments: true
title:  "Grids in ASP.NET MVC"
date:   2018-05-23
categories: jekyll update
---

In Web forms, there was gridview, which was super convenient to display data in an excel-like format.
I could just type <asp:gridview runat="server" id="someGrid" selectMethod = "someGrid_Get">
and then write the selectMethod on the codebehind file aspx.cs file.
(aspx is the frontend file)

But unfortunately in asp.net mvc, we are not suppossed to use webforms,
because the mvc does not use postbacks like webforms.
But asp.net mvc has its own ways to display grids, and there are a lot.
Actually, we can even use React JS to display the grid.

This is the link to list of asp.net mvc grid controls : https://www.agile-code.com/blog/list-of-asp-net-mvc-grid/

and in case it goes down, the lists are...
flexgrid, mvc contrib, jqgrid, datatables, sench ext js javascript framework,
ingrid, jqxgrid, telerik mvc, kendo ui grid, mvc controls toolkit, infragistics igGrid,
dhtmlxGrid, asp.net mvc awesome ajax list, asp.net mvc awesome grid,
syncfusion mvc essential grid, slickgrid, jquery asp.net mvc controls, devexpress aspxgridview, code based asp.net mvc gridview

I don't know what I'll use, and also there are other issues as
forms, as forms are a lot different from web forms.

{% include disqus2.html %}
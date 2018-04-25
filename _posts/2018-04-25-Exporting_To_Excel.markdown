---
layout: post
title:  "Exporting to Excel from webforms gridview"
date:   2018-04-25
categories: jekyll update
---

This is actually a typical example of a stackoverflow engineer.
I do not understand fully of the code in here except that I made a button
and passed the function inside the buttonclick event.
The code will look something like this...

{% highlight csharp %}
  protected void exportBtn_OnClick(object sender, EventArgs e)
        {
            Response.Clear();
            Response.Buffer = true;
            Response.AddHeader("content-disposition", "attachment;filename=export.xls");
            Response.Charset = "";
            Response.ContentType = "application/vnd.ms-excel";

            using (StringWriter sw = new StringWriter())
            {
                HtmlTextWriter hw = new HtmlTextWriter(sw);

                detailGrid.AllowPaging = false;
                detailGrid.HeaderRow.BackColor = Color.White;

                foreach (TableCell cell in detailGrid.HeaderRow.Cells)
                {
                    cell.BackColor = detailGrid.HeaderStyle.BackColor;
                }

                foreach (GridViewRow row in detailGrid.Rows)
                {
                    row.BackColor = Color.White;
                    foreach (TableCell cell in row.Cells)
                    {
                        if (row.RowIndex % 2 == 0)
                        {
                            cell.BackColor = detailGrid.AlternatingRowStyle.BackColor;
                        }
                        else
                        {
                            cell.BackColor = detailGrid.RowStyle.BackColor;
                        }

                        cell.CssClass = "textmode";
                    }

                }
                detailGrid.RenderControl(hw);

                string style = @"<style> .textmode { } </style>";
                Response.Write(style);
                Response.Output.Write(sw.ToString());
                Response.Flush();
                Response.End();
            }
        }
{% endhighlight %}

and then there was these errors.. that I fixed exactly what stackoverflow told me ..
and these are the stackoverflow links I referred.

https://stackoverflow.com/questions/6343630/gridview-must-be-placed-inside-a-form-tag-with-runat-server-even-after-the-gri

https://www.codeproject.com/Questions/45450/RegisterForEventValidation-can-only-be-called-duri

I hate that I do not understand everything that's happening here.. 
but I guess I cannot know everything and hope to figure out sometime later.

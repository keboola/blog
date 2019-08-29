---
title: How Keboola Switched to Automatic Invoicing
layout: post
categories: product
date: 2018-10-10T11:16:35.000+00:00
perex: Automating the invoicing process to cut down up to 2-3 mandays per month. Our
  goal was clear. But how did we do it?
user: petr-simecek
coverphoto: ''
coverphoto_slider: "/uploads/invoicing.jpg"

---
Assisting clients with data and automation is our specialty here at Keboola, with the mission of helping businesses become “data-driven.” Several months ago it was our turn to put in moto our own engines and build an automated workflow for our invoicing process. After we lost our two main finance wizards to the joys of childcare, we decided to go on the automated road ourselves for our internal business processes.

For years, the two of them have been issuing invoices one by one. Manually. Hating unnecessary manual tasks, we were eager to put the power of our platform - Keboola Connection - into work and eliminate the manual invoicing.

We expected approximately 2-3 mandays per month to be cut down. We also wanted to get more qualitative data on what’s going on.

With an increase in our global sales activities, we had to automate the entire process and avoid hiring another person to handle this manually (a no-go for a data-driven company like Keboola!). Plus we didn’t want to overload Tereza, our new colleague, with this tedious work and take away her weekends from her.

On the opposite side, we definitely did not want to waste 10x time in the development of the system so we chose to practice what we preach applying the agile methodology: start small, build quick, fail fast and have the results in production from day one - slow Kaizen style improvement. We didn’t want to have someone write a custom app for us. We wanted to hack our current systems, prototype, fail fast and see where it would lead us.

**Starting point: our “budget” was 3-4 mandays max!**

## **Step 1  —  Looking for a tool to use for the invoicing**

We were looking for a tool which can handle all the basic things we need: different currencies (it’s Europe!), different bank accounts, with or without tax, paid or unpaid, and a handful of other features. Last but not least, the tool HAD to have a nice RESTful API. After some trials we opted for a Czech system – [Fakturoid](https://www.fakturoid.cz/), not only for their great support, by the way, even if it was a big plus.

## **Step 2  — Getting data about customers from Fakturoid into Keboola Connection**

First step: exporting our clients from our old accounting tool [Flexibee](https://www.flexibee.eu/), into our new one, Fakturoid. Then we added all the necessary info to the contacts.

![](/uploads/invoicingArticle1.jpeg)

_Keboola Generic extractor config for getting clients’ info from Fakturoid into Keboola Connection_

With our customers’ records ready we just needed to get the data into Keboola Connection. It was time to set up our [Generic Extractor](https://developers.keboola.com/extend/generic-extractor/). Within half an hour it was done!

## **Step 3  —  Creating two tables with invoices and their items for uploading into Fakturoid**

There was only one more thing to know. Who is supposed to pay for what and when? We store this info in our Google Spreadsheet. It contains basic info about our clients, the services they use, the price they pay for them, the invoicing period (yearly, quarterly, monthly), and the time period for which the info is valid (when their contract is valid; new contract/change = new row). To be able to pair the tables easily, we added a new column with the Fakturoid client ID.

Finally, we set up our [Google Drive Extractor](https://help.keboola.com/tutorial/load/googledrive/) and loaded the data into Keboola Connection. Once we had all the data there, we used SQL to create a Transformation that took everything necessary from the tables (who we bill this month, how much, if out of country = don’t put VAT, add info about current exchange rate, etc.) and created clean output tables. Everything in one place.

![](/uploads/invoicingArticle2.jpeg)

_Part of the SQL transformation which creates an output table with items to pay for Fakturoid._

## **Step 4  — Sending the tables into Fakturoid and letting it create the invoices**

This step was not as easy as exporting data from Fakturoid. We couldn’t use any preprogrammed services. Thankfully, **Keboola Connection is an open environment** and any developer can augment it and add new code to extend its functionality. Just wrap it up in Docker container. We asked our colleague, Vlado to write a new writer for Fakturoid (it took him only 2 hours!) which would take the output tables from our Transformation (see Step 3) and create invoices in Fakturoid from the data in those tables.

Now when the writer is completed, Keboola Connection has one more component which is available to all its users.

## **Step 5 — Automating  the whole process**

It was the easiest part. We used our [Orchestration](https://help.keboola.com/orchestrator/) services inside Keboola Connection and created an orchestration which automatically starts on the first day of each month. Five minutes later, all the invoices are done and sent out. #easypeasy

## **Conclusions:**

Automating the tasks that are repetitive and time-consuming for your team should not be complicated. We believe in splitting big problems into smaller pieces, solving the small parts and putting them back together just like Lego bricks. The process should be easy, fast, open and put together from self-contained components. So when you have a problem in one part, it doesn’t affect the whole solution and you can easily fix it.

Saving our colleague’s time, enabled her to spend time on more interesting things. And the process scales as we grow. The focus should be turned on more meaningful tasks that bring additional value to the company. Optimising the efficiency is key in this new “data-driven” era and we cannot afford to spend time on tasks that can be automated.

**_What we spent?_**

4 hours to analyse and understand the problem and how things are connected,  
1 hour to export clients from the accounting system,  
1/2 hour to write a Generic Extractor from Fakturoid,  
2 hours to write a Transformation preparing clean output data,  
2 hours to develop a new Writer for Fakturoid, and  
1-2 hours to do everything else related to the whole process.

Total = circa 11 hours

Do you have any process that takes too much time from your team and want to automate? [Write us a few lines](mailto:info@keboola.com) (not of code, don't worry!) and we’d be happy to help you!
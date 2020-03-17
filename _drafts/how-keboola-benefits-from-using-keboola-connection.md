---
layout: post
categories: product
permalink: keboola-benefits-keboola-connection
title: How Keboola benefits from using Keboola Connection
perex: 'Our internal systems run on Keboola Connection, and we''re doing everything
  from analysis to process automation. '
date: 
user: ''
coverphoto: ''
coverphoto_slider: ''

---
The Shoemaker (often) goes barefoot. It is often the case, that while one is working hard on helping their customers get better, they neglect their own processes, taking the same shortcuts they warn their clients against. It was like that at Keboola a few years back, until we agreed that this is no longer acceptable, and created a job role (mine) to apply our teachings internally as well.

## The Beginnings

With the exception of all our data being processed in Keboola Connection, our internal systems used to look just like any other company’s - disjointed, accumulated hodge-podge of single-purpose solutions. We had GoodData reporting above data from our Paymo (time tracking app) which helped us track work for our clients, Google Spreadsheets for planning implementation hours, budget etc.

One of the first more complex projects I remember (I was still a solution consultant back then) was[ invoice automation](https://blog.keboola.cz/jak-v-keboole-p%C5%99ech%C3%A1z%C3%ADme-na-automatickou-fakturaci-dd5e087e4cf1) for the Czech office (that’s why it's written in Czech, sorry English speakers :)). Long story short, instead of manually creating invoices for each client, we’ve used Keboola Connection to extract information about them and their contracts. Then we’ve used SQL transformations to create tables with invoices and lines data and loaded them to the invoicing system via the new Fakturoid writer (Fakturoid was our invoicing tool at the time).

We had fresh invoices waiting to be checked and dispatched on the very first morning of the month. This automation saved our back office a couple of hours of unnecessary work per month.

## The New Era

It all changed about a year ago. We started building new internal analytics which is able to serve our growing international team’s higher demands of the provided data. Right now all our departments rely on our analytics to help them with their job and daily tasks such as:

* Customer Success - client’s platform usage evolvement,
* Professional Services - team performance and KPIs,
* Sales - development of the sales funnel,
* Finance - financial situation and prediction,
* Marketing - the success of marketing efforts.

They all benefit from the data Keboola Connection gathers, processes and distributes. Let’s take a look at some examples.

### Shared Data Backend

There’s plenty of use cases for data processing. But data processing can’t work properly without a set backend that can handle the processes in an efficient way.

If you’re watching our webinars, you probably heard us speaking about Multi-project Architecture or Data Catalog. The former is a logical concept of BI solution composed of multiple Keboola Connection projects (designed by our Professional Services) and the latter is our product’s feature which enables you to share data between multiple projects. Both are crucial parts of our own analytical backbone.

We’re using Level 0 projects to gather and process raw data from the systems we’re using - one project gathers data from CRM and other sales tools, another gathers data from the platform, another from accounting tools etc. We’re also using Data Catalog to share necessary data between those projects, as we often need to establish links between data from different sources. E.g. we assign the CRM ID from the Sales project to Keboola Connection organization in the project with the platform’s data, so we’re able to combine it in the final reporting.

In the Level 1 projects we’re doing additional calculations and, for example, sharing the statistics with our clients.

The Level 2 projects serve as data sources for the top layer tools and feed our own reporting in Looker, Google Spreadsheets for simple information, GoodData for client-facing reporting or enriching our own CRM with new information. This is also a layer where the Business Data Model (BDM) resides. Those who know us have definitely heard about our love for BDMs. They help customers and us understand the business and its processes, so the following implementation of BI solution goes smoothly and is ready for future improvements and enhancements. Our BDM describes connections between all parts of our business, like implementation hours of our analysts allocated to particular contracts that have their limits being compared to the actual consumption of the platform etc.

![BDM example](/uploads/Internal Project BDM UPDATED - Google Drawings 2020-03-17 17-13-12 (1).png "BDM example")

By using multi-project architecture, we know that updating the first layer will have a ripple effect on every other part of the flow and we don’t need to worry about providing two groups of people (especially Keboola people and clients) with different data or different answers to the same question.

It’s all wrapped in the logic of orchestrations and automations, so every step is processed in the correct order. We’re also using orchestration triggers to run the data processing immediately after fresh data is available, so the end users have updated data as soon as possible.

Automation is a necessary final touch in almost every use case, as it enables you to deliver the data in the right moment to the right people. And in Keboola Connection you have the option to schedule a particular time of the orchestration or use a trigger based on an update of any table(s) in your project.

  
In our own solution, we’re using a combination of both. Triggering the main part when fresh raw data about Keboola Connection usage is updated, running orchestration which is processing new exchange rates every morning or updating Salesforce tables with enriched data four times a day. Our Data Catalog manages the sharing of always-fresh data between the projects:

_( image - data catalog sankey chart)_

### Internal Analytics

We use Looker as our BI tool, with Snowflake as the data warehouse. A Keboola project, dedicated to this task, does the last step in preparation of the data from our catalog into the DWH. Everyone in the company now has access to a multitude of dashboards depending on their needs. Because all the data came clean in optimal structure directly from Keboola Connection, the LookML code is comparatively simple with no derived tables and other constructs. With such a data model it is also easy for our users to self-serve in Looker.

(image - list of dashboards in Looker?)

### Clients’ Keboola Connection Usage

Now on to a bit more complicated topic, which first requires some background. Originally, the Keboola Connection has been generating Project Power Units (PPU - unit for measuring the usage of the platform) consumption per every job based on the I/O volume. That has been working nicely for quite some time. But later on, we’ve started to reach the limits of this solution. Our clients grew larger in terms of the processed data volume, and with them grew the complexity of their projects. We’ve discovered that the clients are over-optimizing their data processes in Keboola Connection, so they don’t breach the PPU limits. That was actually blocking the development of the solution based on our product.

We had to find a better way to calculate PPU and find a good balance between our profits and a pleasant work environment for our clients. That was the time we came up with PPU based on time - that way our customers are able to focus on the best performance/speed ratio of the data processing, which is obviously a standard goal when working with data and it also results in lower PPU consumption.

After an extensive analysis of our costs, overall platform consumption etc., we had our calculations. But this time we’ve decided not to implement the logic into the product itself. It would be time-consuming for our developers, who should be focusing on improving the platform, and difficult to iterate as things inevitably change. We’ve decided to use raw data generated by the platform (like duration of the job, components etc.) and built a layer to implement the business rules into Keboola Connection Transformations. Now we're able to calculate PPU consumption for the transformations, sandboxes, writers or provisioned Snowflake DBs our clients are using. That consumption reflects the pricelist/deals made by the business and can be easily changed if necessary.

We are combining that platform data with contracts from our CRM (already handily available in our catalog because of the internal analytics initiatives), which contain information about clients’ platform limits, duration of the contract and so on. Hence we’re able to measure how our clients are using Keboola Connection, if they are reaching their limits and if our Customer Success Managers should contact them to offer help or discuss a new contract with growing clients that need more from the platform.

All that information is available to our employees from anywhere and updated several times per day, so they don’t need to waste their time searching for such info and rather focus on keeping our clients happy.

### Automatic Invoicing

As the tools our company is using have changed, we needed to change the processing of invoices as well, so we wouldn’t lose the automation’s benefits.

Previously, every office has been using different CRM tools to track their sales activities, opportunities and deals (CZ and CA offices using Hubspot, UK office using Zoho). Then we’ve started to combine our efforts across the globe and part of it was switching to single CRM - Salesforce. Invoices are generated and sent automatically in Salesforce, so that part was suddenly covered. But there was another piece missing in our invoice flow, one not covered by the previous solution - loading invoices to our accounting tools.

Accounting tools are different in each country, because of various legislation needs, so we had to find a solution to feed all of them. We’re currently using Flexibee in CZ (accepting XML files) and Xero for CA and US invoices (accepting CSV files).

The first part of the data flow is similar in both systems - get invoice data from Salesforce and process it to unified structure for our internal reporting. Then we need to use that data to prepare structured files according to each system’s restrictions. For Xero it’s simpler, as it’s just one CSV table and Keboola Connection’s standard file type is CSV.

For Flexibee we needed to create a Python script which takes input tables with invoices and their line items, prepares the XML file and saves it to the File Storage.

In order to avoid the duplication of processed invoices, we’re getting data from accounting tools and comparing it with invoices from Salesforce to mark the already processed invoices. That way we can see which invoices are yet to be processed and sent to the accounting tool, as well as monitor their payment status.

Last part of the process is delivering those files to accountants. We’re using the Mailgun Writer for that task. It checks for the new invoice records, takes the files and sends them to the selected email address. That way the recipients receive new files each time there are new non-accounted invoices. We like the extra human check here for the time being - in the future we may write directly into the API.

## User Feedback

In the same way, we get client’s feedback we also receive internal feedback from our own team. Honestly, without that we'd be a bit lost. We need to hear the important questions from different departments, so we can find the best solution and answers in our data. Also - and you might know that from your own experience - being overwhelmed by reasonable demands from your customers makes you happy, as you know your efforts are not in vain.

Of course, you need to start prioritizing with so many requests and present the priorities to the users, so they know what to expect. In our Keboola world, the priority is always to satisfy the needs of our clients and make them happy.

## Our Effort

We’ve managed to build all that in just about one year using less than a half of an analyst (plus some solution designing around that). When I look back, it’s honestly impressive. I’m not even skilled in Python or Docker components. I just know Keboola Connection really well, know my way around APIs, Generic extractor and I’ve written a bunch of SQL queries. In those rare cases I needed help with writing a component or a specific Python transformation to cover things hardly doable in SQL, I’ve just asked for a little bit of help from my colleagues. No shame in that. And you can find smart people who know stuff better than you quite easily. With that in mind, you’re ready to make your company data-driven in no time.

Do you want to hear more about how we’re using Keboola Connection? Register for the webinar.
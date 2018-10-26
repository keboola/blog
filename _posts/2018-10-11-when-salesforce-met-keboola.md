---
title: 'When Salesforce Met Keboola: Why Is This So Great?'
layout: post
categories: product
date: 2017-10-10 14:08:54 +0000
perex: Salesforce provides an end-to-end platform to connect with your customers including
  Marketing Cloud to personalize experiences across email, mobile, social, and the
  web, Service Cloud to support customer success, Community Cloud to connect customers,
  partners and employees and Wave Analytics designed to unlock the data within.
user: petr-simecek
coverphoto: ''
coverphoto_slider: ''

---
## How can I get more out of my Salesforce data?

Along with being the world’s #1 CRM, [Salesforce](https://www.salesforce.com/) provides an end-to-end platform to connect with your customers including Marketing Cloud to personalize experiences across email, mobile, social, and the web, Service Cloud to support customer success, Community Cloud to connect customers, partners and employees and Wave Analytics designed to unlock the data within.

After going through many Salesforce implementations, I’ve found that although companies store their primary customer’s data there, the opportunity enrich it further by bringing in related data stored in other systems such as invoices in ERP or contracts in dedicated DMS is a big one.  For example, I’ve seen clients run into the issue of having inconsistent data in multiple source systems when a customer changes their billing address.  In a nutshell, Salesforce makes it easy to report on that data stored within but can’t provide a complete picture of the customer unless we broaden our view.

Another challenge I’ve noticed is that we can only report on the data residing there which means doing time-over-time or analysis of changes between snapshots is a problem.  Salesforce has a huge API and is able to connect to any other systems’ API, however that can also means a lot of development and lengthy, expensive customizations.  At the same time, Salesforce prefers declarative development where we don’t typically need to write any code and developing these connections are contrary to that idea.

Enter Keboola Connection, which allows us to blend Salesforce data along with other sources, clean them and run apps on top of them.  In minutes we can set up things like Churn prediction, logistic flow, segmentation and much more.  Supporting the same idea of close to no-development, the focus is on connecting the right data sources, creating transformations or using the data science apps and then automating these data flows.  This enables us to do cross-object reporting and cross data source analysis in our favorite data visualization tools or even blend data together and feed it back into Salesforce to further enrich our customer data.

## Here’s a Few Examples:

**NGO With Hundreds of Thousands of Donations**

NGO, an organization that receives hundreds of thousands of donations that they track through campaigns in Salesforce.  The obvious challenge?  How can they get better insight into these campaigns to increase the size and number of donations?  Although within Salesforce we can use different reports and groupings of data to examine different points of view, this requires a lot of manual effort as well as some imagination.

The Keboola difference?  Just use the Salesforce Extractor to get data out of Salesforce (click the button, authorize SFDC credentials and select the appropriate fields), do segment analysis, which will automatically analyze data and groups donors together based on similarities, then uploads the results (information about segment each contact it’s part of) with the Salesforce Writer back into the system.  This equals days of saved time and a much more precise grouping of contacts which will directly address the donation insights they’re looking for.

![](/uploads/salesforceArticle2.jpg)

**New CRM without additional information**

The second example is a customer who just implemented Salesforce CRM basics - companies, contacts, addresses number of employees and so on. This isn’t a bad start, but very simple with no additional information.  It means that salespeople have to use this system to obtain and enter information about customers, but cannot use it for segmentation based on billings or existing contracts.  Connecting CRM with their existing ERP is out of the scope of this project, would be too expensive and take too long to deliver.  Because their existing ERP doesn’t support any web access, opening a page which would show billing data based on a provided customer id is out of question as well.  That said, we need salespeople to be able to take advantage of data from both systems to evaluate who to call first.

![](/uploads/salesforceArticle1.jpg)

## Conclusion

It is easy to think about many other examples Keboola Connection can play an important role in, not just as a middle-man between Salesforce and other systems, but also to help identify important information across all the records we have.  What use case can you see in your environment?
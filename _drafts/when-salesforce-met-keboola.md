---
title: When Salesforce met Keboola
layout: post
categories: product
date: 2018-10-11 00:00:00 +0000
perex: ''
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: ''

---
## When Salesforce Met Keboola: Why Is This So Great?

by [Martin Humpolec](http://blog.keboola.com/author/22475)

[![whenharrymetsallyjpg](https://lh6.googleusercontent.com/hiADj45RKVJ-bBjc8zyei1d5asag-jqgu1wv-r2WUm7D21sHQre_bGab1AiJx5wiuFixY-cnVk_3z6Ok97rd0xf2nhdIz6n6L__10b95I3x0LjKLo2JnSuIj7HUdo-hzLqgBGnvS "Image: https://lh4.googleusercontent.com/jGrVw0bfYawA2oe7iJynKmY9UpzJc-rRk7dKAKKEgqBimXy9PafszMN0JVBB8Xi1jXSbkFqaxBvhlCELOZOR-gBbS6ji0ZcxCa7xK_KyGMcPbBuQVWs1wEIQfiT4Tu6--nSwWWCV" =624x289)](http://blog.keboola.com/author/22475)

### How can I get more out of my Salesforce data?

![sfdcpng](https://lh5.googleusercontent.com/yROcHgphWZQZ-IRgh0yOGH9kVwSIqBA35i7zfHz9iOkB4GsUwwj6_vAmjqH4-tnb_056y9OHYFP_3u8d3x3Z7LBJPox-JM0vgLzAI5p_lZhy8E8MXri2TbEeX2a6WoDZMmAx6h3L "Image: https://lh3.googleusercontent.com/6X7NN8jilAN6cilC3FY1CWpv31M5r4C0aYHYHS-M9g6q4ajXcahlq_IjZGiQEhVLCC_kXPp9Y008p4s0j0FV_7KZHaR7L4bXuLYGsI9z8Y03mQWcoipeQCDLld1Yjs4uFwXr4Asm" =292x203)

Along with being the world’s #1 CRM, [Salesforce](https://www.salesforce.com/) provides an end-to-end platform to connect with your customers including Marketing Cloud to personalize experiences across email, mobile, social, and the web, Service Cloud to support customer success, Community Cloud to connect customers, partners and employees and Wave Analytics designed to unlock the data within.

After going through many Salesforce implementations, I’ve found that although companies store their primary customer’s data there, the opportunity enrich it further by bringing in related data stored in other systems such as invoices in ERP or contracts in dedicated DMS is a big one.  For example, I’ve seen clients run into the issue of having inconsistent data in multiple source systems when a customer changes their billing address.  In a nutshell, Salesforce makes it easy to report on that data stored within but can’t provide a complete picture of the customer unless we broaden our view.  

Another challenge I’ve noticed is that we can only report on the data residing there which means doing time-over-time or analysis of changes between snapshots is a problem.  Salesforce has a huge API and is able to connect to any other systems’ API, however that can also means a lot of development and lengthy, expensive customizations.  At the same time, Salesforce prefers declarative development where we don’t typically need to write any code and developing these connections are contrary to that idea.  

![keboola-logo-name-smallpng](https://lh5.googleusercontent.com/4EAYF-PAHhccL8TBT_3BzLSVvaUXNLlQfCkI7N7-Aj1z8kH_lMG45tR7Kcx-SSYwevgGgqQLu1L6Ij52kJqpE27m4yuCyR87ayOZNBRqOtE6mjE196kks3X8f_ylh-X8k8BM5-6z "Image: https://lh6.googleusercontent.com/oThfS4HzUvS1fHgUgcYV8f_dYvzOmRf51pf8Uy3ZIqZlA9tX9WSJ9BYr83wJsE7peGICH8g9XoOksHlKBnfycIA7opMLs5z-ZK37FgX86hSz_nJan8T-EOyh2Wb_3FojKOOSWRTy" =404x141)

Enter Keboola Connection, which allows us to blend Salesforce data along with other sources, clean them and run apps on top of them.  In minutes we can set up things like Churn prediction, logistic flow, segmentation and much more.  Supporting the same idea of close to no-development, the focus is on connecting the right data sources, creating transformations or using the data science apps and then automating these data flows.  This enables us to do cross-object reporting and cross data source analysis in our favorite data visualization tools or even blend data together and feed it back into Salesforce to further enrich our customer data.

### Here’s a Few Examples:

#### _NGO With Hundreds of Thousands of Donations_

NGO, an organization that receives hundreds of thousands of donations that they track through campaigns in Salesforce.  The obvious challenge?  How can they get better insight into these campaigns to increase the size and number of donations?  Although within Salesforce we can use different reports and groupings of data to examine different points of view, this requires a lot of manual effort as well as some imagination.  

The Keboola difference?  Just use the Salesforce Extractor to get data out of Salesforce (click the button, authorize SFDC credentials and select the appropriate fields), do segment analysis, which will automatically analyze data and groups donors together based on similarities, then uploads the results (information about segment each contact it’s part of) with the Salesforce Writer back into the system.  This equals days of saved time and a much more precise grouping of contacts which will directly address the donation insights they’re looking for.  

Other benefits include predicting when the next payment will come based on existing data.  Just imagine that NGO without any guaranteed income would be able to predict their cash flow, that would be awesome!   

![](https://lh4.googleusercontent.com/aA8HYspH6_-q6tWhN76WCz_MqPrCpqtalOqFm5lYELQA0MmOwp0qNVH322GyR9TT409GaOSgzmfVMhkVQU3waGeJRu-D-gUJH3KEYzyhC-Pk2iBR3aAhPjLHlX45MGvWaAhX4XgO =624x273)

#### _New CRM without additional information_

The second example is a customer who just implemented Salesforce CRM basics - companies, contacts, addresses number of employees and so on. This isn’t a bad start, but very simple with no additional information.  It means that salespeople have to use this system to obtain and enter information about customers, but cannot use it for segmentation based on billings or existing contracts.  Connecting CRM with their existing ERP is out of the scope of this project, would be too expensive and take too long to deliver.  Because their existing ERP doesn’t support any web access, opening a page which would show billing data based on a provided customer id is out of question as well.  That said, we need salespeople to be able to take advantage of data from both systems to evaluate who to call first.

In Keboola this problem can be solved in minutes.  By using the connector to their existing ERP, using an identification field to match billings and contracts records to customer records and then creating or update these records in Salesforce.  Piece of cake!  This saved weeks of development and several hours every day for each salesman.  

![sfdckbc 1jpg](https://lh6.googleusercontent.com/zlcqPRROQ50j9xifqRX0H3cSvJwx7wAJSmM3pV0dDUnwOESm549tlq7PEAnouN9DgMR6UvnZepmZf_NUfPdNj2s0rJNsNe_8YhzaejKOav0acr_mwYzZHmpLovHPUdS0wOfBFtI8 =624x352)

### Conclusion

It is easy to think about many other examples Keboola Connection can play an important role in, not just as a middle-man between Salesforce and other systems, but also to help identify important information across all the records we have.  What use case can you see in your environment?
---
title: 'Heureka: building a universal data platform across 9 countries with Keboola
  and Snowflake'
layout: post
categories: customer-stories
date: 2019-01-17 01:00:00 +0000
perex: Central data platform built with Keboola Connection on Snowflake cloud data
  warehouse
user: fenek-pr
coverphoto: ''
coverphoto_slider: "/uploads/heureka.jpg"

---
### **Summary**

**Client**: Heureka is the leading e-commerce shopping platform in Central and Eastern Europe, with millions of products from approximately 50,000 online stores in the Czech Republic and Slovakia. Under the control of Rockaway, a venture capital firm and the owner of Heureka, the group has expanded into Hungary, Romania and Bulgaria, through the acquisition of Arukereso in 2017. It also moved into Slovenia, Croatia, Serbia and Bosnia & Hercegovina, through the acquisition of Ceneje in 2018. As a result, the group now holds market leader positions in 9 CEE countries, and the Heureka management also supervises the whole portfolio.

**Our #datahero:** Michal Buzek, Head of Business Intelligence at Heureka.

**Purpose:** Firstly to make managerial reporting more efficient and coherent; secondly, to scale it and thus consolidate reporting across the regions; and finally, to provide data to the primary clients, the online stores.

**Data Sources:** Multiple databases (mostly MySQL, MongoDB) with archives and external apps with constant rich data flow.

**Delivery:** Central data platform built with Keboola Connection on Snowflake cloud data warehouse.

### **Overview**

**Heureka,** the leading e-commerce shopping platform (sometimes called a “comparison shopping engine”) in Central and Eastern Europe, decided at the beginning of 2017 to set up the Business Intelligence Department. The company’s CEO, Tomáš Braverman, felt that there was much potential in the firm’s data for all the parts of the Heureka business, mostly in the innovations to both products and company website, and to a better service for clients, approximately 50,000 online stores in the Czech Republic and Slovakia.

It was then that **Michal Buzek joined Heureka, with clear first goal: to build a data platform, the basis of all the future data analytics needs.**

In his previous working experience, Michal worked at Seznam.cz (sometimes called Czech Google), the Czech Republic’s biggest search engine, which used Keboola Connection. As the new Head of Business Intelligence, he got in touch with us, one of his first calls. Among the firm’s strategic decisions was the use of Snowflake as its data warehouse solution.

> “_In my previous company, we used Keboola Connection from 2012 and in the following years we went through all the transformation backends, such as MySQL and Redshift. Bearing this experience in mind, I now see Snowflake as by far the best solution. We managed to carry out the transformations in a way that was more straightforward and quicker than in all the other solutions,”_

**The first step in the process was to consolidate reporting.** This involved integrating different data sources into Keboola, cleaning them and building one central source of “truth”. Slowly but surely, managers, product owners and specialists abandoned Excel sheets and switched to GoodData, a viewing and reporting BI tool also available to connect in Keboola Connection. Providing everyone with the same information lead to a cultural change in the company. Suddenly, meetings weren’t about arguing about numbers but rather about action steps.

Since then, the owner of Heureka, venture capital firm Rockaway, expanded its  e-commerce shopping platform group into Hungary, Romania and Bulgaria, through the acquisition of Arukereso in 2017. It also moved into Slovenia, Croatia, Serbia and Bosnia & Herzegovina through the acquisition of Ceneje in 2018. As a result, the group now holds market leader positions in 9 CEE countries, and the Heureka management also supervises the whole portfolio. Such a development brought new challenges as well as opportunities both closely tied to the company’s ability to successfully leverage its data.

For Michal and his four-member BI team, it meant scale the existing solution to other Heureka countries and companies, and bringing their data under one roof ‒ the Keboola Connection.

> “_Every country has its own tools, apps and database structures, not to mention its own processes and habits. And Keboola provided the ideal way to easily consolidate them,_”

First, implementation across the group took place in just weeks, surprising even the most sceptical employees.

Michal’s team’s purpose isn’t about reporting; this work was merely the first step to more advanced data analysis. The **BI team in Heureka serves all employees ‒ most notably the management, product owners and marketing specialists.**

The basic work of the BI team involves providing internal clients with product analysis, relevant customer data and any help with their daily schedule and decision-making. Here, the combination of Keboola, Snowflake and GoodData as a reporting tool was also essential. Now, all the employees all around the region have  access to all the information they need in a few simple clicks.

The longest SQL transformation at Heureka consists of more than 1000 rows which means any changes to the code could potentially cause huge damage to the business. This is also why BI team heavily uses the Keboola Connection sandbox feature.

> “_We love Keboola sandboxes and use them a lot. They provide a great option how to prepare the whole transformation step by step and test it before going to production._” **says Michal Buzek, Head of Business Intelligence at Heureka**

But the management and employees aren’t the only ones benefiting from the newly consolidated data platform. **Heureka decided to use data as a competition advantage and service innovation for its B2B clients.**

> “_We use Keboola Connection also for B2B reporting and data collaboration. We decided to leverage having all the data in the Keboola/Snowflake ecosystem and use it for creating reports for our B2B clients (e-commerce sites and brands/vendors)._”

Every night, the Keboola/Snowflake data engine goes through data of tens of thousands of e-commerce site data and transforms it into a few key reports, which are then sorted, based on the B2B clients’ ID, into a folder structure. It is then sent to the Keboola default storage, Amazon S3. There, it’s available to all the B2B clients to use. The basic service is free and became so popular that Heureka is planning to monetise it through the advanced reporting paid option.

Thanks to all this, Heureka also wants to provide B2B clients with benchmarking, buying trends, and other potentially significant data.
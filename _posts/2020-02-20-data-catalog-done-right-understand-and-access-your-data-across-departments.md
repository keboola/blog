---
layout: post
categories: product
permalink: data-catalog
title: Data Catalog done right - Understand and access your data across departments
perex: With Data Catalog, users get single-click access to whatever data they need
  directly from within their workspaces.
date: 2020-02-20 23:00:00 +0000
user: masha-reutovski
coverphoto: ''
coverphoto_slider: "/uploads/blog1.jpg"

---
_Any organization admin can now in a few clicks publish data from any Keboola project in the organization catalog, and any user gets single-click access to whatever data they need directly from within their workspaces._

The Data Catalog forms one of the pillars of modern data management. Organizations that rely on their data catalogs are able to observe **drastic changes in the quality and speed of data analysis**, as well as higher engagements in data-driven decision making. While those businesses find it easy and enjoyable to work with data, organizations without a Data Catalog are often challenged by a common question - how can we better manage our data?

And, as with other systems, why reinvent the wheel when you can use what’s been developed and tested before? In this case, the Data Catalog.

Before we start exploring the benefits of using a Data Catalog, let’s see what happens without it.

Imagine you are faced with a classical analysis: the impact of product delivery times on your customers’ satisfaction. I mean, Amazon must be doing same-day delivery for a reason. As soon as you start digging, there are a couple of issues here which are unclear:

* You can see the shipping dates in your Orders table, but where do you find delivery dates? A shipped order is not a delivered order, and the time between your company sending out the products and your courier delivering them could be a crucial factor.
* Once you’ve spent a decent amount of time bashing the keys, clicking everywhere and agonizing over their location, you find the delivery dates in the OrderFulfillment table. But here’s the next hurdle. There are multiple columns named “delivery_standard”, “delivery_1”, and “delivery_premium”, and it’s not clear if all of them apply. Better talk to your operational manager to clarify the issues.
* Once you dig deeper, you realize that some of the orders - ones that were shipped ages ago - do not have delivery dates in any of the columns. What? Back to the operational manager, who tells you to look at the “damaged_in_transit” and “canceled” columns to determine whether or not the delivery even happened. All is good because you have your SQL skills to assist you - just a small bump in the road!
* You then want to link your customers’ ratings to their orders. Obviously, you need to filter out only those ratings that happened post-delivery, as this will help you to understand how the satisfaction is connected to the delivery time. But here we go again - it’s unclear which date you should use: “rating_date”, “last_rated”, “rated_by_popup”, etc. Time to talk to the development team so you can understand what all of these mean!

The steps above highlight just a few of the problems that arise when you’re not utilizing Data Catalogs. In a nutshell, these include **lack of confidence in data; time wasted exploring data, digging around and talking to stakeholders (instead of consulting your Data Catalog), and prolonged data production times.**

## The ongoing problems of unmanaged metadata

Let’s draw on the example above and explore how unmanaged data can impact your business. Here’s what you’ll encounter:

1. **No data background.** Who gathered the data? What were the rules when it was gathered? Let’s be honest, you’ve got no idea, right? Not only is there no confidence in the reliability of data, it’s also difficult to use when you don’t know how it was gathered in the first place.
2. **Decreased efficiency.** When innovating on a larger scale, it’s all about the speed of producing new models and testing your assumptions. What better way to do this than through company-level data? Without a Data Catalog, your team wastes time and effort searching for both suitable data and for owners that’ll share access with them.

**Decision making based on interpretations of data.** Let’s say that you’ve managed to find the data you need. Without any extra information, it’s up to you to interpret what’s in front of you. This leads you straight into the depths of dark data and far away from making _data_-driven decisions.

## What is a Data Catalog?

A Data Catalog can save you from all of the above. Before dipping our toes into Keboola’s Data Catalog, let’s first explore what it is.

It offers technical and business metadata management service that empowers everyone within an organization to **quickly discover, manage, and understand all of their data**. It also offers tagging capabilities, search, and access control. So, why does that not excite us on its own?

Installing a stand-alone data catalog product generally means adding **yet another piece to the DIY data architecture puzzle**. Another (in this case large) set of connections to maintain, tags to manually enter, changes within disparate systems to worry about. While that certainly (in many cases) helps manage the chaos, isn’t the right approach to avoid the chaos in the first place? At the same time, many catalog tools tell you “hey, the data you may need is there and there”, but don’t concern themselves with whether the data is accessible to you or not, what is the workflow of gaining such access, and being by definition disconnected from the data itself, may not be aware that the data is no longer there or gone stale.

It’s like shopping from a printed catalog, and having to place your order by phone for whatever you chose, just to find out it’s out of stock. (in many enterprises, replace “phone order” with “support ticket” that goes in a queue somewhere).

## Keboola’s Data Catalog

Keboola’s Data Catalog combines all of the neat features and benefits mentioned so far, as well as something extra. While all of the other Data Catalogs out there enable data searches, Keboola offers the unique advantage of being able to access that data from within the Data Catalog itself.

**Any organization admin can now in a few clicks publish data from any Keboola project in the organization catalog**, **and any user gets single-click access to whatever data they need directly from within their workspaces**.

Data Catalog in Keboola Connection is a fully native FEATURE, not a separate system to implement or another integration project to have meetings about. It also doesn’t just represent the data as a separate layer, it points to the data and allows for single-click access - while, of course, respecting and enforcing granular ALM (Access Level Management). We are taking collaboration on data to a completely new level. Data scientist on a new project? Between the Catalog and Sandboxes in Keboola Connection, all the data needed for the task could be in their Jupyter notebook within minutes, with data lineage and audit trail maintained. So going from the printed off-line catalog to an e-shop experience. With instant delivery.

Imagine it as a modern Yellow Pages - while other Data Catalogs only allow you to browse through information on data, Keboola takes the Yellow Pages and updates them to a Google Business search, where you can immediately call your favorite restaurant and order an instant delivery.

## Keboola’s Multi-Project Architecture

In case you are not familiar with Keboola, we simplify data architecture by providing a single, seamless dataops automation platform that by its very design does away with the majority of problems that plague typical hodge-podge data stacks. Instead of various independent products that are dealing with ETL, automation, data storage, data science plug ins, user management, data lineage etc., Keboola provides “projects” as the units that house the combination of data, processes and people involved with them.

An example could be a CRM data acquisition project, that extracts the data from its source, lands it in Keboola storage, applies transformations that model the data according to the company’s business data model, and publishes data in the catalog, and manages the daily (hourly? 5-minutely?) updates. Another project could be subscribed to (among others) this data, apply prediction of customer behavior and drive email campaigns via a marketing automation tool.

Yet another can use that very data and send it into a BI tool to drive the company’s dashboard. We call this multi-project architecture, and it could look something like this:

![](/uploads/datacat4.PNG)

Obviously, the Data Catalog is the core of the architecture here, not just an additional layer on top of a spaghetti bowl of more or less disjointed systems.

## Step by step guide to Keboola’s Data Catalog

Keboola Connection has had for a long time “bucket sharing” feature that enabled the flow of data between various project, and the newly released Data Catalog adds the search, metadata visibility, and additional access level management tools to aid in easier and better-governed publication and subscription to the data

Let’s take a look at how you can use Data Catalog within Keboola. Once logged in, find _Data Catalog_ located in the navigation bar.

![screenshot of the dashboard](/uploads/Data Catalog.PNG "Access your Data Catalog straight from the home screen.")

You will see a list of data sources. If you’ve only just started, it will be empty (as with the example below), but you can share it with “_+ SHARE A BUCKET_”

![data catalog and share a bucket](/uploads/datacat2-2.PNG)

It is possible to share an existing bucket or create a new one. To keep it simple for now, we’ll share an existing one.

![share an existing bucket](/uploads/datacat5.png)

Afterward, you’ll need to decide which bucket you want to share, and with whom. You can share it with everyone in your company or to members of a specific project.

![how to share a bucket](/uploads/datacat6.png)

Just like that, your data source is waiting in the Data Catalog for other departments to view (as seen below).

![shared bucket in the catalog](/uploads/datacat3.PNG)

## Want to test the awesome power of Data Catalog?

[Give the Catalog a spin](https://www.keboola.com/request-demo) and stay tuned for new features that will further enrich your experience with it - and as always, save you more time that you can use on getting more out of the data.
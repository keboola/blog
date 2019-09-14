---
layout: post
categories: how-to
permalink: how high-performing teams use automation
title: How high-performing teams use automation to focus on work that drives insights
  and revenue
perex: A step-by-step guide to automate your data pipeline and get back time for high
  value work.
date: 2019-09-14 20:30:00 +0000
user: ''
coverphoto: ''
coverphoto_slider: "/uploads/Untitled design-1.png"

---
Picture this: you come to work on a Monday morning and need to review data last minute to prepare for an important meeting. However, instead of being able to quickly refresh the data and cross check numbers one last time, you pull up your massive excel spreadsheet that you painstakingly cobbled together and notice something doesn’t add up. You frantically start cleaning the rows, moving the data around, and praying to the data gods that this is a blip and not a manual error that somehow you spawned.

You are not alone. More than [40 percent](https://www.itweb.co.za/content/j5alr7QlVADvpYQk) of employees say they spend at least a quarter of their week on manual, repetitive tasks.

### Recognize the red flags

How do you know your organization needs automation? Keep an eye out for these red flags:

* Analysts spend more time preparing a report then interpreting it
* Engineers spend more time supporting existing systems instead of building new ones
* You find yourself constantly waiting on fresh data

[High-performing teams](https://engineering.salesforce.com/building-high-performing-teams-2b5505c42c9b) are aware of the repetition toll and are already leveraging automation to get ahead of the game. We will explore the best practices they use in automating data analysis and engineering while pointing out the common pitfalls to avoid.

In this step-by-step guide, we will cover:

1. How to automate reporting
2. How to automate data collection, processing and storing
3. Tools that can help you speed up automation

![](/uploads/mathias-jensen-5x4U6InVXpc-unsplash.jpg)

## Start by automating reporting

A marketing manager wants to understand whether their digital campaigns are driving business results. Sounds simple, right? When breaking down the tasks involved, things actually get quite complicated:

* They start by finding campaigns with the same business goal (let’s say “lead generation”) under different campaign names in each platform (Google Ads, Facebook Ads, Linkedin Ads, Bing Ads, etc.)
* _Next,_ the marketing manager groups the data in each platform to have the relevant metrics at hand (campaign cost, number of views, number of clicks, number of conversions, conversion value, etc.)
* _Afterwards,_ they import the metrics into a Google Spreadsheet where they can link and match different campaigns.
* _And finally,_ they repeat the steps for the various time frames of interest: performance for this week, this month, and this quarter.

It is only after performing all these repetitive steps that the marketing manager can finally get to work, and start analyzing the data.

Though this example is based on marketing, other departments suffer from the same curse of repetition. C-suites look at the same performance reports each week. Sales analyze sell-out and upsell conversion data — finance gauges revenue vs. cash flow streams, HR looks through attendance and performance reports over and over again.

> “There's a lot of automation that can happen that isn't a replacement of humans but of mind-numbing behavior.” - Stewart Butterfield, co-founder of Slack and Flickr

Automating reports is by no means easy, but the process can be broken down into three steps:

1. **Automate data collection**. Manually extracting data from 3rd party apps is unnecessary. It is better to use software, which calls their APIs, to do that work for you. Make sure to choose tools that allow you to create integrations yourself, and don’t lock yourself in with a vendor, who offers limited integrations. You can rely on tools like [Keboola Connection](https://developers.keboola.com/overview/) to integrate 3rd party app data with your infrastructure with ease.
2. **Automate data matching**. You need to match data into sensible units before it can be analyzed. The majority of data matching follows consistent business rules. Have your engineers write reusable SQL or Python scripts to apply those rules to data, or use designated solutions, such as the [Data Health Application](https://blog.keboola.com/what-is-data-health). The application allows you to implement flexible rules, so you are not limited by past architectural choices. Non-technical users with little to no knowledge of SQL can use the apps’ user interface to create basic SQL functionalities through simple inputs.
3. **Choose the right tool for reporting**. The right tool can help you speed up and automate generating reports. Look for tools which allow aggregation (e.g., getting all the marketing campaigns for cart abandonment), filtering (choosing a weekly vs. monthly view on data), and visualizations (bar charts vs. trendlines). For smaller operations, Google Spreadsheet can help you get the job done. For bigger deployments, rely on best-in-class tooling such as Looker.

**A common pitfall to avoid:** **not predicting how the data will be used**. Teams might decide to collect data on a weekly basis until they grow and realize they need to look at daily reports. If you are unsure, default to the smallest granulation possible, and then use automated reports to do the heavy lifting for you.

> “On a quarterly basis, I give important feedback to the stores, and it only takes me about 30 minutes to put together the source materials and information. Before \[using Keboola for automation\], it took me a whole day.” - Jan Langer, Sales Director of Sklizeno

## Automate the data engineering pipeline 

Before data can be analyzed, it must be gathered. Data engineers work diligently to provide quality data via a process called ETL (**E**xtract data from its sources, **T**ransform data into the format needed, **L**oad data into the database).

The ETL process has been the go-to solution for data engineering for over 4 decades. However, there are some common pitfalls to keep in mind.

**ETL pitfall 1: Underestimating long-term maintenance**.

Here are some common long-term costs, which are usually underestimated:

* APIs change and need updates
* Data formats change over time
* The cost of adding new data (in engineering hours and stack amends)
* The time cost of fixing missing data and broken extraction pipelines

**Solution:** There are two possible solutions. Invest in a strong monitoring system, which covers your entire pipeline. When an error occurs, alert your engineers to fix it. This still incurs a cost of engineering hours for fixing issues, but it speeds up response to malfunctioning systems. Alternatively, deploy tooling which can get this done for you. Tools like the [Orchestration API](https://help.keboola.com/tutorial/automate/?_ga=2.105951171.1109925040.1566238082-1872781907.1565156019) can assist you in speeding up the process of deploying changes to your pipeline without having to alter each module separately. The [Data Health App](https://components.keboola.com/components/leochan.datahealth) can be used to validate input and output data to prevent jamming your data pipeline with corrupted, misshaped, or outdated data.

**ETL pitfall 2: Underestimating the demands of transformation**.

Raw data is rarely ready to be analyzed. First, it needs to be transformed into the correct format and matched across different data sources.

These are some of the common challenges organizations tend to overlook:

* Updating current values to match new data sources
* Enforcing data consistency (time zone differences, normalization of data across different standards)
* Matching data across different 3rd party apps
* Reshaping data (aggregating values through time or other grouping factors)

**Solution:** While the majority of ETL systems come with some out of the box functionalities that help data transformations and cleaning, make sure to have an abstraction for the regular business rules of how your data should look like. We recommend using solutions like the [Transformation API](https://help.keboola.com/manipulation/transformations/?_ga=2.70373200.1109925040.1566238082-1872781907.1565156019), which covers the majority of use-cases out of the box. Additional benefit? The Transformation API is versioned, so you can easily roll-back and stop worrying about manually backing up or documenting transformation when tinkering with data.

**ETL pitfall 3: Underestimating scaling issues**.

As companies grow and scale their infrastructure often lags. By the time they realize the extent of their technical debt, the cost of scaling has already been incurred.

Scaling accumulates technical depth in more areas:

* The ETL architecture is too tightly coupled to allow for flexible updates to just some parts
* Databases are not optimized for the type or quantity of incoming data
* The extraction and transformation procedures are outdated for the current demands

**Solution:** Build your stack modularly, so each module can adapt to changes independently. Are you already locked into a suboptimal software solution? Decouple it. Scalability and growth were one of the main reasons why we decided to use a [modular architecture broken down into APIs](https://developers.keboola.com/overview/api/) for Keboola Connect.

## The build vs buy dilemma

Every company faces this dilemma: should you build the system yourself or buy one of the best solutions? Both have pros and cons that require careful consideration.

Building incurs smaller initial costs at the expense of slower growth. Buying has a slightly higher initial investment, but speeds up your growth, while also freeing up engineering and analyst hours for more revenue-driving work. Additionally, opting to buy the right tool also gives you enterprise security compliance. With Keboola, you don’t need to worry about the additional work surrounding data security as you grow.

If you are considering automation, Keboola is the full-stack platform that you need to help you get a leg up. [Hop on a call and let’s discuss your options](https://www.keboola.com/request-demo).
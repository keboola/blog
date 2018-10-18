---
title: Stop being an Excel slave
layout: post
categories: product
date: 2018-10-14 14:37:23 +0000
perex: Evaluate attribution and online campaigns the easy way
user: pavel-dolezal
coverphoto: "/uploads/excelSlaveCover.jpg"
coverphoto_slider: "/uploads/excelSlave.jpg"

---
All marketers have to deal with essentially the same problem when managing their online campaigns and looking for the right attribution model: the data they need for evaluation is scattered across various systems, and collecting and collating it takes too much time. If they decide to use solutions intended to help them to handle this problem, they often find such solutions are not, in themselves, enough. Developing their own tool, on the other hand, is too expensive and out of their skill set. At Keboola we can’t stand intractable problems, we have worked with some of our clients to find an easier way to do so. We use Keboola Connection for that, combined with other BI software, we can configure simple and reliable reports for online campaigns, as well as for attribution model evaluations. Implementation takes less than a week, and within days marketing consultants will forget about the way they used to slave themselves at the altar of Excel.

The comprehensive monitoring and evaluation of performance campaigns is a job – and often a nightmare – for all marketing agencies or internal marketing teams. If someone wants this data, just try offering them figures for the last week. How much can this data, in real time, help to boost channels that are working and prevent investment where no money is being generated? And yet that is precisely the data they receive. Most online campaign evaluations are conducted on a weekly basis because the old way takes a lot of time: on Monday, an employee sits down at the computer, pulls all metrics from all systems for the client showing what has been clicked and how, how much it cost, what conversions have been made, and so on.  They chuck this data into Excel, add targets and budgets, format everything and send it to the client. Several hours of work, repeated week in, week out. An analyst doing this every day would likely go mad. It’s a mundane job. Moreover, it is time-consuming and let's face the truth, not the most cost-efficient way of reporting!

However, what we find interesting about this work is that most marketers track three basic metrics:

* Campaign systems (AdWords, Sklik, Facebook Ads, ...)
* Campaign budgets
* Established business goals that are to be reached (conversions, order counts, turnover, and profits)

It looks simple. The problem, however, is that this data is never all in one place. It is strewn across different systems. Just finding and modifying it so that the data can be correlated consumes too much time (and hence money).

And, of course, an assignment like this is just like tailored specifically for us at Keboola: How can we interlink all data from different locations without the solution being too sophisticated or complex for marketing consultants? And how can we keep data as up-to-date as possible in order to help manage the cost of online campaigns well and to show just how great a business benefit the campaigns are having?

Our solution (tested and developed for one client and deployed at others) involves five basic steps:

1. Get data from campaign systems.
2. Unify and clean the data so that it is clear that it encompasses a single campaign run on different channels/systems.
3. Interlink statistics with plans, budgets, and companies in CRM, which is the basis for BI solutions (we used GoodData), and create a simple spreadsheet.
4. Interlink campaign system statistics with the campaign spreadsheet.
5. And we’re done: interlinking allows you to keep track of updated data every day - congratulations you have made a first step to automation.

Let’s take a more detailed look. Obtaining data from basic, commonly used systems for Keboola Connection was simple. However, the only thing that AdWords, Sklik, and Facebook Ads have in common after the data has been downloaded is the interaction date. So how can we know that we have data for a single campaign being run in various different places? This is why we added an internal campaign ID to the campaign name. Once this change is introduced, the name may look something like “Springfield Power Plant – The Sun Is Our Friend | id_00001”.

When you have identified which interactions result from which campaign, you need to interlink the statistics with plans, budgets, and companies in the CRM (which was the basis for the entire BI solution – in this case GoodData). A simple spreadsheet in Google Spreadsheets that looks like this, for example, is enough:

_Campaign mapping table_

Each row in the spreadsheet describes simply who the company is, what its CRM ID is, what the common campaign name is, what the campaign ID is for interlinking with the various systems, the campaign dates, and what the budgets and targets are in that period. As statistics from campaign systems are accessible on a day-by-day basis, the SQL transition allows you to distribute targets and the budget into individual days.

The Campaign_ID and date can then be interlinked and be used to create a pairing key with ease. All statistics from ad systems (Adwords, Sklik, and Facebook) could be interlinked with the campaign spreadsheet (created from the preview above). With this interlinking, it is possible to track updated data every day, as we approach, for example, the number of planned clicks during the campaign (or multiple campaigns and clients at a time – depending on the filters selected).

_Progress in the click target_

This solution described here enables your team to analyse data, to respond flexibly, and to tweak campaigns so that they are more effective. When a dashboard is set up properly, marketers can:

* track current campaign performance;
* plan changes based on fluctuations;
* adjust investments according to the remaining budget;
* check whether a campaign is running;
* respond in a timely manner to undervalued campaigns that are falling short of targets relative to the time remaining;
* export the dashboard to PDF and send it to the stakeholder or a client (or share it directly in GoodData) with a couple of clicks.

Sure, a better campaigning tool than a spreadsheet can be thought up and programmed (something that would eliminate manual mistakes), but even simple solutions have a certain magic – in this case, the main advantage is that **there are no development costs**.

When we last implemented a solution like this, it took less than a week. Once you have set everything up, simply add a few rows to the spreadsheet you need, or enable downloads of data on other customers, and everything will automatically be displayed in GoodData.

There are also other solutions, both cheaper and more expensive (Tableau, PowerBI, Qlik Sense, Looker, ...) and it is purely up to you where you want to display and analyse your data. The important thing is that you can get rid of Excel and have a solution that will make you enjoy working with it. At the same time it will allow you to be more time-efficient and find value in your data much faster.
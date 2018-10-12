---
title: Another year passed
layout: post
categories: product
date: 2018-10-11 00:00:00 +0000
perex: 'Petr at Keboola celebrating 5 years of partnership with GoodData, listing
  the highlights of this collaboration together with the latest news within the company. '
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: ''

---
## Another year passed by

by [Petr Šimeček](http://blog.keboola.com/author/4010)

Yesterday my GoodData account turned 5 years old!

It is one in the morning and the delivery service calls my phone; surprise! We’ve got champagne for you. It was from my colleagues. I’m alone and sick with the flu in bed, but I almost shed a tear.

Every single day for the last 12 months I looked forward to going to work. And the main reason is the people at Keboola. Thank you guys, without you I would probably just sit at the cash register at TESCO and… well, whatever.

![](https://lh6.googleusercontent.com/sm6-dZpSWkXSXCWiIhUUcfrlyd1zevVHhgXFodqIfMfrPcQWR_8hXEllPwa2U-6lGJeAMwkj5NvvrazTGreUxXsXapsL33e-CIg1hY2mRgHN-_wngeqnTL53HHRTvlrgypmus_z6 =444x600)

This seems like a good moment to look back at the last 12 months. This is not in any particular order - and not a complete list, either:

* We adjusted our positioning. From “_just selling and implementing_” GoodData, we moved to data enablement and actually started to talk with everyone who might have a need to analyse data. You have the data, we will help you integrate it and get it “_consumption ready_”. If anyone wants to use [highcharts.com](http://www.highcharts.com/) they are more than welcome - we are here for our clients and “_the tool_” for our clients’ internal analytics guys to use. We also built several non-analytics applications, where the purpose is to deliver quality data into other companies’ products and platforms.
* Our Keboola Connection ecosystem is growing rapidly. We are adding more and more new ways to push your data for analytics and data discovery. Along with GoodData, we support today [Tableau](http://www.tableausoftware.com/), [Chartio](http://chartio.com/) and are planning support for [Birst](http://www.birst.com/), [RJMetrics](http://rjmetrics.com/) and [Anaplan](https://www.anaplan.com/). I would love to have support for [SAS](http://www.sas.com/en_us/software/business-intelligence/visual-analytics.html) soon as well. If you have a tool that can extract the data from DB, CSV from your hard drive or from a URL, you can have the data from us today.
* In total silence we have launched our “_Apps Store_”. The main part of it is our still very juvenile app LuckyGuess and transformations templates which automate many daily routine type tasks. Our goal is to support any app that really helps our users/analytics by providing some added value. It automatically analyzes data or automates processes with the data. If you can deliver such an app in [Docker](https://www.docker.com/), we offer the best place to monetise it -- we have the computing power and clients have their data with us already… Our LuckyGuess app is primarily written in R and it does very basic, yet fundamental things like detect relations between tables, lets you know the data types, detects dependencies (regressions) between the columns (“_tell me which expenses bring the most customers_") or it can detect purchasing patterns and let you know when to go to talk to a particular customer because he is most likely to buy. We are working on other apps, our own as well as partners driven!

![](https://lh5.googleusercontent.com/S_ICnzTmrLVCcf3FacakcPgtHWzyxWQe3J2rBwqQ7L-rvHg3mjd1HkcFESepB5F1H-TL3H7WnB4leAeT3R2BQbULXncilR65DzGDIlUmz3n_X3SN2wO7NSa_nGvm8iqPM0Y8t2eJ =624x133)

* Marc Raiser is back. A few years ago he received an offer that he couldn’t refuse - working with [Fujitsu Mission Critical Systems Ltd.](http://jp.fujitsu.com/group/fmcs/services/bigdata/ebda.html) (managing data from large machines and building AI on top of that). At the time we joked that Japan would be just an apprenticeship program for him and that he would be back soon. And voila, he is back working with us again, for now on development of LuckyGuess!
* The rebuilding of our platform into async mode is nearly finished. It will give us unlimited horizontal scalability.
* [Martin Karásek](https://dribbble.com/karimartin) developed a new [design of our UI](https://dribbble.com/shots/1798720-Keboola-Connection-UI). No longer bare [Bootstrap](http://getbootstrap.com/)! While implementing the new design we also redesigned our whole approach to technical implementation of UI, and today everything will be an [SPA application](http://en.wikipedia.org/wiki/Single-page_application), on top of our APIs. Any partner of ours can skin it as he wishes and run it from his own servers if he has a need for that. Sneak peek of the Transformations UI:

![](https://lh3.googleusercontent.com/aH59ftiYuxwL_DjsJP6zT9MT7UenTlunPqsrzkhjGm8FZNvidyYJ6Eumqv4OZRh4DXtjeIWV9o_8sZ5qam_KuUzH-Ldt5fNGJyHtpte1lM8riMT2XpWEDstxdwVsJSHyf8xEyLn_ =624x527)

* We organised our first [Enterprise Data Hackathon](https://www.youtube.com/watch?v=G5VOhTHF11Y)
* We reorganized the company into two verticals - product and services. Our Keboola Connection team actually doesn’t have any direct clients any more. Everything is done through partners. Currently we have 7 partners. Our definition of a partner is any other entity which has a data business of their own and uses a tech stack from us to support their business. In just the last month we were approached by 4 more companies.
* We now have a third partner in Keboola. So it’s me, Milan and Pavel Doležal. Pavel spends most of his time with our partners making sure they get all the right tools and support they need for their work and is leading the development of our partner network.
* [Vojta Roček](https://www.linkedin.com/in/vojtarocek) left us and went his own "_BI_” way. Today he is in a new ecommerce holding [Rockaway](http://www.rockawaycapital.com/) and he is leading people down the data-driven business development path. Keboola Connection adoption within Rockaway is growing every day.
* Our extractor-framework - the environment where third parties can write their own extractors - is done and ready to use. Today it takes us ½ a day to connect to a new API.
* We are finishing the app that can read [Apiary Blueprint](http://apiblueprint.org/) and by doing so we shall be able to read data from any API that has its documentation in Apiary.io with minimum development.
* Working on “_schemas_” - the possibility to use standardized nomenclature for naming and describing the data. Think of it as a "data ontology". It will allow for creation of smarter Apps, as they will be able to understand the meaning of the data.
* Just launched TAGs - it is like a form of dialogue between you and us about the data. It is enough for us if you just tag the column "_location_” and we will promptly serve you weather data for every address in the column. If you label a column as “_currency_” then right away you have the up to date currency exchange rates, etc.
* We are still 25 people and growing without a need to add too many more.
* [Zendesk](https://www.zendesk.com/) launched [online courses](https://support.zendesk.com/hc/en-us/articles/203736886-Zen-U-Training-Courses) for [Zendesk Insights](https://www.zendesk.com/zendesk-insights) within our own [Keboola Academy](https://academy.keboola.com/). We trained hundreds of people how to use GoodData.
* Our “_Team Canada_” has moved into [new offices](https://plus.google.com/photos/+Petr%C5%A0ime%C4%8Dek_Keboola/albums/6084660787545055249/6084660794570266034?authkey=CJ_TqIiw4ZiFJg&pid=6084660794570266034&oid=%2BPetr%C5%A0ime%C4%8Dek_Keboola).
* We publish many components as open source. If it makes sense, we want to provide it for you for free. Our [JSON2CSV](http://json-parser.keboola.com/) convertor is a first sign of this trend. The dream would be to run the most used extractors for free as well.

So that's where we are, what we've been doing and where we're going, exciting times! 

Now, to take my medicine...
---
title: What is data health and why it is critical for your business
layout: post
categories: product
date: 2017-09-20 11:27:11 +0000
perex: Check your data health. Why it is essential for great reports and better predictions?
  Clean data is particularly crucial for CRM, ERP, sales and IT systems with customer
  data.
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: "/uploads/datahealth.jpg"

---
The basics of a great data insight or data visualization is a combination of good, clean data into a single solution architecture. Whether the goal is understanding lifetime value, designing up-sell and cross-sell strategies, defining personas, or developing sophisticated data models, having clean and consolidated data to match the speed of business moments will empowers your team with better analytics, improved marketing campaigns performance and maximised marketing ROI.

Clean data is particularly crucial for CRM, ERP, sales and IT systems with customer data. Having a proper planning and cleansing of your customer data from the beginning will keep you from falling behind on your CRM implementation. Your data needs to be reviewed, filtered and cleaned to ensure that bogus data is not transferred. The cost to the business of processing errors can be evaluated from the time spent on manual troubleshooting, forced ETL re-runs and at worst, representing incorrect or invalid data to the customers or employees to drive their business decisions.

> _How do you ensure your data is not wrong or incomplete when you digest it from various third-party sources, especially sources like FTP and AWS S3 which (unlike an API) do not have given structure all the time?_
>
> _How do you successfully migrate data from an old system to new one?_
>
> _Let us help you check your Data Health._

[_Get in touch_](mailto:info@keboola.com)

It is safe to say that the majority of data flows have set of expected data types defined and very often the value range as well.

_The solution?_

A way of getting around this is to use SQL or Python transformations but such hard coded configuration or approach can be very time-consuming and it is lacking of the flexibility or simplicity to be reused. Additionally, it would not be obvious which rows and columns include rogue values until these transformations run into an error (or you would have to design a specific workflow to off-load them.)

Another option for you to consider is to describe the data and set up value and type conditions for it in the form of rules. Once that’s done, all you need to do is make sure data flows include rules that check every time you run the orchestration (ETL process). Given its importance, having something at hand like [Data Health App](https://components.keboola.com/components/leochan.datahealth) within Keboola has been designed to help you automate this data check process.

> Typical use cases:
>
> * Ensuring data quality from systems with data collected by users (internal IT systems, CRM, user forms, etc.)
> * Migrating data from legacy systems - data migration assumptions vs. reality check
> * Validating crucial fields for report buildup
> * Validating location data (store locations and customer locations) to drive contextual marketing ([How healthy is your location data?](https://searchenginewatch.com/sew/how-to/2439015/how-healthy-is-your-location-data))

Are any of the use cases from the above applying to your company? Test the Data Health Application by getting [in touch with us](mailto:info@keboola.com).

#### Keboola Data Health Application

While you can use the above mentioned solutions, having an app that does this for you can give back precious time to your team. [Data Health Application](https://components.keboola.com/components/leochan.datahealth) is an app designed to aid users to produce a clean data file. To boost user productivity, it provides users a simple and convenient solution to cleanse or filter data instead of creating multiple long queries in transformation to obtain the same results. Some primary features include:

* Filtering data based on user configured rules to match business needs
* Can be triggered to run on a scheduled basis
* Generate a report with descriptions and reasons why rows are rejected

For **users with little to no knowledge in SQL**, this application is capable of creating basic SQL functionalities through simple user interface inputs. The application does not have any pre-configured rules. It allows users to have **the freedom to create rules** tailored to their needs and wants. With the combination of Keboola Connection orchestration (automation), this application can be triggered on a daily/weekly basis depending on your business requirements. With that being said, users will have an automated progress that **generates “clean” data** to conduct any in-depth analysis without worrying about handling corrupted data or outliers.

Supported Rules:

1. List Comparison
2. Digit Count
3. Numeric Comparison (Value comparison)
4. Regular Expression (Regex)
5. Column Type (Applicable value type)

_Example:_

Input Table:

![](/uploads/datahealth1.jpg)

_Rules:_

* User wants anything within the “Western Europe” Region
* User is only interested in countries placed within the top 10 happiness rank
* Happiness score cannot be empty

_Output table:_

![](/uploads/datahealth2.jpg)

If you’re already a Keboola user you can find the Data Health app alongside [the rest of our data applications](https://components.keboola.com/components). Not yet a user and want to learn more? [Contact us](https://www.keboola.com/contact) and let's check your data health!
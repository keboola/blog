---
title: Snowflake vs. Redshift backend speed comparison
layout: post
categories: nerds
date: 2016-09-19 14:06:15 +0000
perex: At the same time as the announcement about default backend in KBC being shifted
  to Snowflake, I have started working on a new project. The customer pushed us the
  initial dump of two main tables (10M rows each) and some other small attribute tables.
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: ''
permalink: snowflake-vs-redshift-backend-speed-comparison

---
## Intro

At the same time as the [announcement](http://blog.keboola.com/new-dose-of-steroids-in-the-keboola-backend) about default backend in KBC being shifted to Snowflake, I have started working on a new project. The customer pushed us the initial dump of two main tables (10M rows each) and some other small attribute tables.

![](/uploads/snowflake1.jpg)

The main transformation handles initial join of one of the big table and a handful of small ones...

![](/uploads/snowflake2.jpg)

... and then it is meshed with the other big table, on which we have to calculate duration...

![](/uploads/snowflake4.jpg)

... and apply multiple cases

![](/uploads/snowflake3.jpg)

Originally, I had the complete transformations done in MySQL since I've used that transformation for data exploration on a small sample of data. However, when trying on the whole set, I had to kill the transformation after 36 minutes of running and not delivering a single output table...

### Speed comparison

Since MySQL was not an option, I have tested and compared both Redshift and new Snowflake transformations. It took almost 20 minutes for Redshift to cope with this transformation. In contrast, it took only 5 minutes for Snowflake!

Furthermore, I have explored (thanks Marcus) the difference between _CREATE TABLE_  and _CREATE VIEW_ :  There is a subtle difference between those, it will actually shave off some time to use _CREATE VIEW_ (the difference is between 7-10%).

### Overview

![](/uploads/snowflake5.jpg)

### Screenshots

**Redshift**

![](/uploads/snowflake6.jpg)

**Snowflake**

![](/uploads/snowflake7.jpg)

## Notes

The purpose of this exercise was to evaluate the speed from the KBC user perspective. In other words, I have compared the whole transformation completion time -  both table data load and the query time. This represents the full user experience on the respective storage and transformation back-ends.
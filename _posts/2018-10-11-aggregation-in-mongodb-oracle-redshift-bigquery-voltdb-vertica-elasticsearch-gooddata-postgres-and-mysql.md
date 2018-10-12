---
title: Aggregation in MongoDB, Oracle, Redshift, BigQuery, VoltDB, Vertica, Elasticsearch,
  GoodData, Postgres and MySQL
layout: post
categories: nerds
date: 2018-10-11 00:00:00 +0000
perex: ''
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: ''

---
## Aggregation in MongoDB, Oracle, Redshift, BigQuery, VoltDB, Vertica, Elasticsearch, GoodData, Postgres and MySQL

by [Petr Šimeček](http://blog.keboola.com/author/4010)

# "Executive Summary"

It kinda got out of my hands. It exploded...

I’ve been trying to describe how to do the same procedure within different systems. In the end, I tried to do the same using GoodData and Keboola Connection, and I have attached a screenshot (see below). I know it’s more high-level than just the database, but I believe it shows the beauty and speed of the tool.

Summary table:

![](https://lh6.googleusercontent.com/OeIXzZCmFqnkjMFAvwfBXEkIvCZefgtA9lFhOkmeYoyjb514l0ho21n04QKLZwv2eSMRgaYfAD0dtQOkEaxTGdukFqbfkYlkj3tfJPou9OeNRd3Gl6DVjQlyOQwd8YsuV7HjhZhX =624x252)

### Intro

At the end of last year I found this [blogpost](http://www.javacodegeeks.com/2013/12/mongodb-lightning-fast-aggregation-challenged-with-oracle.html): "MongoDB 'Lightning Fast Aggregation' Challenged with Oracle.” Lukas Eder did the same aggregation, using Oracle, as Vlad Mihalcea had done a week earlier [with MongoDB](http://vladmihalcea.com/2013/12/19/mongodb-facts-lightning-speed-aggregation/).

Lukas Edler gave me the source data — 50,000,000 lines of events with time and value:

created_on,value

2012-05-02T06:08:47Z,0.9270193106494844

2012-09-06T22:40:25Z,0.005334891844540834

2012-06-15T05:58:22Z,0.05611344985663891

2012-01-05T20:47:19Z,0.2171613881364465

2012-02-10T00:35:17Z,0.4581454689614475

2012-06-19T17:46:41Z,0.9841521594207734

2012-08-20T21:42:19Z,0.3296361684333533

2012-02-24T20:29:17Z,0.9760254160501063

Below, you’ll find 10,000 lines to get you started, as well as the whole data set. Both have headers, are without enclosures and use commas as delimiter-separated values (until mid-September you can download from my S3; then it will go to Glacier):

* 10k rows sample (400kB): [https://s3.amazonaws.com/padak-share/randomData10.csv](https://s3.amazonaws.com/padak-share/randomData10.csv "https://s3.amazonaws.com/padak-share/randomData10.csv")
* 50M rows sample (1.9GB): [https://s3.amazonaws.com/padak-share/randomData.csv](https://s3.amazonaws.com/padak-share/randomData.csv "https://s3.amazonaws.com/padak-share/randomData.csv")
  * 50M gzip verze (770MB): [https://s3.amazonaws.com/padak-share/randomData.csv.gz](https://s3.amazonaws.com/padak-share/randomData.csv.gz "https://s3.amazonaws.com/padak-share/randomData.csv.gz")

Two tests are being done:

* **Test A** - perform the aggregation in years, and days within the year, where the number of entries, the daily average value and the maximum value are recorded
* **Test B** - exactly the same as Test A, but  with an hour filter applied

I’ve tried to replicate the conditions as much as possible, using Amazon Redshift, Google BigQuery, VoltDB, HP Vertica, Elasticsearch, GoodData, Postgres and MySQL. The purpose is not really to find who is the fastest; that’s why I don’t rely on having exactly the same conditions.  To be exact, Google BigQuery is “unknown hw” so it wouldn’t be possible anyway. I’m more interested in how difficult — and how easy — it is to get the same result when using these different platforms. I have tasked Redshift with doing 10x the same - 500.000.000 lines, but these are 10x repetitions of the same data set. In the GoodData example I’ve added some complications, so you can see how easy it is to work with. 

And here are the results: 

### MongoDB

(for details se Vlada’s blog — link above)

Test A: **129s**

Test B: **0.2s**

### Oracle

(for details see Lukas’s blog — link above)

Test A: **32s**

Test B: **20s** first run, **0.5s** second run

### Redshift

I’ve uploaded the data to Redshift from S3. I had to do these steps before running the test:

1. create a table
2. import the data
3. the system couldn’t recognise the time format ISO8601, so I had to alternate the table
   1. add a column for timestamp
   2. set it up according to time stamp in the original data source
   3. delete the original column with date
4. I have added SortKey, and did the ANALYZE and VACUUM commands
5. 

([here](https://s3.amazonaws.com/padak-share/blog/redshift.sql) you’ll find the exact list of SQL queries and times)

### Test A

Exact query used:

SELECT

 	EXTRACT(YEAR FROM created_at),

 	EXTRACT(dayofyear FROM created_at),

 	COUNT(*),

 	AVG(value),

 	MIN(value),

 	MAX(value)

FROM RandomData

GROUP BY

 	EXTRACT(YEAR FROM created_at),

 	EXTRACT(dayofyear FROM created_at)

ORDER BY

 	EXTRACT(YEAR FROM created_at),

 	EXTRACT(dayofyear FROM created_at);

Redshift dw1.xlarge (**15s**)

Redshift dw2.large (**7s**)

500\.000.000 lines version:

Redshift dw1.xlarge (**182s**)

Redshift dw2.large (**53s**)

### Output

![](https://lh5.googleusercontent.com/4GyK1ilA7K8KLKlqjddImqT0YdoIuMf2gRZWs4Vd9G80Yads4_azNsIh1Ew9uF3hlY0XtWQjlN7JOj_nvPmXHhSwt63ZFg4gcUxBDf_hjcMhRKUtss6V8BBXGQAqgP2uhbSx1FDm =580x214)

### Test B

Used query:

SELECT

 	EXTRACT(YEAR FROM created_at),

 	EXTRACT(DAYOFYEAR FROM created_at),

 	EXTRACT(HOUR FROM created_at),

 	COUNT(*),

 	AVG(value),

 	MIN(value),

 	MAX(value)

FROM RandomData

WHERE

 	created_at BETWEEN

 	TIMESTAMP '2012-07-16 00:00:00'

 	AND

 	TIMESTAMP '2012-07-16 01:00:00'

GROUP BY

 	EXTRACT(YEAR FROM created_at),

 	EXTRACT(dayofyear FROM created_at),

 	EXTRACT(HOUR FROM created_at)

ORDER BY

 	EXTRACT(YEAR FROM created_at),

 	EXTRACT(dayofyear FROM created_at),

 	EXTRACT(HOUR FROM created_at);

Redshift dw1.xlarge (**1.3s**)(first run)

Redshift dw1.xlarge (**0.27s**)(second run)

500\.000.000 lines version:

Redshift dw1.xlarge (**46s**)(first run)

Redshift dw1.xlarge (**0.61s**)(second run)

### Output:

And the query plan, for those who love it :)

**◀** **1** of **2** **▶**

**![](https://lh5.googleusercontent.com/2BAOtcDi6i6rMxGJKbQWrZtdJKArAQEhkXduL9opYDXQzymn5-X-hjd-E3MA9DGmh_AzJ_qm9ZK3M64PlCM7I0qBBpgqGNmVWRvGZjv3o7AIwiZHD1GuwkTpIT4Q8euREMHrOg4z =51x51)**[ ![](https://lh5.googleusercontent.com/5BMWHPE3r6UBn-L7KFVU520Jlp4EFbp-O5ysOujCayElKMq1WmH_KtZ9_AwgmLmRQmGK3ENyodRIZg4JQAGvbM7-6HE_QSgLD6_AW2wPmRgdW85pycJAVAPmevy-oJUImr4_Z7ZD =51x51)](http://blog.keboola.com/aggregation-in-mongodb-oracle-redshift-bigquery-voltdb-vertica-elasticsearch-gooddata-postgres-and-mysql#)

[![](https://lh5.googleusercontent.com/2laKIlVgy_h28luqv7FOp-EKTH5Jys_aZklAXNjsyg_-FVepNy09RbeXPerNfC2Q3UBr3KGpt1MOxkcAP6swmDbM9D-tKABDuwB4M7Tza9vXLK8wH_5j5wnL58Pf7ITauJR3CQEF =600x165)](http://blog.keboola.com/aggregation-in-mongodb-oracle-redshift-bigquery-voltdb-vertica-elasticsearch-gooddata-postgres-and-mysql#)

### Google BigQuery:

You can communicate with BigQuery using REST API  or web interface. I’ve used the client inside the console running on the server. I had to download sample data onto my drive. 

Necessary steps before the actual query:

1. Create a project via [https://console.developers.google.com/](https://console.developers.google.com/ "https://console.developers.google.com/") and under API&auth authorize BigQuery (credit card has to be inserted)
2. Create a “project” in BigQuery
3. Import the data (this took a while, although I didn’t record the exact time)

You can’t really tweak BigQuery too much. There are no indexes, keys, etc.

Project set up from console:

./bq mk rad.randomData

**--0s**

Data import:

./bq load --noallow_quoted_newlines --max_bad_records 500 --skip_leading_rows=1 rad.randomData ./randomData.csv created_on:timestamp,value

**-- \~1500s** (pity I haven't exact time)

### Test A

The query:

SELECT

  YEAR(created_on) AS Year,

  DAYOFYEAR(created_on) AS DayOfYear,

  COUNT(*) AS Count,

  AVG(value) AS Avg,

  MIN(value) AS Min,

  MAX(value) AS Max

FROM \[rad.randomData\]

GROUP BY

  Year, DayOfYear

ORDER BY

  Year, DayOfYear;

**-- 7s (1.3GB)**

### Test B

The query:

SELECT

  YEAR(created_on) AS Year,

  DAYOFYEAR(created_on) AS DayOfYear,

  HOUR(created_on) AS Hour,

  COUNT(*) AS Count,

  AVG(value) AS Avg,

  MIN(value) AS Min,

  MAX(value) AS Max

FROM \[rad.randomData\]

WHERE created_on >= '2012-07-16 00:00:00' AND created_on <= '2012-07-16 01:00:00'

GROUP BY

  Year, DayOfYear, Hour

ORDER BY

  Year, DayOfYear, Hour;

**-- 2.9s / 1.6s (cached)**

### VoltDB

I stumbled upon this database by chance (Q4/2013). They make [lots of claims](http://voltdb.com/products/key-features/), but I was surprised to find you can’t even extract the day of year from the time stamp; you’ve got to make a pre-processing and prepare the data for it. 

My “tour” of the VoltDB ended with me calling their support where VoltDB Solution Engineer named [Dheeraj Remella](https://www.linkedin.com/in/dremella) tried to help me (he was excellent!) and promised he would do the test for me. The actual email exchange took quite a while. 

Meanwhile, they managed to release version 4.0, which includes EXTRACT() function. Results follow:

Data import:

Read 50000001 rows from file and successfully inserted 50.000.000 rows (final)

Elapsed time: **1735.586 seconds**

### Test A:

SELECT

 	EXTRACT(YEAR FROM create_on_ts) AS Year,

 	EXTRACT(DAY_OF_YEAR FROM create_on_ts) AS DayOfYear,

 	COUNT(*) as groupCount,

 	SUM(value) as totalValue,

 	MIN(value) as minimumValue,

 	MAX(value) as maximumValue

FROM RandomData

GROUP BY

 	EXTRACT(YEAR FROM create_on_ts),

 	EXTRACT(DAY_OF_YEAR FROM create_on_ts);

**-- 70ms**

### Test B:

\-- 330 ms

Times are great!  Starting to find out if he didn’t pre-cached Year, Day, Hour...

UPDATE: Yes, in his test DB, he pre-computed date attributes. Here is his DDL: [https://s3.amazonaws.com/padak-share/blog/voltdb-ddl.sql](https://s3.amazonaws.com/padak-share/blog/voltdb-ddl.sql "https://s3.amazonaws.com/padak-share/blog/voltdb-ddl.sql")

The hardware used: MacBook Pro (Intel i5 2.5 GHz processor - 2 cores, Memory 16 GB).

VoltDB looks very interesting. I was just little bit curious that, for instance, you set up a database by using binary client in terminal, and it runs some things in Java code:

voltdb compile -o random.jar random.sql

voltdb create catalog random.jar

csvloader randomdata -f randomData10.csv --skip 1

It’s not my cup of tea for now, but I will be watching — in time it might be cool!

### HP Vertica

When [Jan Císař](https://www.linkedin.com/in/jancisar) ran this test for me, Vertica was quite a challenge. It’s changed dramatically since then, and is now quite a nice tool.

Preparations:

SET TIMEZONE 'UTC';

CREATE TABLE RandomData_T (

     created_on TIMESTAMP,

     value DECIMAL(22,20)

);

COPY RandomData_T from '/tmp/randomData.csv' delimiter ',' null as '' enclosed by '"' exceptions '/tmp/load.err';

Time: First fetch (1 row): **121s**. All rows formatted: 121s

\#warming up ... :)

SELECT * FROM RandomData_T LIMIT 10;

### Test A

SELECT

     EXTRACT(YEAR FROM created_on),

     EXTRACT(doy FROM created_on),

     COUNT(*),

     AVG(value),

     MIN(value),

     MAX(value)

FROM RandomData_T

GROUP BY

     EXTRACT(YEAR FROM created_on),

     EXTRACT(doy FROM created_on)

ORDER BY

     EXTRACT(YEAR FROM created_on),

     EXTRACT(doy FROM created_on);

\--  Time: First fetch (366 rows): **2068ms**

### Test B

SELECT

     EXTRACT(YEAR FROM created_on),

     EXTRACT(doy FROM created_on),

     EXTRACT(HOUR FROM created_on),

     COUNT(*),

     AVG(value),

     MIN(value),

     MAX(value)

FROM RandomData_T

WHERE

     created_on BETWEEN

     TIMESTAMP '2012-07-16 00:00:00'

     AND

     TIMESTAMP '2012-07-16 01:00:00'

GROUP BY

     EXTRACT(YEAR FROM created_on),

     EXTRACT(doy FROM created_on),

     EXTRACT(HOUR FROM created_on)

ORDER BY

     EXTRACT(YEAR FROM created_on),

     EXTRACT(doy FROM created_on),

     EXTRACT(HOUR FROM created_on);

\--   Time: First fetch (2 rows): **26ms**

Jan used AWS instance type 4xlarge, approximately 30GB of RAM, SSD disks and 4x Intel Xeon E5-2680

### Elasticsearch

Around New Year I put a teaser about these tests on my Facebook, and [Karel Minarik](http://cz.linkedin.com/in/karelminarik) called me to say he would do this test in ElasticSearch. I was very excited, and here is the result. Executive Summary — it’s fast as hell! It’s quite complicated to get to the point when you can actually query, and it takes a while to import.  For me it is actually too difficult to achieve it thanks to lots of Ruby code. 

Karmi's results are [here](http://goo.gl/A3j1Up).

Pure aggregation: **16.3s**

Aggregation + filter: **10ms**

### GoodData

Sure, it does not try to tackle the milliseconds differences, but there is no match for its ease-of-use when producing results.

I uploaded data from S3 into Keboola Connection (about as difficult as sending an email with an attachment). I told the Keboola Connection how to import it into GoodData. The preparation inside the GoodData project is very simple — I’ve appointed the first column as date (with time) and the second to be a number. 

![](https://lh3.googleusercontent.com/LhBKqVvFcqiqZkijNPq69thPnG34RV7QnWt8Yhrn3aA2iJkiEnaogMDihL6Z0yEr4cCIdHLPL-ME2_R8UY79nXHdYtFjhUtRIRBDgYrV_wnjjd37g9ubEX_o28QmWzjNyhHtxqeu =624x111)

Click the “Upload Table”  and Keboola Connection prepares everything else. It creates a physical and logical data model inside GoodData, and it parses and exports data into a format that GoodData imports. To get you excited, I have included the [link with the communication log](https://s3.amazonaws.com/padak-share/blog/log.json) with GoodData API.  All of this is hidden behind one button for the end user, or one API call.

We deliver the demonstration and GoodData crawls through it, preparing the data accordingly and importing it into a BI project. I advise everyone to think about it as a compact table that you see on your end — the input. Although all of this is actually placed into the columns which link to each other and appear like “[snow flakes](http://en.wikipedia.org/wiki/Snowflake_schema)”.  Load data (after parsing it inside Keboola Connection the table has approximately 4GB) takes around one hour.

### Tests

For the first test — aggregation over 50 million lines — you need to create four metrics:

1. counts the number of records \[ COUNT(Records of randomData) \]
2. calculates the average value \[ AVG(value) \]
3. calculates the minimal value \[ MIN(value) \]
4. calculates the maximum value \[ MAX(value) \]

and you "look at them” through the year, and the day in the year.

To conclude the second test you just add the filters.

Both of the tests are in the screencast below. The footage is not edited on YouTube, and you can see how instinctive and fast it is. Yes, it’s possible to measure the time it takes to calculate the report, but that’s not the point.  The point is to show how EASY it is compared to other approaches. 

I thought I could make it a bit more complicated and show you how to create "By how many % did the aggregated count of records change day by day". Again, here you can find the unedited video: 

GoodData offers you a link with every report “explain” v DB" which shows what needs to be done for the actual query. When you chart it, it looks like this:

**◀** **1** of **2** **▶**

**![](https://lh6.googleusercontent.com/DwMSlbeDwDd_YIWRmai-RTz-HqDFAAsuTN05gbbZ40beUSdUQsoLR4-ctYCZR8w_MBWlg-EnkeWfft4OU9YUnhb8h596yQz_udN2XI_wsq4_qnsMmXd8ZpOqfsyZwC3Hf72sthVX =51x51)**[ ![](https://lh3.googleusercontent.com/6WDoiSXoe7fRDvAiBwwJO0-1m84xTZbYO0UiNJJ7PRUZLZoGn-o9DejDQwGDDNWNwQcS8-FlmFxz5DVNbX4woLIM_WCunQNnjUtAy-YHerZC555_k9byUxS6EVJdq7a01qVtmF8C =51x51)](http://blog.keboola.com/aggregation-in-mongodb-oracle-redshift-bigquery-voltdb-vertica-elasticsearch-gooddata-postgres-and-mysql#)

[![](https://lh5.googleusercontent.com/Hs_8ogvl_QM4TyYd8_3ZTrew0oM5EkXyXW1m6jrS-dM9uIRuLke4l9JV14jkT_62aqulWZzq_ar3zfy1lSKdU9tQNY7BRxb6s5HEixg5AiTDup7UIL6P7HgcRPkbb1QijqvnsExc =624x360)](http://blog.keboola.com/aggregation-in-mongodb-oracle-redshift-bigquery-voltdb-vertica-elasticsearch-gooddata-postgres-and-mysql#)

### Postgres

[Jan Winkler](https://www.linkedin.com/in/janwinkler) did Test A and B on PostreSQL (9.3.4). Details are here: [http://goo.gl/xt3qZM](http://goo.gl/xt3qZM "http://goo.gl/xt3qZM")

* Import tooks about **2 minutes**
* Test A (no indexes, no vacuum): **33.55 s**
* Test B (no indexes): **4.5 s**
* Test B (with indexes on created_on column, first run): **0.06 s**
* Test B (with indexes on created_on column, second run): **0.015 s**

### MySQL

Finally, I did same tests in MySQL. Server has 64GB RAM, SSD discs...

### **Test A**

SELECT

     YEAR(\`created_on\`), 

     DAYOFYEAR(\`created_on\`),

     COUNT(*),

     AVG(value),

     MIN(value),

     MAX(value)

FROM \`randomData\`

GROUP BY 1,2

ORDER BY 1,2;

\-- 46sec

Most of the time was used for creating the tmp table:

![](https://lh5.googleusercontent.com/kC-GmZzlMTmmVOeFG5xqexWmlL6OWhppg5Hs7zl59ymtmcxTboRUUvWQuHBVbe6Cqczg_ULwdO2ohwedluGX_cQ26ya_MgC7pywB0n6BIxc-TvR1V-kRG9U7g18BTd60EiqXdpNW =231x415)

### **Test B**

SELECT

     YEAR(\`created_on\`),

     DAYOFYEAR(\`created_on\`),

     HOUR(\`created_on\`),

     COUNT(*),

     AVG(value),

     MIN(value),

     MAX(value)

FROM \`randomData\`

WHERE

     \`created_on\` BETWEEN '2012-07-16 00:00:00' AND '2012-07-16 01:00:00'

GROUP BY 1,2,3

ORDER BY 1,2,3;

\-- 0.022sec

Summary to MySQL: it's optimizer is crap :) [Hynek Vychodil](http://cz.linkedin.com/in/hynekvychodil) did get down Test A to 33sec ([http://goo.gl/7qKsP4](http://goo.gl/7qKsP4 "http://goo.gl/7qKsP4")).

### A final few words ….

Importing the data always poses different degrees of difficulty so I don’t include them in my evaluation. But I can say the final aggregation of data for the end user has always been very fast. 

If you know how to use SQL and you just need a few queries, BigQuery should be your choice.  

If you want to ask 'zillions' of business questions and not take care of your own DB cluster, then Amazon Redshift is great. 

If your data doesn’t have a very firm data structure, ElasticSearch is perfect (Karmi told me there is a guy from Germany who pours more than 1TB of data into Elastic every day and he has no problem with speed). 

If you want to process the data and/or you have a more complicated query structure, and somebody will be asking lots of business questions, then I believe you should go with Keboola Connection and GoodData.
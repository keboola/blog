---
title: Why Avast Hasn’t Migrated into Full Cloud DWH
layout: post
categories: product
date: 2018-10-11 00:00:00 +0000
perex: ''
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: ''

---
## Why Avast Hasn’t Migrated into Full Cloud DWH

by [Petr Šimeček](http://blog.keboola.com/author/4010)

#### _How breaking up with Snowflake.net is like breaking up with the girl you love_

_![](https://lh4.googleusercontent.com/O0Bc1rIJClWNNDfZv2MIasSCttNxEsVwGlNH2S-47dMMhAFlafnI43weyEULuNaTYOg1CvOH8WrxD92nMWVLTX41FoaADAm5o6Xc6oDVG4Eir_abXjnIShZ96hUI1wVf81uN49W_ =624x415)_

At the beginning of May, I got a WhatsApp message from [Eda Kucera](https://www.linkedin.com/in/edakucera):

“Cheers, how much would it cost to have Peta in Snowflake? Eda”

There are companies that rely only on “slide ware” presentations. Other companies are afraid to open the door to the unknown and not have their results guaranteed. Avast is not one of them. I am glad I can share with you this authentic description of Avast’s effort to balance a low-level benchmark, fundamental shift in their employees’ thinking and the no-nonsense financial aspect of all that.

Let’s get back to May. Just minutes after receiving Eda’s WhatsApp message, almost 6 months of deep testing began in our own Keboola instance of Snowflake. Avast tested Snowflake with their own data. (At this point I handed it to them, the rest was entirely in their hands.)

They dumped approximately 1.5TB a day from Apache Kafka into Keboola’s Snowflake environment, and assessed the speed of the whole process, along with its other uses and its costs.

![](https://lh3.googleusercontent.com/JMjAzJs1HvX8jcp41QpDOGQXxvSHJAFPv1u_Dpg-Ec2Q2bieR_4sEe5X48QrQr7FaBLwuQUimxpfHuU2lvR3OsGmulo--RMbAbvr0OBilIflZ88WWevXTrUSQRV1fMBgr-DiW4ZY =624x468)

With a heavy heart, I deleted Avast’s environment within our Snowflake on October 13. Eda and [Pavel Chocholous](https://www.linkedin.com/in/pavel-chocholous-7779228) then prepared the following “post mortem”:

###   
Pavel’s Feedback on Their Snowflake Testing

**“It’s like breaking up with your girl…”**

This sentence is summing it all up. And our last phone call was not a happy one. It did not work out. Avast will not migrate into Snowflake. We would love it, but it can’t be done at this very moment. But I’m jumping ahead. Let’s go back to the beginning.

The first time we saw Snowflake was probably just before DataHackathon in Hradec Kralove. It surely looked like a wet dream for anyone managing any BI infrastructure. Completely unique features like cloning the whole DWH within minutes, linear scalability while running, “undrop table”,”select…at point in time” etc.

How well did it work for us? The beginning was not so rosy, but after some time, it was obvious that the problem was on our side. Data was filled with things like “null” as text value, and as the dataset was fairly “thin”, it had a crushing impact. See my mental notes after the first couple of days:

_“Long story short — overpromised. 4 billion are too much for it. The query has been parsing that json for hours, saving the data as a copy. I’ve already increased the size twice. I’m wondering if it will ever finish. The goal was to measure how much space it will take while flattened, jsoin is several times larger than avro/parquet…."_

_![](https://lh6.googleusercontent.com/qsOmJpOUhXSqfJThgRMnp0ZNX8eyyVBlzd4RRA9FCAss2I_uPtj8SU5VKhABCCHQwId5URH-jjZiNJgPD3omDqQw0MSQOtbR5XpBU_rDI0-NBexUZUFy4Q94jkRF8vjmu8_qMOXv =624x405)_

Let me add that not only our data was bad. I also didn’t know that scaling while running a query would affect only the consequently run queries and not the currently running one. So I was massively overcharging my credit card having the mega instance of Snowflake ready in the background, while my query was still running on the smallest possible node. Well, you learn from your mistakes :). This might be the one thing I expected to “be there”, but I’m a spoiled brat. It really was too good to be true.

Okay, after ironing out all the rookie errors and bugs, here is a comparison of one month of real JSON format data:

![](https://lh3.googleusercontent.com/FnQCaCHugHNkYEYsR2-dw7hvh-JbrRo87f0vFwQhhO2StJ-YzWKeuCcasDR79YZeHRDLmXi8QHl9B5h9HkHKVaDVxqQzF2y8FPCr9lWsdIp6ltUd7kfvPfg6AOiPjmPh3kwpT3Fj =610x279)

_(Data size within SNFLK vs. Cloudera parquet file 3.7TB (hadoop) vs. 4.2TB (Snowflake))_

Tabulated results…You know, it is hard to understand what our datasets look like and how complicated queries they hold. The main thing is that benchmarks really suck :). I personally find the overall results much more interesting:

* Data in Snowflake are roughly the same size as in our Hadoop, yet I would suggest to expect 10% — 20% difference.
* Performance: we didn’t find any blockers.
* Security/roles/privileges: SNFLK is much more mature than Hadoop platform, yet it cannot be integrated with on-premise LDAP.
* Stability: SNFLK is far more stable than Hadoop. We didn’t encounter a single error/warning/outage so far. Working with Snowflake is nearly the opposite to hive/impala where errors and cryptical and misleading error messages are part of the ecosystem culture ;).

![](https://lh5.googleusercontent.com/n9k-GN8l02L_IJznmnQjGza4JTqYFASVrLBfPe7ecQN3wQquZOb63D8T1HpaEKYSPd6nO1XQwz2SskuPQ0VEQtl6NyO0m8t0p1SlnPE7pU5HRnvsr2MKuJ5BONBPmrJynJ8FQmG0 =624x416)

* Concept of caching in SNFLK cannot be fully tested, but we have proved that it affects performance in a pleasant yet a bit unpredictable way.
* Resource governance in SNFLK is a mature feature, beast type of queries are queued behind the active queries while small ones sneak through etc.
* Architecture of separated 'computing nodes' can stop inter-team collisions easily. Sounds like marketing bullshit, but yes, not all teams do love each other and are willing to share resources.
* SNFLK can consume data from various sources from most of cloud-on/on-premise services (Kafka, RabbitMQ, flat files, ODBC, JSBC, practically any source can be pushed there). Its DWH as a service architecture is unique and compelling (Redshift/Google BigQuery/GreenPlum could possibly reach this state in the near future).
* Migration of 500+ TB data? Another story  —  one of the points that undermine our willingness to adopt Snowflake.
* SNFLK provides limited partitioning abilities; it can bring even more performance, once enabled at full scale.
* SNFLK would allow platform abuse with all of its 'create database as a copy', 'create warehouse as a copy', 'pay more, perform more'. And costs can grow through the roof. Hadoop is a bit harder to scale which somehow guarantees only reasonable upgrades ;).
* SNFLK can be easily integrated into any scheduler. Its command line client is the best one I’ve seen in last couple of years.

### Notes from Eda

**“If we did not have Jumpshot in the house, I would throw everything into Snowflake…”**

If I was to build a Hadoop cluster of the size 100TB-200TB from scratch, I would definitely start with Snowflake…Today, however, we would have to pour everything in it, and that is really hard to do while you’re fully on-premise… It would be a huge step forward for us. We would become a full-scale cloud company. That would be amazing!

If I had to pay the people in charge of Hadoop US wages instead of Czech wages, I would get Snowflake right away. That’s a no brainer #ROI.

Unfortunately, we will not go for it right now. Migrating everything is just too expensive for us at the moment and using Snowflake only partially just doesn’t make sense.

![](https://lh5.googleusercontent.com/nQbXkwg41IZdJ8O6BOgAUx1iKp4NsMbmi75iyRZx2YfGQtTG0aqXLEZTeFi_WGG58O9e7jSNStC1GY0-o9IaGSVebUdW-3Tq9rRWRsMjut8EQxRpsugNLeLHmIpM19GYfvlTjWom =624x276)

Our decision was also affected by our strong integration with Spark; we’ve been using our Hadoop cluster as compute nodes for it. In SNFLK’s case, this setup would mean pushing our data out of SNFLK into the EC2 instance where the Spark jobs would be running. That would cost additional 20-30% (the data would be running inside AWS, but the EC2s cost something as well). I know Snowflake is currently working on a solution for this setup, but I haven’t found out what it is.

In our last phone call with SNFLK, we learned that storage prices were going down again. So, I assume that we will meet within a reasonable time frame, and reopen our discussion. (In November, Snowflake has started privately testing their EU datacenter and will open it publicly in January 2017). In the meantime, we’ll have an on-demand account for practicing :).
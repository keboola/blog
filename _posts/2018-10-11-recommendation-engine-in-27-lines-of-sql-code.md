---
title: Recommendation Engine in 27 lines of (SQL) code
layout: post
categories: how-to
date: 2016-06-29 13:43:38 +0000
perex: In the data preparation space, very frequently the focus lies in BI as the
  ultimate destination of data. But we see, more and more often, how data enrichment
  can loop straight back into the primary systems and processes.
user: milan-veverka
coverphoto: ''
coverphoto_slider: "/uploads/27lines.jpg"

---
In the data preparation space, very frequently the focus lies in BI as the ultimate destination of data. But we see, more and more often, how data enrichment can loop straight back into the primary systems and processes.

Take recommendation. Just the basic type (“customers who bought this also bought…”). That, in its simplest form, is an outcome of basket analysis.

![](/uploads/27lines1.jpg)

We recently had a customer who asked for a basic recommendation as a part of proof of concept, whether Keboola Connection is the right fit for them. The data set we got to work with came from a CRM system, and contained a few thousand anonymized rows (4600-ish, actually) of won opportunities which effectively represented product-customer relations (what customers had purchased which products). So, pretty much ready-to-go data for the Basket Analysis app, which has been waiting for just this opportunity in the Keboola App Store. Sounded like good challenge - how can we turn this into a basic recommendation engine?

Basket analysis, simply put, looks at groups of items (baskets), and assigns a few important values on any combinations of items that are found in the primary dataset. The two most descriptive values are called "support" - the frequency in which a given combination of items presents itself in the dataset or its segment, and "lift" - the likelihood of items in the combination to appear together. If you want to go deeper, here's a [good resource](http://www.ms.unimelb.edu.au/\~odj/Teaching/dm/1%20Association%20Rules%2008.pdf) (it's a bit of heavy reading, you've been warned). Now, this "lift" value is interesting - we can loosely translate the likelihood of the items being together as the likelihood that the customer may be interested in such combination.

So, for simple recommendation, we take what is in the “basket” right now, and look at additional items with highest “lift” value for the combination and display, or “recommend” them. That’s how you get conditioner with a shampoo or fries with a hot dog. While well understood, the algorithms are not simple nor are they “light”, they take decent amount of computing power, especially when you get beyond a few thousand transactions (or “baskets”).

To make things simpler I built a quick transformation to filter out the won opportunities only (the original set, having been a flattened table from SFDC, also contained tons of opportunities in other stages, obviously irrelevant to the task at hand), and just the needed columns - an ID, the customer identifier and a product they got:

![](/uploads/27lines2.jpg)

And the resulting table:

![](/uploads/27lines3.jpg)

That then got fed into KBC’s Basket Analysis app. The settings are simple, just point to the app and assign columns that contain what the app needs:

![](/uploads/27lines4.jpg)

The output of the app gives several tables (you will learn about them from the app description of course), but the interesting one was ARL__1 (I need to talk to Marc who built this app to maybe refresh the table names a bit) - this one gives the found “rules”. The key columns are “LHS”, “RHS” and “lift”. In layman’s (mine) terms, this means: for a customer with a “basket” containing items listed in the “LHS” (Left Hand Side in case you were wondering), there is the “lift” value for the “RHS” (yes, you guessed it) items to be present as well.

The “LHS” and “RHS” columns are actually arrays, as logically there may be more products involved here. Quite fortunately the content is in alphabetical order (that will be important later on). The data looks like this:

![](/uploads/27lines5.jpg)

Now, in my simple example, I really care only about 1 item to be recommended. So, I care only about rows from the ARL__1 table that:

a) have only one item in RHS and

b) out of those only the highest “lift” rows (this now is a temporary “recommendation” table, defining for each basket the next best product to recommend).

A few lines of SQL will take care of that, those are the first three queries in this transformation:

![](/uploads/27lines6.jpg)

The rest of the code here is dealing with the few very simple tasks left:

**Query 4** takes the original input table and “collapse” it into baskets in the same format as our “lhs” field in the basket analysis - think “GROUP_CONCAT” in MySQL, here it’s Redshift so the listagg() aggregation comes to aid. It also has the nifty ability to force ordering within the group, which allows us to match the order of items with the alphabetical output of the Basket Analysis app (told you it would be important - and thanks to our friends at Periscope Data for their [blog](https://www.periscopedata.com/blog/listagg-group-concat-and-string-agg.html) where I came across this trick). And finally

**Query 5** use this new field to join the temporary table, which allows us to get the recommended new product for each customer.

And we’re “done”. Here's the output data:

![](/uploads/27lines7.jpg)

Why the quotation marks? This exercise represents just a very simple approach. Its success depends on nearly ideal initial conditions and overall lack of edge cases. Depending on the input data, there will be number of baskets that just don’t create a rule with enough significance, and therefore no recommendation will be served (note the null values in the table above). While this can be addressed by lowering the support threshold of the Basket Analysis app (in my example I used 1% cut off, which at the end yielded 59% success rate, or ratio of customers for whom we were able to provide solid recommendation), whether or not that solution makes sense depends heavily on the circumstances. Judgment needs to be applied - how many transactions we have? How many products? Etc. etc.

In some situations, we could take the customers without recommendations and run them through secondary process - take a part of their basket that has a high “lift” to a product that is not yet in the basket - obviously the SQL gets a bit more complicated. We can deal with most of edge cases in similar manner. At some point, however, going to a dedicated recommendation app such as the [one from Recombee](https://git.recombee.net/keboola/recombee-app-description) would be much better use of resources. This is no [Netflix recommendation system](https://www.quora.com/How-does-the-Netflix-movie-recommendation-algorithm-work) :).

This was tons of fun to build, and totally good enough for the proof of concept project. We’ll write the recommended product back into the CRM system as a custom field, and the sales people will know exactly what to bring up next time! Or, perhaps, we’ll use some of the integrations with mailing systems to send these customers just the right piece of content.

If you’re interested, [get in touch](http://www.keboola.com/contact/) to learn more!
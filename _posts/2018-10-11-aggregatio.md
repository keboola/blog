---
title: Facebook Prophet - Forecasting library
layout: post
categories: nerds
date: 2017-03-02 14:51:02 +0000
perex: Not all forecasting problems can be solved by the same procedure. Prophet is
  optimized for the business forecast tasks we have encountered at Facebook.
user: petr-simecek
coverphoto: ''
coverphoto_slider: ''
permalink: facebook-prophet-forecasting-library

---
It all started yesterday morning when I saw multiple tweets mentioning a new forecasting library published on my way to work:

![](/uploads/forecasting1.jpg)

Sounds interesting, I thought. I bookmarked the link for “weekend fun with code” and moved on. The minute I stepped in the office, Amazon S3 had an outage (coincidence?) which impacted half of the internet and KBC as well. Ok, what can i do now then?

I opened the link to the [facebook engineering page](https://facebookincubator.github.io/prophet/) and started reading about the forecasting module. They supplied quite simple instructions and it made me tempted to test it out. Wouldn't it be great to use it in some KBC projects?

Since the code needed for forecasting is pretty simple, I mocked up a script, suitable for KBC to use before lunch and when amazon (US-east) got back up, I could implement the code as a custom science app.

The algorithm requires two columns, the date and value column. The current script gets the source and result tables’ information from the input and output mapping and the parameters specified by user. Those parameters will define:

* Date column name
* Value column name
* Required prediction length (period)

This is how it looks like in the Keboola:

![](/uploads/forecasting2.jpg)

To see the output in a visual form, I used Jupyter, which has been [recently integrated within KBC](http://status.keboola.com/call-for-testers-rstudio-and-jupyter-sandboxes). Not bad for a day’s work, what do you say?

![](/uploads/forecasting3.jpg)

Just imagine how easy it would be for our users to orchestrate the forecasting process:

1. Extract sales data
2. Run forecasting
3. Enrich data by forecasted values
4. Publish them to sales and marketing teams

![](/uploads/forecasting4.jpg)

### _Notes:_

* The sample data I used sucks. I bet yours will be better!
* [Here](https://bitbucket.org/VFisa/kbc_blog_posts/src/245c7aa257d6/Expandability%20-%20FB%20Prophet/jupyter/?at=master) is the link for Jupyter notebook.
* Feel free to check some other custom science apps I did: [https://bitbucket.org/VFisa/](https://bitbucket.org/VFisa/ "https://bitbucket.org/VFisa/")

### _Where Prophet shines (from_ [_Facebook page_](https://research.fb.com/prophet-forecasting-at-scale/)_)_

Not all forecasting problems can be solved by the same procedure. Prophet is optimized for the business forecast tasks we have encountered at Facebook, which typically have any of the following characteristics:

* hourly, daily, or weekly observations with at least a few months (preferably a year) of history
* strong multiple “human-scale” seasonalities: day of week and time of year
* important holidays that occur at irregular intervals that are known in advance (e.g. the Super Bowl)
* a reasonable number of missing observations or large outliers
* historical trend changes, for instance due to product launches or logging changes
* trends that are non-linear growth curves, where a trend hits a natural limit or saturates

  Martin Fiser (Fisa)

  Keboola, Vancouver, Canada

  Twitter: @VFisa
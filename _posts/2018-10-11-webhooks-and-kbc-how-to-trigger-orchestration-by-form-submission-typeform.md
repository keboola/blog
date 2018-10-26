---
title: Webhooks and KBC - How to trigger orchestration by form submission (Typeform)
layout: post
categories: how-to
date: 2017-02-01 14:41:47 +0000
perex: In this article learn how to trigger orchestration by form submission via a
  use case.
user: petr-simecek
coverphoto: ''
coverphoto_slider: "/uploads/webhooks.jpg"

---
## Use case

Keboola just implemented a [product assessment tool](https://www.keboola.com/product-assessment) dedicated to OEM partners. The form's results will show how submitters fare in the various dimensions of data product readiness, areas on which to focus, and specific next steps to undertake.

![](/uploads/webhooks1.jpg)

We wanted to trigger the orchestration that extracts the responses (have you noticed new Typeform extractor?), processes the data, and updates our GoodData dashboard with answers. There was no option to use ["Magic Button"](http://wiki.keboola.com/pure-gooddata-hints/gooddata-widgets) to do so because there is no guarantee the respondent would click on it at the end of the form.

The easiest way was to create a Zapier "zap" with the webhook:

![](/uploads/webhooks2.jpg)

You select which form:

![](/uploads/webhooks3.jpg)

Select what will create a trigger:

![](/uploads/webhooks4.jpg)

And what it should do:

![](/uploads/webhooks5.jpg)

The webhook is simply a conversion of orchestration [API call](http://docs.keboolaorchestratorv2api.apiary.io/).

![](/uploads/webhooks6.jpg)

Here is the full flow:

![](/uploads/webhooks7.jpg)

At the end, you have a setup ready, so every time someone fills the form, new data is extracted and your dashboard is updated.

#### More stuff

Check out our Typeform extractor:

![](/uploads/webhooks8.jpg)

FYI you can also create those simple "zaps" between Typeform and Slack:

![](/uploads/webhooks9.jpg)
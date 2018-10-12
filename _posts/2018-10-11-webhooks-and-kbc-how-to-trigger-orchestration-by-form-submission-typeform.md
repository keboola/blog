---
title: Webhooks and KBC - How to trigger orchestration by form submission (Typeform)
layout: post
categories: how-to
date: 2018-10-11 00:00:00 +0000
perex: 'In this article learn how to trigger orchestration by form submission via
  a use case. '
user: ''
coverphoto: ''
coverphoto_slider: ''

---
## Webhooks and KBC - How to trigger orchestration by form submission (Typeform)

by [Martin Fiser](http://blog.keboola.com/author/22817)

[![Triggering KBC orchestration with webhook](https://lh3.googleusercontent.com/3YK5Pewy5jMCW5duTJlQqVJSbjhr0w6zbga11TqPj5Z9JrT3Zg_mnjyn3KbvmrhR2ZuoQN_vGM1iy_0K-Qw-fTOEGjWQxofztMLZFhuS0gKAjv-rPslHR-xJr91yJ4RwKhtzK7mI "Image: https://bytebucket.org/VFisa/kbc_blog_posts/raw/38feaa35936421b4ff9e1b5ef1cb48cee669c424/Webhook%20automation/images/intro_logo.png" =624x160)](http://blog.keboola.com/author/22817)

### How to trigger orchestration by form submission

#### Use case

Keboola just implemented a [product assessment tool](https://www.keboola.com/product-assessment) dedicated to OEM partners. The form's results will show how submitters fare in the various dimensions of data product readiness, areas on which to focus, and specific next steps to undertake.

We wanted to trigger the orchestration that extracts the responses (have you noticed new Typeform extractor?), processes the data, and updates our GoodData dashboard with answers. There was no option to use ["Magic Button"](http://wiki.keboola.com/pure-gooddata-hints/gooddata-widgets) to do so because there is no guarantee the respondent would click on it at the end of the form.

The easiest way was to create a Zapier "zap" with the webhook:

![zap with Typeform and webhook](https://lh4.googleusercontent.com/wSbXuN6_INo0nj_ePZeXHdiajxHPlN0VdkIfN7ITq3RYMqRHe9TalJ6pZ-QXQYYbsMUq3WfbHTIlYTf53BrjvbNBbjCqhf4Oyy162REnhSRy_3K31CAPB7o0BoZj7QmTqFhSPQfC =383x383)

You select which form:

![Typeform form](https://lh5.googleusercontent.com/-NkV5NXo_XGj1yYk0EU9FSHHmAP29bPsokZayJHaqruYcL6Ttv1KswdZ-OC2qgbz3P9AAUvsZZj4efZE4WlJ334XPzhbEMh3sbB9ypZD9vG1jjPkXpiADiG57jKWb-qd0m3dQ4mB =624x193)

Select what will create a trigger:

![Typeform trigger](https://lh4.googleusercontent.com/4xZI9UXe3xr5dB3FSTxk6XqExBQpWTGuDNkxWFKwoUSCnc11xt30zKNuXQso2o5yBeDZ6EhRmRCyKYTAGlboaheQoRwwwSyjZag5t45G0oo1qpERrDhYGZJbEIZz3zJnO8_ATf_g =624x203)

And what it should do:

![Typeform action](https://lh6.googleusercontent.com/vSqGGtEmNtLJXibJCiChOaCp2moJyEr4ANXhDh3OieOpnStPfbczaBDi2qBKwGDce4amHU1LyD9tb2xmZ61B78HIsmHyH0Q0OA_GaLmeTMbqVnWxZpl9WLEPuwm9N-HFTcjkOEYg =624x415)

The webhook is simply a conversion of orchestration [API call](http://docs.keboolaorchestratorv2api.apiary.io/).

![Webhook configuration](https://lh4.googleusercontent.com/l-vQQrSNWRBf0SdaOhoY4hirexNH6VARRp2u0QJuwai3769IH5XM3ODDhO5jG5nYHgbcqMjcbt52kuO2IXzg2yRAVreo9SFvR0_UYbMCAZ2mAQc_dgxOYGH17tJjb5n41UZ8W3Rb =624x1089)

Here is the full flow:

![Zapier flow](https://lh6.googleusercontent.com/O-dml8FTH22vgvFoQN_I1WU1QRsnBLLQjIcKqIFLCXAGUJQmjuctRuWUK1ANBQpIxeDJnsjd2Tv4XDurkDrKJBnc1_KCAOQIBzHjUythYFmZJYjlbR4RIQBeWhkyNjXKanDwujRI =383x740)

At the end, you have a setup ready, so every time someone fills the form, new data is extracted and your dashboard is updated.

#### More stuff

Check out our Typeform extractor:

![Typeform extractor](https://lh5.googleusercontent.com/nkDaYgXDuj85YmdPVyKseqXh4kR9DhelGWB5sQZ3r_foaF9QnRtlzwYeHXnYNyXlbVGZMPUpLW8Q-XTB7qfxLl_16dIDJ4GNcnOvsHLRcjNuRgmJw24tzTiCPuONvoTm3PXnvoVB =624x101)

FYI you can also create those simple "zaps" between Typeform and Slack:

![Typeform Slack Zap](https://lh4.googleusercontent.com/3c1MQIujPnOLSMLCVOJQVmpTGWEPxXioDqUt5mSO09YjSY1nUp2LUFPoyg3IsA6gHQduGZSUy-JJdNi551edxEWtf5paYAJ_B5FY0-X4-zwvPJclGr7iSjqo3YKtQHMNpInW5Wvr "Image: https://bytebucket.org/VFisa/kbc_blog_posts/raw/9c139436450c639c4243958424740b638b92ba01/Webhook%20automation/images/Typeform-Slack.png" =393x151)
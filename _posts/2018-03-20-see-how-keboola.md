---
layout: post
title: See How Keboola Automated Personalized MailChimp + SurveyMonkey Campaigns
perex: 'Our client is in the event business organizing regular meetups for CEO’s in
  the Vancouver area, specifically for technology companies. '
date: 2018-02-14 00:00:00 +0000
user: petr-simecek
coverphoto: ''
cover_photo_slider: ''
categories: how-to
coverphoto_slider: "/uploads/survey.jpg"

---
To organize these ad-hoc conferences for hundreds of people, they use excel, [Salesforce](https://www.salesforce.com/crm/) as CRM, [MailChimp](https://mailchimp.com/) for the emails and SurveyMonkey, well, for surveys. For those of you who have been using Keboola for some time, you might know this is the optimal setup for us.

After an initial discussion to understand their current in-house processes, we narrowed down the biggest pain to be the e-mailing component. Do you remember when I mentioned those meetups are for CEOs?

Well, they have 14 groups and each group meets once a month. For each event, they need to contact the host two weeks before in order to remind them. Then there is another reminder a week before the event that is sent to all the guests. Finally, after each meeting, there is a survey sent out to those who attended.

All those emails are being prepared and sent manually by one person. You can do the math but believe me, it is almost a full time job just to check every day what email has to be sent out to whom.

This is where Keboola stepped in…..

Let’s skip the part where we moved the Excel into [Google Sheets](https://www.google.com/sheets/about/), replaced nicely formatted bar charts and roadmaps with simple data tables so we could crunch all the data in Keboola.

![](/uploads/surveyMonkey.jpg)

## SurveyMonkey

After each meeting the organization collects the feedback using the [SurveyMonkey](https://www.surveymonkey.com/). They measure several KPIs, plus they allow users to comment in each section. This survey results are distributed the next month as a part of the Mailchimp campaign reminding guests the next event is coming up soon.

Then we wrote a short API call (JSON Config?) using our almighty Generic extractor to get the data from SurveyMonkey. They have a good [documentation](https://developer.surveymonkey.com/api/v3/#function%20anchor()%20%7B%20%5Bnative%20code%5D%20%7D), so it’s not difficult to obtain the survey results.

The more complicated part of the process was to join together all the output tables from their API, because the endpoint created around 20 tables full of parents and childs.

#### MailChimp Part 1

The most important part of the puzzle, is that all emails are being distributed from MailChimp.

We had to figure out how to automatically feed each MailChimp template with personalized data. It might sound easy at first, but by default MailChimp offers only two variable fields connected to the recipient. Unsurprisingly, it is the first and the last name.

However, for each template we needed much more than that! We needed to personalize location, time and date of the event and even add a personal note. There special sections for those survey results and users comments from previous meeting but having just the two out of the box fields were not going to cut it.

This was exactly the moment when we started asking the “what if” type of questions. Quite soon after opening the API documentation, the right question hit us: Could we push the whole content via API call and not merely trigger the campaign remotely?

#### Keboola Python Part

This is where [Leo](https://www.linkedin.com/in/chanleoc/), our Python ninja, stepped in. He will briefly go over how Keboola “hacked” the MailChimp API.

With the use of a custom science component written in Python and MailChimp API integration, users can ease the pain away from manually creating multiple campaigns and entering the “variables” (eg. Time of the event, locations of the event, etc) every time when a reminder or email is needed to send out. Users are only required to maintain the templates within MailChimp and the google documentations which have detailed descriptions of the event and the list of participants. Combined with automation via Keboola orchestration, the custom science component can be run periodically fetching events and participants details. With fetched data, component will then use the configured templates in MailChimp and create a new campaign for every events the component can list. If repetitive event names are found within the same sheet/run, the component  will inject the details into the first encountered row with the same event name. Upon triggering completion of all the campaigns, the component will output a CSV to Keboola storage indicating the behaviour of the campaigns regarding whether or not it is successfully executed. “Sent” campaigns are kept in users’ MailChimp account as a record. Users can find what contents and which participants the campaign sends to. Stats and activities of the campaigns can also be found under the Report tab in users’ MailChimp Accounts.

The last step was to create a different csv outputs for each scenario. But since we could use as many variable fields in the MailChimp template as we wished, it was just a matter of a couple SQL queries and a few python transformations to get the results with the right numbers in

#### MailChimp Part 2

Now we had a functioning writer which was able to replace any predefined variable field with data in corresponding column in the output file.

All we had to do was to adjust the existing templates and we were ready to go!

#### Conclusion

I’m not sure how this solution would withstand thousand of recipients, but in our case, when there goes tens of e-mail at the most busy day, it works well.

The event manager’s job is now to maintain the master sheet where all they need to do is to add a new event. Keboola downloads the sheet every day, transformation detects if there is a need for any kind of email campaign and the custom writer pushes personalized campaigns through Mailchimp.
---
title: Please hold, your call is important
layout: post
categories: how-to
date: 2018-10-11 00:00:00 +0000
perex: We’ve recently experienced two fairly large system problems that have affected
  approximately 35% of our clients.
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: "/uploads/holdTheLine.jpg"

---
We’ve recently experienced two fairly large system problems that have affected approximately 35% of our clients.

The first issue took 50 minutes to resolve and the other approximately 10 hours. The root cause in both cases was the way we handled the provisioning of adhoc sandboxes on top of our [SnowflakeDB](http://www.snowflake.net/) (a few words about "[how we started w/ them](http://blog.keboola.com/new-dose-of-steroids-in-the-keboola-backend)").

We managed to find a workaround for the first problem, but the second one was out of our hands.  All we could do was fill in a support ticket with Snowflake and wait. Our communication channels were flooded with questions from our clients and there was nothing we could do. Pretty close to what you would call a worst-case scenario! Fire! Panic in Keboola!

My first thoughts were like: “Sh..t! What if we run the whole system on our own infrastructure, we could do something now. We could try to solve the issue and not have to just wait…”

But, we were forced to just wait and rely on Snowflake. This is the account of what happened since:

7:35pm (UTC+2) - we filed a Zendesk ticket with Snowflake

5 minutes later, Milan fires a direct email to our contacts at Snowflake. 10 minutes later, [Todd Beauchene](https://www.linkedin.com/in/toddbeauchene) calls his cell and assures him that he’s there to help.

29 min after the first email to Todd, he comes back to us via e-mail and confirms the emergency procedures have started (“**Don’t worry dudes, I’m here to help**”). He suggests immediate confcall. Martin in Prague drops whatever it is he does on Friday nights (it’s 8:20pm in Prague at this point) and travels across the city to the office. Ondra, meanwhile in Bali (UTC+8, 2:30am) prepares for the emergency shift and goes to sleep.

One hour later we hold the conference call with Martin and me (UTC+2) and Todd (UTC-8). Within that one hour the Snowflake engineering team has diagnosed the problem, suggested a workaround and the fix was being built while we were speaking.

Todd has only one to-do item for our team:  “Go to sleep. Before you’re up we’ll have integration tests ready and the fix should be deployed into production. “

You have to understand, it is really hard to let go. It is hard not to go crazy or chew your fingernails off while waiting. There is nothing you can do. It’s especially hard for a team like ours. We’ve built hardcore systems for almost twenty years. We’ve had millions of customers depending on our ops and now the only thing we could do was wait. We had already done all we could do when we first selected our partner - Snowflake. This was the hour that would test that decision.

Ondra in Bali is the first to wake up, and shortly after him we do as well. It was 4:52 am and we had received this message from Todd:

_“It took a little longer than expected, but the update was just released and according to our ops team we are not seeing any errors. Please reach out if there are any problems over the weekend.”_

Hallelujah!

Todd and the Snowflake team stood by and they offered us (our distributed team is across 16 time zones right now) any time window for a debrief.

Last night, we had a chance to feel first hand what it means to hear: “Count on us!” And we’re grateful for that experience.

Technically, we were the ones who caused the issue. Our use case for Snowflake is extremely demanding. We use it as a backend for our product Keboola Connection. That means that we provision thousands of adhoc accounts and connections and we’d hit a system limit which we were not aware of.

Our first feeling of “Sh..t, now we’re f..d. Nothing we can do now” quickly changed to euphoria.  The engineering team at Snowflake did their job a thousand times better than we would have ever been able to in the old days of hosting other people’s code on our servers. They know the code, they control the infrastructure, and they have the best people in the world for the job working on it. Working for us. Working for OUR CUSTOMERS. THAT is the essence of Cloud! That is IT! (pronounced, not spelled)

Just as Dave Girouard noted in his article from the time when he was President of Enterprise at Google. [The delusions that companies have about the cloud](https://gigaom.com/2013/01/26/the-delusions-that-companies-have-about-the-cloud/) Please read it, there’s nothing to add to it:

_“Make sure the best people are working on it.”_

Finally, **I would love to thank the group of anonymous heroes from Snowflake and Todd Beauchene**. No legacy vendor would have been able to provide such a hotfix on a Friday night.  I’m glad we’re in the cloud and that we can rely on the best of the best. Thank you guys!
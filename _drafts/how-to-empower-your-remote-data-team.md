---
layout: post
categories: how-to
permalink: empower-remote-data-team
title: How to empower your remote data team
perex: ''
date: 
user: ''
coverphoto: ''
coverphoto_slider: "/uploads/remote-work.jpg"

---
The advantages of remote work have been praised for a while now. Team members gravitate towards the flexible work schedule and enjoy an increase in personal freedom, while companies benefit from a talent pool unencumbered by geographical borders. From remote-first tech giants like [Automattic](https://automattic.com/about/) (which powers a third of the internet), to newbies such as [NASA](https://www.digitaltrends.com/cool-tech/nasa-ramps-up-remote-working-measures-to-tackle-coronavirus/), companies are steadily progressing towards telecommuting.

But working from home comes with its own unique set of challenges. Companies that are accustomed to the physical office environment will need to think outside of the box (or office walls) to tackle the specific issues faced by remote teams.

The biggest challenge for a distributed data team is not distance, but operational disruption. In this remote work guide, we will walk you through the problems and solutions encountered by distributed data teams when moving out of the physical cubicle and into the digital office.

## Remote Work Challenge #1: Security & Access

The threat of a data breach is already high when workers have a single access point (the office). Once access to data becomes distributed across remote locations, the number of potential attack points can rise even more.

There are several policies and tools that companies can use to safeguard access to their data:

1. **Raise security awareness**. Have a clear security policy which details preventive measures (password standards, infrastructure needs, etc.) and be sure to regularly educate your workforce.
2. **Verify access**. Use tools that verify access to data. Look for ones that allow digital identification via [Identity and Access Management (IAM)](https://searchsecurity.techtarget.com/definition/identity-access-management-IAM-system) - the majority of cloud providers implement them by default. Whenever possible, extend the verification process to multiple points, for example, with [Multi-Factor Authentication (MFA)](https://www.nist.gov/itl/applied-cybersecurity/tig/back-basics-multi-factor-authentication). This sends verified users the access credentials they need to a device of their choice, thus safeguarding against a single point of failure.
3. **Implement _least privilege_**. Use tools which grant users access based on the principle of [least privilege](https://www.us-cert.gov/bsi/articles/knowledge/principles/least-privilege). Users are only granted access to the minimum data that they require. This prevents data leaks and limits the scope of breaches if they do happen. Rely on tools that can grant granular privileges (e.g. read-only access or access to only a certain database).
4. **Ensure access credentials are short-lived**. Use short-lived tokens or other mechanisms that only allow access for a short period of time. This technology forces a refresh of access tokens to constantly verify if credentials are still valid and prevent breaches via piggybacking on old access credentials.
5. **Encrypt data**. Use infrastructure which, by default, encrypts data during transfer (entering or leaving your system) and at rest (storage).
6. **Audit data changes**. Choose tools which allow you to audit the trail of data changes, so that any suspicions of a breach can be quickly inspected and confirmed or refuted.
7. **Backup data**. Data loss is common, not only in breaches, but also during regular operations. Opt for infrastructure that allows you to regularly backup data with technology such as database snapshots.

_Security is the key concern underpinning the entire Keboola Architecture. The platform_ [_extensively implements all of the security mechanisms_](https://www.keboola.com/security-whitepaper) _described above. Additionally, it builds upon them by introducing infrastructure with additional security measures to prevent data breaches._

##   
Remote Work Challenge #2: Communication

Like other teams, distributed data teams are bound to face challenges with communication. The solutions are similar to those of any other department communicating via digital mediums:

1. **Video conference calls**. When on a call, opt for video. Talking face-to-face allows people to interpret the non-verbal cues in the conversation (e.g. facial expressions, nods) and lowers the chances of miscommunication.
2. **Separate asynchronous from synchronous communication.** Some communication, like calls, must be done in synchrony (every participant needs to be present at the same time). Others, such as using messaging apps, can be done asynchronously. There are many free tools for both types of communication, but it’s important to keep them separate. If workers are expected to be online constantly, always waiting for the _ping_, they are less efficient and cannot dive as deeply into their work. Some companies go even further and implement a ‘no meeting’ schedule, such as 2 hours after lunch reserved for deep work, or even ‘[no-meeting Wednesdays](https://wavelength.asana.com/workstyle-no-meeting-wednesdays/)’.
3. **Communicate a lot but within a defined timeframe**. There is no such thing as too much communication… as long as it doesn’t eat up all of your work time, of course. Put in place a series of mini-meetings, such as [daily stand-ups](https://www.scrum.org/resources/what-is-a-daily-scrum) and [1:1 catch-ups](https://www.impraise.com/blog/1-on-1s-for-engaged-employees-how-good-managers-run-them), where teams and independent contributors can share their successes and their challenges. These can then be swiftly addressed.

Communication challenges can easily be tackled using a variety of free tools, such as email, Slack, Facebook Messenger and Zoom, just to name a few. The important differentiator between successful and unsuccessful teams are the practices surrounding communication, rather than the specific tool being used.

## Remote Work Challenge #3: Collaboration

Distributed data teams often work on the same data pipeline. When physical proximity is no longer an option, special tools are developed to promote collaboration. In particular, infrastructure for data teams should:

1. **Bring clarity through operational centralization**. When the data infrastructure is dispersed across multiple platforms, it’s hard for team members to see how their work impacts the other parts of the data infrastructure. Centralize your data pipeline (data extraction, transformation, storage, analysis, and orchestration) within a single operational platform, so that every member of the team has access to all of the components needed for their work.
2. **Version data changes**. When multiple people are working on the same pipeline, any changes to it can result in conflict. For example, two team members might be working on the same data collection code, which then results in different end tables. An infrastructure that versions data changes not only enables parallel working, but also allows for revisions and conflict resolution when necessary.
3. **Facilitate data sharing**. Remote data teams need to share data when collaborating. Tools that facilitate data sharing speed up the usual back-and-forths of passing data around on USBs and hard drives.

_Keboola is the end-to-end DataOps platform which centralizes all of your data processes (data sharing, versioning, access to pipeline stages…) to ensure the most effective collaboration within your data team._

##   
Remote Work Challenge #4: Independence

The data team does not work in isolation from other departments. [The most successful data teams work frequently with coworkers from other company verticals](https://www.mckinsey.com/featured-insights/artificial-intelligence/global-ai-survey-ai-proves-its-worth-but-few-scale-impact). But if you want to avoid your data team members picking up the phone with every question and request that they have, you’ll need to empower your non-data workers as well.

There are several tools available to help you encourage independence when building a [data-driven culture](https://blog.keboola.com/how%20to%20build%20a%20data-driven%20company%20culture) across your company:

1. **Democratized data access and sharing**. Giving non-technical people access to data empowers them to make their own decisions. The individual power to share data - _without_ the need to talk to the data team multiple times a day - increases self-sufficiency and self-service across your workforce.
2. **Digital sandboxes**. Sandboxes are digital environments that contain all of the data that somebody needs. Users can play around with the data with no risk of breaking the underlying infrastructure. Digital sandboxes allow your workforce to tinker and experiment with data without requiring assistance from the data team. Keboola builds tools that empower everyone.

_Keboola builds tools that empower everyone. We drive innovation with one-click_ [_sandbox_](https://help.keboola.com/tutorial/manipulate/sandbox/) _deployments and automated_ [_Scaffolds_](https://blog.keboola.com/accelerate-your-end-to-end-data-pipelines-with-keboola-scaffolds?_ga=2.267383502.1596260132.1584964325-357131332.1578045864) _(full end-to-end pipelines, which can be deployed without the data team)._

_Keboola facilitates access to data and communication between different stakeholders by unifying all data-related knowledge into a_ [_Data Catalog_](https://blog.keboola.com/data-catalog)_. The Data Catalog allows users to share data in an_ [_efficient and auditable way_](https://help.keboola.com/catalog/)_. The shared data is customizable and can automatically be refreshed without any additional work._

## How Can Keboola Empower _Your_ Remote Data Teams?

Keboola is a veteran in the field of remote work. Our workforce spans three continents and our clients can be found in every corner of the world. This is why Keboola built the DataOps platform: to empower all data workers, irrespective of their location. [We use it for our own internal operations](https://blog.keboola.com/keboola-benefits-keboola-connection) as well.

We are offering free consultations to companies who are ready to pursue the exciting opportunity of working remotely. Let’s hop on a call and talk about the next steps.
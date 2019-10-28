---
layout: post
categories: community
permalink: Data-Ops-and-Automation
title: Data Ops and Automation
perex: ''
date: 2019-10-29 07:00:00 +0000
user: milan-veverka
coverphoto: ''
coverphoto_slider: "/uploads/Untitled design-2.png"

---
My first car had a manual choke. It would change the ratio of air and fuel to allow the engine to start - you would pull it when starting the engine cold, wait a bit and then set it back. The car had many other peculiarities - a manual transmission (of course), no power steering, and the engine had a tendency to overheat in the summer - or, if going uphill, year-round.

Driving it was constant work. Shifting to keep the RPM’s (judging by sound as there was no tachometer), watching the engine temperature, releasing the clutch carefully when going uphill, making a million miniature decisions just to get somewhere. Even using the heating to help control the temperature of the coolant rather than for its intended purpose. My car was not uniquely bad though, just a reflection of technology at the time. Everyone was driving that way.

Fast forward 25-ish years. I get in a car, and a myriad of small computers take care of everything. From the shifting and keeping the RPM’s where they need to be, all the way to the temperature control, everything is automated. And it’s not even a Tesla.

**Compare that to running data operations.** For example, an ETL job - someone has to tell all the moving pieces what to do, and then the configuration needs to be version controlled. It needs to be triggered and monitored. It’s processing and result logged somewhere. Data storage and computing power need to be made available for it. Something (or someone) needs to clean up after it (free up memory, get rid of temporary tables, release workers for the next job etc.).

Go one level deeper, and you start worrying about overall memory management, which hardware is used, load balancing with other jobs, queuing and prioritization, version of some library, ongoing maintenance and updates of the components. There are _a lot_ of moving parts that need to fit just right to make the whole process work, day in and day out. All that while ensuring data and application security, continuity, failover, and providing an audit trail to see the history of executed steps and to be able to go back to prior state as soon as something (inevitably) goes wrong.

**Depending on the underlying architecture, this plethora of tasks could be either simple or difficult (maybe even impossible) to effectively automate. Unfortunately, the state of the industry is that of a universe of one-off, DIY data architectures.** We call this the “self-assembly model”, when architects pick and choose tools for different parts of the stack, and then put it together themselves or with the assistance of all-too-happy-to-help consultants. As a result, no two stacks are created equal and any attempt at system-wide automation becomes an integration project on its own. Take the example of scheduling (the simplest form of automation) - often none of the tools themselves can effectively schedule and monitor the other, so a separate “device” - such as GitLab or Grafana - needs to be implemented, integrated and configured to take over that function.

  
A typical mid-market data stack can easily consist of 7-12 different products. How do you effectively automate in that environment? Yes, you can (with some dedicated integration work) automate jobs across multiple tools, but how about tests of version change of a particular component? How about monitoring of user activity across all those tools for threat detection or proactive support? Those become perhaps less frequent, but nevertheless time-consuming tasks for the data team. And the complexity of the solution grows exponentially with each piece added.

  
**We repeatedly hear that there is a shortage of talent in our market. I think it is not a shortage of smart talent - it’s a surplus of stupid tasks that is the problem.**

Let’s go back to the car example. The driver does tasks that require human brainpower, that machines can’t do (yet). Pretty much everything else is automated and guaranteed by the car manufacturer to work seamlessly together. Why can’t running data ops be more like driving a modern car? Despite the differences in companies and their objectives, the vast majority of the underlying tasks and requirements are the same. Everyone needs jobs to run, data science apps to plugin, data to be secured while easily accessible to those who need them, robust monitoring and notification systems, data profiling and lineage, code version control and development collaboration, user management, and activity audit trail.

**That’s what the Keboola team asked themselves: can we build reusable pieces that can be chained into workflows, and automate _everything_ underneath?** Not just the processes, but the provisioning of the infrastructure for them, continuous testing, code deployment, version control? Make data sharing among users, teams and companies seamless? Turn deployment of new computing backend into the workflow a matter of choosing it from a dropdown, rather than an engineering project?

Yes, there are automation tools. But very often they are just libraries to make the CODING of the automation somewhat faster. You are still writing code that touches the processes, not the data - and only code that touches the data has the highest value.

Hence a mission was born to free our users of the various stupid tasks, the “manual choke adjustments” of the data ops world, to focus on what matters. A few years, hundreds of companies and thousands of users later, our customers take advantage of all that accumulated automatic functionality to easily out-innovate their competition. From a built-in Data Catalog and metadata management to quick-to-deploy project templates anyone, since we solved the basic issues a long time ago, Keboola’s development effort now focuses on expanding the possibilities. Adding more click-to-use backends (Julia, Matlab…), the aforementioned data profiling and metadata management layer, tighter collaboration with popular BI tools and of course, many new **extractors (pssst, that’s the secret word to the** [**Sunken Data Temple game**](http://get.keboola.com/sunkendatatemple)), apps and integrations.

**Data engineers, you can embrace total automation.** You already have the skills needed to do the much more valuable work machines can’t - you just don’t have the time to do it. Automation is the key to competitiveness in nearly every industry, and it has come to the data world. Imagine it working for you - no worry about the little details, no fussing with manual choke, just enjoying the drive and knowing you’re going to the right place safely. What a relief not to have the full weight of the data stack on your shoulders.

If you want to see Keboola in action and experience how the automated data stack feels like, check out our [free trial](http://try.keboola.com).

_“I don’t want to manage Airflow, I don’t have time for that! I can set up an orchestration in Keboola in 5 minutes, that would take 2+ hours of coding there.” Brett Kokot, Director of Product at Roti_
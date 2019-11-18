---
layout: post
categories: events
permalink: Should-you-assemble-your-own-data-stack
title: Should you really assemble your own data stack?
perex: Just because you built it, doesn't mean you should.
date: 2019-11-18 08:00:00 +0000
user: milan-veverka
coverphoto: ''
coverphoto_slider: "/uploads/innovation backlog (1).png"

---
Our team spent the first week of November in San Francisco sponsoring Looker’s annual JOIN conference. We met hundreds of companies who came to talk to us about automated data operations and what benefits they would bring to their organizations.

The Looker conference is somewhat specific in that it to a large degree attracts a technical audience - hundreds of talented data engineers, developers, architects. They come to learn what’s new in the ecosystem and often they come with a particular problem to solve. They are used to the unfortunate status quo of today’s data landscape - despite many (hundreds?) of tools out there, they are on their own in the selection, integration, maintenance, and support of the data stack and its disjointed, often overlapping and competing, components.

While the business people are focused on business outcomes, for the technical folks (all the way up to the CTO), it is just as much about the journey of getting to them. We at Keboola understand them well, after all we are cut from the same cloth. We are hackers, craftsmen, and love a good technical challenge as much as the next guy. We also understand the gravity of technical decisions and the responsibility that goes with making them. So here is a wrap up of the most common conversations we had at JOIN, and how we think about what normal should look like:

**Just because you can, doesn’t mean you should.**

We hear this over, and over again. “But, we don’t need to buy XY, I’ll just write a few lines of Python…” The boss hired you and now he trusts you, and he doesn’t know any better. And he will trust you until you let him down, or leave. And what will you leave behind? How documented and transferable will it be? What kind of skills will be needed to replace you? Building a black box is great for job security, but is it the right path from the company point of view? Unlike the aforementioned table, a data infrastructure will require some serious upkeep and maintenance. Who can do it? What do they need to know? Also, just because you know the tools - do you know how the needs of the organization will develop over time? What is beyond the horizon, and are you designing for that today?

**“But our company is unique…”**

No, it isn’t. Not as much as you think. Or better said - the uniqueness is in maybe 20% of what you do. The rest is plain mechanics of running a business - accounting, payroll, data storage, inventory, data security, vacations, transformations, cashflow, version control. Do you write your own accounting system? Build your own shelves? Make the plates you serve food on? How is a data infrastructure designed specifically for you going to make you unique in the marketplace? It’s not about the delivery trucks, you won’t build a better one yourself - it’s about how you drive them. Spend your creative juices on the 20%, which is truly making you provide unique value to your customers.

**How about vendor lock-in?**

There’s ALWAYS a lock-in of some sort. To something, to someone. You can shift some responsibilities to a company you have a contract with that is motivated to keep it going and has access to expertise and resources they will always employ to keep you happy, or you can lock-in to an employee (or a few) you have today. Employees who may leave at any time, who may eventually reach their potential and won’t be able to take you to the next step, who get sick, take vacations, retire…

**Experience**

Even if you have a crack team, how many different deployments have they seen? How are they prepared for the unexpected? Every problem is brand new. In a platform scenario, however, when the same product is used by 100s or 1000s of companies, chances are a) you’re not the first, not even in your industry b) the problem won’t happen to you in the first place because it was experienced by someone else and designed out long ago.

**Reactive versus Proactive**

DIY architecture by definition always plays catch-up. You build only what you need, and capacities are always scarce. Often you don’t know what you need until you realize you’re missing it, at which point it may be too late to start building it. A platform staying ahead of your needs, on the other hand, gives you the “what can I do with THIS” opening for creativity. You’re getting new features, functions, and capabilities all the time and instead of playing catch-up, you can push your company forward.

**“We’ve already built most of that, now we just need to add this one little functionality…”**

Every time you solve a problem by adding a new tool, you are creating or expanding the network of complexities of your stack. Another user management to integrate. Another disjointed source of logs to be added to the overall telemetry. Another contract, another support line, another security questionnaire. Writing off sunk investments is often painful, but adding another dependency is just increasing your technical debt that will need to be dealt with sooner or later. Not to mention the poor new hires who need to work your unique environment and how to work around it rather than breaking it. There is a reason why companies go through multiple painful re-tool cycles during their growth - what solves this one little issue today may not fit future needs.

**“But, Airflow! Glue!”**

Yes, there are tools out there that help solve some of the issues or to save some work. But since you mentioned Airflow, how do you set up the actual flows in there? You code. Every time you write code that doesn’t directly touch your data, you are wasting time. Reducing that code is good - but eliminating it is better. Imagine - someone who doesn’t even know how to code can be now managing the workflows for you, while you focus 100% on business logic and creating value.

**So, if all this is automated, what is there left to do??**

Innovate and move the company forward! Wouldn’t it be great if the majority of your time wasn’t spent plugging holes or reinventing the wheel if you could actually focus on tasks that bring the company value? Deliver data faster, improve on products, support better analysis and decision? Finally, get to AI and machine learning applications instead of writing endless scripts that just move data around or schedule jobs? How much more value can you produce for the business, and how much easier it will be to justify your next raise? Instead of paving the roads and reinventing wheels, build yourself a pair of wings and do the best work of your life.

So, before buying the next tool, writing the script to bridge a gap between two pieces of software or services you already employ, before you start worrying about how to keep the spaghetti bowl of your architecture together, explore the other option - having a fully managed, automated data architecture. A true, seamless data innovation platform that deals with data problems by design. Give it a try at [try.keboola.com](https://try.keboola.com/).

![](/uploads/74171891_2585990848090901_3583559040623443968_o.png)
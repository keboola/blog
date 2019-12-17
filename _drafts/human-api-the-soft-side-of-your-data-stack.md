---
layout: post
categories: how-to
title: Human API - The Soft Side of your Data Stack
perex: ''
date: 2019-12-17 08:00:00 +0000
user: milan-veverka
coverphoto: ''
coverphoto_slider: ''

---
When studying System Analysis at University many moons ago, one of the golden nuggets of knowledge being offered to us was the distinction between “hard” and “soft” systems. Counter-intuitively, hard systems are the easier ones to work with. They are generally deterministic and hence relatively simple to predict their behavior, regardless of complexity. Engineers love them.

Soft systems, though - different story. They contain **people** amongst their moving pieces. People are notoriously unpredictable. People are every engineer’s worst nightmare and the source of endless strings of frustration. Psychology is rarely a part of an engineer’s curriculum. Simple solutions become less so very quickly. An obvious technical design fails spectacularly when confronted with a human organism - especially the more complex, business or corporate kind.

I was reminded about those lessons several times over the past year or so. A few Keboola customers reached out with the same question - “how do we structure our data team? The technology choice is the easy part, but how to hire? How to build a data culture, to borrow a cliche?”

We’ve seen several scenarios play out over and over again, that underlined the importance of this decision. Consider the data team as the interface between the hard data system (the stack itself) and the soft system of the organization as a whole. This interface (human API) is absolutely critical for the experience the rest of the team will have with your data, and as such is the single most important layer between the data itself and adoption of data-driven thinking in the organization - and therefore its business impact and ROI of the whole investment. Here are those scenarios and how they fared against each other:

## The Data Monarchy

One of the most traditional approaches. Really, an extension of the old times when IT was the only group with skills (and access) needed to create any meaningful reporting. Of course, this system didn’t work (wait a few weeks for a report, just to find out it’s incorrect, anyone?), however, we see it applied again with new tools. Effectively creating a data analytics department that serves the rest of the organization by building dashboards, producing reports. Thanks to the new tools the efficiency is much higher and the analysts here can be closer to the business (them being business/data analysts, not engineers), but we still see two serious disadvantages of this model:

* **Bottleneck** - No matter how big this team is, it needs to handle requests from the organization as projects - assign capacity, order them in a queue, prioritize between departments. The more “data-savvy” the end users become, the higher their requirements, the more pressure on this department, the more conflicts of priorities.
* **Lack of Specialization** - There are many data analysis specializations. Marketing analysis is a different beast than a financial one, and let’s not even consider mobile app event feed or IoT. Yet, a centralized data team needs to make compromises and strongly prefers technical ability over a particular knowledge of a vertical, both outside and inside the organization.

In general, “Report Factories” work well in small setups and very small organizations, and even there only temporarily. Yet once built they are persistent and hard to fix - the lack of capacity/focus becomes a status quo and the organization starts missing out on opportunities without even knowing.

## The Data Anarchy

After the IT centric origins of Business Intelligence, the so-called second wave of BI tools quite successfully pushed the idea of self-serve analytics as a cure to both the bottleneck and specialization problem. Instead of data professionals, let’s enable data amateurs to answer their own questions. Everyone should be able to get their data and build their reports! This “system” creates a high feeling of freedom, empowering business users to go and get their hands on data. The heroes of this era are doctors that are building their own dashboards. Like libertarian ideas, it sounds great at first. In some isolated cases, it may even work for a while (well, from the point of view of that doctor, she is getting her answers, right?) but tends to fall flat in practice. How do we collaborate with this data? How do we share definitions? How do we make sure we’re talking about the same thing? Simply put, how do you do something as simple as count customers if we have (real story) 7 different definitions of that word within our organization? When that particular person leaves, what’s left behind, who will understand their work and continue developing it further? John Nash was right and Adam Smith was wrong - the best outcome doesn’t come from every member of society doing what’s best for them. Someone needs to take care of the needs of the organization as a whole. This then falls back on IT (usually) who are then frantically (and expensively) trying to bring some order and governance to the chaos, often running into resistance from the business who got hooked on the easy access kool aid.

## The Data Oligarchy

Another version of this approach is similar in structure but different in magnitude - instead of people being fed up, departments in large organizations decide to stop relying on IT for their data needs and to build those capacities internally. Very often, it’s Marketing that leads the charge. It is actually quite logical. Marketing operations are more and more data-driven, decisions need to happen fast and the types of questions and analytics are highly specialized. You need people who understand marketing AND data to support those functions. It’s a specialty of its own. In technology organizations, Product is another of those renegade departments that has the tendency to split away from their dependency on IT and build their own competency.

What is the problem here? We are introducing silos. Not each person, but each team (while organized internally) may be using different basic approaches, again different data dictionaries, different data storage policies. Data within the organization becomes divided into “our data” and “their data”, with sharing being a hassle (“YOU needing MY data is not MY problem - get your own!” - ridiculous as it sounds it actually happens more often than one would think). While it is completely obvious that Marketing would benefit from access to Product data (and vice versa!), each has the tendency to play in their own sandbox, creating pockets of non-transferable knowledge. Business continuity is at risk, and sub-standard (what are the standards, anyway?) architecture decisions are being made.

## The Data Democracy

In a working system, we have a support network that enables people to exercise their freedoms. This approach is a clear winner in our line up of data team design strategies. While not without its own challenges (what democracy is, after all), it addresses the issues in a way that focuses not on solving problems, but on building assets inside the organization that prevents future problems from emerging - or simplifies their solutions.

In this system, there is a dedicated data team. Their job is not to deliver insights, though, their role is to ensure data availability and quality, and enable departments to grow their own capabilities in CONSUMING the data. The data team serves as curators of the data assets (usually materialized via a Data Catalog), and mentors/helpers to department-specific applications. While departments may use different tools for analyzing and consuming the data, generally they use the same interface(s) to access it and to contribute. That way, a marketing analyst has just as easy access to product data as to the data from his own department.

We call this “embedding analysts into departments”. In effect, creating a data tribe that permeates the whole organization, a cross-departmental group of people that have data in common. That way, whoever is serving the needs of executives and decision makers for example in the finance department is a finance expert themselves - speaking the same language and having the time and focus to understand those needs intimately. And they have the whole data tribe to lean on for mentorship, best practices and help with any data engineering tasks (providing data access and quality).

As a result, the data asset of the organization grows with each new application, and the chance the data needed for solving any new problem is there ready to grow over time.

Keboola’s most successful customers use the latest approach. They curate the data catalog, and use multi-project architecture for various functions while maintaining the audit trail, user management and data lineage/governance provided by the platform itself. From small customers with less than a handful of users to large enterprise with hundreds of different data applications projects running simultaneously, this model has proven its worth many times over.

I would love to hear your experience with data team structures - feel free to comment here or reach out to me via LinkedIn! If we’re not connected yet, please mention the article when reaching out!
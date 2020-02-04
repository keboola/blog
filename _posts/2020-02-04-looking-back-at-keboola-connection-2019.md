---
layout: post
categories: product
permalink: looking-back-2019
title: 'Looking back at Keboola Connection: 2019'
perex: 'In 2019, there were four major product themes: UX/UI, Data Science, Data Ops,
  Scaffolds. '
date: 
user: milan-veverka
coverphoto: ''
coverphoto_slider: "/uploads/maddi-bazzocco-waNAJOI7Jz8-unsplash.jpg"

---
For Keboola, 2019 was a year of growing—and growing up. We evolved a lot, on both the business and product sides. In this blog, I want to give a quick overview of the changes, as well as give you some indication of what to expect from us in the next 6 months. Many of those improvements were inspired or directly driven by our users - there is a “wishlist” button available for everyone right in the Keboola Connection UI. We want to thank our engaged users for all their input - please keep the wishes, ideas, and comments coming!

![Screenshot with feature wishlist](https://lh5.googleusercontent.com/rLDJb4jw9fLpXt5GKLNcrZRIwFGgAri07mEfC8ljSaXS3wKe01qFNpYrNTJFhaau5MBx_wdaxYQjFU2d-n2cwmQZPEViXaOzxrESk72EAajgcXBOpz4g4FDQPRgYCiXwzXmQTU7F =624x113)

We had several key product themes for our 2019 roadmap:

* **UX/UI** – Making the platform more user-friendly, with a strong focus on productivity and simplicity.
* **Data Science** – Adding new backends and integrations, giving data scientists more of their favorite tools right at their fingertips
* **DataOps –** Removing as many pain points as possible for enterprise architects by reducing unnecessary complexities and tasks
* **Scaffolds** - Ready-to-go, off-the-shelf workflows that you can deploy in one click

Let’s take them one by one:

## UX/UI

UI redesign is not about the color and the locations of buttons; it’s about the whole framework and what it allows us to do for you going forward. Our UI team took most of the year to do this, releasing the new UI partially in August and completely in November. There are still some pieces that will be further enhanced, but the foundation has been laid, and we’ve already introduced many new features that take full advantage of the new lattice.

You might’ve noticed the new Orchestrator Settings, updated Transformation UI with more ergonomic listing of input and output mapping, or the recent addition of improved navigation between various projects and organizations. A massive step forward is the new Dashboard, which now gives a quick overview of the state of a project, recent changes to configurations, user activity, jobs, and orchestration runs, all on one page.

The original “Overview” screen was really under-utilized, while now it provides quick links to items that are being worked on, or are in need of attention - saving clicks and time. A recent addition to that is the log of changes since the user’s last visit, which is a fantastic time-saver. And yes, it all came with new, fresh colors and buttons :).

## Data Science

R is not the only language used for data science, and our users had been asking for more—especially Python and Julia. Both backends are no longer in beta, and Keboola Connection provisions Jupyter notebooks in the cloud, without the need of searching for and then downloading data to a separate working environment.

We’ll talk a bit more about data science in the 2020 outlook as we’re preparing quite a few major improvements to Keboola Connection that will enhance its utility as the data scientist’s primary workbench. As well access to data from across the organization has been made completely seamless with the Data Catalog. All in all, there are now mere seconds separating an idea and a working environment with your favorite tool and required data ready to go.

## DataOps

> _“DataOps is a combination of tools and methods, which streamline the development of new analytics while ensuring impeccable data quality. DataOps helps shorten the cycle time for producing analytic value and innovation, while avoiding the trap of “hope, heroism and caution.” -_ [_dataopsmanifesto.org_](https://www.dataopsmanifesto.org/)

Automation, Simplification, Transparency; those are the key elements of our dataops philosophy. We can say that we’re making our users’ lives easier by automating whatever can be (and we’re pushing that envelope further and further as we go - more about our obsession with automating DataOps [here](https://blog.keboola.com/data-ops-and-automation)), simplifying what is left, and being completely transparent about everything that’s happening. This paragraph would get pretty long if I went into all the details, so I’ll break them into a few bullet points:

* **Time Credits** – While the introduction of our new billing method via time credits seems, at first glance, to be “just a pricing policy change,” its implications for our customers are much more profound than that. It provides a single-metric of usage across the whole stack, allowing incredibly detailed attribution of costs to different workstreams, projects, users, teams… It also lifts the veil to help users find areas that are generating the highest costs, and to optimize them accordingly. Every job, every operation has its real consumption value attached to it, making the cost easy to see and anticipate.
* **Project Dashboard** – I already mentioned this in the UI/UX section, but its value for administrators can’t be overstated. Any troubleshooting becomes a breeze when all that information is right there immediately after opening a project.
* **Telemetry Data** – We can’t anticipate every question an administrator may ask of the platform, so we use the shared infrastructure and our Data API to produce very detailed logs and job structures. We provide this as a curated data feed to our customers, who can then build their own analytics, or even deploy AI-driven monitoring and anomaly detection to identify threats and unusual behavior.
* **Graph Database/Fingerprinting** – Every action, whether initiated by a user, process, or API call, gets stored in a graph database behind the scenes. While this may belong to some “Other” category, as it is deeply buried in the platform, it drives so many new current and near-future features, that it deserves its own paragraph.
* **New Job Detail report** – Understanding the most elementary component of a process, called a “job” in Keboola, is critical for troubleshooting, optimization efforts, etc. The new overview page provides all the details in a single view, with the ability to dig even deeper as needed.
* **Data Catalog** – That’s (another) big one. Sharing data and collaborating on it within an organization is a surprisingly complex issue (one that spawned a whole category, or maybe two). The two traditional approaches—either providing data on-demand or giving access to the database—just don’t scale. They either become security risks or a nightmare for the administrators—or, in many cases, both. Keboola’s holistic approach to data ops removes those issues all together. Using the data catalog, it is simple to publish any data either to all users or to a specified subset, while automatically maintaining data lineage and tracking the use of the data across the whole organization. This approach also gives visibility into how the data is being used by others, reducing the risk of wheel reinvention efforts. And unlike standard data catalogs that only point the users in the direction of data they are after, ours lets them access the data instantly (with the right privileges, of course), or request access in one click.
* **MS Azure Availability** – Keboola Connection is now available in Microsoft Azure as well as AWS.
* **Single-Tenant Deployments** – We can now provide single-tenant deployments of Keboola for customers with heightened data isolation and access requirements. Along with our single tenant and our standard multi-tenant setups, we also provide a hybrid solution (processing in Keboola’s cloud, storage in the customer’s).

## Scaffolds

As mentioned in the DataOps section, we are all about automation, the anticipation of what the user may want to do next, and simplifying that journey for them as much as possible. We automated the infrastructure layer, the data management, DataOps - what’s left is the business logic, the “what” our users are trying to achieve. With the introduction of Scaffolds we help even in that area - providing a list of ready-to-go, often used workflows that can be deployed in one click. Using them is as easy, or easier, as setting up a component.

Select the scaffold that best fits what you are trying to build, provide a few inputs (such as data source credentials or parameters for some of the configurations included) and the automation will take care of the rest. A whole complex workflow or business app can be deployed in seconds. We introduced Scaffolds in a separate [blog](https://blog.keboola.com/accelerate-your-end-to-end-data-pipelines-with-keboola-scaffolds) in November.

## Looking forward to 2020

So, what should you expect in 2020? A year is a long time in the Keboola world, so you can expect a lot - just look at the list above. We will stick to the same main guiding principles, saving you more time when performing everyday tasks as well as expanding the possibilities of what you can build and achieve.

To keep up-to-date with our developments and new features, make sure to [sign up for our Product Newsletter](https://mailchi.mp/2391ccfc42b0/o2uwbbq2tq)!

We listen to our users, please do not keep your ideas, opinions and especially criticisms to yourself. Using the Wishlist feature ensures that our product team hears what you have to say, and make the platform better for you - and everyone else.
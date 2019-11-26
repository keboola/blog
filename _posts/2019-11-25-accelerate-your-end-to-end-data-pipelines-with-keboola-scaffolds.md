---
layout: post
categories: how-to
permalink: Accelerate-Your-End-to-End-Data-Pipelines-With-Keboola-Scaffolds
title: Accelerate Your End-to-End Data Pipelines With Keboola Scaffolds
perex: ''
date: 2019-11-25 08:00:00 +0000
user: masha-reutovski
coverphoto: ''
coverphoto_slider: "/uploads/scaffolds (1).png"

---
Automation brings incredible [value to data teams and hyper-growing companies](https://blog.keboola.com/how%20high-performing%20teams%20use%20automation). It removes hours of sweating over repetitive and mundane tasks, which frees up time for data engineers, analysts, and scientists to get on with more engaging and revenue-generating work.

Now, imagine that you can extend the benefits of automation beyond the selected repetitive tasks... to the entire data pipeline.

Enter Keboola’s scaffolds: a new way of getting data workflows to production in a one-click deployment.

## What is a scaffold?

Scaffolds are like recipes for data products. You can think of Keboola Connection as a smart, futuristic kitchen that makes some of the best meals from these recipes.

Imagine walking up to a shiny machine displaying pictures of tasty dishes. Click on the picture of the food you want to eat and _voila!_ There’s a meal ready for you.

In the background, Keboola Connection reads the scaffold recipe. It selects the ingredients it needs from the cupboards then washes them, chops them, and mixes them up. It sautés and slowly simmers them until the meal is ready for your enjoyment. All according to the recipe that you selected.

Need an analysis of digital marketing? A scaffold can quickly set up Keboola to connect to your advertising APIs and consolidate all expected metrics in an easy to understand dashboard. Curious about your subscription business? Use a scaffold to calculate all of the metrics that you require.

Feeling the creative juices flowing? You can also take the scaffold recipe into your own hands and adjust it to your taste.

## Advantages of scaffolds

There are several advantages to implementing scaffolding within your organization:

1. **Accelerate data production**. With one-click scaffolds, you can quickly deploy a fully-fledged data workflow to production. No time wasted in discovery, acquiring, organizing, cleaning, transforming, and modeling data step by step manually. It also means that no time is squandered on project management, communication between departments and code hand over. Scaffolds do everything from end-to-end, streamlining the usually fragmented data pipeline into a single process.
2. **Speed up POCs**. Proof of concepts become more widely available. With the rapid deployment, you can soon check if a data workflow makes sense for your organization’s needs - and of course, you can use the scaffold-generated project only as a basis, a starting point for further expansion and customization.
3. **Limit discovery costs**. One-click scaffolds allow you to quickly discover new insights without having to decide whether the potential benefits of a model/visualization would outweigh the cost of building the entire data pipeline for that model.
4. **Unburden your data team.** With pre-built data pipelines, the data team can cover a vast array of company use-cases without sweating over the details. In turn, this frees up their minds and hands for other work that might be more interesting or challenging.
5. **Trust your models**. With pre-made pipelines, you do not need to reinvent the wheel with every new dashboard and model. Scaffolds are the industry ‘golden-standard’ way of doing things. You can confidently deploy a scaffold instead of second-guessing, testing, and checking whether the data has been modeled correctly.
6. **Set a baseline**. With machine learning models, in particular, the name-of-the-game is to continually improve the model. Scaffolds allow you to swiftly deploy a model that can act as your baseline, upon which you can develop further.

## What are Keboola’s scaffolds capable of?

Scaffolds, like recipes, come in many different varieties, and you can mix and match. Just to name a few:

* Combine customer reviews from multiple locations, perform NLP entity, relations and sentiment analyses, and save the results in your data warehouse.
* Get all of your Zendesk support tickets correctly formatted in a Snowflake data warehouse.
* Analyze orders from Salesforce, extract monthly recurring revenue (MRR), and save the results in a database for drill-down analytics.
* Extract companies, contacts, deals, campaigns, email events and other data from Hubspot. Automatically format it into a CRM-ready schema and save the data to a location of your choice.
* Extract output from financial software like Xero or Quickbooks and make it ready to publish in internal data catalog to enrich existing workflows and analyses

As you can see, scaffolds can accelerate deployment of any project - from simple data extractions and transformations to advanced modeling, analysis, and machine learning applications. What’s even better, any project or workflow can be turned into a scaffold. A single click deploys the scaffold and a wizard makes sure all the required information (such as data source credentials) is accounted for. A few seconds later a completely new workflow appears in the project - not as a black box, but as open-code transformations and component configurations that can be modified and built upon. The scaffolds can even tag and describe tables and buckets for quick sharing into the Data Catalog, or for other scaffolds to recognize the patterns and assemble themselves into more complex workflows and use cases.

The sky's the limit when it comes to scaffolds, and Keboola adds new ones regularly to keep your options fresh: 

![](/uploads/scaffolds1.png)

_The scaffolds currently featured by Keboola_

## Step by step guide of Keboola’s scaffolds

Let’s take a look at how you can [use scaffolds within Keboola Connection](https://help.keboola.com/components/scaffolds/). Once logged in, navigate to _Components > Scaffolds_.

![](/uploads/scaffolds2.png)

_Start your scaffolding journey from the home screen._ 

You will see a list of the scaffolds that Keboola already offers. As new scaffolds are being added to the list, you can use the search bar to find the one that you want to use. (Pro tip: start typing the name of the app from which you want to analyze/extract data)

![](/uploads/scaffolds3.png)

Let’s say that you want to track and analyze customer reviews (did someone say natural language processing with machine learning?). Natural language processing can be quite [complex and laborious](https://towardsdatascience.com/natural-language-processing-nlp-for-machine-learning-d44498845d5b), but with Keboola it’s just a matter of clicking a few buttons (e.g. “+ USE THIS”). 

![](/uploads/scaffolds4.png)

_A drill-down look at the components of the ReviewTrackers Reviews to Snowflake scaffold_

Once we succumb to the appeal of the blue button, we can see that the scaffold is already doing everything for us (✅for the win). All we need to do is connect our ReviewTrackers account. 

![](/uploads/scaffolds5.png)

_A green checkmark next to every procedure in the scaffold shows us which procedures are already automated. All we need to do is log into ReviewTrackers._

Press “→ USE SCAFFOLD” to see the magic unfold. In a matter of seconds, the entire pipeline has been run from the end (reviews) to end (analysis and warehousing). You can even inspect the particular procedures that have been deployed at each step - just click on the link on the right-hand side.

![](/uploads/scaffolds6.png)

_Breakdown of the scaffold. Clicking a blue link on the right allows us to explore that particular procedure._

For example, we can see that the scaffold has created 7 tables for us:

![](/uploads/scaffold7.png)

If you want to visualize the results, you can now connect your Looker account, or use the already processed data for further machine learning.

_Voila!_ Your meal is served. _Bon appétit._

## Curious about what scaffolding can do for you?

Try scaffolding for yourself with Keboola’s 14-day no-questions-asked trial. Go to [try.keboola.com](http://try.keboola.com) and use the code **_guide-mode_** to activate your free trial account.
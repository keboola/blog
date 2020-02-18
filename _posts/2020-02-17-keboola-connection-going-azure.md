---
layout: post
categories: developers
permalink: keboola-connection-going-azure
title: Keboola Connection Going Azure
perex: Back in April last year, we made the business decision to make Keboola Connection
  available on Azure too (no, we're not quitting AWS). The story behind the decision
  is quite simple — our customers want it.
date: 2020-02-17T23:00:00.000+00:00
user: ondrej-hlavacek
coverphoto: ''
coverphoto_slider: "/uploads/coverAzure.jpg"

---
![keboola-devs-paris](/uploads/coverAzure.jpg "Keboola developers ath OpenHack Paris")

## Planning

Originally, our application only ran in AWS, and had some deep dependencies on the AWS services… That sounded like a headache.

So where to start? We laid out a plan to migrate parts of the platform to Azure technologies separately, while keeping the unmigrated rest of the technological stack in AWS (with peering in between). With this approach, we can migrate the stack in parts and still keep the whole thing running — no big bang, but small steps. The implementation stages are defined to capture their business importance and business impact.

1. Data storage — Customer's data is stored in Azure, but all processes (e.g., [transformations](https://help.keboola.com/transformations/)) are still executed in AWS.
2. Data manipulation — All data manipulation happens in Azure, but platform metadata (e.g., job metadata, component code) is still handled in AWS.
3. Metadata services — Everything runs in Azure, and there is no connection to AWS.

## Implementation challenges

Our platform is fully containerized, which makes the transition a lot easier, but we still use many proprietary solutions and rely heavily on managed services in AWS. As our operations team is very small (and focuses mainly on SRE), managed services are essential for us — we have no interest in running our own [Elastic](https://www.elastic.co/) clusters, for example. Each service we use in AWS has to have its counterpart in the Azure stack and should ideally be generic enough so that we can use additional cloud providers in the future as customers require them (we're looking at you, [GCP](https://cloud.google.com/gcp/)). We have encountered a few different scenarios:

**Drop-in replacement** is the easiest — the application doesn't change — it only connects to another endpoint (e.g., [Amazon RDS for MySQL](https://aws.amazon.com/rds/mysql/) — [Azure Database for MySQL](https://docs.microsoft.com/en-us/azure/mysql/)).

**Similar service** offers the same functionality but with a different API. We have to change the application to support both APIs but our internal APIs don't change (e.g., [Amazon S3](https://aws.amazon.com/s3/) — [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/)).

**Switching to a non-proprietary technology** requires some coding, but will allow us to be more flexible in the future. We've decided to leave [Amazon Elastic Container Service](https://aws.amazon.com/ecs/) in favor of [Kubernetes](https://kubernetes.io/), which offers managed services on all major clouds. Azure is now our proving ground and if [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/) and Kubernetes prove successful, we'll switch to [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) too.

**Self–hosting** is not something we've had to do, at least not yet, but we have to keep it in mind. Some cloud providers may not offer managed services we use (e.g., Azure doesn't have managed Elastic) and switching to something else may be more difficult than self–hosting, at least before we figure out a different solution.

## Automation

Our CI/CD pipelines run on [Travis CI](https://travis-ci.com/). The Travis job builds, tests and deploys the application automatically, but the infrastructure is a different story. Launching a new instance (region) of Keboola Connection is a tedious manual process described in long README files across multiple repositories.

The main goal of our Azure adoption is to have the ability to run single tenant instances in customers' subscriptions, so it also makes sense to embrace automatic infrastructure deployments.

I didn’t want to start rewriting the existing code, so I decided to append [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) to the existing processes and only use them for the new, and Azure–related stuff.

**Application deployment** is triggered by a successful Travis CI job (which is triggered by a commit on the master branch) and launches a DevOps Release Pipeline that deploys the latest image of the application from [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) into Azure Kubernetes Service. This is fairly straightforward.

**Infrastructure deployment** includes only Azure resources and exclusively runs in Azure DevOps. We have the infrastructure described in a GitHub repository with [Azure Resource Manager](https://azure.microsoft.com/en-us/resources/templates/) templates coupled with simple Bash scripts that handle passing variables between templates. All variables (nodes count, database size, etc.) are stored in the DevOps Release Pipeline. A new commit in the master branch of the repository triggers a new deployment/update of the infrastructure. Of course, the update runs in a staging environment first and if it's successful, a production update is executed.

## Consultations

We've contracted a few local consulting companies (namely [NETWORG](https://networg.com/) and [BoldBrick](https://www.boldbrick.cz/)) to help us with understanding and designing the resources (Azure) and processes (DevOps). In hindsight, it was a very clever decision that helped us avoid many costly dead ends. We'll stick to this approach.

## Look and feel

So far, I can tell Microsoft has made a huge leap forward. The whole environment feels developer friendly — there's a lot of great documentation, I love their integration with GitHub (all documentation issues are stored and handled in GitHub), and Microsoft staff watches community boards and helps where possible. I also tried the Azure email support channel and had a great experience.

There are a lot of free Azure training and bootcamp events backed by Microsoft. We were even able to get free help from internal Microsoft experts.

Sometimes you can feel Microsoft's corporate (old–school?) approach, but it mostly made me smile, rather than worry — e.g., their support staff called me when I hadn't replied to their response in 24 hours to check if everything was OK.

Microsoft sure expects we'll spend some money there, but the difference between its approach and AWS's approach is like night and day.

## What's next?

We're not finished. Lots of challenges are still ahead of us, but this was expected. We wanted to get familiar with the new environment before the s**t hit the fan and we were facing more complicated challenges. We'll keep working and sharing our experiences with Azure and DevOps (and a multi–cloud environment). If you have any relevant experience, please let us know. We're here to learn, and would love to hear from you.
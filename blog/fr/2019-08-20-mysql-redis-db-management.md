---
date: 2019-08-20
slug: take-the-worry-out-of-managing-your-mysql-redis-databases
title: Take the worry out of managing your MySQL & Redis databases
image: 'https://assets.digitalocean.com/ghost/2019/08/MySQL_Redis_blogheader_lockup.png'
category: 'product'
---

Our mission at DigitalOcean is to simplify the cloud so you can focus more on building apps and less on managing the underlying infrastructure. To that end, we introduced Managed Databases for PostgreSQL earlier this year, which removes many of the hassles in maintaining PostgreSQL databases. Our team has been hard at work these past few months, and we are so excited to finally launch Managed Databases for MySQL and Redis! You can now spin up MySQL and Redis database clusters with just a few clicks, without having to worry about configuring, managing, scaling, updating, and securing your databases.

# Why you need Managed Databases

If you are building a modern app or website, it’s very likely you will need a database. Databases are one of the most critical components of an application. They should provide terabytes of storage, be able to process thousands of I/O operations per second, and allow data access with minimum latency. If your app usage grows, the database needs to scale easily and quickly to support millions of users.

Relational databases such as MySQL and PostgreSQL are widely used in the market. Typical use cases include traditional CRUD websites that need persistent storage and an ability to quickly retrieve data from the database.

Redis has gained a lot of momentum in the last few years as an open source, in-memory data structure store, used as a database, cache, and message broker. Typical use cases include apps with real-time analytics, high-speed transactions, and machine learning.

Whether you are using MySQL, Redis, or PostgreSQL, building and managing database clusters from the ground up is a herculean task. Developers often spend valuable time and resources on database management, which prevents them from focusing on building and enhancing apps.

We introduced Managed Databases to simplify the lives of developers by addressing these common challenges:

- Determining the optimal infrastructure needed to host your databases is time-intensive
- Scaling the infrastructure that supports your database is often a slow and expensive task
- Implementing reliable failover processes is difficult
- Over-provisioning of underlying infrastructure leads to increased costs
- Setting up a complete and reliable backup and recovery process requires a lot of effort
- Maintaining and updating databases often needs dedicated personnel

## How Managed Databases work

We're proud to extend the simplicity that DigitalOcean is known for to Managed Databases. Developers of all skill levels, even those with no prior experience in databases, can spin up database clusters with just a few clicks. Select the database engine, storage, vCPU, memory, and standby nodes and we take care of the rest. The following database engines are currently supported:

- MySQL (version 8)NEW
- Redis (version 5)NEW
- PostgreSQL (version 10 and 11)

Managed Databases are built on top of our core compute platform and use local SSD storage, which makes them lightning fast. In addition to a simple dashboard, you can manage your database clusters programmatically with the DigitalOcean API.

# Benefits of Managed Databases

Worry-free setup & maintenance: Save time by launching a database cluster with just a few clicks. Never worry again about security patches to the OS or database engine – once a new version or patch is available, simply click a button to enable it.

High scalability to support your growth: You can scale up at any time with no impact to your application. You have flexibility, so you can spin up read-only nodes to scale read operations or remove compute overhead from reporting requirements. This also keeps expenses in check as you reduce overprovisioning of infrastructure.

Free daily backups with point-in-time recovery: We automatically back up your databases every day. If things go wrong, you can easily restore data to any point within the past seven days.

Automated failover to maximize availability: In the event of a failure, Managed Databases will automatically fail over to a standby node and minimize downtime for your customers.

End-to-end security: Databases run in your account’s private network, which isolates communication at the account or team level. You can restrict requests to your database from the public internet by whitelisting specific inbound sources. Data is encrypted when at rest and in transit to prevent cyberattacks.

# Regional availability

There is a huge demand for Managed MySQL and Redis among customers. In order to provide the best user experience, we plan to do a phased roll out of these engines. The table below provides tentative timeline for the data center availability. Please refer to our release notes for the most up-to-date information.
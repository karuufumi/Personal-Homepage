---
title: Why I Did Not Use Neon
description: Why Neon felt too specialized for my current student projects, despite being a capable serverless Postgres platform.
date: 2026-07-25T00:00:00+07:00
tags: [Neon, PostgreSQL, Databases, Deployment, Student Projects]
featured: false
---

I tried using Neon for one of my projects.

I really wanted to like it. Serverless Postgres sounds nice. The dashboard looks clean. The idea is good. Branching, autoscaling, modern developer experience, all that. On paper, it feels like something I should enjoy.

But in practice, I did not.

My main problem was not even the database itself. It was the setup experience around the API and connection flow. Neon felt a bit too specialized for what I needed. The API and connection model were not impossible, but they were specific enough that I had to slow down and keep checking what exactly was expected.

And somehow, setting up the connection took me around two days.

Two days.

For a database connection.

That is the kind of thing that makes you stare at your screen and reconsider all of your life choices.

To be fair, maybe part of it was my fault. Maybe I misunderstood something. Maybe my project setup was annoying. Maybe I was tired. All possible. But from the perspective of a student building a practical full-stack project, the experience still felt heavier than it needed to be.

At some point, I was no longer thinking about the actual feature I wanted to build. I was thinking about connection strings, environment variables, driver behavior, API-specific details, and why this supposedly simple setup was taking so much time. That is usually a bad sign.

I think Neon makes sense for some teams and some projects. If you need serverless Postgres, branching workflows, scaling behavior, and a more advanced database platform, then sure, it can be a good option. I am not saying Neon is bad.

I am saying it was too much for my situation.

Some projects do not need that level of scaling. This is something I have started to believe more as I build more student projects and portfolio projects. Not every app needs to be ready for millions of users. Not every backend needs a complicated cloud-native story. Sometimes the project just needs a normal database, predictable setup, and enough reliability to support the actual features.

Scaling is important, but scaling too early can also become a distraction. It is very easy to spend time preparing for traffic that does not exist yet, while the core application is still unfinished. I have done that kind of thing before. It feels productive because the tools sound professional, but sometimes it is just procrastination wearing an infrastructure hoodie.

For my own projects, I usually care more about speed of development, simple deployment, and not fighting the platform too much. If the database setup takes longer than building a useful feature, I start to question whether I picked the right tool.

That is why I did not continue with Neon.

Not because it is useless. Not because it is badly made. But because, for my current projects, it felt too specialized, and the setup cost was not worth it.

Maybe I will come back to it later when I actually need what it offers.

For now, I would rather use something boring that connects quickly and lets me build the actual product.

Very revolutionary idea, I know.

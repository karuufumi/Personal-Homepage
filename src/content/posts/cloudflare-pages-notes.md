---
title: Cloudflare Pages Deployment Notes
description: A short, practical record of shipping static work with a small operational surface.
pubDatetime: 2026-05-28
tags: [Cloudflare Pages, Deployment, Astro]
---

## The premise

Static deployment is a good default for a portfolio: fast, low-maintenance, and easy to reason about.

## Working through it

Astro keeps pages as HTML by default, which suits a case-study site well. The source stays small, the build output is portable, and Cloudflare Pages provides a simple path from a Git repository to a global edge deployment.

## Current takeaway

The practical lesson is to avoid operational machinery until the portfolio actually needs it.

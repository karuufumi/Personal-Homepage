---
title: Anomaly Detection Needs an Investigation Path
description: Why a useful alert should lead to context, not just a surprising number.
pubDatetime: 2026-07-14
tags: [Observability, Anomaly Detection, Systems Design]
featured: true
---

## The premise

An anomaly is only useful when someone can understand what changed, where it changed, and what to inspect next.

## Working through it

A detection rule should be connected to service context, a time window, a useful baseline, and the relevant logs or traces. Without that path, alerts become interruptions rather than evidence.

## Current takeaway

The value is not in flagging every deviation. It is in shortening the path from an unusual signal to a responsible next action.

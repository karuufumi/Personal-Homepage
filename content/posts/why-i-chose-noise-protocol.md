---
title: Why I Chose the Noise Protocol as a Personal Project
description: Revisiting computer networks through a smaller, learning-oriented secure communication protocol project.
date: 2026-07-22T00:00:00+07:00
tags: [Noise Protocol, Computer Networks, Applied Cryptography, Python, Personal Projects]
featured: false
---

I chose the Noise Protocol as a personal project partly because I wanted to learn applied cryptography, but also because I wanted to revisit Computer Networks properly.

Not “properly” as in reading slides before an exam and telling myself I understand TCP. I mean actually building something where two programs talk to each other, exchange messages, keep track of state, do a handshake, and then communicate securely. Something where the network is not just a diagram anymore, but a thing that breaks immediately if I misunderstand it.

This also came from an older Computer Networks assignment I had: a BitTorrent project.

That project was… not good.

The idea was actually interesting. BitTorrent is a real protocol, and implementing even a simplified version of it should have been a good way to learn peer-to-peer networking. But at that time, I was not ready for it. I did not really understand protocols well enough, I was not comfortable with Python, and I definitely did not know how to write multithreaded code properly.

Basically, I was fighting three things at once: the protocol, Python, and concurrency. And I was not good enough at any of them yet, so the project became messy very quickly.

I remember having a lot of terms in my head: peers, trackers, pieces, requests, responses, sockets. But they did not form a clear system. It was more like a cloud of words that looked technical but did not really help me write better code. I knew the project was supposed to work, but I did not fully understand what each part was supposed to do.

And when multiple peers had to communicate at the same time, things got worse.

Networking code is already annoying when it is simple. Once concurrency enters the room, it becomes very good at exposing every weak part of your understanding. The program does not fail in a nice clean way. It just hangs, sends the wrong thing, receives something unexpected, or works once and then never again. Very educational. Also very painful.

Looking back, I do not think the BitTorrent assignment was useless. It was bad for me at that time, but it showed me what I did not understand. I was trying to build a networking system without enough foundation to build one.

So instead of pretending that never happened, I wanted to come back to Computer Networks through a smaller and more focused project.

That is where the Noise Protocol came in.

Noise is interesting because it is not a full application like BitTorrent. It is more like a framework for building secure communication protocols. That made it easier for me to focus on the parts I actually wanted to understand: handshake patterns, key agreement, encryption, authenticated messages, and how two endpoints move from “we are talking over an unsafe channel” to “we can now send encrypted messages.”

It still touches Computer Networks, but in a more controlled way.

I can think about the connection. I can think about message order. I can think about what each side knows at each step. I can think about what happens before and after the handshake. It gives me a small enough system to reason about, but still serious enough to be useful.

The project is not meant to be production-grade cryptography. I am not trying to write a serious security library. That would be a terrible idea. My goal is much simpler: implement a simplified version so I can understand how secure communication is structured.

In a way, this project is my replacement for that old BitTorrent assignment.

Not because Noise and BitTorrent solve the same problem. They do not. BitTorrent is about peer-to-peer file sharing. Noise is about secure protocol construction. But for me, they are connected by the thing I failed to understand before: how programs communicate through a protocol.

This time, I want to slow down.

Instead of jumping straight into a large peer-to-peer system, I am starting with a smaller protocol flow. Instead of treating networking as just “send some bytes through a socket,” I am paying more attention to message structure, state transitions, and what each side is supposed to do.

I also want to get better at Python through this project. Not just writing small scripts, but writing code with some actual structure: protocol states, connection handling, serialization, error handling, and maybe some basic tests. Nothing too dramatic. Just enough to avoid repeating the same old mistakes.

The funny thing is that failing at the BitTorrent project made this project more meaningful.

At the time, it just felt bad. I thought the assignment was bad, I was bad, Python was bad, and probably the universe was also bad. Very reasonable and mature analysis. But now I can see the problem more clearly. I was trying to build something before I understood the pieces.

Noise feels like a better second attempt.

It gives me a reason to review Computer Networks from a practical angle. It also connects with my interest in applied cryptography and secure software systems. And because it is an implementation project, it forces me to actually test what I think I understand.

That part is uncomfortable, but useful.

So yes, this project is partly about cryptography. But it is also about going back to an old weakness and trying to fix it properly.

Or at least trying to.

Which is still better than pretending the BitTorrent assignment never happened.

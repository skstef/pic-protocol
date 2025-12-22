---
slug: Welcome to PIC
title: Welcome to PIC
authors: [nicolagallo]
tags: [pic, authorization, security, ai-agents]
---

**PIC (Provenance Identity Continuity)** is a new authorization model that changes how we think about trust in distributed systems.

For 40 years, security has been built on Proof of Possession: "Do you have a valid token? Come in."

But possession can be stolen. And trust doesn't survive multiple hops.

<!-- truncate -->

## The Problem

Today's systems verify possession at each hop:

- Service A has token. Ok.
- Service A calls Service B. Service B checks its own token. Ok.

Nobody asks:

- Who started this?
- What were the original bounds?
- Is this a valid continuation?

Each hop restarts. Origin lost. Chain broken.

This is why AI agents are breaking everything.

## The Solution

PIC flips the model.

Old question: "Do you have a valid token?"

New question: "Can you prove you can continue this chain?"

Every action carries:

- **Origin** — who started. Immutable.
- **Authority** — what's allowed. Can only shrink.
- **Continuity** — proof linking every action to the source.

## Why It Matters

You tell an AI: "Book a flight, max €500."

AI calls booking. Booking calls payment. Payment calls bank.

Fifty hops. Doesn't matter.

Every hop: origin is you. Authority is €500.

AI tries €5000? Rejected. Someone intercepts? Nothing to steal.

## Get Started

- Read the [PIC Specification](https://github.com/pic-protocol/pic-spec)
- Explore the [formal proofs](https://zenodo.org/records/17833000)
- Join the discussion

Not "what do you have?" — but "can you prove you can continue?"

That's PIC.
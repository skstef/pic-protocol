---
slug: welcome-to-pic
title: Welcome to PIC
authors: [nicolagallo]
tags: [pic, authorization, security, distributed-systems, ai-agents]
---

**PIC (Provenance Identity Continuity)** is a formal model for authorization
in distributed systems.

PIC starts from a simple observation: **authority is not an artifact that can be possessed — it is a property of execution continuity**.


For decades, security systems have relied on Proof of Possession: if you hold a valid token, you are authorized.

This works locally, but it breaks as soon as execution spans multiple services, hops, or autonomous agents.

PIC addresses this by modeling authorization as a **continuous, origin-bound execution chain**, where authority can only be inherited and restricted — never recreated or expanded.

<!-- truncate -->

## The Problem

Modern systems authorize actions by repeatedly checking possession.

- Service A holds a token → authorized.
- Service A calls Service B → Service B checks *its own* token → authorized.
- Service B calls Service C → repeat.

At each hop, the system asks the same question:

> *“Do you possess a valid artifact?”*

What it never asks is:

- Who started this execution?
- Under what original authority?
- Is this action a valid continuation of that authority?

Each hop restarts trust.
The origin disappears.
The execution chain is broken.

This is not an implementation bug.
It is a structural consequence of treating authority as possession.

## Why This Breaks at Scale

In real distributed systems:

- services are replicated
- workloads are rescheduled
- credentials are rotated
- agents are short-lived
- execution spans administrative domains

In this environment, **possession does not encode intent, provenance, or bounds**.
A valid token says nothing about *why* an action is happening
or whether it is still legitimate in context.

This is why long-standing issues such as:

- confused deputy
- privilege escalation
- ambient authority

persist despite decades of engineering.

AI agents make this impossible to ignore.
They didn’t create the problem — they remove the assumptions
that used to hide it.

## The PIC Model

PIC replaces the possession question with a different one:

> **“Can this execution prove it is a valid continuation of the original authorization?”**

Under PIC, every execution is treated as a chain, not a set of independent hops.

Each action carries:

- **Origin**  
  Who (or what) initiated the execution. Immutable.

- **Authority**  
  What operations are permitted. Monotonically restricted at every hop.

- **Continuity**  
  A verifiable proof that this action causally derives from the previous one.

Authority is never re-granted at a hop.
It flows from the origin and can only decrease.

If continuity breaks, authority ceases.

## Identity vs Authority

PIC draws a strict distinction:

- **Identity creates authority**  
  At the origin, someone or something must be accountable
  for initiating execution.

- **Continuity carries authority**  
  Downstream executors do not need identities to *hold* authority.
  They must only prove that they are a valid continuation.

Proof of Possession still exists — but only as a **binding mechanism**.
It can help establish relationships.
It does not grant authority.

This separation is what eliminates confused deputy conditions
by construction.

## A Concrete Example

You tell an AI assistant:

> “Book a flight, maximum €500.”

The AI:
- queries travel services
- compares options
- invokes payment
- interacts with banks and vendors

This may involve dozens of hops.

Under PIC:
- the origin is always you
- the authority is always “≤ €500”
- no hop can exceed that bound

If the AI attempts €5,000, execution halts.
If a token is intercepted, it is useless.
There is no artifact that independently carries authority.

## Why This Matters

PIC does not add more checks.
It changes what *can* happen.

By modeling authority as a continuous, monotonic property of execution:

- confused deputy attacks become non-formulable
- privilege escalation disappears structurally
- authorization becomes origin-bound by construction

This is not a new protocol.
It is a correction of the underlying model.

## Get Started

- Read the **PIC Specification**  
  https://github.com/pic-protocol/pic-spec

- Explore the **formal model and proofs**  
  https://zenodo.org/records/17833000

- Follow the project and discussion

Not *“what do you have?”*  
but *“can you prove you can continue?”*

That is PIC.

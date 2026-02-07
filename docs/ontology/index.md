---
sidebar_position: 1
---

# From Possession to Continuity

## The Prevailing Ontology

Every mainstream authorization model shares a common ontological commitment: authority is a *property of artifacts*.

A token encodes permissions. A certificate binds identity to privileges. A capability carries the right to invoke an operation. In all cases, the question asked at each authorization decision is the same:

> *"What does this principal possess?"*

This ontology treats authority as an object — something that can be created, stored, transferred, presented, and consumed. The principal that holds the artifact exercises the authority it encodes. Delegation is modeled as transferring or copying the artifact. Revocation is modeled as invalidating the artifact.

This framing is so pervasive that it is rarely made explicit. OAuth 2.0, JWT, bearer tokens, SPIFFE SVIDs, capability tokens, Verifiable Credentials, and macaroons all instantiate the same underlying assumption: authority derives from possession.

## The Structural Consequence

The possession ontology entails a specific structural property: authority at any hop is determined by what the executor holds at that hop, independently of how it arrived there.

This independence is the source of the confused deputy. A deputy holds two artifacts — its own credentials and a delegated token. Nothing in the ontology distinguishes between them at the point of use. Both are possessions. Both encode authority. The system asks "what do you hold?" and acts accordingly.

The confused deputy is not a bug in any specific system. It is a *theorem* of the possession ontology: if authority is determined by what is held, and an executor holds authority from multiple sources, then there exists a context in which the wrong authority is exercised. This has been formally established: any authorization system that derives authority from artifact possession admits confused deputy conditions by construction.

No amount of engineering within this ontology eliminates the condition. Token scoping, audience restrictions, DPoP binding, capability attenuation — all reduce the attack surface. None remove the formulability of the attack. They are approximations of a property that the possession ontology cannot express.

## The PIC Ontology

PIC replaces the foundational question. Instead of asking *"what does this principal possess?"*, PIC asks:

> *"Can this execution prove it is a valid continuation of the original authorization?"*

Under this ontology, authority is not an object. It is a *continuity property of execution*, rooted in an immutable origin and constrained by monotonic restriction at every hop.

The formal structure is as follows. An execution is a chain of authority states:

```
π = ⟨α_0, α_1, ..., α_n⟩
```

Each state carries the immutable origin principal `p_0`, the current authority set `ops_i`, and the causal binding to the previous state. The monotonicity invariant holds at every transition:

```
ops_{i+1} ⊆ ops_i
```

Authority is never granted at a hop. It is inherited from the origin, restricted at each step, and verified through a Proof of Continuity that is bound to the specific hop, predecessor, executor, and origin.

## What Changes

The ontological shift has precise consequences.

**Authority is not held; it flows.** No principal "has" authority in the possession sense. Authority exists only as a property of a causally continuous execution chain. If the chain breaks, authority ceases. There is no artifact to steal, replay, or reinterpret.

**Identity creates authority; continuity carries it.** Identity is required at the origin — someone or something must be accountable for the intent that initiates execution. But downstream executors do not need identity to carry authority. They need to demonstrate characteristics (environment, attributes, context, causal binding) that satisfy the continuity predicate. Whether they do so via identity credentials, hardware attestation, or any other verifiable mechanism is an implementation choice, not a model requirement.

**The confused deputy becomes non-formulable.** The attack requires a privilege not present at the origin to be exercised at a downstream hop. Under PIC, `ops_n ⊆ ops_0` for all `n`. If a privilege is absent at the origin, it cannot appear at any hop. The conditions required to formulate the confused deputy cannot be jointly satisfied. The attack is not prevented by a safeguard — it is structurally inexpressible.

**Proof of Possession is subsumed, not discarded.** Proof of Continuity materializes through a Proof of Relationship — a demonstration that the current execution state is causally derived from its predecessor. Proof of Possession is one possible mechanism to establish such a relationship: an executor may prove control of a credential as evidence of binding. But PoP is no longer the primitive. It is one realization of a deeper requirement. Other realizations (hardware attestation, TEE quotes, distributed consensus) are equally valid under the model.

**Governance restricts; it never creates.** Under the possession ontology, policy enforcement points may grant or deny access independently at each hop. Under PIC, governance is an authority-reducing layer. It may deny transitions that are structurally valid, further restrict operations, or terminate execution. It cannot introduce new authority, expand operations beyond what continuity allows, or bypass the structural invariants. Continuity defines what is structurally possible. Governance defines what is currently permitted.

## The Nature of the Shift

This is not a protocol change. It is a change in what authority *is*.

The possession ontology models authority as a noun — an object that principals hold. The continuity ontology models authority as a property — a verifiable invariant of execution chains.

The practical consequence is that entire classes of vulnerabilities — confused deputy, privilege escalation, ambient authority exploitation, token substitution — are not mitigated by additional mechanisms. They become non-formulable within the model itself.

This is the distinction between engineering defense and structural elimination: the former adds constraints to prevent known attacks; the latter changes the foundation so that the attacks cannot be expressed.
---
sidebar_position: 4
---

## PIC Specification

The **PIC Specification** defines the generic, implementation-independent rules and invariants that underlie all PIC Protocols.

It is **not a protocol itself**, nor does it prescribe specific encodings, transports, or cryptographic suites.  
Instead, it defines the **abstract model** that all conforming implementations and protocols must satisfy.

The specification is intentionally **generic**:

- it captures semantic requirements
- it defines formal invariants on authority evolution
- it defines the conceptual bindings required for continuity
- it separates model obligations from wire formats

Protocol families and concrete implementations are derived from
this specification by adding domain-specific realizations on top
of these abstract obligations.

### Current Releases

| Version | Status           | Description                             | Reference                                                                                |
|---------|------------------|-----------------------------------------|------------------------------------------------------------------------------------------|
| 0.1     | *Draft*          | Initial generic specification draft     | [pic-spec 0.1](https://github.com/pic-protocol/pic-spec/blob/main/draft/0.1/pic-spec.md) |


**Note:** The current release (0.1) is a **draft specification**.

It represents a first, working articulation of the PIC generic model.

Readers should expect:

- clarifications
- additional normative text
- editorial refinements
- possible structural adjustments

Future versions will reflect community feedback, experimental findings, and integration experience from emerging PIC Protocol families.

### Role of the Specification

The PIC Specification exists to:

- define the **invariants that all protocols must enforce**
- establish the **semantic boundaries** between model and protocol
- make explicit what is **normative** vs what is **implementable**
- document the **abstract primitives** required by continuity
- separate **general obligations** from **domain-specific choices**

It does **not**:

- mandate a unique protocol format
- restrict choice of cryptographic primitives
- mandate a transport layer
- specify a single trust model for all environments

These aspects are delegated to the protocol families built on top of the specification.

### Conformance to the Specification

A protocol or implementation MAY claim PIC compliance only if it meets the following requirements:

1. It implements the PIC Specification in the declared version.
2. It enforces all invariants defined by the specification.
3. It does not violate the monotonicity and continuity constraints.
4. It clearly declares the spec version it conforms to.

Conformance claims SHOULD include:

- the spec version
- any experimental extensions
- any domain-specific protocol bindings

This enables clear interoperability expectations and simplifies version negotiation in multi-protocol environments.

---
title: "Think in Systems, Not Scripts"
date: "2024-11-05"
excerpt: "The difference between automation that saves you ten minutes and automation that runs your business is how you think about the problem before you write the first line."
---

The difference between automation that saves you ten minutes and automation that runs your business is how you think about the problem before you write the first line.

Most people start with the script. They have a task — move data from A to B, send an email when X happens, generate a report every Friday — and they write the code to do that thing. It works. Until it doesn't. Until the API changes, or the data is malformed, or Friday falls on a holiday, or someone upstream changes their schema without telling anyone.

That's a script. A system is something else.

## What Makes a System

A system is automation that is designed to fail gracefully. It has observable state, defined boundaries, and predictable behavior under abnormal conditions. It doesn't just do the happy path — it handles the unhappy paths with the same care.

When I'm designing an automation pipeline for a client, I spend more time on the failure modes than on the core logic. What happens when the external API returns a 503? What happens when the input data is missing a required field? What happens if this runs twice? The answers to those questions are the system.

## The Idempotency Requirement

Every automation I build has to be idempotent — running it twice should produce the same result as running it once. This sounds obvious until you're debugging a production issue at midnight and you need to safely re-run a pipeline without knowing how far it got.

Idempotency is a forcing function for good design. It makes you think about state: where is it stored, who owns it, how do you know if a step has already been completed? Answering those questions cleanly is most of the work.

## Observability Before Optimization

You can't improve automation you can't observe. Before I think about making something faster, I make sure I can see what it's doing. Structured logs, execution traces, duration metrics, error rates — not because I think it will break, but because when it does, I want to understand why in minutes, not hours.

The temptation with automation is to set it and forget it. Resist that. Review your pipelines. Look at the logs occasionally. Systems drift — the world changes around them, and silent failures accumulate until they become catastrophic.

## When Not to Automate

Not everything should be automated. The clearest signal that something isn't ready for automation is that the manual process is inconsistent. If ten people do the same task ten different ways, automating it locks in one of those ways — probably not the best one.

Fix the process first. Document it. Make sure it's repeatable by a human. Then automate the repeatable process. Automating chaos produces automated chaos.

## The Compounding Return

The reason to invest in real systems rather than quick scripts is compounding. A well-built automation pipeline gets more valuable over time because you can extend it, adapt it, and trust it. A collection of scripts gets more fragile over time because each one is an island, untested and unobserved.

Build things that run without you. But build them in a way that you could come back to in a year and understand immediately what they're doing and why.

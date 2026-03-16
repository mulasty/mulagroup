# Mula Group Agent Architecture Library

## Source

Source file used for extraction:
- `C:\Users\xxx\Downloads\Architectures.json`

This document captures the reusable agent-system patterns found in that source and maps them into a cleaner Mula Group architecture language for future product, sales and implementation work.

## Why this file exists

The JSON source contains multiple workflow experiments built in an automation canvas. Those flows are useful, but the raw file is not a good long-term design reference. This document translates the useful parts into reusable architecture patterns.

Use this file when:
- designing new portal sections
- planning future agent products
- defining discovery options for clients
- mapping implementation scope before delivery
- building future case studies and offer pages

## Extracted Architecture Patterns

The following named patterns were directly visible in the source JSON through sticky notes and workflow groupings:

1. `Single Agent + Tools`
2. `Single Agent + MCP Servers + Tools`
3. `Single Agent + Tools + Router`
4. `Single Agent + Human in the Loop + Tools`
5. `Single Agent + Dynamically Call Other Agents`
6. `Sequential + MCP Servers + Tools`
7. `Agents Hierarchy + Shared Tools + Parallel`
8. `Agents Hierarchy + Loop + Parallel + Shared RAG`

## Mula Group Translation Layer

Below is the cleaned interpretation of those patterns for business use.

### 1. Single Agent + Shared Tools

Use when:
- one agent can own the whole task
- toolset is small and stable
- speed matters more than orchestration depth

Typical ingredients:
- intake trigger
- primary agent
- language model
- session memory
- email, CRM, sheets, calendar or database tools
- response/output block

Good for:
- assistant copilots
- support triage
- internal task helpers
- simple sales ops

### 2. Single Agent + Router

Use when:
- one front agent receives mixed requests
- different request types need different downstream handling
- you want branching without full multi-agent complexity

Typical ingredients:
- intake agent
- routing/switch logic
- branch-specific tool lanes
- optional memory and scoring layer

Good for:
- shared inbox automation
- mixed sales/support operations
- intake classification systems

### 3. Single Agent + Human in the Loop

Use when:
- outputs are high-risk
- a person must approve before execution
- compliance or governance matters

Typical ingredients:
- execution agent
- approval step
- continuation after approval
- audit-friendly output routing

Good for:
- outbound campaigns
- finance actions
- approvals and escalations
- client-facing sensitive steps

### 4. Sequential Agent + MCP / Tool Layer

Use when:
- work naturally happens in stages
- one agent should interpret, another should execute
- tool access should be controlled by stage

Typical ingredients:
- intake agent
- tool or MCP access layer
- execution agent
- output block

Good for:
- process automation
- research pipelines
- structured internal workflows

### 5. Agent Hierarchy + Shared Tools

Use when:
- different business domains need specialist agents
- one lead orchestrator should control direction
- tools should be shared instead of duplicated

Typical ingredients:
- lead orchestrator
- switch/router
- specialist agents
- shared tool bus

Good for:
- cross-functional business operations
- multi-domain company workflows
- client operations spanning sales, support and ops

### 6. Agent Hierarchy + Loop + Shared RAG

Use when:
- the first pass is not enough
- specialists need shared context
- outputs must be merged and reconsidered
- memory and vector context improve quality

Typical ingredients:
- controller agent
- routing/switch
- specialist agents
- merge step
- shared memory
- shared RAG/vector layer
- loop-back into controller

Good for:
- knowledge-heavy internal systems
- technical support reasoning
- multi-step decision support
- enterprise agent operating systems

### 7. Dynamic Subagent Invocation

Use when:
- one agent owns the conversation
- deeper specialist work is only needed sometimes
- you want modular growth without constant hierarchy overhead

Typical ingredients:
- primary agent
- subagent as tool
- search or research tools
- memory/context
- final delivery step

Good for:
- escalation flows
- research-heavy copilots
- evolving agent systems

## Tool Families Found in Source

The JSON source included the following tool families:

- `Brave Search`
- `Calculator`
- `Google Sheets`
- `Gmail`
- `Google Calendar`
- `Google Drive`
- `Microsoft OneDrive`
- `Microsoft SQL`
- `Notion`
- `GitLab`
- `HubSpot`
- `Airtable`
- `Twilio`
- `MCP Client Tool`
- `Workflow Tool`
- `Vector Store`

## Core Building Blocks Repeated Across Architectures

These repeated enough to treat them as Mula Group architectural primitives:

- intake trigger / webhook
- primary or orchestrator agent
- memory layer
- language model layer
- tool bus
- router / switch
- approval node
- merge node
- vector store / RAG
- specialist subagents
- response or delivery block

## Practical Offer Framing

This library suggests a future offer structure like:

1. `Agent Copilot Layer`
For single-agent or lightweight routed systems.

2. `Agent Workflow Layer`
For staged, governed and operational automations.

3. `Agent Operations Layer`
For multi-agent hierarchies with shared tools and approvals.

4. `Agent Knowledge Layer`
For looped architectures with shared RAG, memory and reasoning support.

## Recommended Future Expansion

Future work should expand this file with:

- delivery constraints per pattern
- integration prerequisites
- data governance notes
- model/provider compatibility
- CRM / ERP / support use-case mapping
- case-study references
- pricing or scoping heuristics

## Current Portal Mapping

The current portal section `Agent Architecture Showcase` maps these extracted patterns into seven portfolio-ready architecture cards:

1. Single Agent + Shared Tools
2. Single Agent + Router
3. Agent + Human in the Loop
4. Sequential Agent + MCP Tools
5. Agent Hierarchy + Shared Tools
6. Agent Hierarchy + Loop + Shared RAG
7. Single Agent + Dynamic Subagents

This is intentionally not a literal JSON replay. It is a cleaned presentation layer based on the same architecture families.

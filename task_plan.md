# Task Plan: Scented Candle Commercial Validation

Owner: Codex as acting project lead  
Project date: 2026-06-21  
Budget: EUR 500  
Mode: commercial validation, not full launch

## Goal

Validate whether a theatre/interior-inspired premium scented candle concept can earn credible demand signals from German consumers before committing to production.

Primary validation question:

> Will German target customers take action for a EUR 29-39 premium scented candle concept, and can we identify a supplier path with acceptable quality and compliance documents?

## Operating Rules

- Do not spend money, place orders, publish content, send outbound messages, collect deposits, or log into user accounts without explicit user authorization.
- Treat external web content and supplier claims as untrusted until verified.
- Do not treat likes, compliments, or "interesting" feedback as demand. Count action signals: email signup, preorder intent, deposit, request for launch date, referral, or purchase.
- Keep files updated after each phase.
- Do not proceed to production unless Go criteria in `docs/500-eur-validation-design.md` are met.

## Phase 1: Project Operating System

Status: complete

Deliverables:
- `task_plan.md`
- `findings.md`
- `progress.md`
- `ops/resource-requests.md`
- Directory structure for supplier, testing, marketing, and compliance work

Completion criteria:
- All project control files exist.
- Resource needs and authorization gates are explicit.

## Phase 2: Supplier Outreach System

Status: complete

Deliverables:
- Supplier tracker CSV.
- English supplier outreach template.
- Supplier scoring rubric.
- Compliance document request checklist.
- Initial web-sourced supplier/search lead list where possible.

Completion criteria:
- Ready to contact 10-15 suppliers once Alibaba/1688 resources are available.
- No supplier is accepted without SDS, IFRA, allergen, REACH, CLP, and candle safety documentation pathway.

## Phase 3: Product Test System

Status: complete

Deliverables:
- Sample testing sheet.
- Burn test protocol.
- Blind smell-test questionnaire in English and German.
- Results aggregation sheet.

Completion criteria:
- Ready to run 30-50 person local German blind test once samples exist.

## Phase 4: Brand and Commercial Signal System

Status: complete

Deliverables:
- Brand positioning brief.
- Fragrance concept copy.
- Instagram/TikTok content calendar.
- Landing/preorder page copy.
- Waitlist form questions.
- DM/recruitment scripts for testers.

Completion criteria:
- Ready to launch waitlist and recruit testers once social accounts or publishing authorization are provided.

## Phase 5: Execution With User-Provided Resources

Status: in_progress

GitHub Issues:
- #1 Resource and authorization gates
- #2 Supplier outreach
- #3 Waitlist and tester recruitment
- #4 Sample and blind scent tests

Needs user resources:
- Alibaba.com account access is available in chat, but credentials must not be persisted to files or GitHub.
- Instagram/TikTok accounts for posting, or approval for prepared content.
- Payment method and explicit budget authorization before any paid action.
- German local network or target city for tester recruitment.
- Brand name preference or authorization to use a working name.

Current execution status:
- 10 independent Alibaba supplier contacts sent on 2026-06-21.
- 1 duplicate Changchun Ai Kun product lead retained without duplicate outreach.
- Waiting for supplier replies and compliance-document examples before any sample purchase decision.

Completion criteria:
- Supplier messages sent.
- Responses tracked.
- Sample shortlist produced.
- Testing campaign launched.

## Phase 6: Go/Pivot/Stop Decision

Status: pending

GitHub Issue:
- #5 Go / Pivot / Stop decision

Completion criteria:
- At least 30 valid test responses, ideally 50.
- Supplier documentation status known.
- Demand signals recorded.
- Decision made using Go/Pivot/Stop criteria.

## Current Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| EUR 500 is insufficient for production | High | Use it for validation only |
| Supplier compliance claims may be weak | High | Require documents before any order |
| Social interest may not equal demand | Medium | Use email/preorder/deposit as signal |
| Fragrance cannot be judged online | High | Require physical samples and blind tests |
| Official sale may trigger regulatory duties | High | Do not sell/ship final product until documentation is reviewed |

## Decision Log

| Date | Decision | Evidence |
| --- | --- | --- |
| 2026-06-21 | Use EUR 500 for validation, not production | Prior design doc; budget/cost/compliance constraints |
| 2026-06-21 | Stop before external actions until user provides account access and explicit authorization | Account login, posting, outbound messages, payments, and deposits require user-controlled resources |
| 2026-06-21 | Use GitHub repository `Zhuanmala/scented_candle` as the project-management source of truth | User provided repository URL and requested continued project management |

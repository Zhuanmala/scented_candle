# Munich Tester Waitlist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish-ready a Munich-specific tester/waitlist funnel for `Scene Candle Munich`.

**Architecture:** A static HTML/CSS/JS landing page lives in `site/` and submits tester applications through FormSubmit email forwarding. Marketing assets live under `ops/marketing/`, and project state is recorded in `task_plan.md`, `progress.md`, and GitHub Issue #3.

**Tech Stack:** Plain HTML, CSS, JavaScript, GitHub repository assets, FormSubmit email forwarding.

## Global Constraints

- Do not sell, collect deposits, run paid ads, buy samples, or make purchase commitments.
- Do not claim natural, non-toxic, therapeutic, sustainable, EU-compliant, handmade, or ready-for-sale status.
- Use `Scene Candle Munich` only as a temporary working name.
- Primary city: Munich.
- Primary validation action: waitlist/tester signup.
- Form recipient: user-provided iCloud email through FormSubmit; first submission may require email activation.

---

### Task 1: Build Static Waitlist Page

**Files:**
- Create: `site/index.html`
- Create: `site/styles.css`
- Create: `site/script.js`
- Create: `site/README.md`

**Interfaces:**
- Consumes: approved design in `docs/superpowers/specs/2026-06-21-munich-tester-waitlist-design.md`
- Produces: local static page that can be opened directly or hosted on GitHub Pages/Netlify/static hosting.

- [x] **Step 1: Create semantic HTML**

Create `site/index.html` with:
- bilingual hero
- three scent directions
- validation explanation
- tester form
- privacy note
- FormSubmit action

- [x] **Step 2: Create restrained visual styling**

Create `site/styles.css` with:
- warm neutral palette
- mobile-first layout
- accessible form controls
- no decorative overclaiming visuals

- [x] **Step 3: Add client-side form helper**

Create `site/script.js` with:
- source parameter capture
- simple validation
- local thank-you state after submit click

- [x] **Step 4: Document deployment**

Create `site/README.md` explaining:
- local preview
- FormSubmit activation
- GitHub Pages/static hosting options
- compliance/copy restrictions

- [x] **Step 5: Verify**

Run:

```powershell
Get-ChildItem site
```

Expected: four files exist.

---

### Task 2: Create Munich Launch Marketing Assets

**Files:**
- Create: `ops/marketing/munich_launch_posts.md`
- Create: `ops/marketing/munich_dm_targets.md`
- Modify: `ops/marketing/tester_recruitment_scripts.md`
- Modify: `ops/marketing/content_calendar_14_days.md`

**Interfaces:**
- Consumes: target segments and constraints from the spec.
- Produces: publish-ready text for Instagram/TikTok and DM outreach.

- [x] **Step 1: Write feed/story/TikTok copy**

Create `ops/marketing/munich_launch_posts.md` with:
- Instagram feed post in English and German
- Instagram story sequence
- TikTok caption and script
- forbidden claims checklist

- [x] **Step 2: Write target list**

Create `ops/marketing/munich_dm_targets.md` with:
- segment definitions
- hashtag/search terms
- public group/profile discovery prompts
- DM safety rules

- [x] **Step 3: Add Munich DM scripts**

Append Munich-specific DM copy to `tester_recruitment_scripts.md`.

- [x] **Step 4: Update calendar**

Update first three days of `content_calendar_14_days.md` to Munich-first content.

- [x] **Step 5: Verify**

Run:

```powershell
Select-String -Path ops/marketing/*.md -Pattern "Munich|Muenchen|Scene Candle Munich"
```

Expected: Munich-specific copy appears in the new and modified files.

---

### Task 3: Update Project Management

**Files:**
- Modify: `task_plan.md`
- Modify: `progress.md`
- Modify: `findings.md`
- Optional GitHub: comment on Issue #3

**Interfaces:**
- Consumes: page and marketing deliverables.
- Produces: durable record of launch readiness and remaining gates.

- [x] **Step 1: Update plan**

Record that Phase 5C has an approved Munich waitlist direction and page assets.

- [x] **Step 2: Update progress**

Record files created and what remains blocked, if anything.

- [x] **Step 3: Verify Git diff**

Run:

```powershell
git diff --stat
git status --short --branch
```

Expected: only waitlist/marketing/project-management files changed.

- [x] **Step 4: Commit and push**

Run:

```powershell
git add docs/superpowers/specs/2026-06-21-munich-tester-waitlist-design.md docs/superpowers/plans/2026-06-21-munich-tester-waitlist.md site ops/marketing task_plan.md progress.md findings.md
git commit -m "marketing: add munich tester waitlist funnel"
git push origin main
```

Expected: commit succeeds and pushes to `main`.

---

### Task 4: Browser Account Execution

**Files:**
- No repository files required unless screenshots or logs are recorded.

**Interfaces:**
- Consumes: `site/index.html` preview and `ops/marketing/munich_launch_posts.md`.
- Produces: Instagram/TikTok first post/story attempts or a clear blocker.

- [ ] **Step 1: Check browser login state**

Use the existing controlled Chrome session to inspect whether Instagram and TikTok are logged in.

- [x] **Step 2: Open local page for visual QA**

Open `site/index.html` in browser and inspect desktop and mobile-like widths.

- [ ] **Step 3: Publish only if controls are available**

If logged in and no CAPTCHA/security block appears, publish the approved first post/story text. If a CAPTCHA, phone verification, or sensitive checkpoint appears, stop and ask the user to complete it.

- [ ] **Step 4: Record outcome**

Update `progress.md` with either published URLs/screenshots or exact blocker.

## Self-Review

- Spec coverage: all waitlist page, social asset, project-management, and browser-execution requirements are covered.
- Placeholder scan: no TBD/TODO placeholders are present.
- Scope check: paid ads, deposits, sample purchases, and production work are excluded.

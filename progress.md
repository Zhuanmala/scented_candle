# Progress Log

## 2026-06-21

- Created persistent planning files for the project.
- Reframed the project as a EUR 500 commercial validation sprint rather than a production launch.
- Established operating rule: no account login, outbound messaging, posting, payment, ordering, or deposit collection without explicit user authorization.
- Created supplier outreach assets, supplier tracker, supplier scoring rubric, and compliance document checklist.
- Created sample test protocol, sample test sheet, English/German blind test questionnaires, and blind test result sheet.
- Created brand positioning draft, landing page copy, tester recruitment scripts, 14-day content calendar, and waitlist form questions.
- Ran public web search for Alibaba supplier/search leads; recorded that public snippets are leads only, not supplier verification.
- Created resource request list and authorization gates.
- Created budget tracker and unit economics model.
- Created supplier outreach queue for 10-15 supplier contacts.
- Updated task plan: Phases 1-4 complete; Phase 5 in progress, blocked on user-provided accounts/resources and explicit authorization for external actions.
- Connected local project to GitHub repository `Zhuanmala/scented_candle`.
- Updated `README.md` as the repository project-management entry point.
- Pushed initial project-management system to GitHub commit `1e86516`.
- Created GitHub Issues:
  - #1 Phase 5A: Provide resources and authorization gates
  - #2 Phase 5B: Contact 10-15 Alibaba suppliers
  - #3 Phase 5C: Launch waitlist and tester recruitment
  - #4 Phase 5D: Run sample and blind scent tests
  - #5 Phase 6: Make Go / Pivot / Stop decision
- Reviewed `coreyhaines31/marketingskills` and recorded applicability in `findings.md`.
- User provided Alibaba account access details in chat. Credentials were deliberately not written to repository files, GitHub issues, logs, or planning docs.
- Added `.gitignore` entries to reduce risk of accidentally committing local secrets, cookies, browser profiles, or auth state.
- Added first public Alibaba supplier leads to `ops/supplier/supplier_tracker.csv`. These are unverified leads only; next step is logged-in supplier contact and document screening.
- Sent Alibaba chat outreach to Changchun Ai Kun Medical Equipment Co. Ltd. for sample, MOQ, Trade Assurance, and EU/Germany documentation screening.
- Sent Alibaba chat outreach to Hubei Joylife Home Furnishing Co. Ltd. for sample, MOQ, Trade Assurance, and EU/Germany documentation screening.
- Hubei Joylife replied that they will check with a manager and follow up; no compliance documents received yet.
- Sent Alibaba chat outreach to Baoding Be-Ladies Home Products Co. Ltd.; page claims Germany as a main market, so this lead is higher priority if they can produce documents.
- Encountered one browser automation issue where Chinese text matching clicked the wrong right-side action. No order/payment was submitted; switched to coordinate/structure-based contact selection.
- Sent Alibaba chat outreach to Suzhou M&scent Arts&crafts Co. Ltd. for sample, MOQ, Trade Assurance, and EU/Germany documentation screening.
- Verified AIKUN Custom Portable Luxury Oriental Soy Wax is another Changchun Ai Kun product page; did not send a duplicate message to the same supplier.
- Used Alibaba search for additional `private label scented candle SDS IFRA` leads.
- Sent Alibaba chat outreach to Guangxi Wanjing Xiangyu Biotechnology Co. Ltd., Shanghai Wellness Crafts Co. Ltd., and Hebei Aoyin Trading Co. Ltd.
- Sent Alibaba chat outreach to Suzhou Enjoy Home Products Co. Ltd., Shijiazhuang Gaocheng Fengyuan Candle Co. Ltd., and Sichuan Zhongyouhui Supply Chain Management Co. Ltd.
- Reached 10 independent Alibaba supplier contacts, plus 1 duplicate product lead retained for Changchun Ai Kun.
- Corrected supplier tracker CSV column alignment after adding the final three supplier rows and verified key columns with `Import-Csv`.
- User approved Munich Tester Sprint /方案 A with temporary working name and waitlist page authorization.
- Created design spec and implementation plan for `Scene Candle Munich`.
- Generated a neutral concept hero image and copied it into `site/assets/hero-candle-concept.png`.
- Built static waitlist page under `site/` with FormSubmit email forwarding to the project owner's iCloud email.
- Created Munich launch post copy, DM target strategy, and Munich-specific DM scripts.
- Ran desktop and mobile headless Chrome QA on the static page; title, hero image, form action, required fields, navigation, and banned-claim scan passed.
- Could not enable GitHub Pages from this environment because GitHub CLI is unavailable and the GitHub App tool surface does not expose Pages settings.
- Checked Instagram/TikTok login state in the controlled Chrome session. Instagram is blocked by human verification/captcha. TikTok is logged in as `@jianhou5`.
- Generated `site/assets/scene-candle-munich-tiktok.webm` using the project hero image and approved Munich tester CTA.
- Uploaded and published the TikTok video at `https://www.tiktok.com/@jianhou5/video/7653538649350393104`; visibility later showed public/all users.
- TikTok caption replacement did not persist before publish; public post currently shows `scene-candle-munich-tiktok`. Follow-up is to edit caption when TikTok Studio is reachable or publish a corrected second video.
- TikTok Studio later returned `ERR_CONNECTION_CLOSED` on repeated attempts to reopen the content manager, so caption editing was not completed in this run.
- User completed Instagram manual verification and submitted an appeal; Instagram account is now pending review and unavailable for posting until review finishes.
- Added GitHub Actions workflow `.github/workflows/pages.yml` to deploy the static `site/` waitlist page to GitHub Pages now that the repository is public.
- First GitHub Pages workflow run failed at `actions/configure-pages` because the repository Pages site is not enabled/configured to use GitHub Actions as the source. Added one-time setup runbook at `docs/deployment/github-pages.md`.
- User enabled GitHub Pages source `GitHub Actions`; re-ran the failed workflow successfully on attempt 2.
- Verified live waitlist URL `https://zhuanmala.github.io/scented_candle/` returns HTTP 200 with title `Scene Candle Munich | Scent Test` and FormSubmit form action present.

## Next

- Wait for Instagram review outcome before attempting Instagram posting again.
- Edit the TikTok caption or publish a corrected second TikTok if editing is unavailable.
- Add the live URL to Instagram/TikTok bio and launch the first Munich posts.
- Track supplier replies and reject suppliers that cannot provide credible EU/Germany documentation examples.

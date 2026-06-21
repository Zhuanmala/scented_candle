# Social Launch Log

## 2026-06-21

### TikTok

- Account observed: `@jianhou5`.
- Original asset uploaded: `site/assets/scene-candle-munich-tiktok.webm`.
- Original public URL: https://www.tiktok.com/@jianhou5/video/7653538649350393104
- Original result issue: caption did not update before publish; public post displayed `scene-candle-munich-tiktok` instead of the intended Munich tester caption.
- Resolution: published a corrected replacement post, verified it was public, then deleted the old incorrect-caption post.
- Corrected public URL: https://www.tiktok.com/@jianhou5/video/7653545450997304593
- Corrected caption verification: public video page contains the Munich tester caption and waitlist URL `zhuanmala.github.io/scented_candle/`.
- Current TikTok Studio state: only the corrected public post appears in the visible posts list.
- Profile bio: direct URL bio did not persist, so bio was updated to `Munich scent test. Link in latest post. Comment TEST.`

Corrected caption:

```text
Munich scent test for a developing candle concept. No sales yet, just honest feedback. In or near Munich? Comment TEST or join: zhuanmala.github.io/scented_candle/ #munich #muenchen #scentedcandles #homedecor
```

### Instagram

- Account observed: `@houjian07122026`.
- Display name observed: `SCENA`.
- Status: usable after user confirmed review/access cleared.
- Profile bio updated to:

```text
Scene Candle Munich
Scent test in development.
Join: zhuanmala.github.io/scented_candle/
```

- Website-link note: Instagram Web reported that editing profile links is only available on mobile, so the waitlist URL is currently in bio text rather than the Website field.
- Post asset: `site/assets/hero-candle-concept-instagram.jpg`, converted from the existing concept hero image for Instagram upload.
- Public post URL: https://www.instagram.com/p/DZ1IzfSkmsh/
- Caption verification: public post contains the Munich blind scent-test caption, `No launch yet. No sales yet.`, `Comment TEST`, and `waitlist`.
- Banned-claim scan: verified public post text does not contain `non-toxic`, `nontoxic`, `chemical-free`, `therapeutic`, `sleep improving`, `EU-compliant`, `sustainable`, `handmade`, or `ready for sale`.

Published caption:

```text
Small scenes, made of scent and light.

I am developing a small scented candle concept in Munich, inspired by theatre, textiles, and interior spaces.

No launch yet. No sales yet. The next step is a blind scent test: three scent directions, no brand story first, honest feedback on scent, packaging, and price.

In or near Munich? Comment TEST or join the waitlist through the profile bio.

#munich #muenchen #munichlife #interiordesign #homedecor #scentedcandles #designmunich
```

### Waitlist URL

- Status: live and verified.
- Public URL: https://zhuanmala.github.io/scented_candle/
- Workflow: `.github/workflows/pages.yml`.
- Verification: workflow attempt 2 completed successfully; public URL returned HTTP 200 with the expected page title and FormSubmit action present.
- Next step: use this URL in TikTok/Instagram bios and tester outreach.

# Munich Tester Waitlist Design

Status: approved by user on 2026-06-21

## Goal

Launch a Munich-specific tester/waitlist funnel for the working candle concept under the temporary name `Scene Candle Munich`, without selling, collecting deposits, or making compliance claims.

## Evidence Base

- [KNOWN] The user authorized use of logged-in Instagram/TikTok accounts and approved a temporary waitlist page name.
- [KNOWN] The first test city is Munich.
- [KNOWN] Munich Facts and Figures 2025 reports 863,334 private households and 54.3% single-person households as of 2024.
- [KNOWN] Official Munich tourism sources emphasize theatres, museums, design, and international cultural activity.
- [KNOWN] Munich city pages include English-language resources and events for internationals/expats.
- [INFERRED, HIGH] The strongest first tester segments are international young professionals/expats, design/interior/home-decor followers, and theatre/culture/event-goers.

Sources:
- https://stadt.muenchen.de/dam/jcr%3A7192b6c9-c2ef-4325-b62e-78d12eb59974/LHM_Stat-Faltkarte_englisch_2025.pdf
- https://www.muenchen.travel/rubriken/entdecken/kunst-kultur/muenchner-buehnen
- https://www.muenchen.de/en/events/theater-dance-operas/find-english-speaking-theatres-munich-here
- https://www.muenchen.de/en/events/leisure/after-work-kunstareal-welcome-internationals
- https://www.muenchen.de/en/living/important-information/shops-culture-doctors-and-more-services-english-munich
- https://www.muenchen.travel/

## Positioning

Working brand: `Scene Candle Munich`

Core line:

> Small scenes, made of scent and light.

German support line:

> Kleine Szenen aus Duft und Licht.

The page must say the project is in development. It must not claim the candles are natural, non-toxic, therapeutic, EU-compliant, handmade, sustainable, or ready for sale unless supplier documents and samples later prove those claims.

## Funnel

1. Instagram/TikTok post or story introduces the Munich scent test.
2. Viewer clicks the waitlist link or sends a DM with `TEST`.
3. Waitlist page collects tester intent and price acceptance.
4. Strong candidates are later contacted for blind scent testing once samples exist.

## Target Segments

### Segment 1: Munich internationals and expats

Primary language: English.

Reason: easier early acquisition through English-speaking groups, international cultural events, and expat networks.

CTA: "Join the Munich scent test."

### Segment 2: Design/interior/home-atmosphere audience

Primary language: English plus German trust cues.

Reason: the product is not positioned as a commodity candle; design sensitivity matters for EUR 29-39 acceptance.

CTA: "Help shape the first three scent directions."

### Segment 3: Theatre/culture audience

Primary language: bilingual.

Reason: the concept's theatre and material-memory angle is differentiated but may be polarizing, so it needs early validation.

CTA: "Would a candle inspired by backstage atmosphere work in Munich homes?"

## Waitlist Page Requirements

Create a static page under `site/`:

- `site/index.html`
- `site/styles.css`
- `site/script.js`
- `site/README.md`

The page must include:

- Hero with Munich-specific tester framing.
- Three scent directions: Winter House, Room After Rain, Backstage Wool.
- Explanation that samples are not ready yet and the project is validating.
- Form fields:
  - name
  - email
  - city
  - language preference
  - whether the visitor is in/near Munich
  - whether they buy scented candles
  - willingness to join a 15-minute blind scent test
  - EUR 29-39 price intent
  - most interesting scent direction
  - trust factor for a new candle brand
  - Instagram/TikTok handle
  - consent checkbox
- Form destination: FormSubmit email forwarding to the user's iCloud email.
- A visible privacy note: feedback is used only for this validation project and no public names are published without permission.

## Social Requirements

Create publish-ready assets:

- `ops/marketing/munich_launch_posts.md`
- `ops/marketing/munich_dm_targets.md`
- Update `ops/marketing/tester_recruitment_scripts.md` with Munich-specific DM copy.
- Update `ops/marketing/content_calendar_14_days.md` with Munich-first Day 1-3 content.

First public posts:

- Instagram feed post: development note and tester CTA.
- Instagram story: `DM TEST` recruitment.
- TikTok short caption/script: why this is a scent test, not a launch.

Do not publish paid ads.

## Metrics

Success gate for this sprint:

- 30 valid waitlist signups.
- 10 people in or near Munich willing to test.
- 10 yes/maybe responses to EUR 29-39.
- 3 strong non-friend buying signals.
- At least one channel clearly outperforming others by signup source.

## Risk Controls

- No sales, deposits, sample purchases, or paid ads in this step.
- Do not mention supplier names or unverified material/compliance claims in public copy.
- Do not imply final availability or ship date.
- Use `Scene Candle Munich` as temporary working name only.

## Approval

The user approved "方案 A" on 2026-06-21.

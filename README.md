# 🛡️ Ozark Gutter Guard Co. — Master Technical & SEO Architecture

**Direct Contractor 316 Surgical Stainless Steel Micro-Mesh Protection Across Northwest Arkansas**  
*Operating in Bentonville, Rogers, Fayetteville, Springdale, Bella Vista, and all NWA ZIP codes.*

---

## 🚀 1. Project Overview & Current Architecture

This project is built using a **1% Anti-Doorway Algorithmic Protection & First-Party Data Moat Strategy** designed to resist Google Core Updates and SpamBrain Scaled Content filters.

### Core Stack
* **Framework**: Next.js 15 (App Router, SSG / ISR)
* **Language**: TypeScript
* **Styling**: Tailwind CSS & Vanilla CSS Design Tokens
* **Icons**: Lucide React
* **Static Generation**: 1,137 pre-rendered static HTML routes with zero runtime latency

---

## 🏛️ 2. Architectural Pillars (What We Have Built)

### A. DOM Entropy & 4 Rotating Layout Archetypes (`src/app/[slug]/page.tsx`)
To eliminate **Template Fingerprinting** (where Google detects 95%+ identical DOM trees), pages rotate between 4 distinct layout architectures:
1. **Archetype A: Mountain & Lake Pine Needle Fortress**
   - *Targets*: Bella Vista (72714, 72715), Beaver Lake, Loch Lomond, Scotsdale, Holiday Island.
   - *Key Tools & Modules*: `TreeCanopyClogCalculator` (Pine profile), 45 lbs/ft snow/sleet load resistance, 9/12 to 12/12 steep hillside rigging.
2. **Archetype B: Historic Urban & Hardwood Oak Catkin Zone**
   - *Targets*: Downtown Bentonville (72712), Coler Mountain, Historic Fayetteville (72701, Wilson Park, Mount Sequoyah).
   - *Key Tools & Modules*: `TreeCanopyClogCalculator` (Oak profile), spring catkin sludge breakdown, 0% roof shingle penetration (GAF/CertainTeed warranty safe).
3. **Archetype C: Master-Planned Subdivision & HOA Hub**
   - *Targets*: Pinnacle Hills, Shadow Valley (72758), West Bentonville (72713), Centerton (72719), Har-Ber Meadows (72762).
   - *Key Tools & Modules*: `HOAComplianceCheck` (ARC color pre-approval), multi-tier valley splash diverters, expansive Vertisol clay foundation soil protection.
4. **Archetype D: High-Volume Flash Storm & Industrial Matrix**
   - *Targets*: Springdale (72764, 72765), Rogers Commercial (72756), Lowell (72745), Siloam Springs (72761), Tontitown.
   - *Key Tools & Modules*: `HydraulicGutterThroughput` (150 in/hr storm intake vs 5" and 6" K-Style gutters), shingle grit shedding.

### B. Interactive Conversion Tools (Zero Pogo-Sticking)
* **`TreeCanopyClogCalculator.tsx`**: Dynamic bio-load simulator calculating annual sludge weight (lbs) and runoff gallons for Pine, Oak, Maple, and Sweetgum canopies.
* **`HydraulicGutterThroughput.tsx`**: Real-time rainfall intake simulator (1.0 to 4.5 in/hr) comparing 316 Surgical Micro-Mesh against failing reverse helmets and DIY slotted vinyl screens.
* **`HOAComplianceCheck.tsx`**: Architectural Review Committee pre-approval check for NWA subdivisions.
* **`NwaStormLookup.tsx`**: Grounded local storm history and hail footprint tracker for NWA ZIP codes.
* **`SatelliteEstimator.tsx`**: Instant 90-second satellite roofline quote calculator.

### C. Hierarchical Parent-Child Silo Mesh
* **Pillar Hubs (Tier 1)**: `/gutter-guards-bentonville-ar`, `/gutter-guards-rogers-ar`, `/gutter-guards-fayetteville-ar`, `/gutter-guards-springdale-ar`, `/gutter-guards-bella-vista-ar`.
* **Sub-Hubs & ZIP Nodes (Tier 2)**: 20+ NWA postal codes (`gutter-guards-72712-bentonville-ar`, etc.) with child breadcrumbs linking to parents.
* **Technical Guides & E-E-A-T Studies (Tier 3)**: 41+ in-depth buyer guides (`/guides/[slug]`) and press releases (`/press/[slug]`).

---

## 📖 3. Standard Operating Procedures (What to Do Next Time)

Follow these exact steps when adding new content, keywords, case studies, or guides to maintain 100% algorithmic safety:

---

### Workflow A: Adding a New Technical Guide Post (`/guides/[slug]`)

1. **Create the Guide File**:
   Create a new file in `src/data/guides/` using the sequential naming format (e.g., `42-your-topic-slug.ts`).
2. **Follow the `GuidePost` Structure**:
   ```typescript
   // src/data/guides/42-your-topic-slug.ts
   import { GuidePost } from './_types';

   const post: GuidePost = {
     slug: 'your-topic-slug',
     title: 'Compelling SEO Title (50-60 chars) | Ozark Gutter Guard Co.',
     metaDescription: 'Authoritative meta description including NWA regional context and warranty data.',
     category: 'comparisons', // 'comparisons' | 'costs' | 'maintenance' | 'problems' | 'materials'
     publishDate: '2026-08-22',
     readTime: '6 min read',
     badge: 'Technical Field Guide',
     h1: 'Full H1 Heading with Primary Search Keyword',
     heroSubtitle: 'Direct technical summary answering the user query in the first paragraph.',
     sections: [
       {
         heading: 'Section 1: Engineering Analysis',
         content: `In-depth technical breakdown with specific measurements (50-micron, 316 stainless steel, 150 in/hr).`
       },
       {
         heading: 'Section 2: Northwest Arkansas Ground-Truth Specs',
         content: `Regional data mentioning Benton or Washington County climate, rainfall (47.5"), or tree species.`
       }
     ],
     relatedSlugs: ['oak-catkins-clogging-gutters-nwa', 'ozark-rainfall-patterns-roof-drainage-guide']
   };

   export default post;
   ```
3. **Register in Index**:
   Open `src/data/guides/_index.ts`:
   - Import your new post: `import post42 from './42-your-topic-slug';`
   - Add it to the `GUIDES_DATA` array.

---

### Workflow B: Adding a New Programmatic Keyword or Location Node

1. **For Individual High-Priority Landing Pages**:
   - Create `src/data/seoPages/pages/<your-slug>.ts` implementing `SeoPageData`.
   - Import and add it into `src/data/seoPages/pages/_index.ts`.
2. **For High-Volume Programmatic Keywords (`extended-queries.ts`)**:
   - Add entry to `EXTENDED_QUERIES` in `src/data/seoPages/extended-queries.ts`.
   - **Important**: Keep `noindex: true` on thin template variations to protect domain crawl budget and avoid doorway penalties.
3. **When a Programmatic Page is Promoted to a Full Guide**:
   - Add the slug to `GUIDE_SLUGS_PROMOTED` in `src/data/seoPages/_index.ts` so Next.js does not create duplicate URL collisions.

---

### Workflow C: Adding a New Field Case Study / Installation Log (E-E-A-T Proof)

1. **Add Job Photo**: Place the photo in `public/images/` (e.g. `public/images/new_subdivision.jpg`).
2. **Update Case Studies**: Open `src/data/caseStudies.ts` and append a new record:
   ```typescript
   {
     id: 'cs-bentonville-04',
     city: 'Bentonville',
     subdivision: 'Shadow Valley / Coler Corridor',
     roofProfile: '8/12 pitch, architectural shingles with Post Oak canopy',
     problem: 'Spring oak catkin sludge backed water under drip edge',
     solution: 'Installed 180 LF 316 surgical micro-mesh with laser pitch leveling',
     flowTested: '150 in/hr certified intake',
     image: '/images/new_subdivision.jpg'
   }
   ```
3. **Update Installation Logs**: Open `src/data/installationLogs.ts` and add technical field notes under the corresponding city key.

---

### Workflow D: Adding a New Press Release (`/press/[slug]`)

1. Open `src/data/pressReleases.ts`.
2. Add a new object to `PRESS_RELEASES_DATA` with `slug`, `headline`, `dateline`, `summary`, and `body` containing quotes from our lead field technician.
3. The page will automatically generate at `/press/[slug]` and appear in `sitemap.xml`.

---

## 🛠️ 4. Build, Validation & Deployment

### Run Development Server
```bash
npm run dev
```

### Validate Production Build (Checks all 1,137+ static routes)
```bash
npm run build
```

### Git Commit & Push Routine (PowerShell safe)
```powershell
git add . ; git commit -m "feat: your descriptive commit message" ; git push origin main
```

---

## 🔒 5. Long-Term SEO Golden Rules & Staged Rollout Scorecard

### Staged Rollout Phase Transition Criteria (GSC Scorecard)
Never transition from `CURRENT_ROLLOUT_PHASE = 1` to `Phase 2` purely based on time. Transition **only** when meeting these Google Search Console metrics:

| Phase Transition | Metric Requirement | Data Verification Source |
|---|---|---|
| **Phase 1 → Phase 2** | **100% Core Hub Indexation**: All 5 main city hubs show status `Submitted and indexed`. | GSC Pages / Coverage Report |
| **Crawl Frequency** | Googlebot Smartphone visits Core Hubs at least once every 48 hours. | GSC Crawl Stats / Server Logs |
| **Dwell Time** | Average session duration $\ge 50\text{ seconds}$ on city landing pages. | GA4 Engagement Overview |
| **Bounce / Return to SERP** | $< 40\%$ return rate (zero mass pogo-sticking loops). | GA4 / Clarity Session Replays |
| **First Impressions** | GSC registers impressions for queries like `gutter guards bentonville ar`, `micro mesh rogers ar`. | GSC Performance Report |

---

## 📈 6. Micro-Conversion Telemetry (NavBoost Signal Activation)
All interactive widgets emit clean GA4 / Google Ads conversion events to validate real-world user intent:
* `storm_verifier_scan`: Emitted when a user submits an address in `StormDamageVerifier.tsx`.
* `emergency_call_click`: Emitted on 1-click calls from the Mobile Dispatch Strip.
* `satellite_estimator_quote`: Emitted upon instant quote generation.

2. **Keep thin queries noindexed**: Only set `noindex: false` on pages with unique first-party data.
3. **Preserve E-E-A-T ground truth**: Maintain real engineering metrics (50-micron aperture, 316 stainless steel, 150 in/hr flow, 47.5" rainfall, 0% shingle warranty contact).

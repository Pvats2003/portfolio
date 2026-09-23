# Portfolio v2 — Phase 0 Audit

_Audited 2026-09-23 against `public/resume/Priyanshu_Vats_Resume_PV.pdf` (the source of truth). Nothing in the site was changed for this audit._

**Two limits on this audit:**

1. **No outside network access.** This session's network policy blocks every outside host: the live site (`portfolio-seven-gold-54.vercel.app`), both Karavali URLs, `city-ops-cf81f.web.app`, `priyanshuvats.com` and LinkedIn. So every check below is against the repo code, and Lighthouse ran on a local production build. Those items are marked **UNVERIFIED — network**.
2. **The live site is on a Vercel account this session can't see.** The connected Vercel team (`pvats2003's projects`) has zero projects. I can't confirm which commit `portfolio-seven-gold-54` serves, so this audit describes the repo at `9b950a6`.

---

## 1. Stack & structure

| Area | Finding |
|---|---|
| Framework | Next.js **14.2** (App Router), React 18.3, TypeScript `strict: true`, Tailwind 3.4 |
| Routing | Static, one folder per page: `/`, `/about`, `/resume`, and 8 case studies under `/work/*` (`anpr, audit-ai, career-os, instawork, itc, karavali, kyc, opsintel`). Each case-study page is the same 15-line wrapper around `CaseStudyPage`. |
| Content | Already in typed files: `data/site.ts`, `data/projects.ts` (730 lines, all 8 projects), `data/experience.ts`, `data/skills.ts`. Types are in `lib/types.ts`. **Good foundation for "edit text without touching components."** |
| Components | 29 files. Layout: Navigation, Footer, CommandPalette (⌘K), ScrollProgress. Home sections: Hero, HeroArtwork, HowIWork, WhyThisWork, ExperienceTimeline, Contact, Skills. Projects: 4 one-off feature components (CareerOS, Instawork, OpsIntel, Karavali), ProjectCard, ProjectIndex. Case studies: Hero, Nav, Section, ArchitectureDiagram, RoleBlock, VisualEvidence. UI: Button, Metric, SectionHeader, Tag, TechStack. **None are unused.** |
| Dependencies | `framer-motion` (9 files; the heaviest dependency and the main cause of mobile TBT), `lucide-react` (13 files, tree-shaken), `sharp` (needed by `next/image` in production). **No unused dependencies.** |
| Fonts | Inter + JetBrains Mono through `next/font/google`, which self-hosts them at build time, so there's no layout shift from fonts. |
| Theme | **Dark only.** Colors are hard-coded hex values in `tailwind.config.ts` and `globals.css`. There are no CSS variables and no light theme. |
| Assets | `public/hero/artwork.webp` (19 KB). `public/evidence/*` holds only `.gitkeep` files: **there are no real screenshots anywhere.** |
| Health | `lint` clean · `typecheck` clean · `build` green. Home first-load JS is 145 KB. |
| Missing | No `README.md`, `CLAUDE.md`, `TODO.md` or `DESIGN.md`. No `app/not-found.tsx` (Next's default 404 shows). No analytics. No OG images. No JSON-LD. No canonical tag. |
| Git | Only one branch exists on the remote (`claude/priyanshu-vats-portfolio-ir3h1m`); there is **no `main`**. See the question at the end about `portfolio-v2`. |

---

## 2. Content vs. resume diff

Severity: 🔴 wrong or missing a headline fact · 🟠 overclaim or contradiction · 🟡 detail the resume doesn't support (needs your confirmation) · ⚪ cosmetic

### Known issues (from your brief) — confirmed

| # | Issue | Status in repo | Sev |
|---|---|---|---|
| K1 | **City Ops OS is missing entirely** | Confirmed. Zero mentions anywhere. The Instawork story stops at "three prototypes" with no climax. | 🔴 |
| K2 | **Stats omit 10,000+ hours and 50+ field staff** | Confirmed. The hero stats are `350+ Career OS tests · 116 businesses · 89.1% ANPR mAP · 1 week Karavali MVP`. "10,000+" and "50+ field staff" appear **nowhere** on the site. | 🔴 |
| K3 | **Karavali URL** | The site links `https://karavali.base44.app` (`data/projects.ts:419`). The resume says `karaval.base44.app`. **UNVERIFIED — network:** I couldn't test which one resolves. | 🔴 |
| K3b | **Karavali stack** | The site says "React + Supabase data layer and auth" (`projects.ts:413-420, 460`) and lists Supabase under skills. The resume names no stack, and the `base44.app` host suggests it was built on **Base44** (an AI app builder), which would make the Supabase/React claims inaccurate. **Please confirm the real stack.** | 🟠 |
| K4 | **`og:url` / metadataBase → `priyanshuvats.com`** | Confirmed (`data/site.ts:17`, used by `layout.tsx`, `sitemap.ts`, `robots.ts`). So the sitemap and robots.txt currently advertise a domain that may not be yours. **UNVERIFIED — network:** I couldn't check who owns the domain, and I can't see a domain on the connected Vercel account. | 🔴 |
| K5 | **Lightweight KYC isn't on the resume** | It's already tier 3 (Archive) with status `Concept`, and its targets are labelled as targets. Its route `/work/kyc` is in the sitemap; the ⌘K palette doesn't list it, which is fine for a concept. **Plan:** keep it, with a visible "Concept" label on the card. | ⚪ |
| K6 | **"Instawork AI Labs"** | Clean: zero occurrences. "Instawork Robotics Labs" is used everywhere. | ✅ |

### Other conflicts found

| # | Site says | Resume says | Sev |
|---|---|---|---|
| C1 | **OpsIntel "is part of the internal ops stack at Instawork" and "plugs into the same operations command center"** (`projects.ts:386, 394`) | The three prototypes were tested, showed one city would sprawl across **four** systems, and **led to City Ops OS**. The site presents a superseded prototype as a live production system. | 🟠 |
| C2 | Instawork: "**I own end-to-end field operations**" (`projects.ts:183, 219`) | "Run **day-to-day field execution**". Owning ops end-to-end is a bigger claim. | 🟠 |
| C3 | Location **"Manipal, KA"** (`site.ts:13`, resume page, contact) | **Bengaluru, KA** | 🔴 |
| C4 | Role line: "Product-minded AI Operator · Product Builder · Automation" | "Product & Operations Builder · AI/Robotics Field Operations · 0→1 Internal Tools" | 🟠 |
| C5 | **No GitHub link anywhere** (footer, contact, resume page, palette) | `github.com/Pvats2003` | 🔴 |
| C6 | Resume page summary: "…seeking Associate Product Manager / Founder's Office roles…" | Different summary: 50+ staff, 10,000+ hrs, City Ops OS | 🟠 |
| C7 | Resume page "Download Resume" calls `window.print()` | The brief wants the **exact PDF** offered. The HTML resume is a separate hand-copy of the content, so it has already drifted (C3, C6, missing City Ops OS). | 🟠 |
| C8 | Dates: Instawork "2026 — Present"; ITC "2024"; Karavali and ANPR have no dates | "May 2026 – Present"; "Jun 2024 – Jul 2024"; Karavali "Apr 2026 – Present"; ANPR "Jan 2026 – May 2026" | ⚪ |
| C9 | Career OS: 5 named adapters (Remotive, Arbeitnow, Adzuna, Greenhouse, Lever), "0 ORM–migration drift", Ruff/Mypy clean, SQLAlchemy/Pydantic/Anthropic API | The resume only says "multi-source discovery", "350+ passing tests" and the hard stops. These came from earlier briefs and **aren't on the current resume. Keep or cut?** | 🟡 |
| C10 | Instawork: field guide "built with ReportLab"; dashboard "dark-mode" | Not on the resume | 🟡 |
| C11 | Audit AI personas named "Auditor, Reviewer, Compliance Lead" | "three personas", unnamed. The resume also mentions the **YC application**, which the site omits. | 🟡 |
| C12 | Revels: role titles "Core Committee" / "Organising Committee", plus "drove end-to-end promotions strategy…" | "Painting & Publicity: led a 10-member core team (2025) and 30 volunteers (2024)" | 🟡 |
| C13 | Skills list includes Basic SQL, Market Research, Supply Chain Analysis, Backlog Grooming, Supabase, SQLAlchemy, Pydantic, Next.js, Node.js, FastAPI | The resume groups skills as Product / Operations / **AI/Product Development: Claude Code, LLM/OCR integrations, React web apps, Apps Script automations** / Tools. Listing frameworks as personal skills reads as "hand-codes in FastAPI", which breaks rule 3. | 🟠 |
| C14 | **Hand-coding language:** "I built a React tool…" (`projects.ts:275`); Career OS role "Solo builder"; owned "Test suite, typing, and schema migrations"; Karavali "Mobile-first UI build (React)"; About: "I've built AI systems… alone, end to end" | Rule 3: use "designed / directed the build / shipped / scoped", and name Claude Code as a deliberate choice. **Claude Code isn't mentioned anywhere on the site.** | 🟠 |
| C15 | OCR tool is shown as a working system | The brief says it **isn't in use** and has specific lessons (small-screen OCR, fenced-JSON parsing, cropping). None of that is on the site yet. | 🟡 |
| C16 | Missing resume facts: **50+ Field Officers / Data Captains / Data Collectors**, **10,000+ hours**, **Rajampet & Kadapa**, **Bengaluru high-dexterity directories across 10 neighbourhoods**, and City Ops OS's **local-first trade-off** | Partly present (Rajampet–Kadapa corridor and the Bengaluru directories are mentioned, but without the "10 neighbourhoods" count). | 🔴 |

**Confidentiality check:** ✅ No real names, phone numbers (other than yours), faces, WhatsApp screenshots or dashboards. Every visual is a recreated mockup that already carries an "illustrative / conceptual" note. The label should be standardised to **"Illustrative — synthetic data"** as the brief asks.

---

## 3. Lighthouse

Local production build (`next start`) with Lighthouse 12 defaults (mobile uses simulated slow-4G and a 4× CPU slowdown). Vercel's CDN will usually score a little better on performance than a local server.

| Page | Perf | A11y | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Home — **mobile** | **86** | **96** | 100 | 100 | **3.2 s** | 0 | 270 ms |
| Home — desktop | 100 | **96** | 100 | 100 | 0.6 s | 0 | 0 ms |
| Career OS — mobile | 97 | 100 | 100 | 100 | 2.5 s | 0 | 40 ms |
| Career OS — desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |

Target: every category at least 95 on mobile, LCP under 2.0 s, CLS under 0.05. **Home on mobile fails performance, accessibility and LCP.**

**Top 5 fixes — performance (mobile)**

1. **The LCP element is the decorative orb image** (`HeroArtwork`). On mobile, make the headline the LCP instead (drop `priority` and fade the art in after it, or cut the art per §5 below).
2. **270 ms total blocking time from framer-motion hydration on the home page.** Replace the hero's entrance animations with CSS transitions, and load framer-motion only where it adds meaning.
3. The hero text starts at opacity 0 and animates in, which delays LCP and speed index (4.1 s). Render it visible first, and animate only under `prefers-reduced-motion: no-preference`.
4. About 20–26 KB of unused JS and 11 KB of legacy polyfills. Set a modern `browserslist` and check which client components really need `'use client'`.
5. Render-blocking CSS (about 50 ms). Minor; revisit after 1–4.

**Top 5 fixes — accessibility**

1. `color-contrast` fails on the hero eyebrow (`text-faint/80`: 3.88:1 at 10 px; needs 4.5:1).
2. `color-contrast` fails on the big decorative index numerals in the feature sections (`text-faint opacity-50/60`: 2.16–2.65:1). Either hide them from assistive tech or raise the contrast.
3. **The ⌘K palette has no arrow-key navigation or focus trap.** Tab can leave the open dialog, which fails WCAG 2.1.2 / 2.4.3 in practice (Lighthouse doesn't catch this).
4. Many 10 px mono labels across the site are borderline. Set a 12 px minimum for readable text in the new type scale.
5. Only one theme exists, so light-theme contrast is untested (the brief needs both).

**Top 5 fixes — best practices / SEO** (both score 100, but real gaps remain)

1. The canonical URL and `og:url` point to an unverified domain (K4).
2. There are no OG/Twitter images, so shared links look blank. Add per-page `next/og` images.
3. No JSON-LD `Person` schema with `sameAs` (LinkedIn, GitHub).
4. Per-page descriptions are generic on case studies (they reuse `description`), and there's no `alternates.canonical`.
5. No custom 404 page, and no analytics to measure resume downloads.

---

## 4. Recruiter 30-second test

**What a Bengaluru hiring manager concludes today (cold visit, about 30 s):**

> "Nice-looking dark site with a glowing blob. 'I build systems that turn messy problems into intelligent products' could be anyone. Stats: 350 tests, 89% mAP, 1 week MVP. So an engineering student who does AI side projects? The first project is a job-search agent. Instawork is second, and I can't tell what he actually does there. Based in Manipal? Probably a fresher looking for SDE or ML roles. No GitHub link."

**What they should conclude:**

> "He runs robotics-training data collection in the field for Instawork: 50+ people, 10,000+ recording hours. He noticed the ops lived in WhatsApp and Sheets, prototyped three fixes, realised they'd sprawl into four systems, and consolidated them into City Ops OS, which Instawork is now adopting. He ships with Claude Code. He's in Bengaluru and wants APM, Product Ops or Founder's Office roles. Email's right here."

**The gap (this is the brief for Phase 1):**

1. The headline is generic. It should be specific and checkable, and name the field-ops reality.
2. The strongest proof (10,000+ hours, 50+ staff, City Ops OS adoption) is **absent**. The weakest-for-this-audience proof (test count, mAP) leads.
3. The flagship is wrong: Career OS sits at index 01, and the actual climax story, City Ops OS, doesn't exist.
4. Instawork is split into four cards and pages (Instawork, OpsIntel, and the OCR and command center folded inside), so nobody reads it as **one arc with a decision**.
5. The target role and city aren't stated anywhere above the fold. The location is wrong, and GitHub is missing.
6. The decorative hero (orb, "Ideas / Systems / People", "A more intelligent tomorrow", AI/Product/Operations labels) uses the most valuable pixels on the page to say nothing checkable. **Recommendation: cut it** (Phase 3). It was added at your request in the last round, so this is your call.

---

## 5. What I need from you before Phase 1

1. **Karavali:** which URL is live, `karavali.base44.app` or `karaval.base44.app`? What was it actually built with (Base44? React + Supabase?)
2. **Domain:** do you own `priyanshuvats.com`? If not, I'll point canonical, OG and sitemap at the Vercel URL.
3. **City Ops OS link:** is `city-ops-cf81f.web.app` safe to link publicly? (It's already printed on your resume.)
4. **Career OS extras (C9), ReportLab (C10), Audit AI persona names (C11), Revels titles (C12):** keep or cut?
5. **Skills list (C13):** OK to restructure it to match the resume's four groups?
6. **Hero art:** OK to remove the orb and its text cloud?
7. **Branch:** your brief says work on `portfolio-v2`, but this session is set up to push to `claude/priyanshu-vats-portfolio-ir3h1m`. Should I create and push `portfolio-v2` for this work?
8. **Previews and Lighthouse on the real site:** the connected Vercel account can't see the project behind `portfolio-seven-gold-54.vercel.app`. Either extend the Vercel connection to that team, or tell me how that site is deployed (for example, whether it auto-deploys from this GitHub branch). To test live URLs, add `*.vercel.app`, `*.base44.app` and `*.web.app` to this environment's allowed domains.

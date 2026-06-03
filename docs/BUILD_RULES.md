# Georgia Film Society Institutional Site Build Rules

## Branch Strategy

- `main` is the current live landing page and production branch.
- `institutional-site` is the full Georgia Film Society institutional rebuild.
- Do not merge `institutional-site` into `main` until the full site is approved.
- Do not promote preview deployments to production until final approval.
- Vercel preview deployments are the testing environment.

## Canon Source

The Georgia Film Society Website Design Layout Canon & Handoff Document is the governing source for this build.

Core canon:
- Georgia Film Society is the umbrella institution.
- Cardennes Film Festival is the flagship prestige festival brand.
- Cardennes lives primarily at cardennes.org.
- The GFS website includes a controlled Cardennes bridge page, but does not become the Cardennes site.
- GFS must feel larger than any single festival, event, person, city, or season.

## Build Philosophy

- Static-first or hybrid-first.
- Astro + vanilla CSS.
- No Next.js for launch.
- No unnecessary JavaScript.
- No CMS at launch.
- Component-driven architecture.
- Mobile-first responsive design.
- Accessibility and performance from the beginning.

## Launch Pages

Initial institutional launch should include:

- Home
- About
- Programs
- Membership or Membership Interest
- Support
- Partner
- Cardennes
- Contact

Future expansion may include:

- Events
- Students & Education
- Journal / Dispatches
- Press
- Board / Advisors

## Hard No List

Avoid:
- Fake sponsor logos
- Fake impact metrics
- Fake testimonials
- Generic film icons such as clapperboards, popcorn, film reels, red carpets, or director chairs
- Local film club energy
- Startup nonprofit positioning
- Festival-only positioning
- Overbuilding Cardennes functionality on georgiafilmsociety.com
- Overloading the homepage with every future initiative

## Technical Rules

- Test locally with `npm run dev`.
- Test production build with `npm run build`.
- Commit small, stable milestones.
- Push only to `institutional-site` during development.
- Review through Vercel Preview.
- Keep legacy landing page backup in `_legacy-landing-page`.

## Current Safe Milestones Completed

- Created `institutional-site` branch.
- Preserved legacy landing page files.
- Installed Astro foundation.
- Confirmed local development server works.
- Confirmed production build works.
- Pushed branch to GitHub.
- Confirmed Vercel Preview deployment works.

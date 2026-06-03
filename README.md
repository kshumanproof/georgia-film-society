# Georgia Film Society Institutional Site

Static HTML + Tailwind CDN website for Georgia Film Society.

Built for the `institutional-site` branch and Vercel preview deployment.

## Branching

- `main` = protected production branch / existing landing page protection
- `institutional-site` = new institutional site build branch

Do not merge into `main` until the full site is reviewed and approved.

## Stack

- HTML
- Tailwind CDN
- Google Fonts
- No build system
- No framework
- Vercel static deployment

## Core Pages

- `index.html` — Homepage
- `about.html` — Institutional story and mission
- `programs.html` — Year-round program ecosystem
- `events.html` — Future event calendar placeholder
- `membership.html` — Membership tiers and Stripe links
- `support.html` — Donation and support page
- `partner.html` — Sponsorship and partnership page
- `cardennes.html` — Cardennes Film Festival bridge page
- `students.html` — Student access and education
- `volunteer.html` — Volunteer interest and future form placeholder
- `press.html` — Press resources and approved language
- `contact.html` — Contact paths and FAQ

## Utility Pages

- `membership-success.html`
- `donation-thank-you.html`
- `404.html`

## Assets

Main assets live in:

```txt
assets/img/
```

Sponsor logos live in:

```txt
assets/img/sponsors/
```

Cardennes images live in:

```txt
assets/img/cardennes/
```

## Important Image Names

Homepage / global:

```txt
assets/img/icon-gfs.png
assets/img/logo-gfs.png
assets/img/social-preview.jpg
```

Cardennes:

```txt
assets/img/cardennes/cardennes-hero.jpg
assets/img/cardennes/cinema-seats.jpg
assets/img/cardennes/filmmaker.jpg
assets/img/cardennes/hospitality.jpg
assets/img/cardennes/venue.jpg
```

Sponsors:

```txt
assets/img/sponsors/sponsor-01.png
assets/img/sponsors/sponsor-02.png
assets/img/sponsors/sponsor-03.png
assets/img/sponsors/sponsor-04.png
assets/img/sponsors/sponsor-05.png
assets/img/sponsors/sponsor-06.png
```

## Membership Links

Membership payment links currently live in `membership.html`.

Current tiers:

- Society Member
- Inner Circle Member
- Patron Member
- Founding Circle inquiry only

Founding Circle is not a checkout product.

## Donation Links

Donation links live in `support.html`.

Current placeholders:

```txt
PAYPAL_25_DONATION_LINK
PAYPAL_50_DONATION_LINK
PAYPAL_100_DONATION_LINK
PAYPAL_250_DONATION_LINK
PAYPAL_500_DONATION_LINK
PAYPAL_1000_DONATION_LINK
PAYPAL_CUSTOM_DONATION_LINK
PAYPAL_STUDENT_ACCESS_LINK
PAYPAL_PROGRAMMING_LINK
```

Replace these after PayPal business approval.

## Sponsor Marquee

Sponsor marquee lives in `partner.html`.

Each sponsor appears twice:

1. visible marquee group
2. duplicate `aria-hidden="true"` group

To hide a sponsor, set both copies to:

```html
data-sponsor-active="false"
```

To show a sponsor, set both copies to:

```html
data-sponsor-active="true"
```

To hide the whole sponsor ribbon, set:

```html
data-ribbon-active="false"
```

## Future Form Embeds

Volunteer form placeholder:

```txt
volunteer.html
```

Student interest form placeholder:

```txt
students.html
```

Likely future system:

- Jotform embed
- Airtable integration
- CRM or email workflow later

## SEO Files

- `robots.txt`
- `sitemap.xml`
- `BingSiteAuth.xml`

Keep `BingSiteAuth.xml` at root.

## Shared Site Elements

Header, footer, mobile menu, and back-to-top button are copied into every page.

After changing the header or footer in `index.html`, sync across pages using PowerShell.

### Sync Footer

```powershell
$source = Get-Content index.html -Raw
$footer = [regex]::Match($source, '<footer[\s\S]*?</footer>').Value

$files = Get-ChildItem *.html | Where-Object { $_.Name -ne "index.html" }

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw
  $updated = [regex]::Replace($content, '<footer[\s\S]*?</footer>', $footer)
  Set-Content $file.FullName $updated
}
```

### Sync Header

```powershell
$source = Get-Content index.html -Raw
$header = [regex]::Match($source, '<header[\s\S]*?</header>').Value

$files = Get-ChildItem *.html | Where-Object { $_.Name -ne "index.html" }

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw
  $updated = [regex]::Replace($content, '<header[\s\S]*?</header>', $header)
  Set-Content $file.FullName $updated
}
```

## Build Mode vs Polish Mode

Build mode:

- Create pages
- Wire navigation
- Add placeholders
- Establish structure

Polish mode:

- Replace PayPal placeholders
- Replace test Stripe links if needed
- Add real sponsor names/logos
- Add Jotform embeds
- Update per-page canonical URLs
- Update OG/Twitter metadata per page
- Add final social preview image
- Run QA across all links/images

## Commit Pattern

Use clear commits:

```powershell
git add .
git commit -m "Describe the change"
git push origin institutional-site
```
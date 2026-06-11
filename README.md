# Georgia Film Society Website

Static HTML + Tailwind CDN website for Georgia Film Society.

The production site currently uses a public landing page with a soft-gated institutional preview for invited reviewers.

## Production Structure

- `main` = production branch
- `index.html` = public landing page at `https://georgiafilmsociety.com/`
- `access.html` = private institutional preview access page
- `institutional.html` = full institutional homepage after access
- Other full-site pages are protected by the preview access guard

## Preview Access

The full institutional website is currently pre-launch and intended for invited reviewers, including prospective board members, officers, sponsors, partners, and supporters.

Protected pages use:

```txt
assets/js/access-guard.js
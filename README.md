# Parentura – The AI Parent Playbook

Professional client-delivery package for the Parentura landing page.

## Included

- `index.html` — production-ready page shell and approved landing-page content
- `css/style.css` — organized stylesheet extracted from the original page
- `js/config.js` — client-editable configuration
- `js/main.js` — checkout-link configuration, scroll reveal, and evergreen timer
- `setup/CONFIGURATION.md` — handoff/setup instructions
- `source/Parentura-original.html` — untouched original source for rollback/reference
- `assets/` — ready for future images, icons, and fonts

## Client content policy

The approved marketing copy, pricing, testimonials, guarantees, FAQs, chapter references, and countdown behavior from the supplied source have been preserved.

Technical improvements are limited to structure, accessibility, maintainability, configuration, and browser resilience.

## Quick setup

1. Open `js/config.js`.
2. Replace `checkoutUrl` with the client's real checkout/payment URL.
3. Upload the complete folder to the client's hosting.
4. Open `index.html` and test every CTA, mobile layout, FAQ, and countdown.
5. If using a custom domain, connect the domain/DNS through the hosting provider.
6. Run a final production QA before delivery.

## Local preview

Because the project is static, it can be previewed with any static web server.

Example:

```bash
python -m http.server 8080
```

Then open:

`http://localhost:8080`

## Deployment

This project can be deployed to any standard static hosting environment, including cPanel hosting, GitHub Pages, Netlify, Vercel, Cloudflare Pages, or similar providers.

## Production checklist

- [ ] Real checkout URL inserted
- [ ] HTTPS enabled
- [ ] Domain connected
- [ ] CTA tested on desktop and mobile
- [ ] FAQ tested
- [ ] Countdown tested
- [ ] Chrome / Edge / Safari / Firefox checked
- [ ] Mobile breakpoints checked
- [ ] Client-approved copy visually reviewed
- [ ] Final backup retained

## Important

The checkout URL is intentionally left as the original placeholder:

`https://your-checkout-link.com/pay`

Replace it before launch.

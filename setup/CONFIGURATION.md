# Parentura Client Setup / Configuration

## 1. Checkout URL

File:

`js/config.js`

Current placeholder:

`https://your-checkout-link.com/pay`

Replace only the value of `checkoutUrl`.

Example:

```js
window.PARENTURA_CONFIG = {
  checkoutUrl: "https://client-real-checkout-url.com/pay",
  brandName: "Parentura",
  productName: "The AI Parent Playbook"
};
```

All CTA links marked with `data-checkout-link` will use this URL automatically.

## 2. Branding

The main brand/product values are centralized in `js/config.js` for future integrations.

Visible marketing copy is intentionally kept in `index.html` so the client can review and edit the actual page content directly.

## 3. Assets

Place client assets here:

- `assets/images/`
- `assets/icons/`
- `assets/fonts/`

If the client later supplies a real book-cover image or other artwork, it can be integrated without changing the overall project structure.

## 4. Hosting

Upload the entire `Parentura-AI-Parent-Playbook` folder to the hosting provider's public web directory.

Typical cPanel destination:

`public_html/`

The file that must be publicly accessible is:

`index.html`

## 5. Domain / SSL

Connect the client's domain to the hosting provider and make sure the final site loads over HTTPS.

## 6. QA before handoff

Test:

- Hero CTA
- Pricing CTA
- Checkout destination
- Mobile responsiveness
- FAQ accordions
- Scroll-reveal animations
- 15-minute timer
- Keyboard focus states
- Reduced-motion behavior
- Footer/disclaimer
- All visible client-approved copy

## 7. Safe rollback

`source/Parentura-original.html` is the untouched source supplied for this build. Keep it as a backup/reference and do not delete it from the master project archive.

## 8. Recommended client handoff

Deliver:

1. The ZIP package
2. The live URL
3. The real checkout URL configured
4. A short note explaining where future content/checkout edits are made
5. A backup copy of the final production version

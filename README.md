# Idealisa website

Single-page Next.js 16 / React 19 / Tailwind CSS 4 site. Copy lives in
`lib/translations.ts`; the existing language provider defaults to `pt-AO`,
persists the selection in a cookie, and falls back to English translations.

Use Node.js 22.16 or later and pnpm 10.33:

```sh
pnpm install
pnpm dev
pnpm build
```

The production build uses Next.js's webpack option. TypeScript errors fail the
build. Next.js 16.3.3 satisfies the OpenNext adapter's supported version range.

## Cloudflare Workers

Configuration follows the [OpenNext setup guide](https://opennext.js.org/cloudflare/get-started).

```sh
# Build and preview in the Workers runtime
pnpm preview

# Validate deployment without publishing
npx opennextjs-cloudflare build
npx wrangler deploy --dry-run

# Publish after authenticating Wrangler with the target Cloudflare account
npx opennextjs-cloudflare build && npx wrangler deploy
```

`wrangler.toml` names the Worker `idealisa-website-v2`. If you rename it, also
update the `WORKER_SELF_REFERENCE` service name. No R2 resource is required:
the page is rendered dynamically to read the locale cookie and does not use ISR.
Images retain the existing unoptimized configuration and are served as assets.

The home-page layout and copy come from
`design-reference/Idealisa website design (2)/Idealisa Site.dc.html`, with a
rectangular navbar as requested. Navigation uses sections on `/`; legal copy
opens in accessible dialogs. The Basic/Custom pricing control remains interactive.

The reference's empty case-study image slots use the existing client logos;
its empty article collection displays a translated empty state. The contact
form opens WhatsApp with the supplied details for the visitor to review and send.

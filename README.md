# Glory Beauty Salon Website

This is a Sanity-powered headless website for Glory Beauty Salon, built with Next.js and local fallback content so the site can run before a Sanity project is connected.

## Tech Stack

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- React Server Components by default
- `next/image`
- `next/font`
- Lucide icons
- Sanity CMS
- `next-sanity`
- Vercel-ready environment variables

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Project Structure

- `app/` - routes, metadata, sitemap, robots, error and 404 pages
- `components/` - shared UI, navigation, booking dialog, buttons, footer and reusable sections
- `sanity/` - Sanity Studio schemas and CMS setup notes
- `app/studio/[[...tool]]/page.tsx` - embedded Sanity Studio route
- `src/sanity/` - Sanity client, queries and fallback-aware content loader
- `src/config/salon.ts` - salon-wide fallback settings and environment variable wiring
- `src/data/categories.ts` - fallback service category records
- `src/data/services.ts` - fallback service descriptions, availability and prices
- `src/data/locations.ts` - fallback location addresses, phone/status/hours/directions
- `src/types/salon.ts` - shared TypeScript interfaces
- `public/images/` - logo, home, about, service and location image assets

## Updating Prices

After Sanity is connected, edit prices in Sanity Studio at `/studio` under Services. Prices are stored in each service record as location-specific prices.

Before Sanity is connected, fallback prices live in `src/data/services.ts`. Do not edit prices directly inside React components.

## Adding a Service

After Sanity is connected, add a Service document in Sanity Studio and assign it to a Service Category.

For fallback content, add a new object to `services` in `src/data/services.ts` with:

- `id`
- `code`
- `slug`
- `name`
- `category`
- descriptions
- image path and alt text
- display order
- women-only indicator if needed
- location-specific price and availability

## Updating Service Descriptions

After Sanity is connected, edit service descriptions in Sanity Studio. For fallback content, edit the `shortDescription` and `fullDescription` values in `src/data/services.ts`. Category-level fallback descriptions live in `src/data/categories.ts`.

## Replacing Images

Replace files in `public/images/` while keeping the same names where possible:

- `public/images/logo/glory-beauty-logo.png`
- `public/images/home/home-hero.jpg`
- `public/images/about/about-story.jpg`
- `public/images/services/waxing.jpg`
- `public/images/services/threading.jpg`
- `public/images/services/nufree.jpg`
- `public/images/services/casmara-facial.jpg`
- `public/images/services/hydradermabrasion.jpg`
- `public/images/services/microdermabrasion.jpg`
- `public/images/services/dermaplaning.jpg`
- `public/images/services/mens-services.jpg`
- `public/images/locations/stoney-creek.jpg`
- `public/images/locations/welland.jpg`

In production, upload final salon-owned images into Sanity. The local files remain fallback/demo assets because the supplied Word documents did not contain embedded media and the PDF contained design-reference screenshots rather than clean production photos.

## Updating Location Details

After Sanity is connected, edit locations in Sanity Studio. For fallback content, edit `src/data/locations.ts` for:

- phone numbers
- status
- business hours
- directions links
- address lines

Welland is intentionally marked `Coming Soon` because the supplied content says it is a new location coming soon and does not provide a phone number.

## Adding Square Booking

Set this environment variable:

```bash
NEXT_PUBLIC_SQUARE_BOOKING_URL=https://squareup.com/appointments/...
```

When this value is blank, Book Now buttons show a demo dialog instead of pretending booking is connected.

You can also add the Square URL in the Sanity Salon Settings document. Page-level booking buttons will use the Sanity value when available.

## Environment Variables

Create `.env.local` for local testing:

```bash
NEXT_PUBLIC_SITE_URL=https://www.glorybeautysalon.ca
NEXT_PUBLIC_SQUARE_BOOKING_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-21
PRIVATE_SITE_USERNAME=
PRIVATE_SITE_PASSWORD=
```

## Password-Protecting the Preview Site

The website includes optional Basic Authentication for private client previews.

To turn it on locally or in Netlify, set both variables:

```bash
PRIVATE_SITE_USERNAME=client
PRIVATE_SITE_PASSWORD=choose-a-strong-password
```

When both values are set, visitors must enter the username and password before viewing the site or opening `/studio`.

To turn password protection off, leave both values blank or remove them from the environment.

In Netlify, add these under:

```text
Site configuration > Environment variables
```

Then redeploy the site.

## Sanity CMS Setup

1. Create a free Sanity project.
2. Use the `production` dataset unless you prefer another dataset name.
3. Add the Sanity project ID to `.env.local`.
4. Run `npm run dev`.
5. Open `http://localhost:3000/studio`.
6. Create or import the Salon Settings, Locations, Service Categories and Services documents.

The site uses Sanity content when `NEXT_PUBLIC_SANITY_PROJECT_ID` is configured. If Sanity is not configured or the CMS is empty, it falls back to the local content files.

## Seed Content

The seed file is generated from the local fallback content:

```bash
npm run sanity:seed:file
```

This writes `sanity/seed/glory-beauty-salon.ndjson`. Import that file with the Sanity CLI after your project ID and dataset are configured.

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the GitHub repository into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SQUARE_BOOKING_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION`.
4. Deploy the project.
5. Test the Vercel preview URL.
6. Add the custom domain after approval.
7. Configure `www.glorybeautysalon.ca` as the primary domain.
8. Redirect `glorybeautysalon.ca` to `www.glorybeautysalon.ca`.
9. Verify HTTPS is active.
10. Test metadata, sitemap, robots, contact details and Square links.

## Custom Domain Notes

The site is prepared for `https://www.glorybeautysalon.ca` through `NEXT_PUBLIC_SITE_URL`. The `www` hostname is recommended as canonical. Do not assume the domain is already purchased or available. Configure the root-to-www redirect in Vercel after the salon approves production launch.

## Missing Salon Information

- Final Square Appointments URL
- Welland phone number
- Business hours for both locations
- Contact email address
- Final production logo file
- Salon-owned photography for hero, about, service and location images
- Sanity project ID and initial CMS content entry

## Demo Limitations

- Booking opens Square only after `NEXT_PUBLIC_SQUARE_BOOKING_URL` is configured.
- Analytics and cookies are not configured.
- No authentication or custom booking system is included.

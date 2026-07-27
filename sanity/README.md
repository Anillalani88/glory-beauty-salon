# Sanity CMS Setup

This project is configured for a simple headless Sanity + Next.js workflow.

## What Sanity Manages

- Salon settings
- Locations
- Service categories
- Services and location-specific prices

The website still has local fallback data in `src/data/` so it can build and run before a Sanity project is connected.

## Create a Sanity Project

1. Create a free Sanity account.
2. Create a new project in Sanity.
3. Use the `production` dataset, or update `NEXT_PUBLIC_SANITY_DATASET`.
4. Copy the project ID into `.env.local`.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-21
```

## Run Locally

```bash
npm run dev
```

Then open:

- Website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Seed Initial Content

Generate the import file from the local fallback data:

```bash
npm run sanity:seed:file
```

Import the generated NDJSON file after your Sanity project ID is configured:

```bash
npx sanity dataset import sanity/seed/glory-beauty-salon.ndjson production --replace
```

## Content Model Notes

Use the same `id` values that the website expects:

- Locations: `stoney-creek`, `welland`
- Categories: `threading`, `waxing`, `nufree`, `casmara-facials`, `advanced-facials`, `mens-services`

For image fields, upload final salon-owned images in Sanity. Keep the fallback image path populated so the site still has a local image if a CMS image is missing.

## Deployment Notes

Add these variables in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://www.glorybeautysalon.ca
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-21
NEXT_PUBLIC_SQUARE_BOOKING_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

No custom database, custom admin portal, Supabase, Firebase, or internal booking system is required.

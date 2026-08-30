# Source and publication notes

This build is a private local concept. Public visibility on Instagram does not establish permission to republish, modify, commercially use, or redistribute the footage. Before any public deployment, Paina Cafe should approve the selected media and ideally supply the clean original masters. Any embedded music, performer, or third-party creator rights must be cleared separately.

## Stable first-party references

- Brand, locations, phones, order path, and current positioning: https://painacafe.com/en-US
- Current Las Vegas Instagram: https://www.instagram.com/painacafelv/
- Current order hub: https://order.online/business/61203
- Current TikTok: https://www.tiktok.com/@painacafelv

## Video masters used

- Mochi mixing, ring extrusion, and frying: https://www.instagram.com/painacafelv/reel/DcJ_7R_yJ2N/
- Hawaiian poke-bowl assembly: https://www.instagram.com/painacafelv/reel/Davhdt5tCEd/
- Spicy inari platter finishing: https://www.instagram.com/painacafelv/reel/DY-Uk6XP9nn/
- In-store prepared-food case and branded takeout handoff: https://www.instagram.com/painacafelv/reel/DcUln30hg6e/

The site ships locally derived, silent H.264 loops under `public/media/video/`. The clean portions of each reel were trimmed, audio was removed, and the clips were re-encoded for muted inline playback. The active `mochi-loop-full-batch-v2.mp4` covers source seconds 0.0–30.6 at 1.5×, including the complete continuous 23-donut extrusion batch and the finished-fryer reveal before the source's next hard edit. Its versioned filename prevents the former 12-second Mochi asset from remaining in browser or edge caches; the former `mochi-loop.mp4` remains unreferenced for provenance. `opening-desktop.mp4` is a simultaneous three-column motion composition built from the mochi, poke, and in-store footage. `opening-mobile.mp4` is a portrait sequence that moves through mochi, poke, inari, and takeout. Posters are source-derived frames from the same exact clips.

Exact source hashes, site-derivative hashes, dimensions, durations, edit ranges, and full-decode status are preserved in `sources/video-provenance.json`.

## Typeface

- Beats two through six use the self-hosted Bricolage Grotesque variable display face by Mathieu Triay. Official upstream: https://github.com/ateliertriay/bricolage
- The exact source revision is `84745e5b96261ae5f8c6c856e262fe78d1d6efdd`, matching the Google Fonts metadata at https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque.
- `public/fonts/bricolage-grotesque-variable.woff2` is the upstream `BricolageGrotesque[opsz,wdth,wght].woff2` at that revision. SHA-256: `B51A8EBD169637E47CB7DB430431AB3E122D2F09B03EE2A03EA06F4CB46F1A8E`.
- The font is licensed under the SIL Open Font License 1.1. The bundled license is `public/fonts/OFL-Bricolage-Grotesque.txt`; SHA-256: `4B5A7D8F37F5602621C8A8D7358A6A2E71317E6C231C661E15AEF0275D3E07BA`.
- The first beat intentionally retains its existing hero typography. The variable face carries the Mochi, Poke, Spicy Inari, Instagram, and locations beats plus the persistent navigation and order controls, with separate display, reading, and UI axis settings.

## Other rendered assets

- `public/media/logo.png` — current Paina Cafe / DoorDash-hosted logo from https://doordash-static.s3-us-west-2.amazonaws.com/media/restaurant/cover/PainaCafe_6870_Las_Vegas_NV.png
- `public/media/logo-transparent.png` — exact 440×230 derivative of the same logo. Exterior near-white pixels were removed while the enclosed white fish, bowl, wave, and leaf artwork was retained; no generative redraw is used by the site.
- `public/og.png` — original abstract social-preview artwork generated for this concept. It contains no documentary depiction of Paina’s food, people, or locations.
- `public/paina-social-card-v2.png` — deterministic 1200×630 diagonal social-preview composition with the oversized contiguous “Mochi.Poke.Pā‘ina.” strike spanning the lower frame edge-to-edge and “Pā‘ina.” colored from the official logo palette. The left crop uses Paina's finished mochi plate from `https://doordash-static.s3-us-west-2.amazonaws.com/media/photosV2/ed2a4739-c2e1-4a53-bb0c-19f3a47c20c5-retina-large.png`; the right side uses Paina's overhead bowl spread from `https://doordash-static.s3-us-west-2.amazonaws.com/media/store/header/cb8d4c56-9bfa-4a15-b17c-9e787fba0307.jpg` and carries the official logo. It retains the bundled Bricolage Grotesque face, with no generative redraw of the food or logo. SHA-256: `748720B7F04891E39D3BA450581F44C7B2FC3EE728C7577C4BED2A084D22DEBA`.
- `public/favicon.ico` — a 64-pixel padded derivative of the same official logo.

## Dated facts and decisions

- `158K` is the follower count visibly reported by the official `@painacafelv` profile on August 27, 2026. The page date-stamps the figure rather than presenting it as timeless.
- The official profile currently says “Donuts start 8am / Full Menu 10am-7pm.” The page does not claim a day-of-week schedule.
- Blue Diamond uses the Instagram-listed suite 125: 4965 Blue Diamond Rd, Ste 125, Las Vegas, NV 89139.
- Spring Mountain’s public unit identifiers conflict (`Ste 6` on current Instagram, `#G` on an older official page). The page deliberately uses “Korea Town Plaza” and the base street address until the unit is confirmed.
- The current site’s anonymous review snippets and stale Honolulu-linked footer destinations were not reused.

## Publication gate

Do not deploy this concept publicly until the selected Instagram footage is cleared for website use. When a final domain is chosen, set `NEXT_PUBLIC_SITE_URL` to that trusted origin before the deployment build so social-preview URLs resolve to the public host.

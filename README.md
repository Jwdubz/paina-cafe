# Paina Cafe video concept

A six-beat, full-viewport restaurant site modeled on the visitor flow of `generations.jarrettwroten.com` and rebuilt around Paina Cafe’s own visual identity and Instagram footage.

The passage moves through:

- a desktop three-reel / mobile portrait-video opening;
- mochi production;
- Hawaiian poke-bowl assembly;
- spicy inari finishing;
- the in-store prepared-food and takeout handoff;
- two Las Vegas location choices and direct ordering.

## Local preview

```powershell
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Production check

```powershell
npm run lint
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the final trusted public origin before a deployment build so Open Graph and X image URLs resolve to that domain.

## Publication boundary

This is a private local concept. Do not publish it until Paina Cafe clears the selected Instagram footage for website use. The stable posts, source hashes, derivative hashes, exact video edits, and rights status are recorded in [SOURCES.md](./SOURCES.md) and [sources/video-provenance.json](./sources/video-provenance.json).

# Promenade Website

This site uses Next.js + Sanity so clients can edit all website content in a hosted CMS.

It's a single-page site: every section (home, about, music, events, contact) lives on `/` and the header links smooth-scroll to `#about`, `#music`, `#events`, `#contact` instead of navigating to separate pages. The old `/about`, `/music`, `/events`, `/contact` URLs redirect to their anchors for backwards compatibility.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the website.

## Edit Content (Sanity Studio)

Open `http://localhost:3000/studio`.

1. Copy `.env.local.example` to `.env.local`.
2. Fill `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` with your Sanity project's values.
3. Restart `npm run dev`.

All editable website content is managed in Sanity Studio:

- `Homepage` singleton: hero eyebrow/heading/subheading, hero background video + poster image, and the repeatable "Scrolling Story Sections" that build the cinematic scroll experience (each with its own eyebrow, heading, body text, background video or image, text position, and optional button)
- `About Page` singleton: eyebrow/heading/banner (video or image) for the About section, plus intro/body paragraphs shown above the member grid
- `Music Page` singleton: eyebrow/title/intro/banner for the Music section, shown above the track list
- `Events Page` singleton: eyebrow/title/intro/banner for the Events section, shown above the events list
- `Contact Page` singleton: eyebrow/title/banner plus intro/email/labels for the Contact section, shown above the contact form
- `Site Settings` singleton: logo and header/mobile navigation links (use `#home`, `#about`, `#music`, `#events`, `#contact` as hrefs to link to sections on the single page; external links like the shop work as normal)
- `Member` collection: about page member cards
- `Event` collection: events list entries
- `Music Track` collection: music list entries

Background videos are uploaded as files directly in the Studio — keep clips short and compressed (a few seconds, ideally under ~10MB) so pages stay fast.

## Build

```bash
npm run build
```

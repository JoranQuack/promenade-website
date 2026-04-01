# Promenade Website

This site uses Next.js + Outstatic so clients can edit all website content in a simple CMS dashboard.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the website.

## Edit Content (Outstatic)

Open `http://localhost:3000/outstatic`.

If `Sign in with GitHub` does nothing, configure self-hosted auth first:

1. Copy `.env.local.example` to `.env.local`.
2. Create a GitHub OAuth App.
3. Set callback URL to `http://localhost:3000/api/outstatic/callback`.
4. Fill `OST_GITHUB_ID` and `OST_GITHUB_SECRET` in `.env.local`.
5. Restart `npm run dev`.

All editable website content is managed in these Outstatic areas:

- `home` singleton: homepage hero title/subtitle
- `about` singleton: about page heading/paragraphs/banner
- `music` singleton: music page heading/subtitle/banner
- `events` singleton: events page heading/subtitle/banner
- `contact` singleton: contact heading/text/email/button/banner
- `navigation` collection: header and mobile menu links
- `members` collection: about page member cards
- `events` collection: events list entries
- `tracks` collection: music list entries

Content files are stored in `outstatic/content` and automatically committed/deployed through your normal git workflow.

## Build

```bash
npm run build
```

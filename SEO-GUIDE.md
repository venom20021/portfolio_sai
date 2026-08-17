# SEO Guide — Sai Prabhat Portfolio

Everything here is implemented in the codebase already (metadata, semantic HTML,
sitemap, robots). The remaining steps are one-time account actions you perform in
Google Search Console and content you post on your profiles.

---

## 1. Google Search Console — Verify & Submit

### Verify the domain via DNS TXT record
1. Go to [Google Search Console](https://search.google.com/search-console) and sign in with your Google account.
2. Choose **"Add property" → "Domain"** (not URL prefix).
3. Enter `saiprabhat.vercel.app` and click Continue.
4. Google shows a **TXT record** like `google-site-verification=xxxxx`.
5. Add that TXT record in your DNS provider's console (Vercel DNS, Namecheap, GoDaddy, Cloudflare, etc.):
   - **Type:** `TXT`
   - **Name/Host:** `@` (or `saiprabhat.vercel.app`)
   - **Value:** the `google-site-verification=...` string
   - **TTL:** default (usually 3600)
6. Back in Search Console, click **Verify**. Propagation can take a few minutes to a few hours.
7. Optionally repeat for the `vercel.app` root if your DNS provider lets you.

### Submit the sitemap
1. In Search Console, open **Sitemaps** (left sidebar).
2. Enter: `sitemap.xml`
3. Click **Submit**. The sitemap lives at `https://saiprabhat.vercel.app/sitemap.xml`.
4. After a day or two, confirm the "Discovered" count > 0 and no errors are reported.

### Post-submission checks
- **URL Inspection tool** → paste `https://saiprabhat.vercel.app` → **Request Indexing** after the sitemap is picked up.
- **Pages report** → confirm `/`, `/about`, `/projects`, `/projects/barq-ai`, etc. are indexed.
- **Performance report** → watch Core Web Vitals (LCP, INP, CLS) over 28 days.

---

## 2. Lighthouse Audit — 90+ Scores

Run: Chrome DevTools → **Lighthouse** tab (or `npx lighthouse https://saiprabhat.vercel.app`) in an
**incognito window, throttled to "Mobile"**, with the theme set to dark (that's the default
audience look).

### Performance
- [ ] **Images:** project thumbnails are served via `next/image` (automatic AVIF/WebP + responsive sizes) — keep them. Verify in DevTools → Network that images load as `image/avif` or `image/webp`. If any render as JPEG, convert the source files: `sips -s format webp in.jpg --out out.webp` (macOS) or `npx sharp-cli -i in.jpg -o out.webp`.
- [ ] **LCP element:** the hero H1 / profile image. Ensure `profile.png` is optimized (it already is via `next/image`); if Lighthouse flags it, export a WebP at ~256px for the small hero display size.
- [ ] **Fonts:** `Inter` is self-hosted via `next/font` — no render-blocking Google Fonts request. Keep it.
- [ ] **Animations:** `Starfield`, `CustomCursor`, `ClickParticles`, and `MouseBeam` are all gated off touch devices and respect `prefers-reduced-motion`, so they don't block First Contentful Paint. If Lighthouse flags long tasks, lazy-mount `CustomCursor`/`ClickParticles` after `requestIdleCallback`.
- [ ] **JS bundles:** route-level code splitting is automatic in Next.js. Keep the AI Mentor page's large deps (AI SDK) out of the shared bundle — they already are, since it's a separate route.
- [ ] **Caching:** Vercel sets immutable cache headers on `/_next/static`. Confirm via Network tab (200 + `immutable`).

### Accessibility
- [ ] All icon-only buttons (`navbar` theme toggle, hamburger, footer socials, scroll-to-top) have `aria-label` — already present.
- [ ] Color contrast: body text is `muted-foreground` on `background` — both exceed 4.5:1. Don't lower it.
- [ ] Form fields in `/contact` have labels and focus rings — already present.
- [ ] `html lang="en"` is set in `app/layout.tsx` — already present.

### Best Practices / SEO
- [ ] `robots.txt` allows Googlebot and points to the sitemap — already present (`/robots.txt`).
- [ ] `sitemap.xml` lists all routes + project pages — already present.
- [ ] Every page has a unique `<title>` and meta description (via per-route layouts).
- [ ] JSON-LD `Person` + `WebSite` structured data is injected in `app/layout.tsx` — already present. Validate at [validator.schema.org](https://validator.schema.org).

---

## 3. Backlink Strategy

### Bio (GitHub / LinkedIn / X)

> Full-Stack Software Engineer building scalable systems that drive impact — .NET, AWS,
> React, and cloud architecture, with a teacher's clarity from the classroom.
> Portfolio: https://saiprabhat.vercel.app

**GitHub version:**
> Full-stack software engineer (.NET, AWS, React, TypeScript) who builds scalable systems
> and explains them like a teacher. Explore my projects and AI experiments:
> https://saiprabhat.vercel.app

**LinkedIn version:**
> Full-Stack Software Engineer | .NET · AWS · React · Cloud Architecture
> I combine production experience, cloud certification, and a teacher's clarity to build
> products that solve real problems — currently teaching CS at National Public Inter College
> while shipping full-stack solutions. Let's build: https://saiprabhat.vercel.app

**X/Twitter version:**
> Full-stack engineer building scalable systems (.NET, AWS, React). Teacher by day, builder
> by night 🚀 Portfolio: https://saiprabhat.vercel.app

### Backlink request email (faculty / staff directory)

> **Subject:** Adding a student success story / alumni resource to your page
>
> Hi [Name],
>
> I hope you're doing well. I'm Sai Prabhat, and I currently teach computer science at
> National Public Inter College. I wanted to reach out because I've built a portfolio site
> that showcases my engineering work — full-stack development, cloud architecture on AWS,
> and AI-powered applications — and I thought it might be a valuable resource for your
> students to see what a career in software engineering can look like.
>
> Would you consider adding a link to it from [department/faculty/staff page]? It would
> give your students a concrete, real-world example of the projects and skills this field
> involves.
>
> Here's the link: https://saiprabhat.vercel.app
>
> Of course, only if it feels like a good fit. Either way, I really appreciate all the work
> you do — and I'm happy to share a short blurb you could use if that's helpful.
>
> Best regards,
> Sai Prabhat
> Full-Stack Software Engineer & CS Instructor
> https://saiprabhat.vercel.app

**Tips:**
- Personalize the first paragraph for each recipient (mention their course or department).
- Target 2–3 high-authority, relevant pages (alumni pages, student resource hubs, faculty bios).
- Never pay for links; focus on relevance.

---

## Quick file map

| File | Purpose |
| --- | --- |
| `app/layout.tsx` | Root metadata, OG/Twitter tags, canonical, JSON-LD structured data |
| `app/<route>/layout.tsx` | Per-page unique titles + descriptions |
| `app/projects/[id]/layout.tsx` | Dynamic metadata for each project page |
| `app/sitemap.ts` | Generates `/sitemap.xml` |
| `app/robots.ts` | Generates `/robots.txt` |

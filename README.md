# Walk-Up Hype — Marketing Website

Launch-ready marketing site for [Walk-Up Hype](https://walkuphype.com) — AI-powered walk-up announcements and music for youth baseball & softball.

Live at: **walkuphype.com**

---

## Stack

- Pure HTML / CSS / JS — no framework, no build step
- Hosted on GitHub Pages (deploy from `main` root)
- Custom domain via `CNAME` file + DNS records

## Repo Structure

```
/
├── index.html          ← single scrolling page
├── style.css
├── script.js           ← smooth scroll + audio demo toggle
├── CNAME               ← walkuphype.com
├── assets/
│   ├── README.md       ← instructions for adding media files
│   ├── icon.png        ← app icon (add before launch)
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   ├── demo-free.mp3   ← AVSpeechSynthesizer recording (add before launch)
│   └── demo-premium.mp3 ← ElevenLabs recording (add before launch)
└── README.md
```

## Pre-Launch Checklist

- [ ] Add `assets/icon.png` (flaming baseball app icon)
- [ ] Add `assets/screenshot-1.png` and `screenshot-2.png`
- [ ] Record and add `assets/demo-free.mp3` and `assets/demo-premium.mp3`
- [ ] Replace `YOUR_FORM_ID` in `index.html` with a real [Formspree](https://formspree.io) endpoint
- [ ] GitHub repo Settings → Pages → Source: `main` → `/ (root)`
- [ ] Add custom domain `walkuphype.com` in Pages settings, enable HTTPS
- [ ] Add DNS records at registrar:
  - `A` records pointing to GitHub Pages IPs (`185.199.108.153` – `185.199.111.153`)
  - Or `CNAME www` → `danielsmu.github.io`
- [ ] Create `privacy.html` and `terms.html` before App Store submission

## Local Preview

No build step needed. Open `index.html` directly in a browser, or serve with:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploying

```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Pages publishes automatically within ~1 minute.
# Walk-up-hype-website

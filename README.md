# 🌍 Nexus EU Website

Your education consultancy website — built with Next.js, hosted free on Vercel.

---

## 🚀 Quick Start (For Non-Coders)

### Editing Anything (fees, deadlines, programmes)

1. Go to your GitHub repo in a browser.
2. Open the file: `data/universities.ts`
3. Click the **pencil icon** (top right) to edit.
4. Find the line you want to change. Edit the text **between the quotes only**.
5. Scroll to the bottom, click **"Commit changes..."** → **"Commit changes"**.
6. Vercel will auto-rebuild and deploy your site in ~1 minute. Done. ✨

### Adding a New University

1. Open `data/universities.ts` on GitHub.
2. Copy any university block (between the `{` and `},`).
3. Paste it at the bottom of the list, before `];`.
4. Change every field — `slug`, `name`, `shortName`, etc.
5. ⚠️ Keep all quotes `"like this"`, commas, and brackets exactly as they are.
6. Commit. Vercel deploys. The new uni shows up on `/universities` automatically.

### Editing Other Text (homepage, about page, etc.)

Files to edit:
- **Homepage text** → `app/page.tsx`
- **About Nexus EU** → `app/about/page.tsx`
- **Why Lithuania** → `app/why-lithuania/page.tsx`
- **Scholarships** → `app/scholarships/page.tsx`
- **Contact page** → `app/contact/page.tsx`
- **Footer text** → `components/Footer.tsx`
- **Navbar links** → `components/Navbar.tsx`

Find the text, change it between the quotes, commit. That's it.

---

## ⚙️ One-time Setup (Do These First!)

### 1. Update Your WhatsApp Number
Currently the site uses `+92 321 2919592`. To change:
- Search across all files for `923212919592` and replace with your number (no spaces, no +).
- Files to update: `components/Navbar.tsx`, `components/Footer.tsx`, `components/FloatingWhatsApp.tsx`, `components/LeadCTA.tsx`, `app/page.tsx`, `app/universities/[slug]/page.tsx`, `app/contact/page.tsx`, `app/thanks/page.tsx`, `app/cost-calculator/page.tsx`.

### 2. Setup Formspree for Lead Form (Required)
The contact form needs Formspree to send you emails.

1. Go to **[formspree.io](https://formspree.io)** → Sign up (free).
2. Create a new form. Copy the form ID (looks like `xyzabc123`).
3. Open `app/contact/page.tsx` on GitHub.
4. Find this line near the top:
   ```
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID_HERE";
   ```
5. Replace `YOUR_FORM_ID_HERE` with your actual form ID.
6. Commit. Form now emails you on every submission. 📬

### 3. (Optional) Setup Your Domain
When you have `nexus-eu.com` (or whatever):
- Vercel dashboard → Your project → **Settings** → **Domains** → Add domain.
- Vercel will give you DNS records to add at your domain registrar.

### 4. Add a Logo
Currently the site uses a text "N" logo in a navy box. To use a real logo:
- Drop your logo file in the `public/` folder (e.g. `public/logo.png`).
- Open `components/Navbar.tsx`, replace the `<div className="w-9 h-9 bg-navy...">` block with `<img src="/logo.png" alt="Nexus EU" className="h-9" />`.
- Same for `components/Footer.tsx`.

---

## 🚢 Deployment to Vercel (5 minutes, 5 clicks)

### Step 1: Create a GitHub Account
- Go to [github.com](https://github.com) → Sign up (free).

### Step 2: Upload This Project
1. Click the **"+"** icon (top right) → **"New repository"**.
2. Name it `nexus-eu` → Click **"Create repository"**.
3. On the new repo page, click **"uploading an existing file"**.
4. Drag the entire `nexus-eu-site` folder contents in.
5. Wait for upload → Click **"Commit changes"**.

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub.
2. Click **"Add New..."** → **"Project"**.
3. Find your `nexus-eu` repo → Click **"Import"**.
4. Leave all defaults → Click **"Deploy"**.
5. ✨ In ~2 minutes you'll get a URL like `nexus-eu.vercel.app`. Live!

### Step 4: Auto-Updates
Now every time you edit any file on GitHub and commit, Vercel automatically rebuilds and pushes the change live. You never run a command.

---

## 🛠️ Local Development (Optional — only if you want to test changes locally)

You don't need this. But if you want to:

```bash
# Install Node.js from nodejs.org first
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📁 File Map

```
nexus-eu-site/
├── app/                          ← All pages
│   ├── page.tsx                  ← Homepage
│   ├── about/                    ← About Nexus EU
│   ├── contact/                  ← Lead form
│   ├── cost-calculator/          ← Interactive cost tool
│   ├── scholarships/             ← Scholarship info
│   ├── thanks/                   ← Post-form thank you page
│   ├── universities/             ← Listing + dynamic detail pages
│   ├── why-lithuania/            ← Why study here
│   ├── layout.tsx                ← Wraps every page (navbar + footer)
│   └── globals.css               ← Global styles
├── components/                   ← Reusable pieces
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── UniversityCard.tsx
│   ├── SectionHeading.tsx
│   └── LeadCTA.tsx
├── data/
│   └── universities.ts           ← ⭐ YOUR MAIN EDIT FILE ⭐
├── public/                       ← Drop images/logos here
└── package.json                  ← Project config (don't edit)
```

---

## 🆘 Troubleshooting

**Q: I edited something and the site broke.**
A: Check that all quotes are matched and commas are at the end of every line. Go to your GitHub repo → "Commits" → revert the bad commit.

**Q: My form isn't sending emails.**
A: Double-check the Formspree ID in `app/contact/page.tsx`. Also check spam folder.

**Q: How do I see my site live?**
A: Vercel gives you a URL like `nexus-eu.vercel.app`. Bookmark it.

**Q: Can I add photos to universities?**
A: Drop a photo in `public/unis/` (e.g. `vilnius-university.jpg`), then add `image: "/unis/vilnius-university.jpg"` to the uni data. Ask Claude to wire it up next time — needs a small code change to UniversityCard.

**Q: How do I see the Formspree submissions?**
A: Log into formspree.io → Your form → Submissions tab.

---

## ❤️ Made for Nexus EU

Built by Claude + you. Edit freely. Break things. Learn by doing.
Need help? Open this file on GitHub and check the section above.

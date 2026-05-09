# 🚀 Setup & Run Instructions

## Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: **http://localhost:5173**

---

## 🎯 What's Inside

✅ **React 18** + **Vite** (lightning-fast dev server)  
✅ **Tailwind CSS** (utility-first styling)  
✅ **Framer Motion** (smooth animations)  
✅ **Canvas API** (neural network background)  
✅ **Hot Module Replacement** (instant reload on save)

---

## ✏️ Customize Your Portfolio

**Edit this file only:** `src/data/portfolio.js`

Update:
- **meta** → Name, email, LinkedIn, roles
- **experience** → Add/edit work history
- **projects** → Showcase your work
- **skills** → List your technical skills
- **education** → Degrees & certifications
- **achievements** → Awards & recognition
- **freelancer** → Freelance work history
- **competitions** → Coding competitions

Changes save instantly (hot-reload enabled).

---

## 📦 Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder → ready to deploy.

---

## 🌐 Deploy Options

### **Option 1: Vercel (Recommended)**
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project → Auto-detects Vite
4. Click Deploy → Live in minutes ✨

### **Option 2: GitHub Pages (Free)**
1. Push to `master` branch
2. GitHub Actions auto-builds & deploys
3. Enable in Settings → Pages → Select `gh-pages` branch
4. Your site: `username.github.io/My-Portfolio`

---

## 🛠️ Available Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

## 📁 Project Structure

```
My-Portfolio/
├── src/
│   ├── data/
│   │   └── portfolio.js          ← Edit YOUR CONTENT HERE
│   ├── components/
│   │   ├── NeuralCanvas.jsx      ← Neural network background
│   │   ├── HeroSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

---

## ✨ Features

🎨 **Modern Design** — Futuristic dark theme  
🖥️ **Responsive** — Works on desktop, tablet, mobile  
⚡ **Fast** — Vite builds in milliseconds  
🔥 **Hot Reload** — See changes instantly  
📱 **Interactive** — Click neural network nodes to explore sections  
🎯 **SEO Ready** — Meta tags configured  

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Node version issues?**
```bash
node --version  # Should be v16+
npm --version   # Should be v7+
```

**Cache issues?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📞 Support

- Check `.github/workflows/deploy.yml` for CI/CD setup
- Tailwind docs: https://tailwindcss.com
- Vite docs: https://vitejs.dev
- React docs: https://react.dev

---

Happy deploying! 🚀

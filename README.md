# Gaurav Wasule — Portfolio (React + Vite + Tailwind)

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
# Output in /dist — deploy to Vercel or Netlify
```

## 🌐 Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to vercel.com → Import Project → Select your repo
3. Vercel auto-detects Vite — click Deploy
4. Your site is live at `your-name.vercel.app`

## 📁 Project Structure

```
src/
├── data/
│   └── portfolio.js        ← ✏️  Edit ALL your content here
├── hooks/
│   └── useTypewriter.js    ← Animated typing effect
├── components/
│   ├── NeuralCanvas.jsx    ← Animated neural network background + navigation
│   ├── Navbar.jsx
│   ├── Crosshair.jsx
│   ├── HeroSection.jsx
│   ├── SectionWrapper.jsx
│   ├── ExperienceSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── EducationSection.jsx
│   ├── AchievementsSection.jsx
│   └── ContactSection.jsx
├── App.jsx                 ← Root - wires everything together
├── main.jsx                ← React entry point
└── index.css               ← Tailwind + custom CSS variables
```

## ✏️ How to Update Your Content

**Only one file to edit:** `src/data/portfolio.js`

- Update your name, email, LinkedIn → edit `meta`
- Add a new job → add an object to `experience` array
- Add a project → add an object to `projects` array
- Add a skill group → add to `skills` array
- Change typewriter roles → edit `meta.roles`

After editing, just save — the dev server hot-reloads instantly.

## 🎨 Tech Stack

- **React 18** — component-based UI
- **Vite** — lightning-fast dev server & bundler
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — (available, add animations as needed)
- **Canvas API** — neural network background (NeuralCanvas.jsx)
- **No backend** — all data in portfolio.js

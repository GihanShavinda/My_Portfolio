# Gihan Shavinda — Portfolio (Cyber / SOC edition)

Full-stack developer & aspiring SOC analyst portfolio. Dark "security operations console"
theme built on React + Vite + Three.js + Tailwind + Framer Motion.

## Run locally
```bash
npm install --legacy-peer-deps   # --legacy-peer-deps is required (react-tilt peers)
npm run dev                       # start dev server
npm run build                     # production build -> /dist
```

## Where to edit your content
- Landing console + roles/stats/socials … `src/components/Profilecard.jsx` (top `PROFILE` object)
- Hero headline/description ………………………… `src/components/Hero.jsx` (top `HERO` object)
- About intro + "what I do" cards …………… `src/components/About.jsx` + `services` in `src/constants/index.js`
- Skills & levels …………………………………………… `src/components/Skills.jsx`
- Security / Blue-team + learning path …… `securityFocus` & `learningPath` in `src/constants/index.js`
- Journey timeline ……………………………………… `experiences` in `src/constants/index.js`
- Projects ……………………………………………………… `projects` in `src/constants/index.js`
- Theme colors / fonts ……………………………… `tailwind.config.cjs` + `src/index.css` (`:root` vars)
- Your photo ……………………………………………… replace `src/assets/profile.jpeg`; CV at `public/CV.pdf`

## Theme tokens
base `#05070d` · panel `#0b1120` · cyan `#22d3ee` · emerald `#22e39a` · amber `#f5b731` · critical `#f43f5e`
Fonts: display **Chakra Petch**, mono **JetBrains Mono**, body **Space Grotesk**.

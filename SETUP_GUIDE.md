# Portfolio Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Assets
Place the following files in the `public/assets/` folder:

**Required:**
- `profile.jpg` - Your profile picture (square format recommended, 800x800px)
- `resume.pdf` - Your resume file

**Optional:**
- `project1.jpg` through `project4.jpg` - Project images (if not provided, icons will be shown)

### 3. Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:5173`

---

## 🎨 Customization

### Updating Personal Information
Edit `src/constants/data.js` to customize:
- Personal info (name, title, etc.)
- Social links
- Skills
- Projects
- Experience
- Contact information

### Changing Colors
The accent color is **Amber (#F59E0B)**. To change it:

1. Open `tailwind.config.js`
2. Modify the `accent` color value:
```js
accent: '#YOUR_COLOR_HERE'
```

### Changing Fonts
Fonts are loaded from Google Fonts in `index.html`:
- Display font: **Syne** (for headings)
- Body font: **DM Sans** (for body text)

To change fonts:
1. Update the Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js`

---

## 📦 Building for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

---

## 🌐 Deployment

### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite settings

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

---

## 🐛 Troubleshooting

### Images not showing
- Make sure images are in `public/assets/` folder
- Check file names match exactly (case-sensitive)
- Icons will show as fallback if images fail to load

### Resume download not working
- Place `resume.pdf` in `public/assets/` folder
- Clear browser cache and reload

### Styling issues
- Run `npm install` to ensure all dependencies are installed
- Clear browser cache
- Check console for errors

---

## 📁 Project Structure

```
├── public/
│   └── assets/          # Your images and resume
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── data.js      # All personal data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ✨ Features Included

✅ Smooth scroll animations with Framer Motion
✅ Typing animation in hero section
✅ Scroll progress indicator
✅ Active section highlighting in navbar
✅ Responsive design (mobile, tablet, desktop)
✅ Hover effects and transitions
✅ Clean, professional design
✅ No overlapping elements
✅ Good borders and shadows throughout
✅ Glassmorphism effects
✅ Grain texture overlay

---

## 💡 Tips

1. **Profile Image**: Use a high-quality, professional photo with good lighting
2. **Project Images**: Create simple mockups or screenshots of your projects
3. **Resume**: Keep your PDF updated and ensure it's mobile-friendly
4. **Testing**: Test on multiple devices and browsers before deploying
5. **SEO**: Update meta tags in `index.html` for better search visibility

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Make sure all dependencies are installed
3. Verify file paths are correct
4. Clear cache and hard reload (Ctrl+Shift+R)

---

Built with ❤️ for Jagadeeswar Mula

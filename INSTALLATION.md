# Installation & Deployment Guide

## 📦 Prerequisites

Before you start, make sure you have:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)
- Git (optional, for version control)

Check your versions:
```bash
node --version
npm --version
```

---

## 🚀 Installation Steps

### Step 1: Open Terminal
Navigate to the project folder:
```bash
cd path/to/jagadeeswar-portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Icons
- PostCSS & Autoprefixer

**Expected time**: 1-2 minutes

### Step 3: Add Your Assets

Create or verify the `public/assets/` folder exists, then add:

1. **profile.jpg** - Your profile picture
   - Recommended: 800x800px, square aspect ratio
   - Format: JPG or PNG
   - Keep file size under 500KB for fast loading

2. **resume.pdf** - Your resume
   - Format: PDF
   - Keep under 2MB

3. **Project images** (optional):
   - project1.jpg, project2.jpg, etc.
   - Recommended: 1200x675px (16:9 ratio)
   - If not provided, icons will be displayed instead

### Step 4: Start Development Server
```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open your browser and go to `http://localhost:5173`

---

## ✏️ Customization

### Edit Personal Information

Open `src/constants/data.js` and update:

```javascript
export const personalInfo = {
  name: "Your Name",
  // ... update other fields
}

export const projects = [
  // ... add/edit your projects
]

// ... update skills, experience, etc.
```

Save the file and the browser will auto-reload!

### Change Accent Color

Open `tailwind.config.js`:
```javascript
extend: {
  colors: {
    accent: '#F59E0B', // Change this color
  }
}
```

Popular alternatives:
- Indigo: `#6366F1`
- Purple: `#A855F7`
- Emerald: `#10B981`
- Rose: `#F43F5E`

---

## 🏗️ Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized files:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Production-ready HTML

**Preview production build locally:**
```bash
npm run preview
```

---

## 🌐 Deployment Options

### Option 1: Netlify (Easiest - Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [netlify.com](https://netlify.com)
3. Sign up/login with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

**Result**: Your site will be live at `https://your-site-name.netlify.app`

**Custom domain**: Netlify allows you to add your own domain in site settings.

---

### Option 2: Vercel

1. Push code to GitHub (see above)
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "Import Project"
5. Select your repository
6. Vercel auto-detects Vite settings
7. Click "Deploy"

**Result**: Live at `https://your-site-name.vercel.app`

---

### Option 3: GitHub Pages

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://JAGADEESH349.github.io/portfolio",
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/' // Your repo name
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

**Result**: Live at `https://JAGADEESH349.github.io/portfolio`

---

### Option 4: Traditional Web Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the entire `dist/` folder contents to your hosting via:
   - FTP (FileZilla)
   - cPanel File Manager
   - Hosting dashboard

3. Configure:
   - Point domain to the uploaded folder
   - Set as root or subdirectory
   - Ensure server supports SPA (Single Page Applications)

---

## 🐛 Troubleshooting

### Issue: "command not found: npm"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Dependencies fail to install
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Profile image not showing
**Solutions**:
- Verify file is named exactly `profile.jpg` (case-sensitive)
- Ensure it's in `public/assets/` folder
- Check browser console for errors (F12)
- Try hard refresh (Ctrl + Shift + R)

### Issue: Resume won't download
**Solutions**:
- Verify `resume.pdf` is in `public/assets/`
- Check file permissions
- Try using a different browser
- Clear browser cache

### Issue: Styles not applying
**Solutions**:
```bash
# Reinstall Tailwind
npm install -D tailwindcss postcss autoprefixer

# Restart dev server
npm run dev
```

### Issue: Port 5173 already in use
**Solution**: Kill the process or use a different port:
```bash
npm run dev -- --port 3000
```

### Issue: Build fails
**Solutions**:
- Check for syntax errors in your code
- Ensure all imports are correct
- Try deleting `node_modules` and reinstalling:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### Issue: Animations not working
**Solution**: Verify Framer Motion is installed:
```bash
npm install framer-motion
```

### Issue: Icons not showing
**Solution**: Verify React Icons is installed:
```bash
npm install react-icons
```

---

## 📊 Performance Tips

### Optimize Images
- Compress images before adding them
- Use tools like [TinyPNG](https://tinypng.com/)
- Keep profile image under 500KB
- Use WebP format for better compression

### Lazy Load Images
Already implemented with `onError` handlers

### Reduce Resume Size
- Keep PDF under 2MB
- Compress using [SmallPDF](https://smallpdf.com/)

### Font Loading
- Fonts are preconnected in `index.html`
- Only two font families loaded (Syne + DM Sans)

---

## 🔒 Security

### Before Deploying:
- ✅ No API keys in code
- ✅ No sensitive information in commits
- ✅ Resume doesn't contain sensitive data
- ✅ Social links are correct

### Git Safety:
The `.gitignore` file excludes:
- `node_modules/`
- Build files
- Environment variables
- Editor configs

---

## 📈 SEO Optimization

Update `index.html` meta tags:

```html
<title>Your Name | Full Stack Developer</title>
<meta name="description" content="Your brief description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to your profile image">
```

---

## 📞 Support

If you're stuck:
1. Check browser console (F12) for errors
2. Read error messages carefully
3. Search the error on Google
4. Check the GitHub Issues for similar problems

---

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Profile image added
- [ ] Resume PDF added
- [ ] Personal info updated in `data.js`
- [ ] All links tested and working
- [ ] Site tested on mobile device
- [ ] Site tested on different browsers (Chrome, Firefox, Safari)
- [ ] Console has no errors
- [ ] Build completes successfully (`npm run build`)
- [ ] Meta tags updated in `index.html`
- [ ] Custom domain configured (if applicable)

---

🎉 **Congratulations!** You're ready to showcase your portfolio to the world!

Built with ❤️ for Jagadeeswar Mula

# ⚡ Quick Commands Reference

## 🚀 Essential Commands

### Install Dependencies
```bash
npm install
```
**First time only** - Installs all required packages

---

### Start Development Server
```bash
npm run dev
```
**Most used command** - Opens at http://localhost:5173

---

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder

---

### Preview Production Build
```bash
npm run preview
```
Test production build locally

---

## 📁 File Locations

### Edit Your Info
```
src/constants/data.js
```
**Single file to update** - All personal information

### Add Images
```
public/assets/profile.jpg
public/assets/resume.pdf
```

### Change Accent Color
```
tailwind.config.js
```
Line 8: `accent: '#F59E0B'`

---

## 🎨 Quick Customizations

### Change Accent Color
1. Open `tailwind.config.js`
2. Change line: `accent: '#YOUR_COLOR'`
3. Save (auto-reloads)

**Popular choices:**
- Amber: `#F59E0B` (current)
- Indigo: `#6366F1`
- Emerald: `#10B981`
- Rose: `#F43F5E`
- Purple: `#8B5CF6`

### Update Personal Info
1. Open `src/constants/data.js`
2. Update values
3. Save (auto-reloads)

### Add Assets
1. Place files in `public/assets/`
2. Ensure exact names:
   - `profile.jpg`
   - `resume.pdf`
3. Refresh browser

---

## 🐛 Troubleshooting Commands

### Clear Cache & Reinstall
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Use Different Port
```bash
npm run dev -- --port 3000
```

### Check for Errors
Open browser console: **F12**

---

## 🌐 Deployment Commands

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```
(After configuring package.json)

---

## 📊 Useful Commands

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### Update Dependencies
```bash
npm update
```

### List Installed Packages
```bash
npm list --depth=0
```

---

## 🎯 Development Workflow

1. **First Time Setup**
```bash
npm install
# Add profile.jpg and resume.pdf to public/assets/
# Edit src/constants/data.js
npm run dev
```

2. **Daily Development**
```bash
npm run dev
# Make changes
# Browser auto-reloads
```

3. **Before Deployment**
```bash
npm run build
npm run preview
# Test everything
# Deploy dist/ folder
```

---

## 📝 File Editing Shortcuts

### VS Code
- **Open file**: `Ctrl + P` → Type filename
- **Search in files**: `Ctrl + Shift + F`
- **Format document**: `Shift + Alt + F`
- **Save all**: `Ctrl + K, S`

### Browser
- **Hard refresh**: `Ctrl + Shift + R`
- **Open console**: `F12`
- **Responsive mode**: `Ctrl + Shift + M`

---

## 🚀 Speed Run (3 Minutes)

```bash
# 1. Install (30 seconds)
npm install

# 2. Add assets (1 minute)
# Copy profile.jpg and resume.pdf to public/assets/

# 3. Edit data (1 minute)
# Open src/constants/data.js and update

# 4. Start (10 seconds)
npm run dev

# 5. Open browser (20 seconds)
# Go to http://localhost:5173
```

**Done!** ✅

---

## 📚 Documentation Quick Access

| File | Purpose |
|------|---------|
| `START_HERE.md` | Main entry point |
| `QUICK_START.md` | 3-minute setup |
| `COMMANDS.md` | This file! |

---

## 💡 Pro Tips

1. **Keep dev server running** - Changes reload automatically
2. **Check console often** - Catch errors early (F12)
3. **Test on mobile** - Use Chrome DevTools responsive mode
4. **Commit often** - Save your progress with git
5. **Compress images** - Before adding to public/assets/

---

## ⚠️ Common Issues - Quick Fixes

### "Cannot find module"
```bash
npm install
```

### "Port already in use"
```bash
npm run dev -- --port 3000
```

### Images not showing
- Check file names (case-sensitive!)
- Ensure files are in `public/assets/`
- Hard refresh: `Ctrl + Shift + R`

### Styles not working
```bash
npm install -D tailwindcss postcss autoprefixer
npm run dev
```

---

## 🎯 Final Checklist Before Deploy

```bash
# 1. Build succeeds
npm run build

# 2. Preview works
npm run preview

# 3. No console errors
# Open browser console (F12)

# 4. Mobile looks good
# Test in DevTools responsive mode

# 5. All links work
# Click through everything

# 6. Resume downloads
# Test the Download Resume button
```

---

## 🎊 Ready to Deploy?

```bash
npm run build
# Upload dist/ folder to hosting
# Or deploy to Netlify/Vercel
```

**Congratulations!** 🚀

---

Keep this file handy for quick reference!

Updated: June 8, 2026

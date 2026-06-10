# Jagadeeswar Mula - Portfolio Website

A modern, premium personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Creative blue-and-white gradient theme with spring hover effects
- **Smooth Animations**: Framer Motion powered bouncy spring reveals and background scattering
- **Fully Responsive**: Mobile-first design optimized for phones, tablets, and desktops
- **Scroll Progress**: Visual scroll indicator at the top
- **Section Highlights**: Active section tracking in navbar
- **Optimized Performance**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

## 📦 Installation

1. Clone the repository or extract the files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── constants/
│   └── data.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📸 Assets Folder - Image Upload Guide

Place the following files in the `public/assets/` folder to customize your images:

### ✅ REQUIRED IMAGES (2)

#### 1. **profile.jpg**
- **What:** Your profile picture
- **Size:** 800x800px (square recommended)
- **Format:** JPG or PNG
- **Max Size:** 500KB (compress if larger)
- **Shows in:** Hero section (right side)

#### 2. **resume.pdf**
- **What:** Your resume document
- **Format:** PDF only
- **Max Size:** 2MB
- **Downloads when:** User clicks "Download Resume" button

### 🎨 OPTIONAL PROJECT IMAGES

- **project1.jpg**: Smart Bandobasth Monitoring System
- **project2.jpg**: Portfolio Website
- **project3.jpg**: Complaint Management System
- **project4.jpg**: AWS Practice Projects
- **project5.jpg**: Java + DSA Practice

> **Note:** If project images are missing, beautiful icons will show instead! No worries if you don't have project screenshots.

### 📋 File Naming (IMPORTANT!)

**MUST be exact (case-sensitive):**
- ✅ `profile.jpg` (correct)
- ❌ `Profile.jpg` (wrong)
- ❌ `profile.png` (wrong - must be .jpg)
- ❌ `my-profile.jpg` (wrong)

### 🔧 Image Optimization Tools

**Before uploading, compress your images:**
- [TinyPNG.com](https://tinypng.com) - Free, no signup
- [Squoosh.app](https://squoosh.app) - Google's tool

---

## 🎨 Customization

All personal data, skills, projects, and experience can be customized in:
- `src/constants/data.js`

To change colors or styling:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles

## 🌐 Deployment

Build for production:

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

---

Built with ❤️ by Jagadeeswar Mula

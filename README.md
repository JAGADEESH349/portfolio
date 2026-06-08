# Jagadeeswar Mula - Portfolio Website

A modern, premium personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark, premium theme with amber accents
- **Smooth Animations**: Framer Motion powered animations
- **Fully Responsive**: Mobile-first design approach
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

## 🖼️ Assets Setup

Create the following folders and add your assets:

```
public/
└── assets/
    ├── profile.jpg (your profile picture)
    ├── resume.pdf (your resume)
    └── project images (optional)
```

## 🎨 Customization

All personal data, skills, projects, and experience can be customized in:
- `src/constants/data.js`

To change colors or styling:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles

## 📱 Sections

1. **Hero** - Introduction with typing animation and CTA buttons
2. **About** - Brief bio and statistics
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with descriptions
5. **Experience** - Work experience timeline
6. **Contact** - Contact cards with social links
7. **Footer** - Copyright and social links

## 🌐 Deployment

Build for production:

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by Jagadeeswar Mula

# 🚀 Modern Portfolio Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18.0-61dafb?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.18-0055ff?style=for-the-badge&logo=framer)

**A stunning, modern portfolio website built with Next.js 14, featuring smooth animations, dark mode, and a beautiful UI/UX.**

[🌐 Live Demo](https://junaidalibhatti.vercel.app/) • [📖 Documentation](#-getting-started) • [🐛 Report Bug](https://github.com/junaid-1013/JunaidPortfolio/issues) • [💡 Request Feature](https://github.com/junaid-1013/JunaidPortfolio/issues)

[![GitHub stars](https://img.shields.io/github/stars/junaid-1013/JunaidPortfolio?style=social)](https://github.com/junaid-1013/JunaidPortfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/junaid-1013/JunaidPortfolio?style=social)](https://github.com/junaid-1013/JunaidPortfolio/network/members)

</div>

---

## 📸 Preview

<div align="center">

**Visit the live demo to see the portfolio in action:** [https://junaidalibhatti.vercel.app/](https://junaidalibhatti.vercel.app/)

*The portfolio features a modern design with smooth animations, interactive elements, and a fully responsive layout that works beautifully on all devices.*

</div>

---

## ✨ Features

### 🎨 Design & UI/UX
- **Modern & Clean Design** - Beautiful, professional interface that stands out
- **Fully Responsive** - Perfect experience on desktop, tablet, and mobile devices
- **Dark Mode Support** - Seamless theme switching with persistent preference
- **Smooth Animations** - Powered by Framer Motion for fluid, engaging interactions
- **Particle Effects** - Interactive background particles using TSParticles
- **Custom Animations** - Animated text, hover effects, and scroll animations

### 🛠️ Functionality
- **Project Showcase** - Beautiful grid layout for featured projects with live demos
- **Skills Section** - Interactive skills display with icons
- **Experience Timeline** - Professional experience timeline with detailed descriptions
- **Education Section** - Academic background with timeline visualization
- **Contact CTA** - Call-to-action section for easy contact
- **Social Links** - Integrated social media links (GitHub, LinkedIn)

### ⚡ Performance
- **Next.js 14** - Built with the latest Next.js features for optimal performance
- **TypeScript** - Full type safety for better development experience
- **Optimized Images** - Next.js Image optimization for fast loading
- **SEO Friendly** - Proper meta tags and semantic HTML

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14.2](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework

### Animation & Effects
- **[Framer Motion 10.18](https://www.framer.com/motion/)** - Production-ready motion library
- **[TSParticles](https://particles.js.org/)** - Lightweight particles library
- **[React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)** - Timeline component

### Icons & Assets
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **Custom SVGs** - Hand-crafted SVG graphics

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 📦 What's Included

This portfolio template includes the following sections and components:

### 🏠 Home Page Sections
- **Hero/CTA Section** - Eye-catching introduction with animated statistics
- **About Section** - Personal introduction with animated counters
- **Skills Section** - Interactive skills showcase with icons
- **Experience Section** - Professional work experience with interactive timeline
- **Education Section** - Academic background timeline
- **Projects Section** - Featured projects with images, descriptions, and tech stacks

### 🧩 Components
- **AnimatedText** - Text animation component
- **NavBar** - Responsive navigation with mobile menu
- **Footer** - Site footer with social links
- **ParticleContainer** - Animated particle background
- **Logo** - Custom logo component
- **Layout** - Reusable layout wrapper

### 🎨 Styling
- **Dark Mode** - Complete dark/light theme support
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Smooth transitions and effects
- **Tailwind Configuration** - Custom theme configuration

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Fork the repository**
   ```bash
   # Click the Fork button on GitHub, or use:
   gh repo fork junaid-1013/JunaidPortfolio
   ```

2. **Clone your forked repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/JunaidPortfolio.git
   cd JunaidPortfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/config/constants.tsx` to update:

- **Projects**: Modify `FEATURED_PROJECTS` array
- **Skills**: Update `SKILLS` array with your skills
- **Experience**: Edit `EXPERIENCE_DATA` array
- **Education**: Modify `EDUCATION_DATA` array
- **Social Links**: Update `SOCIAL_LINKS` array

### 2. Update Images

Replace images in `public/images/`:
- `public/images/profile/` - Profile pictures
- `public/images/projects/` - Project screenshots
- `public/images/skills/` - Skill icons

### 3. Customize Colors & Theme

Edit `tailwind.config.ts` to customize:
- Color scheme
- Font families
- Spacing and sizing

### 4. Update Meta Information

Edit `src/app/layout.tsx` to update:
- Site title
- Meta description
- Open Graph tags

### 5. Modify Navigation

Update `NAV_LINKS` in `src/config/constants.tsx` to change navigation items.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure settings
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Click Deploy

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

---

## 📁 Project Structure

```
JunaidPortfolio/
├── public/
│   ├── images/          # Images (profile, projects, skills)
│   └── svgs/            # SVG assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── home/        # Home page components
│   │   ├── ui/          # UI components (NavBar, Footer, Layout)
│   │   └── ...          # Other components
│   ├── config/          # Configuration files
│   │   ├── constants.tsx # Data constants
│   │   └── types.ts     # TypeScript types
│   └── hooks/           # Custom React hooks
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click Fork on GitHub or use:
   gh repo fork junaid-1013/JunaidPortfolio
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed
- Be respectful and constructive in discussions

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Junaid Ali Bhatti**

- Portfolio: [https://junaidalibhatti.vercel.app/](https://junaidalibhatti.vercel.app/)
- GitHub: [@junaid-1013](https://github.com/junaid-1013)
- LinkedIn: [Junaid Ali](https://www.linkedin.com/in/junaid-ali-34b680243/)
- Instagram: [@junaid.ali1014](https://www.instagram.com/junaid.ali1014/)

---

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Built with [Next.js](https://nextjs.org/) and [Framer Motion](https://www.framer.com/motion/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)

---

## 💝 Attribution

This project is open source and I'm thrilled that you're interested in using it for your own portfolio! 

If you decide to use this code, I'd be incredibly grateful if you could:

- Fork the repository (it helps track how many people find it useful!)
- Give a small shoutout or credit somewhere in your project
- Share your version with me - I'd love to see what you create!

I've put a lot of love and effort into building this portfolio, and I'm excited to share it with the community. Your support and attribution mean the world to me. Thank you for being part of this journey! 🙏✨

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star! ⭐**

Made with ❤️ by [Junaid Ali Bhatti](https://github.com/junaid-1013)

</div>

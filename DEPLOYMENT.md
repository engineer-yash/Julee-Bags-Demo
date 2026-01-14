# Julee Bags - Modern Website

A modern, responsive recreation of the Julee Bags website with enhanced UI/UX, built with React and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, premium design with smooth animations and transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Image Carousel**: Auto-playing hero carousel with manual navigation
- **Product Gallery**: Filterable product gallery with image zoom functionality
- **Multiple Pages**: Home, Products, About, and Contact pages
- **Contact Form**: Functional contact form with validation
- **Fast Loading**: Optimized images and lazy loading
- **SEO Friendly**: Proper HTML structure and meta tags

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Craco (Create React App Configuration Override)

## 📦 Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Create React App
     - **Root Directory**: `frontend`
     - **Build Command**: `yarn build`
     - **Output Directory**: `build`
   - Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel --prod
```

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer component
│   │   ├── HeroCarousel.jsx # Hero image slider
│   │   └── ProductGallery.jsx # Product gallery with filters
│   ├── pages/
│   │   ├── HomePage.jsx     # Homepage
│   │   ├── ProductsPage.jsx # Products listing
│   │   ├── AboutPage.jsx    # About page
│   │   └── ContactPage.jsx  # Contact page
│   ├── hooks/
│   │   └── use-toast.js     # Toast notification hook
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   └── index.css            # Tailwind CSS imports
├── package.json
├── tailwind.config.js
└── craco.config.js
```

## 🎨 Brand Colors

- **Primary Green**: `#3d4a2c` - `#4a5a35`
- **Accent Yellow**: `#ca8a04` - `#eab308`
- **Background**: Gradient from gray-50 to white

## 📱 Pages

1. **Home** (`/`): Hero carousel, welcome section, features, product gallery
2. **Products** (`/products`): Complete product gallery with category filters
3. **About** (`/about`): Company story, values, and product range
4. **Contact** (`/contact`): Contact form, location map, business hours

## 🖼️ Images

All product images are sourced from the original website at `juleebags.com/uploads/` and `juleebags.com/images/` for banner images.

## ⚡ Performance Optimizations

- Lazy loading images
- Optimized image carousel
- Smooth transitions and animations
- Responsive images
- Code splitting with React Router

## 📞 Contact Information

- **Address**: 531B, Ganesh Peth, Near Kasturi Chowk Lane, Opp. Vitthal Mandir, Pune-2
- **Phone**: 7498821933
- **Email**: sales@juleebags.com

## 🌐 Original Website

This is a modernized recreation of [juleebags.com](https://www.juleebags.com/)

## 📄 License

All rights reserved - Julee Bags

---

**बस नाम ही काफ़ी है!** - The name itself is enough!

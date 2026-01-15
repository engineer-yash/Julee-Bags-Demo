# Julee Bags - Deployment Guide for Vercel

This is a static React website for Julee Bags that can be easily deployed to Vercel.

## Project Structure

This is a **frontend-only** static website built with:
- React 18
- React Router v6
- Tailwind CSS
- Swiper for image sliders

## Quick Deploy to Vercel

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to the project root:
```bash
cd julee-bags
```

3. Deploy:
```bash
vercel
```

Follow the prompts to deploy your site.

### Method 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository or upload the project folder
4. Vercel will auto-detect the React app
5. Configure build settings (or use defaults):
   - **Build Command**: `cd frontend && yarn build`
   - **Output Directory**: `frontend/build`
   - **Install Command**: `cd frontend && yarn install`
6. Click "Deploy"

### Method 3: Manual Deployment

1. Build the project locally:
```bash
cd frontend
yarn install
yarn build
```

2. Upload the `frontend/build` folder to any static hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Firebase Hosting

## Environment Variables

No environment variables are required for this static site. All content is hardcoded.

## Features Included

✅ Responsive hero slider with 8+ images
✅ Image gallery with category filtering
✅ Image zoom modal
✅ Multiple pages (Home, Products, Wild Adventure, About, Contact)
✅ Mobile-responsive design
✅ Contact form (frontend validation only)
✅ Load more functionality
✅ Optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Images are lazy-loaded
- Responsive images for different screen sizes
- Optimized bundle size
- Fast page loads

## Notes

- This is a static website with no backend
- Contact form submissions are client-side only (you may want to add a backend service)
- All images are loaded from external URLs (juleebags.com)

## Support

For issues or questions, contact: sales@juleebags.com

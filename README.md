# Smile Star Dental - Next.js

A modern dental practice website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Page-specific components
│   └── pages/            # Legacy page components
├── public/               # Static assets
└── ...
```

## 🛠️ Key Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design** for all devices
- **SEO Optimized** with metadata
- **Google Reviews Integration**

## 📱 Pages

- **Home** (`/`) - Landing page with hero, services, testimonials
- **Services** (`/services`) - Dental services overview
- **Testimonials** (`/testimonials`) - Patient reviews
- **Contact** (`/contact`) - Contact information and form

## 🎨 Components

### Reusable Components

- `TestimonialCard` - Google review card component
- `Layout` - Page layout wrapper
- `Header` - Navigation header
- `Footer` - Site footer

### Page Components

- `HeroSection` - Landing hero section
- `ServicesSection` - Services showcase
- `TestimonialsSection` - Reviews display
- `BeforeAfterSection` - Treatment results

## 🔧 Configuration

### Next.js Config

- App Router enabled
- Image optimization
- TypeScript support

### Tailwind CSS

- Custom color scheme
- Responsive utilities
- Animation classes

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📝 Migration Notes

This project was migrated from Vite + React Router to Next.js:

### Changes Made

- ✅ Replaced React Router with Next.js file-based routing
- ✅ Updated `Link` components to use Next.js `Link`
- ✅ Converted `useNavigate` to `useRouter`
- ✅ Moved global CSS to `app/globals.css`
- ✅ Updated TypeScript configuration
- ✅ Added Next.js metadata for SEO
- ✅ Created App Router structure

### Remaining Tasks

- [ ] Install Next.js dependencies
- [ ] Test all navigation links
- [ ] Verify image optimization
- [ ] Test build process
- [ ] Update deployment configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

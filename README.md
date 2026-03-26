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



const featuredArticle = {
  id: 1,
  title: "The Future of Dentistry: How Technology is Transforming Dental Care",
  excerpt:
    "Discover how AI-powered diagnostics, 3D printing, and virtual reality are revolutionizing dental treatments and improving patient experiences.",
  category: "Dental Technology",
  date: "June 15, 2023",
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/6037874afb-0612d86f55a7f589a58f.png",
  author: {
    name: "Dr. Michael Chen",
    title: "Chief Technology Officer",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
  },
  slug: "future-of-dentistry-technology",
};

const recentArticles = [
  {
    id: 2,
    title: "5 Benefits of Professional Teeth Whitening",
    excerpt:
      "Learn why professional whitening treatments provide better, safer results than over-the-counter alternatives.",
    category: "Cosmetic Dentistry",
    date: "May 28, 2023",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c6f158e696-81dc99f9eb544526971b.png",
    author: {
      name: "Dr. Sarah Johnson",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    },
    slug: "benefits-professional-teeth-whitening",
  },
  {
    id: 3,
    title: "Your Child's First Dental Visit: What to Expect",
    excerpt:
      "Prepare your child for a positive dental experience with these helpful tips and insights from our pediatric specialists.",
    category: "Children's Dental Care",
    date: "May 15, 2023",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/af1b3dcf26-dd3d146288250c133b86.png",
    author: {
      name: "Dr. Lisa Park",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    slug: "child-first-dental-visit",
  },
  {
    id: 4,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1681997203595-e45e06abe034?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 5,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 6,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1723187823945-bd116325da6a?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 7,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1699577272317-a64e1eaaa9c8?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 8,
    title: "Dental ImplantsA: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1699577272317-a64e1eaaa9c8?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
];
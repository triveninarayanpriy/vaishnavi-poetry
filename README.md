# Vaishnavi's Poetry

A modern, elegant poetry portfolio website built with Next.js, TypeScript, Tailwind CSS, and powered by **Decap CMS** - a free, Git-based content management system.

## Features

- ✨ Elegant, minimalist design with soft color palette
- 📱 Fully responsive layout
- 🎨 Custom fonts: Playfair Display (serif) for titles, Inter (sans) for UI
- 💫 Smooth animations and transitions
- 📖 Pagination for browsing poems
- ❤️ Interactive like and share buttons
- 🖼️ Image upload and management
- 📝 **Decap CMS** - 100% FREE Git-based CMS (no monthly costs!)
- 🎭 **Theme System** - Choose from Light, Dark, or Vintage themes per poem
- ✍️ **Markdown Editor** - Write poems with proper formatting
- 🔗 **Dynamic Routes** - Each poem gets its own beautiful detail page
- 💾 **Version Control** - All poems stored as markdown in your repository

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

### 3. Access Your Poetry Dashboard

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)

For full setup instructions including authentication, see [DECAP_CMS_GUIDE.md](./DECAP_CMS_GUIDE.md)

## Creating Your First Poem

### Via CMS Dashboard (after Netlify setup):
1. Go to `http://localhost:3000/admin`
2. Log in with your GitHub account (via Netlify Identity)
3. Click "Poems" → "New Poems"
4. Fill in:
   - **Title** - Your poem's title
   - **Theme** - Choose: Light, Dark, or Vintage
   - **Cover Image** - Upload a beautiful cover image
   - **Body** - Write your poem in markdown
   - **Excerpt** - Short preview for the home page
5. Click "Publish"!

### Via Direct File Edit (works immediately):
1. Create a file in `/content/poems/my-poem.md`
2. Use this format:
```markdown
---
title: "My Poem"
date: 2026-01-06T12:00:00.000Z
theme: "Light"
image: "https://example.com/image.jpg"
excerpt: "A short preview..."
---

Your poem content here...
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Homepage with poem grid
│   ├── poem/[slug]/        # Dynamic poem detail pages
│   ├── library/            # Library page
│   ├── about/              # About page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── PoemCard.tsx        # Reusable poem card component
│   ├── PaginatedPoems.tsx  # Pagination component
│   └── PoemDetailClient.tsx # Poem detail renderer
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── data.ts             # Sample poem data (fallback)
│   └── markdown.ts         # Markdown file reader
├── content/
│   └── poems/              # Your poems stored as .md files
├── public/
│   ├── admin/              # Decap CMS dashboard
│   │   ├── index.html
│   │   └── config.yml
│   └── images/
│       └── uploads/        # Uploaded images
└── public/                 # Static assets
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (Git-based, 100% free)
- **Content:** Markdown files with gray-matter
- **Icons:** Lucide React
- **Fonts:** Google Fonts (next/font)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Theme Customization

Each poem can have one of three themes:

### Light
- Soft gradient background (amber to rose)
- Perfect for romantic, uplifting poems
- Light, airy feel

### Dark
- Dark, moody background
- Ideal for dramatic, introspective poems
- High contrast for impact

### Vintage
- Warm yellow/amber tones
- Great for nostalgic, classic poems
- Reminiscent of vintage paper

## License

MIT

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

Quick setup:
1. Create a Sanity account at [sanity.io](https://www.sanity.io/)
2. Create a new project and get your Project ID
3. Create `.env.local` with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

### 4. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage your poems!

## Creating Your First Poem

1. Go to `http://localhost:3000/studio`
2. Sign in with your Sanity account
3. Click "Poems" → "Create new Poem"
4. Fill in:
   - **Title** - Your poem's title
   - **Slug** - Auto-generate from title
   - **Poem Body** - Write your poem with rich text formatting
   - **Cover Image** - Upload a beautiful cover image
   - **Theme** - Choose: Elegant Light, Dark Academia, or Vintage Typewriter
   - **Excerpt** - Short preview for the home page
5. Click "Publish"!

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Homepage with poem grid (CMS-powered)
│   ├── poem/[slug]/        # Dynamic poem detail pages
│   ├── studio/             # Sanity Studio CMS dashboard
│   ├── library/            # Library page
│   ├── about/              # About page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── PoemCard.tsx        # Reusable poem card component
│   └── PortableText.tsx    # Rich text renderer for poems
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── data.ts             # Sample poem data (fallback)
│   ├── sanity.ts           # Sanity client configuration
│   ├── queries.ts          # GROQ queries for fetching poems
│   └── image.ts            # Sanity image URL builder
├── sanity/
│   ├── schemas/
│   │   ├── poem.ts         # Poem schema definition
│   │   ├── blockContent.ts # Rich text schema
│   │   └── index.ts        # Schema exports
│   └── structure.ts        # Studio structure customization
├── sanity.config.ts        # Main Sanity configuration
└── public/                 # Static assets
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io
- **Icons:** Lucide React
- **Fonts:** Google Fonts (next/font)
- **Image Handling:** Sanity CDN + Next.js Image Optimization

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run sanity` - Access Sanity CLI commands

## Theme Customization

Each poem can have one of three themes:

### Elegant Light
- Soft gradient background (amber to rose)
- Perfect for romantic, uplifting poems
- Light, airy feel

### Dark Academia
- Dark, moody background
- Ideal for dramatic, introspective poems
- High contrast for impact

### Vintage Typewriter
- Warm yellow/amber tones
- Great for nostalgic, classic poems
- Reminiscent of vintage paper

## License

MIT

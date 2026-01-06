# Sanity CMS Setup Guide for Vaishnavi Poetry

## Quick Start

Your poetry website now has a powerful Content Management System (CMS) powered by Sanity.io! Follow these steps to get started.

## Setup Instructions

### Step 1: Create a Sanity Account & Project

1. Go to [Sanity.io](https://www.sanity.io/) and create a free account
2. Once logged in, go to [manage.sanity.io](https://manage.sanity.io/)
3. Click "Create Project"
4. Give your project a name (e.g., "Vaishnavi Poetry")
5. Choose a dataset name (use "production" for simplicity)
6. Save your **Project ID** - you'll need it in the next step

### Step 2: Configure Environment Variables

1. In your project folder, create a file named `.env.local` (if it doesn't exist)
2. Add the following content (replace `your_project_id` with your actual Sanity Project ID):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_DRAFT_MODE=false
```

### Step 3: Initialize Sanity

Run this command to initialize your Sanity project:

```bash
npm run sanity init
```

When prompted:
- **Project to use**: Select the project you created in Step 1
- **Dataset**: Choose "production" (or the dataset name you created)
- **Project output path**: Press Enter to use the current directory

### Step 4: Start the Development Server

```bash
npm run dev
```

Your Next.js app will start at `http://localhost:3000`

### Step 5: Access the Sanity Studio

Open your browser and navigate to:

```
http://localhost:3000/studio
```

This is your CMS dashboard where you'll create and manage your poems!

## Creating Your First Poem

1. Go to `http://localhost:3000/studio`
2. You might need to log in with your Sanity account
3. Click on "Poems" in the sidebar
4. Click "Create new Poem"
5. Fill in the fields:
   - **Title**: Your poem's title
   - **Slug**: Click "Generate" to auto-generate from the title
   - **Poem Body**: Write your poem here! You can:
     - Use different text styles (bold, italic, underline)
     - Add headings
     - Create line breaks (important for poetry formatting!)
     - Add quotes
   - **Cover Image**: Upload a beautiful image for your poem
   - **Theme**: Choose from:
     - **Elegant Light**: Soft, warm tones with amber and rose gradients
     - **Dark Academia**: Rich, dark background perfect for dramatic poems
     - **Vintage Typewriter**: Nostalgic yellow/amber tones
   - **Published Date**: Choose when the poem was written
   - **Excerpt**: A short preview text for the home page card
6. Click "Publish" to make your poem live!

## Viewing Your Poems

- **Home Page**: Go to `http://localhost:3000` to see all your poems
- **Individual Poem**: Click on any poem card to view the full poem with its selected theme
- The theme you selected will automatically apply to the poem's detail page!

## Theme Examples

### Elegant Light
- Perfect for romantic, uplifting, or gentle poems
- Soft gradient background with warm tones
- Clean, readable typography

### Dark Academia
- Ideal for dramatic, gothic, or introspective poems
- Dark, moody background
- High contrast for powerful impact

### Vintage Typewriter
- Great for nostalgic, classic, or traditional poems
- Warm yellow/amber tones
- Reminiscent of old paper and typewritten pages

## Rich Text Formatting Tips

When writing your poem in the "Poem Body" field:

1. **Line Breaks**: Press Enter to create new lines (essential for poetry!)
2. **Stanzas**: Leave a blank line between stanzas
3. **Emphasis**: Select text and use the toolbar to make it bold or italic
4. **Quotes**: Use the blockquote style for epigraphs or special verses
5. **Headings**: Use H2 or H3 for section titles within longer poems

## Troubleshooting

### Can't access /studio?
- Make sure your `.env.local` file has the correct Project ID
- Restart your dev server after creating `.env.local`

### Images not showing?
- Make sure you've uploaded the image in Sanity Studio
- Check that `cdn.sanity.io` is in your Next.js image domains (already configured)

### Poems not appearing on home page?
- Make sure you've clicked "Publish" in the Studio
- Check the browser console for any errors
- Verify your environment variables are set correctly

## Deployment (Optional)

When you're ready to deploy:

1. Add your `.env.local` variables to your hosting platform (Vercel, Netlify, etc.)
2. Deploy your Next.js app
3. Your Sanity Studio will be available at `yourdomain.com/studio`
4. You can also access the Studio at `yourproject.sanity.studio` by deploying the Studio separately

## Support

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)

---

**Happy Writing! ✍️**

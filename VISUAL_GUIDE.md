# 📸 Visual Workflow Guide

## 🎯 Complete CMS Integration - User Journey

### 1️⃣ Create Poem in Studio
```
You visit: http://localhost:3000/studio
         ↓
    Login with Sanity
         ↓
    Click "Poems" → "Create"
         ↓
    Fill in form:
    ┌─────────────────────────────┐
    │ Title: "Whispers of Dawn"  │
    │ Slug: whispers-of-dawn      │
    │ Body: [Rich Text Editor]    │
    │ Image: [Upload]             │
    │ Theme: Elegant Light ▼      │
    │ Excerpt: "Golden rays..."   │
    └─────────────────────────────┘
         ↓
    Click "Publish"
         ↓
    ✅ Poem saved to Sanity!
```

### 2️⃣ View on Homepage
```
You visit: http://localhost:3000
         ↓
    Poem card appears:
    ┌───────────────────────────┐
    │   [Beautiful Image]       │
    │   "Whispers of Dawn"      │
    │                           │
    │   "Golden rays pierce..." │
    │                           │
    │   ❤️ Like    🔗 Share     │
    └───────────────────────────┘
         ↓
    Click on card
```

### 3️⃣ Full Poem Page
```
You're taken to: /poem/whispers-of-dawn
         ↓
    Page displays with selected theme:
    ┌─────────────────────────────────────┐
    │  [Full Width Cover Image]           │
    ├─────────────────────────────────────┤
    │                                     │
    │     Whispers of Dawn                │
    │     ═══════════════                 │
    │                                     │
    │     Golden rays pierce through      │
    │     morning mist,                   │
    │     painting the world anew...      │
    │                                     │
    │     [Full formatted poem body]      │
    │                                     │
    │     ❤️ Like     🔗 Share            │
    └─────────────────────────────────────┘
    
    Background applies theme:
    - Elegant Light: Warm amber/rose
    - Dark Academia: Deep stone/slate
    - Vintage: Yellow/amber paper
```

## 🎨 Theme Preview

### Elegant Light Theme
```
┌─────────────────────────────────────┐
│ Background: 🌅                      │
│ Gradient: Amber → White → Rose     │
│                                     │
│   "Morning light breaks gently..." │
│                                     │
│ Perfect for: Romance, Nature        │
└─────────────────────────────────────┘
```

### Dark Academia Theme
```
┌─────────────────────────────────────┐
│ Background: 🌙                      │
│ Gradient: Stone → Slate → Neutral  │
│                                     │
│   "In shadows deep, I find..."     │
│                                     │
│ Perfect for: Gothic, Dramatic       │
└─────────────────────────────────────┘
```

### Vintage Typewriter Theme
```
┌─────────────────────────────────────┐
│ Background: 📜                      │
│ Gradient: Yellow → Amber → Orange  │
│                                     │
│   "Upon aged paper, words..."      │
│                                     │
│ Perfect for: Classic, Nostalgic     │
└─────────────────────────────────────┘
```

## 🔄 Data Flow Diagram

```
┌──────────────┐
│   You Type   │ ← Poet writes in Sanity Studio
│   in Studio  │
└──────┬───────┘
       │
       │ [Publishes]
       ↓
┌──────────────┐
│    Sanity    │ ← Content stored in cloud
│     CMS      │
└──────┬───────┘
       │
       │ [API Request via GROQ]
       ↓
┌──────────────┐
│  Next.js App │ ← Fetches poems from Sanity
│  (Frontend)  │
└──────┬───────┘
       │
       │ [Renders]
       ↓
┌──────────────┐
│   Browser    │ ← User sees beautiful poem!
│   (User)     │
└──────────────┘
```

## 📝 Rich Text Editor Features

### What You See in Studio:
```
┌─────────────────────────────────────────┐
│ Poem Body:                              │
│ ┌─────────────────────────────────────┐ │
│ │ [B] [I] [U] H1▼ "▼ ...             │ │
│ │                                     │ │
│ │ Morning light breaks gently         │ │
│ │ through ancient trees,              │ │
│ │                                     │ │
│ │ **Each ray a whisper**              │ │
│ │ of hope renewed                     │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### What User Sees:
```
    Morning light breaks gently
    through ancient trees,
    
    Each ray a whisper
    of hope renewed
    
    (With proper spacing and bold formatting!)
```

## 🗂️ File Organization

```
Your Project
│
├── 📁 app/
│   ├── 📄 page.tsx           ← Homepage (shows all poems)
│   ├── 📁 poem/
│   │   └── 📁 [slug]/
│   │       └── 📄 page.tsx   ← Individual poem pages
│   └── 📁 studio/
│       └── 📁 [[...tool]]/
│           └── 📄 page.tsx   ← Your CMS dashboard
│
├── 📁 sanity/
│   └── 📁 schemas/
│       ├── 📄 poem.ts        ← Defines what a poem looks like
│       └── 📄 blockContent.ts ← Rich text configuration
│
├── 📁 components/
│   ├── 📄 PoemCard.tsx       ← Card on homepage
│   └── 📄 PortableText.tsx   ← Renders rich text
│
└── 📁 lib/
    ├── 📄 sanity.ts          ← Connects to Sanity
    ├── 📄 queries.ts         ← Gets poems from CMS
    └── 📄 image.ts           ← Optimizes images
```

## 🎬 Quick Command Reference

```bash
# Start development
npm run dev

# Access your app
http://localhost:3000

# Access CMS
http://localhost:3000/studio

# Build for production
npm run build

# Run production
npm start
```

## 🎯 Quick Checklist

Before you start:
- [ ] Created Sanity account
- [ ] Got Project ID
- [ ] Created `.env.local` file
- [ ] Added Project ID to `.env.local`
- [ ] Ran `npm run dev`

Creating your first poem:
- [ ] Went to `/studio`
- [ ] Logged in
- [ ] Clicked "Poems"
- [ ] Filled in all fields
- [ ] Uploaded an image
- [ ] Selected a theme
- [ ] Clicked "Publish"
- [ ] Viewed on homepage
- [ ] Clicked to see full poem

## 🌟 Pro Tips

1. **Line Breaks Matter**: Press Enter after each line of poetry
2. **Stanza Spacing**: Leave blank lines between stanzas
3. **Image Size**: Use high-quality images (1200x600+ recommended)
4. **Excerpts**: Keep them short (2-3 lines max)
5. **Themes**: Preview different themes before publishing
6. **Slugs**: Auto-generate, then edit if needed

## 🎊 You're Ready!

Everything is set up and waiting for you. Just add your Sanity credentials and start creating beautiful poetry!

**Next:** See QUICKSTART.md for immediate setup steps.

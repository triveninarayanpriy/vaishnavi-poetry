# 🎉 DECAP CMS SETUP - FREE POETRY DASHBOARD

## ✅ What's Been Set Up

Your poetry website now has a **completely free** Content Management System powered by Decap CMS (formerly Netlify CMS)! Your poems are stored as markdown files in your GitHub repository.

## 🆓 Why Decap CMS?

- ✅ **100% FREE** - No monthly costs ever
- ✅ **Git-based** - All content stored in your repository
- ✅ **No external services** needed (except GitHub for auth)
- ✅ **Markdown files** - Easy to edit anywhere
- ✅ **Image uploads** - Built-in support
- ✅ **Simple** - Easy to use dashboard

## 📁 What Was Created

```
public/
├── admin/
│   ├── index.html      # CMS dashboard
│   └── config.yml      # CMS configuration
└── images/
    └── uploads/        # Uploaded images stored here

content/
└── poems/
    └── welcome-poem.md # Sample poem (you can delete this)

lib/
└── markdown.ts         # Helper functions to read poems

components/
├── PaginatedPoems.tsx  # Pagination component
└── PoemDetailClient.tsx # Poem detail page
```

## 🚀 How to Access Your Dashboard

### Local Development:
```
http://localhost:3000/admin
```

### After Deployment:
```
https://yourdomain.com/admin
```

## 🔐 Authentication Setup

To log in to your CMS, you need to set up Git Gateway with Netlify (free account):

### Step 1: Deploy to Netlify (Free)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Decap CMS"
   git push origin main
   ```

2. **Go to [Netlify](https://www.netlify.com/)** and sign up (free)

3. **Create a new site**:
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Deploy!

### Step 2: Enable Identity & Git Gateway

1. In your Netlify site dashboard, go to **"Site settings"**

2. Click **"Identity"** in the left sidebar

3. Click **"Enable Identity"**

4. Scroll down to **"Services"** → **"Git Gateway"**

5. Click **"Enable Git Gateway"**

6. Under **"Registration preferences"**, choose:
   - **"Invite only"** (recommended - only you can access)
   - OR **"Open"** (anyone can request access)

### Step 3: Invite Yourself

1. Still in Netlify Identity section

2. Click **"Invite users"**

3. Enter your email address

4. Check your email and click the invite link

5. Set your password

### Step 4: Access Your CMS

1. Go to `https://your-site.netlify.app/admin`

2. Log in with your email and password

3. Start creating poems!

## 📝 Creating Your First Poem

1. **Open the dashboard**: `/admin`

2. **Click "Poems"** in the collections menu

3. **Click "New Poems"**

4. **Fill in the fields**:
   - **Title**: Your poem's title
   - **Publish Date**: When you wrote it
   - **Theme**: Choose Light, Dark, or Vintage
   - **Cover Image**: Upload a beautiful image
   - **Excerpt**: Short preview (2-3 lines)
   - **Body**: Write your actual poem here!

5. **Click "Publish"**

6. **Your poem is now live!** 🎉

## 🎨 Themes Explained

### Light Theme
- Soft amber and rose gradients
- Perfect for: Romantic, uplifting, nature poems
- Background: Warm, gentle tones

### Dark Theme
- Deep stone and slate colors
- Perfect for: Gothic, dramatic, introspective poems
- Background: Moody, high-contrast

### Vintage Theme
- Warm yellow and amber tones
- Perfect for: Classic, nostalgic, traditional poems
- Background: Aged paper aesthetic

## 📖 Markdown Tips for Poetry

Your poems are written in Markdown. Here are helpful tips:

### Line Breaks
```markdown
This is line one
This is line two
This is line three
```

### Stanzas (blank line between)
```markdown
First stanza line one
First stanza line two

Second stanza line one
Second stanza line two
```

### Emphasis
```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Headings (for sections)
```markdown
## Section Title

Poem content here...
```

### Quotes
```markdown
> This is a quoted section
> Perfect for epigraphs
```

## 🔄 How It Works

1. **You write** in the CMS dashboard
2. **Decap CMS creates** a markdown file in `/content/poems/`
3. **Git commits** the file to your repository
4. **Your site rebuilds** automatically (on Netlify)
5. **Poem appears** on your website!

## 🏠 Local Development

To use the CMS locally (optional):

1. **Uncomment this line** in `public/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. **Install Netlify CMS Proxy** (one-time):
   ```bash
   npm install -g netlify-cms-proxy-server
   ```

3. **Run the proxy** (in a separate terminal):
   ```bash
   npx netlify-cms-proxy-server
   ```

4. **Run your dev server**:
   ```bash
   npm run dev
   ```

5. **Access**: `http://localhost:3000/admin`

## 📸 Image Management

### Uploading Images
- Click the image field in the CMS
- Select or drag an image
- Images are saved to `/public/images/uploads/`
- They're automatically committed to your repository

### Image Sizes
- Recommended: 1200x600px or larger
- Format: JPG, PNG, or WebP
- Max size: ~5MB recommended

## 🛠️ Editing Existing Poems

1. Go to `/admin`
2. Click "Poems"
3. Click on the poem you want to edit
4. Make your changes
5. Click "Publish" to save

## 🗑️ Deleting Poems

1. Go to `/admin`
2. Click "Poems"
3. Click on the poem
4. Click "Delete entry"
5. Confirm deletion

## 🚨 Troubleshooting

### Can't access /admin?
- Make sure you've deployed to Netlify
- Check that Git Gateway is enabled
- Clear your browser cache

### Can't log in?
- Verify you've been invited via Netlify Identity
- Check your email for the invite
- Make sure you set a password

### Poems not showing?
- Check that the markdown file exists in `/content/poems/`
- Verify the frontmatter is correct
- Rebuild your site on Netlify

### Images not loading?
- Check that images are in `/public/images/uploads/`
- Verify the path in your markdown file
- Make sure to push images to GitHub

## 📦 File Structure Example

Each poem is saved as a markdown file:

```markdown
---
title: "My Beautiful Poem"
date: 2026-01-06T12:00:00.000Z
theme: "Light"
image: "/images/uploads/sunset.jpg"
excerpt: "A poem about the beauty of sunset..."
---

The sun descends beyond the hills,
Painting skies with golden hues,
Nature's canvas gently fills,
With evening's soft and tender views.
```

## 🌐 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed to Netlify
- [ ] Identity enabled in Netlify
- [ ] Git Gateway enabled
- [ ] User invited and password set
- [ ] Logged into `/admin` successfully
- [ ] First poem created
- [ ] Poem appears on homepage

## 💡 Pro Tips

1. **Write poems in any text editor** - just edit the .md files directly!
2. **Use version control** - all changes are tracked in Git
3. **Backup automatically** - everything is in GitHub
4. **No vendor lock-in** - your content is just markdown files
5. **Mobile friendly** - the CMS works on phones and tablets

## 🎯 Next Steps

1. ✅ Deploy to Netlify (free)
2. ✅ Enable Git Gateway
3. ✅ Invite yourself
4. ✅ Log in to `/admin`
5. ✅ Create your first poem!

## 📚 Resources

- [Decap CMS Docs](https://decapcms.org/docs/intro/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)

---

**Everything is ready! Just deploy to Netlify and start writing poetry! ✍️**

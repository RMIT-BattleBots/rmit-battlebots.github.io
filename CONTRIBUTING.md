# Contributing Guidelines

## Steps

1. Clone the repository
   - `git clone https://github.com/RMIT-BattleBots/rmit-battlebots.github.io.git`
2. Create a branch
   - `git branch {BRANCH NAME}`
   - `git checkout {BRANCH NAME}`
3. Add code/files
   - `git add {FILES TO ADD}`
4. Commit your changes
   - `git commit -m "{COMMIT MESSAGE}"`
   - `git push origin HEAD`
5. Create a pull request (PR)
6. Add reviewers to review changes
7. Squash and merge the PR
8. Profit !!!

## How to contribute!

Before you start to code you will need to create branch, the naming convention is shown below:

`{TYPE_OF_PULLREQUEST}/{DESCRIPTION}`

e.g.

`documentation/contributing_guidelines`

`documentation/include_binary_cad`

`feature/landing_page`

- NOTE: keep everything in lowercase and use "\_"

### TYPE_OF_PULLREQUEST

The type of pull request.
e.g.

- documentation
- bugfix
- feature

### DECRIPTION

This is a short description on what the branch change is.

## What about my commit message?

Please create commit messages that are detailed to maintain good revision control:

`create contribution.md with extra steps`

`edited cad files for robot armour component`

`Created button sign in component`

`add wheel blog page`

## How to Write a Blog Post

Blog posts are a great way to share updates, build logs, tutorials, and stories from the ARC community. Here's how to create one:

### Step 1: Create Your Blog Post File

1. Navigate to the `content/blog/` directory
2. Create a new markdown file with a descriptive filename (use kebab-case, e.g., `my-awesome-build-log.md`)
3. Copy the template from `content/blog/blog-template.md` to get started

### Step 2: Fill in the Frontmatter

Every blog post starts with frontmatter (metadata) at the top of the file, enclosed by `---`:

```yaml
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
author: "Your Name or Team Name"
excerpt: "A short description that appears in the blog listing (keep it under 200 characters)"
featuredImage: "/blog-images/your-image.jpg" # Optional
---
```

**Required Fields:**

- `title`: The main title of your blog post
- `date`: Publication date in `YYYY-MM-DD` format
- `author`: Your name or the team/group name
- `excerpt`: A brief summary (shown in blog listings and previews)

**Optional Fields:**

- `featuredImage`: Path to a featured image (should be in `/public/blog-images/`)

### Step 3: Write Your Content

After the frontmatter, write your blog post content using Markdown. The blog system supports:

- **Headings**: Use `#` for H1, `##` for H2, `###` for H3, etc.
- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[link text](https://url.com)`
- **Images**: `![alt text](/blog-images/image.jpg)`
- **Lists**: Use `-` or `*` for unordered lists, numbers for ordered lists
- **Code blocks**: Use triple backticks with language identifier
- **Blockquotes**: Use `>` for quotes
- **Horizontal rules**: Use `---` for section breaks

### Step 4: Add Images (Optional)

1. Place your images in the `public/blog-images/` directory
2. Reference them in your markdown using: `![alt text](/blog-images/filename.jpg)`
3. Use descriptive alt text for accessibility

**Image Tips:**

- Recommended image formats: `.jpg`, `.png`, `.webp`
- Keep file sizes reasonable for web (under 1MB when possible)
- Use descriptive filenames (e.g., `robot-armor-assembly.jpg` instead of `img123.jpg`)

### Step 5: Preview Your Post

1. Run the development server: `npm run dev`
2. Navigate to `http://localhost:3000/blog` to see your post in the listing
3. Click on your post to see the full rendered version

### Step 6: Submit Your Blog Post

1. Follow the standard contribution workflow (create a branch, commit, push, create PR)
2. Use a descriptive branch name like: `blog/my-awesome-build-log`
3. Use a clear commit message like: `add blog post about robot armor build`

### Blog Post Best Practices

- **Write engaging titles**: Make them descriptive and interesting
- **Use clear structure**: Break up content with headings and sections
- **Include images**: Visual content makes posts more engaging
- **Write good excerpts**: Summarize what readers will learn or discover
- **Proofread**: Check for spelling and grammar before submitting
- **Use proper formatting**: Consistent markdown formatting improves readability

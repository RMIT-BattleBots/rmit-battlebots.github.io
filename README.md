# 🤖 Advanced RMIT Combat-Robotics (ARC) Website

Welcome to the official website for **Advanced RMIT Combat-Robotics (ARC)** - a student-run engineering collective building combat robots and inspiring hands-on innovation through tech, teamwork, and engineering excellence.

This site is used to share our events, showcase our bots, and connect with the community.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Running the Website Locally

1. **Clone the repository**

```bash
git clone https://github.com/RMIT-BattleBots/rmit-battlebots.github.io.git
cd rmit-battlebots.github.io
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📦 Building for Production

To build the site for production:

```bash
npm run build
```

The static site will be generated in the `out` directory.

---

## 🚀 GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/nextjs.yml`) will:

1. Build the Next.js static site
2. Deploy it to GitHub Pages automatically

### Manual Deployment

If you need to deploy manually:

1. Ensure GitHub Pages is enabled in your repository settings
2. Set the source to "GitHub Actions"
3. Push changes to the `main` branch or trigger the workflow manually from the Actions tab

The site will be available at: `https://rmit-battlebots.github.io`

---

## 🤝 Contributing

We welcome contributions from the community and members!

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

---

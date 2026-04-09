# Clarence's Portfolio Website

A React + Vite + Tailwind CSS portfolio website.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

## Getting Started

### 1. Install dependencies

From the project root directory:

```bash
npm install
```

This installs all packages listed in `package.json` into the local `node_modules/` folder. These are **project-local** — nothing is installed globally.

### 2. Start the development server

```bash
npm run dev
```

Opens a local dev server at **http://localhost:5173** with hot module reloading (changes reflect instantly without a full page reload).

### 3. Build for production

```bash
npm run build
```

Outputs optimized static files to the `dist/` folder.

### 4. Preview the production build locally

```bash
npm run preview
```

Serves the `dist/` build at **http://localhost:4173** so you can verify it before deploying.

## Stopping the server

Press `Ctrl + C` in the terminal where the server is running.

## Tech Stack

| Tool         | Purpose                        |
|--------------|-------------------------------|
| React 18     | UI framework                   |
| Vite 5       | Dev server & build tool        |
| Tailwind CSS | Utility-first CSS styling      |
| PostCSS      | CSS processing (used by Tailwind) |

## Is npm global or project-local?

**Project-local.** All dependencies (`react`, `vite`, `tailwindcss`, etc.) are installed inside `node_modules/` within this project folder and are listed in `package.json`. Nothing is installed globally on your machine. If you clone this repo on another machine, just run `npm install` again and everything will work.

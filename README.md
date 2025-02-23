# Blog App

A responsive blog application built with Next.js, Tailwind CSS, and TypeScript. This project demonstrates static generation, dynamic routing, and client-side interactivity with advanced features like hashtag filtering.

## Live Demo

Check out the live application: [Blog App Demo](https://blog-app-j3vn-git-main-andreeas-projects-37a38bd6.vercel.app/)

## Features

- **Next.js App Router:** Utilizes Next.js' new App Router for file‑based routing.
- **Tailwind CSS:** Provides a responsive and modern UI.
- **Dynamic Routing & Static Generation:** Fetches blog posts from the JSONPlaceholder API, pre-renders dynamic post detail pages using `generateStaticParams`.
- **Hashtag Filtering:** Implements client-side interactivity allowing users to filter blog posts by dummy hashtags.
- **Navigation Bar:** A reusable navigation component with active route highlighting.
- **TypeScript & ESLint:** Ensures type safety and code quality.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

## File Structure

```
blog-app/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global Tailwind styles
│   │   ├── layout.tsx         # Root layout with NavBar integrated
│   │   ├── page.tsx          # Homepage with blog posts and hashtag filtering
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   └── post/
│   │       └── [id]/
│   │           └── page.tsx   # Dynamic post details page
│   ├── components/
│   │   ├── NavBar.tsx        # Navigation bar component
│   │   └── PostsGrid.tsx     # Client component handling hashtag filtering
│   └── pages/                # (Empty, using App Router)
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
├── package.json            # Project dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## Approach

### Server Components

- The homepage (`src/app/page.tsx`) and post details page (`src/app/post/[id]/page.tsx`) are server components that fetch data from the JSONPlaceholder API
- They leverage static generation (using caching) for performance and SEO benefits

### Client Components

- The PostsGrid component (`src/components/PostsGrid.tsx`) is a client component that introduces interactive filtering via dummy hashtags
- It maintains its own state to update the displayed posts based on the selected hashtag

### Navigation

- The NavBar component (`src/components/NavBar.tsx`) provides navigation between the Home and About pages
- Uses Next.js' usePathname for active route styling

### Styling

- Tailwind CSS is used throughout to ensure a responsive design that adapts to desktop, tablet, and mobile screens

## Learn More

To explore more about the technologies used, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deployment Status

The application is successfully deployed on Vercel and automatically updates with each push to the main branch.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://blog-app-j3vn-awqby9wpo-andreeas-projects-37a38bd6.vercel.app/)


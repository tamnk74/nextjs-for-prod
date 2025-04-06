This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

## Structure
src/
├── assets/                # Static assets (images, fonts)
│   ├── fonts/
│   ├── images/
│
├── components/            # UI Components (Atomic Design)
│   ├── atoms/             # Smallest reusable components (Button, Input, Label)
│   ├── molecules/         # Grouped atoms forming functional components
│   ├── organisms/         # Complex UI structures combining molecules
│   ├── templates/         # Page layouts (AuthLayout, DashboardLayout)
│
├── lib/                   # Business logic and utilities
│   ├── constants/         # Global constants
│   ├── helpers/           # Utility functions
│   ├── hooks/             # Custom reusable hooks
│   ├── store/             # State management (Redux/Zustand)
│   ├── types/types.ts   # Shared TypeScript types and interfaces
│
├── pages/                 # Page components (LoginPage, DashboardPage)
│        ├── App.tsx       # Main app entry point
├── routes/                # Centralized app routing
│   ├── routes.tsx
│
├── services/              # API services (fetching data)
│   ├── products/          # Product API services
│   │   ├── queries.ts # React Query fetching
|   |   ├── keys.ts # Query keys
│   │   ├── mutations.ts   # React Query mutations
│   │   ├── api.ts         # API functions
│
├── styles/                # Global styles (CSS Modules, Tailwind, etc.)
│   ├── globals.css
│
├── index.tsx              # React root file
├── .env.local             # Environment variables
├── .gitignore
├── package.json


## UI Libs
* [Uiverse](https://uiverse.io/loaders) : components reference
* [Tremor](https://tremor.so) :  React components to build charts and dashboards with React, Tailwind CSS and Radix UI
* [Cursor](https://cursify.vercel.app/): The only cursor animation you need

## Used packages
* tailwindcss
* [React Query ](https://tanstack.com/query/latest): The Ultimate Async Data Management Tool
* [prosemirror](https://prosemirror.net/docs/guide/#intro)

## Recommend packages
* [ShadCN UI](https://ui.shadcn.com/): The Modern UI Component Library for Next.js
* [React DnD](https://react-dnd.github.io/react-dnd/): The Power of Drag & Drop 
* [Planby](https://github.com/karolkozer/planby):  The Go-To Timeline & Scheduling Component 🗓️
* react-resizable: A simple widget that can be resized via a handle.
* react-advanced-cropper: This react cropper library gives you the possibility to create croppers that exactly suited for your website design. Don’t limit yourself. Rotate, zoom, transitions, autozoom and many other features included.
* [Sonner](https://sonner.emilkowal.ski/getting-started)
* npm i react-toastify
* npm i react-hot-toast
* npm install diff-match-patch
* 
* 
* 
* 
* 
* 

## Internationalization
*[https://next-intl.dev/](https://next-intl.dev/)
*[react-intl](https://formatjs.github.io/docs/react-intl/)

## Docker Images
* [docker hub](https://hub.docker.com/repository/docker/khactam94/nextjs-for-prod/tags)
# Personal Blog

A modern personal blog website built with Next.js, shadcn/ui components, and Tailwind CSS.

## Features

- **Blog Posts**: Share top of mind articles and thoughts on various topics
- **Books Library**: Track currently reading books with progress bars and completed books
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Next.js 16**: Server-side rendering and optimized performance
- **TypeScript**: Type-safe development

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Radix UI

## Pages

- `/` - Blog homepage with article posts
- `/books` - Reading library with current and completed books

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone this repository
   ```bash
   git clone <repository-url>
   cd reimagined-carnival
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── books/
│   │   └── page.tsx          # Books library page
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Blog homepage
│   └── globals.css           # Global styles with Tailwind
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── progress.tsx
│   └── navigation.tsx        # Navigation component
├── lib/
│   ├── blog-data.ts          # Blog posts data
│   ├── books-data.ts         # Books data
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## Customization

- **Blog Posts**: Edit `lib/blog-data.ts` to add or modify blog posts
- **Books**: Edit `lib/books-data.ts` to update your reading list
- **Styling**: Modify `app/globals.css` to customize colors and themes
- **Components**: Customize shadcn/ui components in `components/ui/`

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Railway
- Any platform that supports Node.js

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

See [LICENSE](LICENSE) file for details.

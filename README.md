# John Smith Realty - Professional Real Estate Website

A professional real estate agent website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section with market expertise messaging, expertise cards, client testimonials, and contact form
- **About Page**: Agent experience through market cycles, statistics, and no-BS approach
- **Market Insights Page**: Current market conditions, pricing strategies, and consultation scheduling
- **Responsive Design**: Mobile-first approach with professional, trustworthy design
- **Performance Optimized**: Built with Next.js App Router for optimal loading speed

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with one click

### Environment Variables

No environment variables are required for basic deployment.

## Project Structure

```
realtor-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   └── market-insights/   # Market insights page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
└── vercel.json          # Vercel deployment config
```

## Customization

- **Colors**: Edit the color variables in `app/globals.css`
- **Content**: Update the text content in each page component
- **Agent Info**: Replace "John Smith" with actual agent name throughout
- **Contact Info**: Update phone, email, and license numbers in `components/Footer.tsx`

## License

Private project - All rights reserved

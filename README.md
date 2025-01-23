# Neon Identity Template App

This is a [Next.js](https://nextjs.org) project using the App Router that servers as template for the [Neon Identity](https://neon.tech/docs/guides/neon-identity) integration with [Stack Auth](https://docs.stack-auth.com/overview).

## Features

- Next.js with the App Router, TypeScript and Tailwind CSS
- User authentication powered by Stack Auth
- Integration with Neon Identity
- Ready-to-deploy configuration for Vercel, Netlify, and Render

## Prerequisites

- [Neon](https://neon.tech) account
- Node.js 18+ installed locally

## Local Development Setup

### 1. Set up Neon Identity

1. Create a new Neon project or use an existing one
2. Navigate into Neon Identity
3. Click "Connect" and go through the OAuth flow until your Neon Identity integration is set

### 2. Run the development server

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` file and copy the variables from the Neon Identity dashboard:

   ```
   # Stack Auth
   NEXT_PUBLIC_STACK_PROJECT_ID=
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=
   STACK_SECRET_SERVER_KEY=

   # Database connections
   DATABASE_URL=              # neondb_owner role connection
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- [Neon Identity Documentation](https://neon.tech/docs/guides/neon-identity)
- [Stack Auth Documentation](https://docs.stack-auth.com/)

## Authors

- [Pedro Figueiredo](https://github.com/pffigueiredo)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# MVR Residency

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/installation) (or use npm/yarn)

### Installation
Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/mvr-residency.git
cd mvr-residency
pnpm install
```

### Running the Development Server
Start the development server with:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🏗 Project Structure
```
📦 mvrResidency
┣ 📂 public # Static assets (images, fonts, icons, etc.)
┣ 📂 src # Source code lives here
┃ ┣ 📂 app # (Next.js App Router) - route-based folders
┃ ┃ ┣ 📂 (auth) # Auth-related pages (e.g., login, register)
┃ ┃ ┣ 📂 dashboard # Example: Protected user dashboard
┃ ┃ ┃ ┣ 📂 settings # Nested routes (e.g., /dashboard/settings)
┃ ┃ ┃ ┣ 📜 page.tsx # Default page for /dashboard
┃ ┃ ┣ 📜 layout.tsx # Root layout file
┃ ┃ ┣ 📜 page.tsx # Default homepage
┃ ┣ 📂 components # Reusable UI components (buttons, modals, etc.)
┃ ┃ ┣ 📂 ui # Atomic UI components (buttons, inputs, etc.)
┃ ┃ ┣ 📜 Navbar.tsx # Example component
┃ ┣ 📂 hooks # Custom React hooks
┃ ┣ 📂 lib # Utilities, helper functions, API calls
┃ ┣ 📂 providers # Context providers (e.g., ThemeProvider, AuthProvider)
┃ ┣ 📂 styles # Global and module styles
┃ ┣ 📂 types # TypeScript types/interfaces
┃ ┣ 📂 config # Config files (e.g., env variables, constants)
┃ ┣ 📂 middleware # Middleware functions
┃ ┗ 📂 services # API service functions
┣ 📜 next.config.js # Next.js configuration
┣ 📜 tailwind.config.js # Tailwind CSS config (if using Tailwind)
┣ 📜 tsconfig.json # TypeScript config
┣ 📜 package.json # Dependencies & scripts
┗ 📜 .env.local # Environment variables

## 🔧 Configuration
### Environment Variables
Create a `.env.local` file and add necessary environment variables:
```
DATABASE_URL=your_database_url_here
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## 🗄️ Backend (API Routes)
This project includes backend logic using **Next.js API routes**.
- Example API route: `app/api/residents/route.ts`

```ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const residents = await prisma.resident.findMany();
  return NextResponse.json(residents);
}
```

## 🏡 Features
- 🌐 **Full-Stack** Next.js 13+ (App Router)
- 🔄 **API Routes** for backend logic
- 🗄 **Database Support** (Prisma + PostgreSQL/MongoDB)
- 🔑 **Authentication** (NextAuth.js / JWT)
- 🎨 **Tailwind CSS** for styling

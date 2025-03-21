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

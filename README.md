# Next.js 15 Starter Template

This project is a Next.js 15 based starter template for developing modern web applications.

## Features

- ✅ **Next.js 15** - Latest Next.js version
- ✅ **TypeScript** - Type safety
- ✅ **Tailwind CSS** - Fast and customizable styling
- ✅ **Multi-language Support** - i18n support with next-intl (Turkish and English)
- ✅ **Supabase Integration** - Authentication and database operations
- ✅ **Shadcn UI** - Customizable UI components
- ✅ **Theme Switching** - Dark/Light mode support
- ✅ **Protected Pages** - Pages requiring authentication
- ✅ **Middleware** - Automatic session management
- ✅ **OpenAI Integration** - Ready configuration for AI features

## Getting Started

### Requirements

- Node.js 18.17 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the project:

   ```bash
   git clone https://github.com/sellimenes/next15-starter.git
   cd next15-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Copy the example environment variables file:

   ```bash
   cp .env.example .env.local
   ```

4. Edit the `.env.local` file to add necessary API keys and configurations.

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
/
├── app/                      # Next.js application folder
│   ├── [locale]/             # Language-based routes
│   │   ├── (auth-pages)/     # Authentication pages
│   │   ├── protected/        # Protected pages
│   │   ├── layout.tsx        # Main layout
│   │   └── page.tsx          # Main page
│   └── auth/                 # Auth callback processes
├── components/               # UI components
│   ├── ui/                   # Basic UI components
│   └── typography/           # Typography components
├── i18n/                     # i18n configuration
├── lib/                      # Helper libraries
├── messages/                 # Translation files
│   ├── en.json               # English translations
│   └── tr.json               # Turkish translations
└── utils/                    # Helper functions
```

## Customization

1. **Translations:** Edit the JSON files in the `/messages` folder to customize translations.
2. **Themes:** Customize themes through Tailwind configuration and shadcn components.
3. **UI Components:** Edit components in the `/components` folder according to your needs.

## Deployment

You can easily deploy this project to Vercel, Netlify, or other platforms that support Next.js.

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build
```

## License

MIT

---

This template is being developed via [GitHub Repo URL](https://github.com/sellimenes/next15-starter).

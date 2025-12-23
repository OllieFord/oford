# AGENTS.md

## Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Type check**: `npm run check`
- **Lint**: `npm run lint`
- **Format**: `npm run format`
- No test framework configured

## Architecture

- SvelteKit 2.x with Svelte 5 (runes), TypeScript, and Tailwind CSS
- **src/routes/**: SvelteKit file-based routing (+page.svelte, +layout.svelte)
- **src/lib/components/**: Reusable Svelte components (layout/ subfolder)
- **src/lib/assets/**: Static assets
- **api/**: Vercel serverless functions (page_view.js)
- Uses Supabase for backend services, Vercel Analytics for metrics

## Code Style

- **Svelte 5**: Use runes (`$state`, `$derived`, `$effect`, `$props`, `$bindable`)
- **Events**: Use `onclick` instead of `on:click`
- **Slots**: Use `{@render children()}` with snippet props
- **Formatting**: Prettier with tabs, single quotes, no trailing commas, 100 char width
- **Imports**: Use `$lib/` alias for src/lib imports; use `$app/state` not `$app/stores`
- **Types**: TypeScript enabled; use `lang="ts"` in all script tags

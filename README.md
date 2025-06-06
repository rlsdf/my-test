# Monorepo Setup

This repository is a simple turborepo using pnpm workspaces.

- **apps/web-a**: React application using Vite
- **apps/web-b**: Another React application using Vite
- **packages/utils**: Shared TypeScript utilities

## Scripts

- `pnpm dev` – Run all apps in development mode
- `pnpm dev:web-a` – Run only **web-a** in development mode
- `pnpm dev:web-b` – Run only **web-b** in development mode
- `pnpm build` – Build all packages
- `pnpm build:web-a` – Build only **web-a**
- `pnpm build:web-b` – Build only **web-b**
- `pnpm lint` – Lint all packages
- `pnpm type-check` – Type check all packages

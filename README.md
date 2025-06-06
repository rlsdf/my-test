# Monorepo Example

This project is a small **pnpm + turborepo** workspace that houses two React applications and a shared utilities package. It uses **Vite** for local development and **Tailwind CSS** for styling. Everything is written in **TypeScript**.

## Directory structure

```
my-test/
├── apps/
│   ├── web-a/       # 첫 번째 프론트엔드 앱
│   └── web-b/       # 두 번째 프론트엔드 앱
└── packages/
    └── utils/       # 공통 유틸 함수와 컴포넌트 모듈
```

- **apps/web-a** – React 기반의 프론트엔드 앱입니다.
- **apps/web-b** – 또 다른 React 앱으로, web-a 와 동일한 공통 모듈을 사용합니다.
- **packages/utils** – 버튼, 입력창, 테이블 등 재사용 가능한 컴포넌트와 유틸 함수를 제공합니다.

## Tech stack

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [pnpm](https://pnpm.io)
- [TurboRepo](https://turbo.build/repo)

## Installation

1. **Install pnpm** (if not already):

   ```bash
   npm install -g pnpm
   ```

2. **Install all dependencies** from the repository root:

   ```bash
   pnpm install
   ```

## Running the apps

- Run both apps concurrently:

  ```bash
  pnpm dev
  ```

- Run only **web-a**:

  ```bash
  pnpm dev:web-a
  ```

- Run only **web-b**:

  ```bash
  pnpm dev:web-b
  ```

Each command starts the corresponding Vite dev server so you can open the app in your browser.

## Using the shared utilities

The `@my/utils` package exposes React components and helper functions. Example:

```tsx
import { Input, Button, Table, greet } from '@my/utils';

function Example() {
  return (
    <div>
      <h1>{greet('world')}</h1>
      <Input placeholder="검색" />
      <Button>조회</Button>
    </div>
  );
}
```

Both `web-a` and `web-b` import components in this way.

## TurboRepo configuration

`turbo.json` defines common tasks (`build`, `dev`, `lint`, `type-check`) so they can run across packages with caching and dependency awareness. For example, the `build` task in each package outputs to its `dist/` folder and depends on builds of its dependencies.

## Useful scripts

- `pnpm build` – 모든 패키지를 빌드합니다.
- `pnpm lint` – eslint 로 전 프로젝트를 검사합니다.
- `pnpm type-check` – TypeScript 타입 검사를 실행합니다.

See `package.json` for more available scripts.


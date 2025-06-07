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

## pnpm workspace

`pnpm-workspace.yaml` 파일에서 `apps/*` 과 `packages/*` 폴더를 워크스페이스로 지정하여 여러 패키지를 한 곳에서 관리합니다. 루트에서 `pnpm install` 을 실행하면 모든 앱과 패키지의 의존성이 한 번에 설치됩니다.


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

## Versioning management
### 변경 사항 기록(Changeset 생성)
  ```bash
  npx changeset
  ```
- 방향키로 이동하고 스페이스키로 어떤 패키지의 버전을 올릴지 선택할 수 있습니다.
- 어떤 버전(major, minor, patch)을 올릴지 고릅니다.
- `.changeset/` 디렉토리에 변경 기록 파일이 생성됩니다

### 버전 업데이트 반영
  ```bash
  npx changeset version
  ```
- `package.json` 에 버전이 업데이트 됩니다.
- `CHANGELOG.md` 도 자동 생성됩니다.

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

## Tailwind CSS setup

각 앱에서는 `tailwindcss`, `postcss`, `autoprefixer` 패키지를 설치하고 다음과 같이 설정합니다.

1. `tailwind.config.cjs`에서 `content` 경로에 `../../packages/utils/**/*.{ts,tsx,js,jsx}`를 포함시켜 공유 컴포넌트의 스타일을 추출합니다.
2. `postcss.config.cjs`에 `tailwindcss`와 `autoprefixer` 플러그인을 등록합니다.
3. `src/index.css` 파일에 `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` 지시문을 추가하고 필요하다면 커스텀 CSS를 작성합니다.
4. `src/main.tsx`에서 `import "./index.css";` 를 통해 스타일을 불러옵니다.


## TurboRepo configuration

`turbo.json` defines common tasks (`build`, `dev`, `lint`, `type-check`) so they can run across packages with caching and dependency awareness. For example, the `build` task in each package outputs to its `dist/` folder and depends on builds of its dependencies.
아래는 기본 설정 예시입니다.

```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "dev": { "cache": false, "persistent": true },
    "lint": {},
    "type-check": {}
  }
}
```


## Useful scripts

- `pnpm build` – 모든 패키지를 빌드합니다.
- `pnpm lint` – eslint 로 전 프로젝트를 검사합니다.
- `pnpm type-check` – TypeScript 타입 검사를 실행합니다.

See `package.json` for more available scripts.


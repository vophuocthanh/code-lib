<h1 align="center">🚀 Code Lib</h1>

<div align="center">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white" alt="shadcn-ui" />
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier" />
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/husky-7C3AED?style=for-the-badge&logo=git&logoColor=white" alt="Husky" />
</div>

<p align="center">
  <b>Modern, strict, and beautiful Next.js 14 boilerplate with TypeScript, TailwindCSS, Shadcn UI, Prettier, ESLint, Husky, and more.</b>
</p>

---

## 📑 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Lint & Format](#lint--format)
- [Husky & Lint-staged](#husky--lint-staged)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- ⚡ **Next.js 14** — App Router, SSR/SSG, file-based routing
- 🟦 **TypeScript** — Strict type checking
- 🎨 **TailwindCSS** — Utility-first CSS framework
- 🦄 **Shadcn UI** — Beautiful, accessible React components
- 💎 **Prettier** — Code formatter with Tailwind plugin
- 🦄 **ESLint** — Strict linting for JS/TS/React/Accessibility
- 🦊 **Husky** — Git hooks for code quality
- 🦊 **Lint-staged** — Run linters on staged files
- 🔥 **React Hook Form** — Forms with validation
- 🦁 **Zod** — Type-safe schema validation
- 🦖 **Tanstack Query** — Powerful data fetching
- 🦄 **Zustand** — State management
- 🦖 **Commitlint** — Enforce commit message conventions
- 🧩 **Radix UI** — Unstyled, accessible primitives
- 🧪 **Jest** — Testing ready

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) >= 16
- [Yarn](https://yarnpkg.com/)

### 2. Clone & Install

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
yarn install
```

### 3. Set Up Environment Variables

Tạo file `.env` ở thư mục gốc:

```env
NEXT_PUBLIC_API_URL=
```

### 4. Run Development Server

```bash
yarn dev
```

Truy cập [http://localhost:3000](http://localhost:3000)

### 5. Build & Start

```bash
yarn build
yarn start
```

---

## 🛠️ Scripts

| Script              | Mục đích                            |
| ------------------- | ----------------------------------- |
| `yarn dev`          | Chạy server phát triển (hot reload) |
| `yarn build`        | Build production                    |
| `yarn start`        | Chạy production build               |
| `yarn lint`         | Kiểm tra lỗi code với ESLint        |
| `yarn lint:fix`     | Tự động sửa lỗi ESLint có thể fix   |
| `yarn format`       | Format code với Prettier            |
| `yarn format:check` | Kiểm tra code đã format chuẩn chưa  |
| `yarn validate`     | Chạy cả lint và format check        |

---

## 🧹 Lint & Format

- **Lint code:**
  ```bash
  yarn lint
  ```
- **Tự động fix lỗi lint:**
  ```bash
  yarn lint:fix
  ```
- **Format code:**
  ```bash
  yarn format
  ```
- **Kiểm tra format:**
  ```bash
  yarn format:check
  ```
- **Kiểm tra toàn bộ:**
  ```bash
  yarn validate
  ```

> 💡 **Tip:** Nên chạy `yarn lint:fix && yarn format` trước khi commit code!

---

## 🦊 Husky & Lint-staged

- **Husky** tự động chạy lint/format khi commit để đảm bảo code luôn sạch.
- **Lint-staged** chỉ chạy trên file thay đổi, giúp nhanh hơn.
- Đã cấu hình sẵn, không cần thao tác gì thêm.

---

## 📁 Folder Structure

```text
├── app/                # Next.js App Router
├── components/         # UI components (shadcn, custom, etc.)
├── core/               # Helpers, constants, services, stores
├── hooks/              # Custom React hooks
├── model/              # TypeScript types & interfaces
├── public/             # Static assets
├── styles/             # Global styles (Tailwind)
├── .eslintrc           # ESLint config
├── .prettierrc         # Prettier config
├── tailwind.config.ts  # Tailwind config
├── package.json        # Scripts & dependencies
└── README.md           # Tài liệu dự án
```

---

## 🧩 Tech Stack

- <img src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" height="20"/> [Next.js](https://nextjs.org/)
- <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white" height="20"/> [TypeScript](https://www.typescriptlang.org/)
- <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" height="20"/> [TailwindCSS](https://tailwindcss.com/)
- <img src="https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcn/ui&logoColor=white" height="20"/> [shadcn/ui](https://ui.shadcn.com/)
- <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" height="20"/> [Prettier](https://prettier.io/)
- <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white" height="20"/> [ESLint](https://eslint.org/)
- <img src="https://img.shields.io/badge/husky-7C3AED?style=flat-square&logo=git&logoColor=white" height="20"/> [Husky](https://typicode.github.io/husky/)
- <img src="https://img.shields.io/badge/zod-121212?style=flat-square&logo=zod&logoColor=white" height="20"/> [Zod](https://zod.dev/)
- <img src="https://img.shields.io/badge/tanstack_query-FF4154?style=flat-square&logo=react-query&logoColor=white" height="20"/> [Tanstack Query](https://tanstack.com/query/latest)
- <img src="https://img.shields.io/badge/zustand-121212?style=flat-square&logo=zustand&logoColor=white" height="20"/> [Zustand](https://zustand-demo.pmnd.rs/)
- <img src="https://img.shields.io/badge/commitlint-121212?style=flat-square&logo=commitlint&logoColor=white" height="20"/> [Commitlint](https://commitlint.js.org/)
- <img src="https://img.shields.io/badge/radix_ui-121212?style=flat-square&logo=radixui&logoColor=white" height="20"/> [Radix UI](https://www.radix-ui.com/)

---

## 🤝 Contributing

1. Fork repo, tạo branch mới từ `develop`
2. Code theo chuẩn, chạy `yarn lint:fix && yarn format`
3. Commit theo chuẩn Conventional Commits (đã có commitlint)
4. Tạo Pull Request, mô tả rõ thay đổi

---

## 📝 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

<p align="center">Made with ♥ by <a href="https://www.facebook.com/thanh.vophuoc.50">ThanhDev</a></p>

# React Vite Starter

This is a starter template for projects using [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) for building, including a bunch of useful tools and libraries enforcing best practices. For styling it comes with TailwindCSS ready to use.

![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Typescript](https://img.shields.io/badge/-Typescript-235a97?logo=typescript&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-2338B2AC?logo=vite&logoColor=white&style=for-the-badge)
![Testing Library](https://img.shields.io/badge/-Testing%20Library-E33332?logo=testing%20library&logoColor=white&style=for-the-badge)

### Features

- TypeScript Included.
- Authentication.
- Base pages for Home, Login, Register & 404.
- Pre-configured with TailwindCSS.
- Pre-configured with code quality tools: Prettier,ESLint TypeScript, Vitest etc.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Recommended `node` : `>=12.2.0`
- `pnpm`

### Setup

- Install all dependencies using: - `pnpm install`

### Start dev server

- `pnpm dev` or and open the browser at `http://localhost:3000`

### Build for production

- `pnpm build`

### Locally preview production build

After creating the production build, run:

- `pnpm preview`

### Start server

- `pnpm serve`

### General steps for first time set up

- Rename project name
- Set fav icon
- Redesign basic layout
- Customize Tailwind CSS theme
- Set up ESLint & Prettier locally

### Directory Structure

| Name                      | Description                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **public/**               | Static assets (fonts, css, js, img).                                                                                                                                    |
| **dist/**                 | Compiled source files will be placed here.                                                                                                                              |
| **scripts/**              | Automation scripts such as generate-icons.                                                                                                                              |
| **src/**                  | Source files.                                                                                                                                                           |
| **src/api**               | It contains all interfaces and methods for api calls. All the files that end with `*.ts` contain interfaces, and files that end with `*.client.ts` contain api methods. |
| **src/components**        | Contains components that are most often used to compose page components.                                                                                                |
| **src/components/shared** | Reusable collection of UI components.                                                                                                                                   |
| **src/lib**               | Reusable helper functions & hooks & contexts are placed here.                                                                                                           |
| **src/pages**             | React views - screen components.                                                                                                                                        |
| **src/routes**            | Application routes.                                                                                                                                                     |
| **src/styles**            | App style including css & scss.                                                                                                                                         |

## License

No License. You can use this starter as you wish.

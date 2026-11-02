# 🖨️ Printtodoor Admin Panel

A modern, full-featured **admin dashboard** for the [Printtodoor](https://printtodoor.co.uk) print-on-demand platform. Built with **Next.js 16**, **Tailwind CSS**, and **TanStack Query**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Local Installation](#-local-installation)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Pages & Modules](#-pages--modules)
- [Build Notes](#-build-notes)

---

## ✨ Features

- 🛍️ **Order Management** — View, filter, and manage customer orders
- 📦 **Product Management** — Create and update products with variants
- 🗂️ **Category Management** — Organize products by category
- 🧾 **Order Items** — Drill into individual line items per order
- 🛒 **Cart Monitoring** — Review active customer carts
- 💰 **Refund Management** — Process and track refunds
- 🖼️ **Media Library** — Upload and manage images
- 🏷️ **Top Listing** — Manage featured/top-listed products
- 🔒 **Authentication** — Secure admin login with cookie-based sessions
- 📱 **Responsive UI** — Mobile-friendly layout with dark mode support

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [TanStack Query v5](https://tanstack.com/query) | Server state & data fetching |
| [TanStack Table v8](https://tanstack.com/table) | Data tables |
| [React Hook Form](https://react-hook-form.com/) | Form handling & validation |
| [Yup](https://github.com/jquense/yup) | Schema validation |
| [Axios](https://axios-http.com/) | HTTP client |
| [Headless UI](https://headlessui.com/) | Accessible UI primitives |
| [React Quill](https://github.com/zenoamaro/react-quill) | Rich text editor |
| [FilePond](https://pqina.nl/filepond/) | File/image uploads |
| [React Datepicker](https://reactdatepicker.com/) | Date selection |
| [React Hot Toast](https://react-hot-toast.com/) | Notifications |

---

## 📁 Project Structure

```
PrinttodoorAdmin/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.jsx          # Root layout (global CSS, providers)
│   │   ├── page.jsx            # Dashboard home (/)
│   │   ├── login/              # Authentication page
│   │   ├── orders/             # Orders list + detail
│   │   ├── order-items/        # Order line items
│   │   ├── products/           # Products list + detail
│   │   ├── categories/         # Category management
│   │   ├── customers/          # Customer list
│   │   ├── carts/              # Active carts
│   │   ├── refunds/            # Refund management
│   │   ├── media/              # Media library
│   │   ├── banner/             # Banner management
│   │   ├── top-listing/        # Featured products
│   │   ├── file-check/         # File management
│   │   └── userinfo/           # Admin user info
│   ├── components/             # Reusable UI components
│   │   ├── pages/              # Page-specific components
│   │   └── ui/                 # Generic UI elements
│   ├── hooks/                  # Custom React hooks (useAuth, etc.)
│   ├── resolvers/              # TanStack Query query/mutation resolvers
│   ├── styles/                 # Global & vendor CSS
│   └── utils/                  # Utility functions
├── .env                        # Environment variables (see below)
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.mjs          # PostCSS configuration
```

---

## ✅ Prerequisites

Make sure the following are installed on your machine:

| Tool | Minimum Version | Check |
|---|---|---|
| [Node.js](https://nodejs.org/) | **v18.17+** | `node -v` |
| [npm](https://www.npmjs.com/) | **v9+** | `npm -v` |
| [Git](https://git-scm.com/) | any | `git --version` |

> **Recommended:** Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

---

## 🚀 Local Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-org/PrinttodoorAdmin.git
cd PrinttodoorAdmin
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env .env.local
```

Then open `.env.local` and update the values (see [Environment Variables](#-environment-variables) below).

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Log in

Navigate to [http://localhost:3000/login](http://localhost:3000/login) and sign in with your admin credentials.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```env
# ==========================================
# Application Configuration
# ==========================================
PORT=3000
NODE_ENV=development

# ==========================================
# Backend API Endpoints
# ==========================================
# Used in queries, mutations & media upload
NEXT_PUBLIC_BACKEND_URL=https://api.printtodoor.co.uk/api/v1

# Used in auth hooks
NEXT_PUBLIC_API_URL=https://api.printtodoor.co.uk/api/v1
```

> ⚠️ **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | Base URL of the backend REST API (used for queries/mutations) | ✅ Yes |
| `NEXT_PUBLIC_API_URL` | Base URL used in authentication hooks | ✅ Yes |
| `NODE_ENV` | `development` or `production` | Optional |
| `PORT` | Local dev server port (default: `3000`) | Optional |

---

## 📜 Available Scripts

Run these from the project root:

```bash
# Start development server (with Turbopack hot reload)
npm run dev

# Build for production (uses Webpack — more stable with this stack)
npm run build

# Start the production server (after build)
npm run start

# Run ESLint to check for code issues
npm run lint
```

> 💡 **Why Webpack for build?**
> This project uses Turbopack in dev mode for fast HMR, but the production build uses Webpack (`npm run build`) due to a known Turbopack bug in Next.js 16 that causes the PostCSS worker to crash when processing some third-party CSS files from `node_modules`.

---

## 📄 Pages & Modules

| Route | Description |
|---|---|
| `/` | Main dashboard overview |
| `/login` | Admin login page |
| `/orders` | All customer orders |
| `/orders/[order_id]` | Individual order detail |
| `/order-items` | All order line items |
| `/order-items/[order_item_id]` | Single order item detail |
| `/products` | Product list |
| `/products/[slug]` | Product detail & edit |
| `/categories` | Category list |
| `/categories/[slug]` | Category detail & edit |
| `/customers` | Customer list |
| `/carts` | Active shopping carts |
| `/refunds` | Refund requests |
| `/media` | Image/media library |
| `/banner` | Homepage banners |
| `/top-listing` | Featured product listings |
| `/top-listing/[top_list_id]` | Featured listing detail |
| `/file-check` | Uploaded file management |
| `/userinfo` | Logged-in admin profile |

---

## 🏗️ Build Notes

### CSS Fixes Applied
The following CSS issues were resolved to make the production build pass:

- **`@import` ordering** — Google Fonts `@import` moved before `@tailwind` directives in `globals.css`
- **Invalid pseudo-element** — Removed `.embedded-breadcrumb:before::before` (chained pseudo-elements are invalid CSS)
- **Missing `--` prefix** — Fixed `var(-teal)` → `var(--teal)` in 4 places in `style.css`
- **Garbage CSS rule** — Removed the invalid `.\[-\:\=\]` block with `- : =;`
- **Third-party CSS** — `filepond`, `react-quill`, `gridjs`, and `react-datepicker` CSS copied locally to avoid Turbopack PostCSS worker crashes

### Font Loading
`next/font/google` (Montserrat) has been replaced with a CSS `@import` in `globals.css`. This avoids the build failing when Google Fonts is unreachable during CI/CD builds.

---

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run `npm run lint` to check for issues
4. Run `npm run build` to verify the build passes
5. Open a Pull Request

---

## 📝 License

Private project — © Printtodoor. All rights reserved.


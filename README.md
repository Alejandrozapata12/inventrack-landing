# InvenTrack

A responsive landing page for **InvenTrack**, an inventory-management product concept designed for small and medium-sized businesses. The site introduces the product, communicates its proposed value, presents its intended user roles and features, and provides a contact interface.

> **Project status:** This repository currently contains the React/Vite marketing frontend only. It does not include an inventory-management application, backend API, database, authentication system, or working contact/demo integrations.

## Overview

InvenTrack is presented as a centralized way for teams to manage inventory operations. The landing page explains the product concept through a set of focused sections:

- **Product introduction:** A hero section describing the inventory-management proposition.
- **Technology overview:** A visual presentation of the technologies associated with the proposed product.
- **Operational comparison:** A before-and-after explanation of the problems the product aims to address.
- **Roles and permissions:** An overview of the intended Administrator and Employee roles.
- **Feature highlights:** Proposed capabilities such as stock alerts, reporting, barcode workflows, movement history, and multi-device access.
- **Contact section:** A client-side contact form layout.

## Tech stack

The implemented landing page uses:

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | Component-based user interface |
| [Vite](https://vite.dev/) | Development server and production build tooling |
| JavaScript (ES modules) | Application logic |
| CSS | Layout, styling, and responsive presentation |
| [React Icons](https://react-icons.github.io/react-icons/) | Interface icons |
| [AOS](https://michalsnik.github.io/aos/) | Scroll-triggered animations |

The landing page also displays technologies such as TypeScript, Node.js, Express, Prisma, PostgreSQL, Vercel, and Render in its technology showcase. **Their appearance in the UI does not mean they are implemented in this repository**; no corresponding backend or database implementation is included in this project archive.

## Getting started

### Prerequisites

- Node.js (use a current LTS release)
- npm

### Installation

```bash
git clone <YOUR_REPOSITORY_URL>
cd Inventrack
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
```

The optimized production files are generated in the `dist/` directory.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```text
Inventrack/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── favicon.png
│   │   └── image.png
│   ├── components/
│   │   ├── Caracteristicas.jsx
│   │   ├── Comparacion.jsx
│   │   ├── Contacto.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Roles.jsx
│   │   ├── Tecnologias.jsx
│   │   └── VerDemo.jsx
│   ├── css/
│   │   └── Component-specific stylesheets
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Current limitations

The following items are presentation-level elements or placeholders and should not be mistaken for production functionality:

- The **View Demo** and **Schedule Demo** actions display a notice because no demo route or scheduling workflow is configured.
- The **contact form** validates required fields in the browser and displays a success message, but it does not send or persist the submitted information. Connect it to a backend endpoint or a form service before using it with real visitors.
- The phone number and email address shown in the contact section are placeholder contact details.
- The social links currently point to generic platform homepages rather than project-specific profiles.
- Product capabilities described in the landing page (inventory operations, real-time alerts, analytics, barcode scanning, user permissions, and integrations) are product goals presented by the site; the implementation of those capabilities is not part of this frontend archive.

## Suggested next steps

1. Connect the contact form to a secure API or trusted form provider, including server-side validation and spam protection.
2. Replace placeholder contact details and generic social links with verified project information.
3. Add a real demo route or link the demo buttons to a deployed application.
4. If the product is intended to be a full inventory platform, implement and document the API, authentication, authorization, database schema, inventory transactions, and audit trail in their own modules or repositories.
5. Align the technology showcase with the stack that is actually implemented, or clearly label it as the planned architecture.
6. Add automated checks and deployment configuration for the frontend.

## Contributing

Contributions are welcome. For substantial changes, open an issue first to discuss the proposed improvement. Keep pull requests focused and include clear steps to test the change.

## License

No license is currently specified. Add a `LICENSE` file before allowing others to reuse, modify, or distribute this project.

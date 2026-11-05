# Bhagwanth ` — Portfolio

A modern single-page developer portfolio showcasing full-stack Python web applications, interactive software, and real-world engineering workflows.

**Live site:** https://YOUR-SITE-URL/

## Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion & AOS
- **Contact Service:** EmailJS (@emailjs/browser)
- **Interactive Visuals:** WebGL Fluid Simulation

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Environment Variables

To configure the interactive contact form with EmailJS, create a `.env.local` file in the project root with the following keys:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

*(If not configured, the contact form automatically falls back to standard client mailto links).*

---

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

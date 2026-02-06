# KHEYRE CONSTRUCTION Website

A modern, responsive website for KHEYRE Construction company built with React, TypeScript, and Vite.

## Features

- ✅ **Multi-page routing** with React Router
- ✅ **Contact forms** integrated with Email and WhatsApp
- ✅ **SEO optimized** with dynamic meta tags
- ✅ **Fully responsive** design for mobile, tablet, and desktop
- ✅ **Accessible** with proper ALT tags and ARIA labels
- ✅ **Clean, modern design** inspired by Sidra Construction

## Contact Form Integration

The contact forms are configured to send submissions via:
- **Email**: Opens default email client with pre-filled message
- **WhatsApp**: Opens WhatsApp with pre-filled message
- **CRM Webhook**: Optional integration (configure in `src/utils/formHandler.ts`)

### Configuration

Update contact details in `src/utils/formHandler.ts`:

```typescript
const CONFIG = {
  email: 'your-email@example.com',
  whatsappNumber: '+1234567890',
  crmWebhook: 'https://your-crm-webhook-url.com', // Optional
};
```

## SEO

Each page includes:
- Dynamic meta titles
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Proper heading hierarchy

## Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── utils/         # Utility functions
├── styles/        # Global styles
└── App.tsx        # Main app component
```

## Technologies

- React 19
- TypeScript
- React Router DOM
- Vite
- CSS3

## License

© 2024 KHEYRE CONSTRUCTION. All rights reserved.

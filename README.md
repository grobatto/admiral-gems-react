# Admiral Gems Uruguay - React Website

Modern, premium B2B website for Admiral Gems Uruguay, showcasing Uruguayan amethyst and agate products with multi-language support.

## Features

- **Multi-Language Support**: Spanish, English, Portuguese, Chinese (Simplified)
- **Premium Design**: Modern glassmorphism, gradients, smooth animations
- **Responsive**: Mobile-first design, works on all devices
- **B2B Focus**: Advanced contact form with company, country, and quantity fields
- **WhatsApp Integration**: Multi-language WhatsApp float button
- **Performance**: Optimized with Vite, code splitting, lazy loading
- **SEO Ready**: Semantic HTML, proper meta tags, structured data

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Ultra-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **react-i18next** - Internationalization
- **React Hook Form** - Form handling
- **Formspree** - Contact form backend

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header with nav
│   │   ├── Footer.tsx          # Footer with links
│   │   └── LanguageSwitcher.tsx # Language selector
├── locales/
│   ├── es/translation.json     # Spanish
│   ├── en/translation.json     # English
│   ├── pt/translation.json     # Portuguese
│   └── zh/translation.json     # Chinese
├── assets/images/
│   ├── brand/                  # Logo, favicon
│   ├── products/               # Product images
│   └── gallery/                # Gallery images
├── App.tsx                     # Main application
├── i18n.ts                     # i18n configuration
└── main.tsx                    # Entry point
```

## Sections

1. **Hero** - Full-screen hero with animated logo, CTAs
2. **Products** - 4 featured products with hover effects
3. **Gallery** - Image gallery with categories
4. **About** - Company story and values
5. **Contact** - B2B contact form with WhatsApp button

## Multi-Language

Switch languages with the flag selector in the header. Language preference is saved to localStorage.

Supported languages:
- 🇪🇸 Spanish (Español) - Default
- 🇺🇸 English
- 🇧🇷 Portuguese (Português)
- 🇨🇳 Chinese (中文)

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set environment variables if needed
4. Configure custom domain: admiralgems.com

### Configuration

Create `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Customization

### Update Contact Information

Edit `src/locales/*/translation.json`:

```json
{
  "contact": {
    "info": {
      "email": "your@email.com",
      "whatsapp": "+598 XX XXX XXX",
      "instagram": "@yourusername"
    }
  }
}
```

### Update WhatsApp Number

In `src/App.tsx`, update the WhatsApp link:

```typescript
const getWhatsAppLink = () => {
  const message = encodeURIComponent(t('contact.whatsapp.message'));
  return `https://wa.me/YOUR_NUMBER?text=${message}`;
};
```

### Add Product Images

Replace placeholder gradients in `App.tsx` with actual images:

```tsx
<img src={productImage} alt="Product" className="w-full h-64 object-cover" />
```

## Performance Optimization

- Images: Optimize with WebP/AVIF formats
- Code Splitting: Lazy load heavy components
- Bundle Size: Tree-shaking enabled
- Fonts: Google Fonts with display=swap

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Admiral Gems Uruguay. All rights reserved.

## Contact

- Email: admiralgemsuruguay@gmail.com
- WhatsApp: +598 99 123 456
- Instagram: @admiralgemsuy
- GitHub: [grobatto/admiral-gems-react](https://github.com/grobatto/admiral-gems-react)

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)

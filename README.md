# Saffron — Restaurant Website

A polished, fully responsive restaurant landing page built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Original design and content in the style of a premium food/restaurant template — warm charcoal + cream + gold palette, Playfair Display headings, scroll-reveal animations, and a complete set of marketing sections.

> All photography is from [Unsplash](https://unsplash.com) (free to use); branding, copy, and code are original.

## Sections

- Fixed navbar (transparent over hero → solid on scroll, mobile menu)
- Full-screen hero
- Feature highlights (overlapping card)
- About / story with image collage + stats
- Signature dishes showcase
- Menu with category tabs
- Reserve CTA banner
- Chefs / team
- Photo gallery
- Testimonials carousel (auto-advancing)
- Reservation + contact with booking form
- Journal / blog preview
- Newsletter signup
- Multi-column footer

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/            layout, global styles, page composition
components/
  ui/           shared primitives (Container, Button, SectionHeading, Icon, Reveal)
  layout/       Navbar, Footer
  sections/     Hero, About, Menu, Chefs, Gallery, etc.
lib/            data.ts (all content) + utils
```

Content lives in [`lib/data.ts`](lib/data.ts) — edit the menu, chefs, testimonials, hours, and contact details there.

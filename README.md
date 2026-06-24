# K Bakery — Website

A warm, fully responsive website for **K Bakery**, the largest food chain in Chattogram. Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**. Fresh, appetizing, category-forward design with a yellow / brown / green palette, Fraunces + Nunito + Caveat fonts, and scroll-reveal animations.

> All photography is from [Unsplash](https://unsplash.com) (free to use); code and copy are original.

## Sections

- Fixed navbar (transparent over hero → warm-brown on scroll, mobile menu)
- Full-screen hero
- Feature highlights (baked fresh daily, premium ingredients, 30+ outlets, made with love)
- About / our story with image collage + stats
- Explore Our Range — six product categories
- Our Products — tabbed by category (Cake & Pastry, Cookies & Muffin, Sweets, Fast Food, Frozen, Dessert) with BDT pricing
- Custom-cakes CTA banner
- Meet Our Bakers
- Gallery
- Customer testimonials carousel
- Visit Us & Place an Order (outlet info + order form)
- News & recipes (blog)
- Newsletter signup
- Multi-column footer

## Getting started

```bash
npm install   # or: pnpm install
npm run dev   # http://localhost:3000
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
  sections/     Hero, About, Featured, Menu, Chefs (bakers), Gallery, etc.
lib/            data.ts (all content) + utils
```

All content — products, categories, bakers, outlets, hours, testimonials — lives in [`lib/data.ts`](lib/data.ts).

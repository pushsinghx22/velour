# VELOUR — Luxury Fashion Store

A full-featured React e-commerce website with 5 pages, 24 products, cart, wishlist, and filters.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start
```

Then open **http://localhost:3000** in your browser. ✅

---

## Project Structure

```
src/
├── data/
│   └── constants.js        ← All products + design tokens
├── components/
│   ├── Navbar.jsx           ← Top navigation bar
│   ├── CartDrawer.jsx       ← Slide-in cart panel
│   ├── ProductCard.jsx      ← Reusable product card
│   ├── Badge.jsx            ← Cart/wishlist count badge
│   └── Footer.jsx           ← Site footer
├── pages/
│   ├── HomePage.jsx         ← Hero, categories, new arrivals
│   ├── ShopPage.jsx         ← Product grid with filters
│   ├── ProductPage.jsx      ← Product detail page
│   ├── CartPage.jsx         ← Shopping bag page
│   └── WishlistPage.jsx     ← Saved items page
├── App.jsx                  ← Root: routing + global state
└── index.js                 ← React entry point
```

## Features

- 5 full pages: Home, Shop, Product Detail, Cart, Wishlist
- 24 products across Women, Men, Shoes, Accessories
- Cart with quantity controls and order summary
- Wishlist with save/remove toggle
- Slide-in cart drawer
- Filter by category, size, price range
- Sort by newest, price, rating
- Sale & New badges on products
- Responsive product grid
- Animated hover effects
- Newsletter signup section

## Deploy to Vercel (Free)

1. Push this folder to GitHub
2. Go to vercel.com → Import your repo
3. Click Deploy → get a live URL instantly

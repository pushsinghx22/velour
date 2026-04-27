import React, { useState } from 'react';

// Components
import Navbar     from './components/Navbar';
import CartDrawer from './components/CartDrawer';

// Pages
import HomePage    from './pages/HomePage';
import ShopPage    from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage    from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

export default function App() {
  // ── Routing ──
  const [page,    setPage]    = useState('home');
  const [product, setProduct] = useState(null);
  const [shopCat, setShopCat] = useState('All');

  // ── Cart & Wishlist ──
  const [cart,     setCart]     = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ── Navigation helper ──
  const go = (pg, prod = null) => {
    if (prod) setProduct(prod);
    setPage(pg);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Add to cart ──
  const addToCart = (p, size, color) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.p.id === p.id && i.size === size && i.color === color);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { p, size, color, qty: 1 }];
    });
    setCartOpen(true);
  };

  // ── Toggle wishlist ──
  const toggleWish = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  // ── Derived counts ──
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const wishCount = wishlist.length;

  // ── Shared props ──
  const shared = { go, cart, setCart, wishlist, toggleWish, addToCart, setShopCat };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      {/* Always-visible nav */}
      <Navbar
        page={page}
        go={go}
        cartCount={cartCount}
        wishCount={wishCount}
        onCartOpen={() => setCartOpen(true)}
        shopCat={shopCat}
        setShopCat={setShopCat}
      />

      {/* Slide-in cart drawer */}
      <CartDrawer
        cart={cart}
        setCart={setCart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        go={go}
      />

      {/* Pages */}
      {page === 'home'     && <HomePage     {...shared} />}
      {page === 'shop'     && <ShopPage     {...shared} shopCat={shopCat} />}
      {page === 'product'  && product && <ProductPage {...shared} product={product} />}
      {page === 'cart'     && <CartPage     {...shared} />}
      {page === 'wishlist' && <WishlistPage {...shared} />}
    </div>
  );
}

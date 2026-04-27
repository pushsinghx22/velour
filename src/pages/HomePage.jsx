import React, { useState } from 'react';
import { C, sans, serif, FALLBACKS, PRODUCTS } from '../data/constants';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// ─── Category Card ────────────────────────────────────────────────────────────
function CatCard({ cat, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: 'pointer', position: 'relative',
        height: 380, overflow: 'hidden',
        background: FALLBACKS[cat.cat],
      }}
    >
      <img
        src={cat.img} alt={cat.label}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform .5s ease',
          transform: hover ? 'scale(1.07)' : 'scale(1)',
        }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 60%)',
      }} />
      <div style={{ position: 'absolute', bottom: 24, left: 20 }}>
        <p style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: C.white, marginBottom: 6 }}>
          {cat.label}
        </p>
        <p style={{ fontSize: 10, letterSpacing: 2, color: 'rgba(255,255,255,.75)', fontFamily: sans }}>
          SHOP NOW →
        </p>
      </div>
    </div>
  );
}

// ─── Marquee Strip ────────────────────────────────────────────────────────────
function MarqueeStrip() {
  const items = [
    'FREE SHIPPING OVER ₹5,000', 'NEW ARRIVALS WEEKLY',
    'SUSTAINABLE LUXURY', 'EASY 30-DAY RETURNS', 'AUTHENTIC BRANDS',
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{ background: C.black, padding: '14px 0', overflow: 'hidden' }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{
        display: 'flex', gap: 60,
        animation: 'marquee 20s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            fontSize: 10, letterSpacing: 3,
            color: 'rgba(255,255,255,.7)', fontFamily: sans, textTransform: 'uppercase',
          }}>
            {t}
            <span style={{ color: C.gold, marginLeft: 30 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ go, setShopCat }) {
  return (
    <div style={{
      height: '92vh', background: C.dark, position: 'relative',
      display: 'flex', alignItems: 'center', overflow: 'hidden',
    }}>
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&h=900&fit=crop&q=80"
        alt="Hero"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .45 }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div style={{ position: 'relative', zIndex: 1, padding: '0 80px', maxWidth: 700 }}>
        <p style={{ fontSize: 10, letterSpacing: 5, color: 'rgba(255,255,255,.6)', fontFamily: sans, marginBottom: 20, textTransform: 'uppercase' }}>
          Spring Collection 2025
        </p>
        <h1 style={{ fontFamily: serif, fontSize: 76, fontWeight: 300, lineHeight: 1.05, color: C.white, marginBottom: 28 }}>
          The Art of<br />
          <em style={{ fontStyle: 'italic', color: C.gold }}>Effortless</em> Style
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,.72)', lineHeight: 1.9, marginBottom: 44, fontFamily: sans, maxWidth: 420 }}>
          Curated pieces for the discerning wardrobe. Timeless quality, contemporary vision.
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <button
            onClick={() => { setShopCat('Women'); go('shop'); }}
            style={{ padding: '14px 44px', background: C.gold, color: C.white, border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontFamily: sans }}
          >
            Shop Women
          </button>
          <button
            onClick={() => { setShopCat('Men'); go('shop'); }}
            style={{ padding: '14px 44px', background: 'transparent', color: C.white, border: '1px solid rgba(255,255,255,.5)', cursor: 'pointer', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontFamily: sans }}
          >
            Shop Men
          </button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 9, letterSpacing: 3, color: 'rgba(255,255,255,.5)', fontFamily: sans }}>SCROLL</span>
        <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,.3)' }} />
      </div>
    </div>
  );
}

// ─── Categories Section ───────────────────────────────────────────────────────
function CategoriesSection({ go, setShopCat }) {
  const cats = [
    { label: 'Women', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=750&fit=crop&q=80', cat: 'Women' },
    { label: 'Men',   img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&q=80', cat: 'Men' },
    { label: 'Shoes', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop&q=80', cat: 'Shoes' },
    { label: 'Accessories', img: 'https://images.unsplash.com/photo-1548036161-18ae4bed8d9e?w=600&h=750&fit=crop&q=80', cat: 'Accessories' },
  ];
  return (
    <div style={{ padding: '80px 48px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 10, letterSpacing: 4, color: C.gold, fontFamily: sans, textTransform: 'uppercase', marginBottom: 10 }}>
          Shop by Category
        </p>
        <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 300, color: C.text }}>Find Your Style</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {cats.map((cat) => (
          <CatCard key={cat.cat} cat={cat} onClick={() => { setShopCat(cat.cat); go('shop'); }} />
        ))}
      </div>
    </div>
  );
}

// ─── New Arrivals Section ─────────────────────────────────────────────────────
function NewArrivalsSection({ go, wishlist, toggleWish, addToCart, setShopCat }) {
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 8);
  return (
    <div style={{ padding: '80px 48px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: 4, color: C.gold, fontFamily: sans, textTransform: 'uppercase', marginBottom: 10 }}>
            Just In
          </p>
          <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 300, color: C.text }}>New Arrivals</h2>
        </div>
        <button
          onClick={() => { setShopCat('All'); go('shop'); }}
          style={{ fontSize: 10, letterSpacing: 2, color: C.black, background: 'none', border: `1px solid ${C.border}`, cursor: 'pointer', padding: '10px 24px', fontFamily: sans }}
        >
          VIEW ALL →
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {newArrivals.map((p) => (
          <ProductCard key={p.id} p={p} go={go} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

// ─── Editorial Banner ─────────────────────────────────────────────────────────
function EditorialBanner({ go, setShopCat }) {
  return (
    <div style={{ margin: '80px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 480 }}>
      <div style={{ background: C.black, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 56px' }}>
        <p style={{ fontSize: 10, letterSpacing: 4, color: C.gold, fontFamily: sans, textTransform: 'uppercase', marginBottom: 20 }}>
          Signature Collection
        </p>
        <h2 style={{ fontFamily: serif, fontSize: 48, fontWeight: 300, color: C.white, lineHeight: 1.15, marginBottom: 24 }}>
          Luxury<br /><em>Redefined</em>
        </h2>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.9, fontFamily: sans, marginBottom: 36, maxWidth: 320 }}>
          Our signature pieces are crafted from the finest materials by master artisans. Each item tells a story of exceptional craftsmanship.
        </p>
        <button
          onClick={() => { setShopCat('All'); go('shop'); }}
          style={{ alignSelf: 'flex-start', padding: '13px 36px', background: C.gold, color: C.white, border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 3, fontFamily: sans }}
        >
          EXPLORE
        </button>
      </div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680defa?w=700&h=500&fit=crop&q=80"
          alt="Editorial"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.parentElement.style.background = FALLBACKS.Women; e.target.style.display = 'none'; }}
        />
      </div>
    </div>
  );
}

// ─── Brands Strip ─────────────────────────────────────────────────────────────
function BrandsStrip() {
  const brands = ['Maison Élite', 'Atelier Nord', 'Soft House', 'Brummel Co.', 'Sole Atelier', 'Veloce', 'Optique Maison'];
  return (
    <div style={{ padding: '48px 48px 80px', borderTop: `1px solid ${C.border}` }}>
      <p style={{ textAlign: 'center', fontSize: 9, letterSpacing: 4, color: C.faint, fontFamily: sans, textTransform: 'uppercase', marginBottom: 40 }}>
        Our Brands
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
        {brands.map((b) => (
          <span key={b} style={{ fontFamily: serif, fontSize: 16, color: C.muted, letterSpacing: 1 }}>{b}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Newsletter Section ───────────────────────────────────────────────────────
function NewsletterSection() {
  return (
    <div style={{ background: C.goldBg, padding: '64px 48px', textAlign: 'center' }}>
      <p style={{ fontSize: 10, letterSpacing: 4, color: C.gold, fontFamily: sans, textTransform: 'uppercase', marginBottom: 14 }}>
        Stay in the Loop
      </p>
      <h2 style={{ fontFamily: serif, fontSize: 38, fontWeight: 300, color: C.text, marginBottom: 12 }}>
        Join the Inner Circle
      </h2>
      <p style={{ fontFamily: sans, fontSize: 13, color: C.muted, marginBottom: 32 }}>
        Be first to know about new arrivals, exclusive offers, and style inspiration.
      </p>
      <div style={{ display: 'flex', maxWidth: 440, margin: '0 auto' }}>
        <input
          placeholder="Enter your email address"
          style={{
            flex: 1, padding: '14px 20px',
            border: `1px solid ${C.border}`, borderRight: 'none',
            outline: 'none', fontSize: 13, fontFamily: sans, background: C.white,
          }}
        />
        <button style={{
          padding: '14px 28px', background: C.black, color: C.white,
          border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 2, fontFamily: sans,
        }}>
          JOIN
        </button>
      </div>
    </div>
  );
}

// ─── Home Page (root) ─────────────────────────────────────────────────────────
export default function HomePage({ go, wishlist, toggleWish, addToCart, setShopCat }) {
  return (
    <div>
      <HeroSection go={go} setShopCat={setShopCat} />
      <MarqueeStrip />
      <CategoriesSection go={go} setShopCat={setShopCat} />
      <NewArrivalsSection go={go} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} setShopCat={setShopCat} />
      <EditorialBanner go={go} setShopCat={setShopCat} />
      <BrandsStrip />
      <NewsletterSection />
      <Footer go={go} setShopCat={setShopCat} />
    </div>
  );
}

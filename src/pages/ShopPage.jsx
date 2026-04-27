import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { C, sans, serif, fmt, PRODUCTS } from '../data/constants';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function ShopPage({ shopCat, setShopCat, go, wishlist, toggleWish, addToCart }) {
  const [sort, setSort]         = useState('newest');
  const [size, setSize]         = useState('All');
  const [priceMax, setPriceMax] = useState(10000);
  const [filterOpen, setFilterOpen] = useState(false);

  const cats = ['All', 'Women', 'Men', 'Shoes', 'Accessories'];

  // ── Filter & Sort ──
  let products = PRODUCTS
    .filter((p) => shopCat === 'All' || p.cat === shopCat)
    .filter((p) => p.price <= priceMax)
    .filter((p) => size === 'All' || p.sizes.includes(size));

  if (sort === 'price-asc')  products = [...products].sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') products = [...products].sort((a, b) => b.price - a.price);
  else if (sort === 'top-rated') products = [...products].sort((a, b) => b.rating - a.rating);
  else products = [...products].sort((a, b) => Number(b.isNew) - Number(a.isNew));

  return (
    <div style={{ marginTop: 64, minHeight: '100vh', background: C.bg }}>

      {/* ── Shop Header ── */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '28px 48px' }}>
        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setShopCat(c)}
              style={{
                padding: '7px 20px', fontSize: 11, letterSpacing: 1.5,
                fontFamily: sans, cursor: 'pointer',
                background: shopCat === c ? C.black : 'transparent',
                color: shopCat === c ? C.white : C.muted,
                border: `1px solid ${shopCat === c ? C.black : C.border}`,
                transition: 'all .2s',
              }}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Title + Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: C.text }}>
            {shopCat === 'All' ? 'All Products' : shopCat}{' '}
            <span style={{ fontSize: 14, color: C.muted, fontFamily: sans, fontWeight: 400 }}>
              ({products.length} items)
            </span>
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', border: `1px solid ${C.border}`,
                background: 'transparent', cursor: 'pointer',
                fontSize: 11, letterSpacing: 1, fontFamily: sans,
              }}
            >
              <SlidersHorizontal size={13} /> FILTER
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                padding: '8px 14px', border: `1px solid ${C.border}`,
                background: 'transparent', fontSize: 11,
                fontFamily: sans, cursor: 'pointer', outline: 'none',
              }}
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="top-rated">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Body: Sidebar + Grid ── */}
      <div style={{ display: 'flex' }}>

        {/* Filter Sidebar */}
        {filterOpen && (
          <div style={{
            width: 240, padding: '28px 24px',
            background: C.white, borderRight: `1px solid ${C.border}`,
            flexShrink: 0, position: 'sticky', top: 64,
            height: 'calc(100vh - 64px)', overflowY: 'auto',
          }}>
            {/* Price Range */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, letterSpacing: 2, fontFamily: sans, textTransform: 'uppercase', marginBottom: 14, color: C.text }}>
                Max Price
              </p>
              <input
                type="range" min={500} max={10000} step={100}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                style={{ width: '100%' }}
              />
              <p style={{ fontSize: 13, fontFamily: sans, color: C.muted, marginTop: 6 }}>
                Up to {fmt(priceMax)}
              </p>
            </div>

            {/* Size Filter */}
            <div>
              <p style={{ fontSize: 11, letterSpacing: 2, fontFamily: sans, textTransform: 'uppercase', marginBottom: 14, color: C.text }}>
                Size
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['All','XS','S','M','L','XL','36','37','38','39','40','41','42'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    style={{
                      padding: '5px 11px', fontSize: 11, fontFamily: sans,
                      border: `1px solid ${size === s ? C.black : C.border}`,
                      background: size === s ? C.black : 'transparent',
                      color: size === s ? C.white : C.muted,
                      cursor: 'pointer',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => { setPriceMax(10000); setSize('All'); }}
              style={{
                marginTop: 28, width: '100%', padding: '10px',
                background: 'transparent', border: `1px solid ${C.border}`,
                fontSize: 10, letterSpacing: 2, fontFamily: sans,
                cursor: 'pointer', color: C.muted,
              }}
            >
              CLEAR FILTERS
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div style={{ flex: 1, padding: '32px 48px' }}>
          {products.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 80 }}>
              <p style={{ fontFamily: serif, fontSize: 24, color: C.muted }}>No products found</p>
              <button
                onClick={() => { setPriceMax(10000); setSize('All'); }}
                style={{
                  marginTop: 16, padding: '10px 28px',
                  background: C.black, color: C.white, border: 'none',
                  cursor: 'pointer', fontFamily: sans, fontSize: 11, letterSpacing: 2,
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 28 }}>
              {products.map((p) => (
                <ProductCard key={p.id} p={p} go={go} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer go={go} setShopCat={setShopCat} />
    </div>
  );
}

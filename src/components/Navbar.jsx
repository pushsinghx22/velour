import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, X } from 'lucide-react';
import { C, sans, serif } from '../data/constants';
import Badge from './Badge';

export default function Navbar({ page, go, cartCount, wishCount, onCartOpen, shopCat, setShopCat }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState('');

  const navItems = ['Women', 'Men', 'Shoes', 'Accessories'];

  const handleSearch = (e) => {
    if (e.key === 'Enter' && q.trim()) {
      setShopCat('All');
      go('shop');
      setSearchOpen(false);
      setQ('');
    }
  };

  return (
    <>
      {/* ── Main Nav Bar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 150,
        background: C.white, borderBottom: `1px solid ${C.border}`,
        height: 64, display: 'flex', alignItems: 'center', padding: '0 32px', gap: 32,
      }}>
        {/* Logo */}
        <div
          onClick={() => go('home')}
          style={{
            fontFamily: serif, fontSize: 24, fontWeight: 600,
            letterSpacing: 5, cursor: 'pointer', color: C.black, flexShrink: 0,
          }}
        >
          VELOUR
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: 28, flex: 1, justifyContent: 'center' }}>
          {navItems.map((n) => (
            <button
              key={n}
              onClick={() => { setShopCat(n); go('shop'); }}
              style={{
                background: 'none', border: 'none',
                borderBottom: page === 'shop' && shopCat === n
                  ? `1.5px solid ${C.black}` : '1.5px solid transparent',
                cursor: 'pointer',
                fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
                color: page === 'shop' && shopCat === n ? C.black : C.muted,
                padding: '4px 0', fontFamily: sans, fontWeight: 400,
                transition: 'color .2s',
              }}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexShrink: 0 }}>
          <button
            onClick={() => setSearchOpen((s) => !s)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.black, display: 'flex' }}
          >
            <Search size={18} />
          </button>

          <button
            onClick={() => go('wishlist')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.black, display: 'flex', position: 'relative' }}
          >
            <Heart size={18} />
            {wishCount > 0 && <Badge n={wishCount} bg={C.black} />}
          </button>

          <button
            onClick={onCartOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.black, display: 'flex', position: 'relative' }}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && <Badge n={cartCount} bg={C.gold} />}
          </button>
        </div>
      </nav>

      {/* ── Search Bar ── */}
      {searchOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 140,
          background: C.white, borderBottom: `1px solid ${C.border}`,
          padding: '16px 32px', display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <Search size={16} color={C.muted} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search for products, brands..."
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 15, fontFamily: sans, background: 'transparent', color: C.text,
            }}
          />
          <button
            onClick={() => { setSearchOpen(false); setQ(''); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={16} color={C.muted} />
          </button>
        </div>
      )}
    </>
  );
}

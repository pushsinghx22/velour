import React from 'react';
import { Heart } from 'lucide-react';
import { C, sans, serif, PRODUCTS } from '../data/constants';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function WishlistPage({ wishlist, toggleWish, go, addToCart, setShopCat }) {
  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div style={{ marginTop: 64, minHeight: '100vh', background: C.bg, padding: '48px' }}>
      <h1 style={{ fontFamily: serif, fontSize: 42, fontWeight: 300, color: C.text, marginBottom: 8 }}>
        My Wishlist
      </h1>
      <p style={{ fontFamily: sans, fontSize: 13, color: C.muted, marginBottom: 40 }}>
        {items.length} {items.length === 1 ? 'item' : 'items'} saved
      </p>

      {/* Empty State */}
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', paddingTop: 80 }}>
          <Heart size={48} color={C.faint} style={{ margin: '0 auto 20px', display: 'block' }} />
          <p style={{ fontFamily: serif, fontSize: 24, color: C.muted, marginBottom: 24 }}>
            Your wishlist is empty
          </p>
          <button
            onClick={() => { setShopCat('All'); go('shop'); }}
            style={{
              padding: '13px 40px', background: C.black, color: C.white,
              border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: 3, fontFamily: sans,
            }}
          >
            START BROWSING
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 28 }}>
          {items.map((p) => (
            <ProductCard
              key={p.id} p={p} go={go}
              wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart}
            />
          ))}
        </div>
      )}

      <Footer go={go} setShopCat={setShopCat} />
    </div>
  );
}

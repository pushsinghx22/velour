import React, { useState } from 'react';
import { Heart, Star, Check } from 'lucide-react';
import { C, sans, serif, fmt, FALLBACKS, PRODUCTS } from '../data/constants';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function ProductPage({
  product,
  go,
  addToCart,
  wishlist,
  toggleWish,
  setShopCat
}) {
  const [selSize, setSelSize] = useState(product.sizes[0]);
  const [selColor, setSelColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  const wished = wishlist.includes(product.id);

  const related = PRODUCTS
    .filter((p) => p.cat === product.cat && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    addToCart(product, selSize, selColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ marginTop: 64, background: C.bg }}>
      <h1 style={{ fontFamily: serif }}>{product.name}</h1>

      <p>{fmt(product.price)}</p>

      <div style={{ display: 'flex', gap: 4 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            fill={star <= Math.round(product.rating) ? C.gold : 'none'}
            color={star <= Math.round(product.rating) ? C.gold : C.faint}
          />
        ))}
      </div>

      <button onClick={handleAdd}>
        {added ? (
          <>
            <Check size={14} /> ADDED TO BAG
          </>
        ) : (
          'ADD TO BAG'
        )}
      </button>

      <button onClick={() => toggleWish(product.id)}>
        <Heart
          size={16}
          fill={wished ? C.black : 'none'}
        />
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {related.map((item) => (
          <ProductCard
            key={item.id}
            p={item}
            go={go}
            wishlist={wishlist}
            toggleWish={toggleWish}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Footer go={go} setShopCat={setShopCat} />
    </div>
  );
}

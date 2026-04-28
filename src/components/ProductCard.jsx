import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { C, sans, fmt, FALLBACKS } from '../data/constants';

export default function ProductCard({
  p,
  go,
  wishlist,
  toggleWish,
  addToCart
}) {
  const [hover, setHover] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  const wished = wishlist.includes(p.id);

  return (
    <div
      style={{
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image Box */}
      <div
        onClick={() => go('product', p)}
        style={{
          height: 340,
          overflow: 'hidden',
          position: 'relative',
          background: imgOk ? C.border : FALLBACKS[p.cat]
        }}
      >
        {imgOk && (
          <img
            src={p.img}
            alt={p.name}
            onError={() => setImgOk(false)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform .5s ease',
              transform: hover ? 'scale(1.06)' : 'scale(1)'
            }}
          />
        )}

        {/* New Badge */}
        {p.isNew && (
          <span
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: C.black,
              color: C.white,
              fontSize: 9,
              letterSpacing: 2,
              padding: '4px 10px',
              fontFamily: sans
            }}
          >
            NEW
          </span>
        )}

        {/* Sale Badge */}
        {p.orig && (
          <span
            style={{
              position: 'absolute',
              top: p.isNew ? 38 : 12,
              left: 12,
              background: C.gold,
              color: C.white,
              fontSize: 9,
              letterSpacing: 2,
              padding: '4px 10px',
              fontFamily: sans
            }}
          >
            SALE
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWish(p.id);
          }}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: wished ? C.black : 'rgba(255,255,255,.85)',
            border: 'none',
            cursor: 'pointer',
            width: 34,
            height: 34,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all .2s'
          }}
        >
          <Heart
            size={14}
            fill={wished ? C.white : 'none'}
            color={wished ? C.white : C.black}
          />
        </button>

        {/* Quick Add */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            addToCart(p, p.sizes[0], p.colors[0]);
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: C.black,
            color: C.white,
            textAlign: 'center',
            padding: '12px',
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: sans,
            transition: 'transform .25s',
            transform: hover ? 'translateY(0)' : 'translateY(100%)',
            cursor: 'pointer'
          }}
        >
          QUICK ADD
        </div>
      </div>

      {/* Product Info */}
      <div
        style={{ paddingTop: 12 }}
        onClick={() => go('product', p)}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: 2,
                color: C.muted,
                textTransform: 'uppercase',
                fontFamily: sans,
                marginBottom: 4
              }}
            >
              {p.brand}
            </p>

            <p
              style={{
                fontSize: 14,
                color: C.text,
                fontFamily: sans,
                fontWeight: 400
              }}
            >
              {p.name}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: C.text,
                fontFamily: sans
              }}
            >
              {fmt(p.price)}
            </p>

            {p.orig && (
              <p
                style={{
                  fontSize: 11,
                  color: C.muted,
                  textDecoration: 'line-through',
                  fontFamily: sans
                }}
              >
                {fmt(p.orig)}
              </p>
            )}
          </div>
        </div>

        {/* Ratings */}
        <div
          style={{
            display: 'flex',
            gap: 3,
            marginTop: 6
          }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={10}
              fill={star <= Math.round(p.rating) ? C.gold : 'none'}
              color={star <= Math.round(p.rating) ? C.gold : C.faint}
            />
          ))}

          <span
            style={{
              fontSize: 10,
              color: C.muted,
              fontFamily: sans,
              marginLeft: 4
            }}
          >
            ({p.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}


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
  const [tab, setTab] = useState('details');

  const wished = wishlist.includes(product.id);

  const related = PRODUCTS
    .filter((p) => p.cat === product.cat && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    addToCart(product, selSize, selColor);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div
      style={{
        marginTop: 64,
        minHeight: '100vh',
        background: C.bg
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{
          padding: '16px 48px',
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}
      >
        <button
          onClick={() => go('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 11,
            fontFamily: sans,
            color: C.muted
          }}
        >
          Home
        </button>

        <span style={{ color: C.faint }}>›</span>

        <button
          onClick={() => {
            setShopCat(product.cat);
            go('shop');
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 11,
            fontFamily: sans,
            color: C.muted
          }}
        >
          {product.cat}
        </button>

        <span style={{ color: C.faint }}>›</span>

        <span
          style={{
            fontSize: 11,
            fontFamily: sans,
            color: C.text
          }}
        >
          {product.name}
        </span>
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          padding: '0 48px 64px',
          maxWidth: 1100,
          margin: '0 auto'
        }}
      >
        {/* Images */}
        <div>
          <div
            style={{
              height: 580,
              background: FALLBACKS[product.cat],
              overflow: 'hidden'
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 8,
              marginTop: 8
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  height: 120,
                  background: FALLBACKS[product.cat],
                  overflow: 'hidden',
                  opacity: i === 0 ? 1 : 0.6,
                  cursor: 'pointer'
                }}
              >
                <img
                  src={product.img}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter:
                      i === 1
                        ? 'brightness(.8)'
                        : i === 2
                        ? 'saturate(.5)'
                        : 'none'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div
          style={{
            paddingLeft: 56,
            paddingTop: 8
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 6
            }}
          >
            <p
              style={{
                fontSize: 11,
                letterSpacing: 3,
                color: C.gold,
                fontFamily: sans,
                textTransform: 'uppercase'
              }}
            >
              {product.brand}
            </p>

            {product.isNew && (
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: 2,
                  background: C.black,
                  color: C.white,
                  padding: '3px 10px',
                  fontFamily: sans
                }}
              >
                NEW
              </span>
            )}
          </div>

          <h1
            style={{
              fontFamily: serif,
              fontSize: 40,
              fontWeight: 300,
              color: C.text,
              lineHeight: 1.15,
              marginBottom: 16
            }}
          >
            {product.name}
          </h1>

          {/* Ratings */}
          <div
            style={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              marginBottom: 20
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                fill={
                  star <= Math.round(product.rating)
                    ? C.gold
                    : 'none'
                }
                color={
                  star <= Math.round(product.rating)
                    ? C.gold
                    : C.faint
                }
              />
            ))}

            <span
              style={{
                fontSize: 12,
                color: C.muted,
                fontFamily: sans,
                marginLeft: 6
              }}
            >
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'baseline',
              marginBottom: 28
            }}
          >
            <span
              style={{
                fontFamily: serif,
                fontSize: 28,
                color: C.text
              }}
            >
              {fmt(product.price)}
            </span>

            {product.orig && (
              <>
                <span
                  style={{
                    fontSize: 14,
                    color: C.muted,
                    textDecoration: 'line-through',
                    fontFamily: sans
                  }}
                >
                  {fmt(product.orig)}
                </span>

                <span
                  style={{
                    fontSize: 11,
                    color: C.goldDark,
                    fontFamily: sans,
                    background: C.goldBg,
                    padding: '2px 8px'
                  }}
                >
                  Save {fmt(product.orig - product.price)}
                </span>
              </>
            )}
          </div>

          {/* Color */}
          <div style={{ marginBottom: 24 }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: 1.5,
                color: C.text,
                fontFamily: sans,
                textTransform: 'uppercase',
                marginBottom: 12
              }}
            >
              Color —{' '}
              <span
                style={{
                  fontWeight: 400,
                  letterSpacing: 0,
                  textTransform: 'none',
                  color: C.muted
                }}
              >
                {selColor}
              </span>
            </p>

            <div style={{ display: 'flex', gap: 8 }}>
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelColor(color)}
                  style={{
                    padding: '7px 16px',
                    fontSize: 11,
                    fontFamily: sans,
                    cursor: 'pointer',
                    border: `1.5px solid ${
                      selColor === color
                        ? C.black
                        : C.border
                    }`,
                    background: 'transparent',
                    color:
                      selColor === color
                        ? C.black
                        : C.muted
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div style={{ marginBottom: 32 }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: 1.5,
                color: C.text,
                fontFamily: sans,
                textTransform: 'uppercase',
                marginBottom: 12
              }}
            >
              Size
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8
              }}
            >
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelSize(size)}
                  style={{
                    width: 56,
                    height: 40,
                    fontSize: 12,
                    fontFamily: sans,
                    cursor: 'pointer',
                    border: `1.5px solid ${
                      selSize === size
                        ? C.black
                        : C.border
                    }`,
                    background:
                      selSize === size
                        ? C.black
                        : 'transparent',
                    color:
                      selSize === size
                        ? C.white
                        : C.muted,
                    position: 'relative'
                  }}
                >
                  {size}

                  {selSize === size && (
                    <Check
                      size={8}
                      color={C.white}
                      style={{
                        position: 'absolute',
                        top: 3,
                        right: 3
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 24
            }}
          >
            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                padding: '16px',
                background: added ? C.gold : C.black,
                color: C.white,
                border: 'none',
                cursor: 'pointer',
                fontSize: 11,
                letterSpacing: 3,
                fontFamily: sans
              }}
            >
              {added ? 'ADDED TO BAG' : 'ADD TO BAG'}
            </button>

            <button
              onClick={() => toggleWish(product.id)}
              style={{
                width: 54,
                height: 54,
                border: `1.5px solid ${
                  wished ? C.black : C.border
                }`,
                background:
                  wished ? C.black : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Heart
                size={16}
                fill={wished ? C.white : 'none'}
                color={wished ? C.white : C.black}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Related */}
      <div
        style={{
          padding: '0 48px 80px',
          borderTop: `1px solid ${C.border}`
        }}
      >
        <div
          style={{
            paddingTop: 56,
            marginBottom: 36
          }}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: 4,
              color: C.gold,
              fontFamily: sans,
              textTransform: 'uppercase',
              marginBottom: 10
            }}
          >
            You May Also Like
          </p>

          <h2
            style={{
              fontFamily: serif,
              fontSize: 34,
              fontWeight: 300,
              color: C.text
            }}
          >
            Complete Your Look
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 24
          }}
        >
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
      </div>

      <Footer
        go={go}
        setShopCat={setShopCat}
      />
    </div>
  );
}


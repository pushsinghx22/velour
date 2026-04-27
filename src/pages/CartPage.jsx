import React from 'react';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { C, sans, serif, fmt, FALLBACKS } from '../data/constants';
import Footer from '../components/Footer';

export default function CartPage({ cart, setCart, go, setShopCat }) {
  const subtotal = cart.reduce((s, i) => s + i.p.price * i.qty, 0);
  const shipping  = subtotal >= 5000 ? 0 : 299;
  const total     = subtotal + shipping;

  const updateQty = (idx, delta) => {
    setCart((prev) => {
      const next = [...prev];
      const newQty = next[idx].qty + delta;
      if (newQty < 1) {
        next.splice(idx, 1);
      } else {
        next[idx] = { ...next[idx], qty: newQty };
      }
      return next;
    });
  };

  return (
    <div style={{ marginTop: 64, minHeight: '100vh', background: C.bg, padding: '48px' }}>

      {/* Back button */}
      <button
        onClick={() => go('shop')}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 11, letterSpacing: 1.5, fontFamily: sans, color: C.muted, marginBottom: 32,
        }}
      >
        <ArrowLeft size={14} /> CONTINUE SHOPPING
      </button>

      <h1 style={{ fontFamily: serif, fontSize: 42, fontWeight: 300, color: C.text, marginBottom: 40 }}>
        Shopping Bag{' '}
        {cart.length > 0 && (
          <span style={{ fontSize: 20, color: C.muted }}>
            ({cart.reduce((s, i) => s + i.qty, 0)} items)
          </span>
        )}
      </h1>

      {/* Empty State */}
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', paddingTop: 80 }}>
          <ShoppingBag size={48} color={C.faint} style={{ margin: '0 auto 20px', display: 'block' }} />
          <p style={{ fontFamily: serif, fontSize: 24, color: C.muted, marginBottom: 24 }}>Your bag is empty</p>
          <button
            onClick={() => { setShopCat('All'); go('shop'); }}
            style={{
              padding: '13px 40px', background: C.black, color: C.white,
              border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: 3, fontFamily: sans,
            }}
          >
            START SHOPPING
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40 }}>

          {/* ── Item List ── */}
          <div>
            {cart.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 20, padding: '24px 0', borderBottom: `1px solid ${C.border}` }}>
                {/* Thumbnail */}
                <div
                  style={{ width: 100, height: 130, background: FALLBACKS[item.p.cat], flexShrink: 0, overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => go('product', item.p)}
                >
                  <img
                    src={item.p.img} alt={item.p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontSize: 10, letterSpacing: 2, color: C.gold, fontFamily: sans, textTransform: 'uppercase', marginBottom: 4 }}>
                        {item.p.brand}
                      </p>
                      <p style={{ fontSize: 16, fontFamily: serif, color: C.text, marginBottom: 6 }}>{item.p.name}</p>
                      <p style={{ fontSize: 12, color: C.muted, fontFamily: sans }}>{item.size} · {item.color}</p>
                    </div>
                    <button
                      onClick={() => updateQty(idx, -99)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.faint, alignSelf: 'flex-start' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    {/* Qty */}
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${C.border}` }}>
                      <button
                        onClick={() => updateQty(idx, -1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ width: 32, textAlign: 'center', fontSize: 13, fontFamily: sans }}>{item.qty}</span>
                      <button
                        onClick={() => updateQty(idx, 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p style={{ fontFamily: serif, fontSize: 18 }}>{fmt(item.p.price * item.qty)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Order Summary ── */}
          <div style={{
            background: C.white, padding: '28px 24px',
            border: `1px solid ${C.border}`,
            height: 'fit-content', position: 'sticky', top: 80,
          }}>
            <p style={{ fontFamily: serif, fontSize: 22, marginBottom: 24 }}>Order Summary</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: C.muted, fontFamily: sans }}>Subtotal</span>
              <span style={{ fontSize: 13, fontFamily: sans }}>{fmt(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: C.muted, fontFamily: sans }}>Shipping</span>
              <span style={{ fontSize: 13, fontFamily: sans, color: shipping === 0 ? C.gold : C.text }}>
                {shipping === 0 ? 'FREE' : fmt(shipping)}
              </span>
            </div>
            {shipping > 0 && (
              <p style={{ fontSize: 11, color: C.muted, fontFamily: sans, marginBottom: 10 }}>
                Add {fmt(5000 - subtotal)} more for free shipping
              </p>
            )}

            <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 16, paddingTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <span style={{ fontSize: 15, fontFamily: sans, fontWeight: 500 }}>Total</span>
                <span style={{ fontSize: 18, fontFamily: serif }}>{fmt(total)}</span>
              </div>
              <button style={{
                width: '100%', padding: '15px',
                background: C.black, color: C.white, border: 'none', cursor: 'pointer',
                fontSize: 11, letterSpacing: 3, fontFamily: sans, marginBottom: 12,
              }}>
                CHECKOUT
              </button>
              <p style={{ textAlign: 'center', fontSize: 11, color: C.muted, fontFamily: sans }}>
                Secure payment · SSL encrypted
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer go={go} setShopCat={setShopCat} />
    </div>
  );
}

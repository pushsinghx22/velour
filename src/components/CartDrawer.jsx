import React from 'react';
import { X, ShoppingBag, Minus, Plus } from 'lucide-react';
import { C, sans, serif, fmt, FALLBACKS } from '../data/constants';

export default function CartDrawer({ cart, setCart, open, onClose, go }) {
  const total = cart.reduce((s, i) => s + i.p.price * i.qty, 0);

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
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.4)', zIndex: 200 }}
        />
      )}

      {/* Drawer Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 380,
        background: C.white, zIndex: 201,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 24px', borderBottom: `1px solid ${C.border}`,
        }}>
          <h2 style={{ fontFamily: serif, fontSize: 22, fontWeight: 400 }}>Your Bag</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.black }}>
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 80 }}>
              <ShoppingBag size={40} color={C.faint} style={{ margin: '0 auto 16px', display: 'block' }} />
              <p style={{ fontFamily: serif, fontSize: 18, color: C.muted, marginBottom: 8 }}>Your bag is empty</p>
              <button
                onClick={() => { onClose(); go('shop'); }}
                style={{
                  fontSize: 10, letterSpacing: 2, padding: '10px 24px',
                  background: C.black, color: C.white, border: 'none', cursor: 'pointer',
                  fontFamily: sans, marginTop: 8,
                }}
              >
                SHOP NOW
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex', gap: 14,
                paddingBottom: 20, marginBottom: 20,
                borderBottom: `1px solid ${C.border}`,
              }}>
                {/* Thumbnail */}
                <div style={{
                  width: 72, height: 90, background: FALLBACKS[item.p.cat],
                  flexShrink: 0, overflow: 'hidden',
                }}>
                  <img
                    src={item.p.img} alt={item.p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 9, letterSpacing: 2, color: C.muted, fontFamily: sans, textTransform: 'uppercase' }}>
                    {item.p.brand}
                  </p>
                  <p style={{ fontSize: 13, fontFamily: sans, margin: '3px 0', color: C.text }}>
                    {item.p.name}
                  </p>
                  <p style={{ fontSize: 11, color: C.muted, fontFamily: sans }}>
                    {item.size} · {item.color}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    {/* Qty controls */}
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${C.border}` }}>
                      <button
                        onClick={() => updateQty(idx, -1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Minus size={11} />
                      </button>
                      <span style={{ fontSize: 12, fontFamily: sans, width: 24, textAlign: 'center' }}>{item.qty}</span>
                      <button
                        onClick={() => updateQty(idx, 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Plus size={11} />
                      </button>
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 500, fontFamily: sans }}>{fmt(item.p.price * item.qty)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '16px 24px 24px', borderTop: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: C.muted, fontFamily: sans, letterSpacing: 1 }}>SUBTOTAL</span>
              <span style={{ fontSize: 15, fontWeight: 500, fontFamily: sans }}>{fmt(total)}</span>
            </div>
            <p style={{ fontSize: 11, color: C.muted, fontFamily: sans, marginBottom: 14 }}>
              Shipping & taxes calculated at checkout
            </p>
            <button
              onClick={() => { onClose(); go('cart'); }}
              style={{
                width: '100%', padding: '15px', background: C.black, color: C.white,
                border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: 3,
                fontFamily: sans, marginBottom: 10,
              }}
            >
              VIEW BAG & CHECKOUT
            </button>
            <button
              onClick={() => { onClose(); go('shop'); }}
              style={{
                width: '100%', padding: '13px', background: 'transparent',
                color: C.black, border: `1px solid ${C.border}`,
                cursor: 'pointer', fontSize: 10, letterSpacing: 2, fontFamily: sans,
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}

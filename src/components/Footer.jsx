import React from 'react';
import { C, sans, serif } from '../data/constants';

export default function Footer({ go, setShopCat }) {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'Women',       cat: 'Women' },
        { label: 'Men',         cat: 'Men' },
        { label: 'Shoes',       cat: 'Shoes' },
        { label: 'Accessories', cat: 'Accessories' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Size Guide',   cat: null },
        { label: 'Shipping Info', cat: null },
        { label: 'Returns',      cat: null },
        { label: 'Contact Us',   cat: null },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us',       cat: null },
        { label: 'Careers',        cat: null },
        { label: 'Press',          cat: null },
        { label: 'Sustainability', cat: null },
      ],
    },
  ];

  return (
    <footer style={{
      background: C.black,
      color: 'rgba(255,255,255,.6)',
      padding: '56px 48px 32px',
      marginTop: 64,
    }}>
      {/* Top Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 40,
        marginBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <p style={{ fontFamily: serif, fontSize: 26, fontWeight: 600, letterSpacing: 4, color: C.white, marginBottom: 16 }}>
            VELOUR
          </p>
          <p style={{ fontSize: 12, lineHeight: 1.9, fontFamily: sans, maxWidth: 260 }}>
            Curating timeless luxury fashion for the modern wardrobe. Quality you can feel, style you can trust.
          </p>
        </div>

        {/* Link Columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <p style={{ fontSize: 10, letterSpacing: 3, color: C.white, fontFamily: sans, textTransform: 'uppercase', marginBottom: 16 }}>
              {col.title}
            </p>
            {col.links.map(({ label, cat }) => (
              <p
                key={label}
                onClick={cat ? () => { setShopCat(cat); go('shop'); } : undefined}
                style={{
                  fontSize: 12, fontFamily: sans, marginBottom: 10,
                  cursor: cat ? 'pointer' : 'default',
                  transition: 'color .15s',
                }}
              >
                {label}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.1)',
        paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{ fontSize: 11, fontFamily: sans }}>© 2025 Velour. All rights reserved.</p>
        <p style={{ fontSize: 11, fontFamily: sans }}>Privacy · Terms · Cookies</p>
      </div>
    </footer>
  );
}

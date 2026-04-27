import React from 'react';
import { C, sans } from '../data/constants';

export default function Badge({ n, bg }) {
  return (
    <span style={{
      position: 'absolute', top: -7, right: -7,
      width: 17, height: 17, borderRadius: '50%',
      background: bg, color: C.white,
      fontSize: 9, fontFamily: sans,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {n}
    </span>
  );
}

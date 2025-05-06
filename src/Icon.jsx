import React from 'react';

export default function Icon({ label, src }) {
  return (
    <div className="icon">
      <img src={src} alt={label} />
      <p>{label}</p>
    </div>
  );
}

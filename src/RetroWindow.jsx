import React from 'react';

export default function RetroWindow({ title, children }) {
  return (
    <div className="window">
      <div className="title-bar">
        <span>{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}

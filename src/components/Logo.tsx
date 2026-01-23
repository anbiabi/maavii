"use client";
"use client";
'use client';

import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
  };

  return (
    <div className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center overflow-hidden`}>
      <img
        src="/images/logo.png"
        alt="Maavii Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;

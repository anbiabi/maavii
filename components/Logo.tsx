
import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs border-2',
    md: 'w-16 h-16 text-sm border-4',
    lg: 'w-32 h-32 text-xl border-[6px]',
  };

  return (
    <div className={`relative ${sizeClasses[size]} logo-circle rounded-full flex flex-col items-center justify-center text-white font-bold tracking-tight shadow-xl`}>
      {/* Skewers Placeholder Icon */}
      <div className="absolute top-1/4 flex gap-1 rotate-45">
        <div className="w-1 h-8 bg-amber-900/30 rounded-full" />
        <div className="w-1 h-8 bg-amber-900/30 rounded-full -translate-x-2" />
      </div>
      <div className="z-10 text-center leading-none">
        <span className="block font-extrabold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Maavii</span>
        <span className="block text-[0.6em] opacity-90">Cuisine</span>
      </div>
    </div>
  );
};

export default Logo;

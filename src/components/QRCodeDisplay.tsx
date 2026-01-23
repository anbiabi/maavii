"use client";

import React from 'react';

interface QRCodeDisplayProps {
  title: string;
  subtitle?: string;
  qrCodeUrl: string;
  link: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ 
  title, 
  subtitle, 
  qrCodeUrl, 
  link,
  icon,
  bgColor = 'bg-cream'
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 border-4 border-charcoal/5 shadow-xl space-y-4`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <div>
          <h4 className="text-xl font-black text-charcoal">{title}</h4>
          {subtitle && <p className="text-sm text-charcoal/60">{subtitle}</p>}
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl border-2 border-charcoal/10 flex flex-col items-center">
        <img 
          src={qrCodeUrl} 
          alt={`${title} QR Code`}
          className="w-48 h-48 object-contain"
        />
        <p className="text-xs text-charcoal/60 mt-2 text-center font-bold">Scan to connect</p>
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 bg-charcoal text-cream rounded-xl font-bold hover:bg-maaviiOrange transition-colors"
      >
        Open Link
      </a>
    </div>
  );
};

export default QRCodeDisplay;

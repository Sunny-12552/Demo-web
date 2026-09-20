import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackType?: 'bedroom' | 'single' | 'triple' | 'dining' | 'lounge' | 'bathroom';
}

// Crisp stylized SVG fallback backgrounds for various PG spaces
const getSvgFallback = (type: string, title: string) => {
  const encoded = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2A2F45" />
          <stop offset="100%" stop-color="#172033" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#5B3DF5" />
          <stop offset="100%" stop-color="#7B63F7" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.05" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      <rect width="800" height="600" fill="url(#grid)" />
      
      <!-- Room elements drawing -->
      <!-- Wall art -->
      <rect x="280" y="100" width="240" height="120" rx="8" fill="#3D4566" opacity="0.6" />
      <rect x="290" y="110" width="220" height="100" rx="4" fill="#5B3DF5" opacity="0.3" />
      <circle cx="400" cy="160" r="30" fill="#7B63F7" opacity="0.5" />

      <!-- Back Wall Molding -->
      <line x1="0" y1="360" x2="800" y2="360" stroke="#4A5278" stroke-width="3" opacity="0.5" />
      
      <!-- Bed Headboards & Beds -->
      <rect x="120" y="240" width="240" height="160" rx="12" fill="#3D4566" />
      <rect x="130" y="320" width="220" height="180" rx="10" fill="url(#accent)" />
      <!-- Pillows -->
      <rect x="150" y="300" width="80" height="40" rx="8" fill="#FFFFFF" opacity="0.9" />
      <rect x="250" y="300" width="80" height="40" rx="8" fill="#FFFFFF" opacity="0.9" />
      
      <!-- Bed 2 for PG sharing -->
      <rect x="440" y="240" width="240" height="160" rx="12" fill="#3D4566" />
      <rect x="450" y="320" width="220" height="180" rx="10" fill="url(#accent)" />
      <!-- Pillows -->
      <rect x="470" y="300" width="80" height="40" rx="8" fill="#FFFFFF" opacity="0.9" />
      <rect x="570" y="300" width="80" height="40" rx="8" fill="#FFFFFF" opacity="0.9" />

      <!-- Study table & lamp -->
      <rect x="360" y="340" width="80" height="90" rx="4" fill="#242B42" />
      <circle cx="400" cy="330" r="12" fill="#16B979" opacity="0.8" />
      
      <!-- Floor -->
      <rect x="0" y="460" width="800" height="140" fill="#1E2337" />

      <!-- Badge Overlay Text -->
      <rect x="250" y="510" width="300" height="44" rx="22" fill="#000000" opacity="0.7" />
      <text x="400" y="538" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">
        UrbanNest • ${title || 'Modern PG Accommodation'}
      </text>
    </svg>
  `.trim());
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
};

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackType = 'bedroom',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(getSvgFallback(fallbackType, alt));
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
      {...props}
    />
  );
};

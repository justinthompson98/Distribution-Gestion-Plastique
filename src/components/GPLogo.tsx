import React, { useState, useEffect } from 'react';

interface GPLogoProps {
  className?: string;
  size?: number; // width and height in px
  accentColor?: string; // e.g. 'emerald' or 'zinc' or 'text-zinc-900'
  bgCircleColor?: string; // custom background circle fill, 'white', 'transparent' etc.
}

export function GPLogo({ className = '', size = 120, accentColor = 'currentColor', bgCircleColor = 'white' }: GPLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="Distribution GP Logo"
    >
      <defs>
        {/* Top arc clockwise for "DISTRIBUTION" */}
        <path
          id="top-arc-path"
          d="M 30,100 A 70,70 0 0,1 170,100"
          fill="none"
        />
        {/* Bottom arc counter-clockwise for "DEPUIS 1996" (so letters point inward towards center) */}
        <path
          id="bottom-arc-path"
          d="M 30,100 A 70,70 0 0,0 170,100"
          fill="none"
        />
      </defs>

      {/* Background container circle to match uploaded image logo styled look */}
      {bgCircleColor !== 'none' && bgCircleColor !== 'transparent' && (
        <circle cx="100" cy="100" r="96" fill={bgCircleColor} className="stroke-zinc-100" strokeWidth="1" />
      )}

      {/* Double Circle Borders */}
      <circle
        cx="100"
        cy="100"
        r="91"
        stroke={accentColor === 'currentColor' ? 'currentColor' : accentColor}
        strokeWidth="3"
        fill="none"
      />
      
      {/* Inner thin circle (drawn partially or fully, in original image it has soft margin gaps or full circular thin stroke) */}
      <circle
        cx="100"
        cy="100"
        r="75"
        stroke={accentColor === 'currentColor' ? 'currentColor' : accentColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Top Text "DISTRIBUTION" */}
      <text
        fill={accentColor === 'currentColor' ? 'currentColor' : accentColor}
        fontSize="17"
        fontWeight="800"
        letterSpacing="8"
        textAnchor="middle"
        style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
      >
        {/* startOffset=50% centers the text on the path when text-anchor is middle */}
        <textPath href="#top-arc-path" startOffset="50%">
          DISTRIBUTION
        </textPath>
      </text>

      {/* Bottom Text "DEPUIS 1996" */}
      <text
        fill={accentColor === 'currentColor' ? 'currentColor' : accentColor}
        fontSize="15.5"
        fontWeight="700"
        letterSpacing="6.5"
        textAnchor="middle"
        style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
      >
        <textPath href="#bottom-arc-path" startOffset="50%">
          DEPUIS 1996
        </textPath>
      </text>

      {/* Central Huge Monogram "GP" */}
      <text
        x="100"
        y="122"
        fill={accentColor === 'currentColor' ? 'currentColor' : accentColor}
        fontSize="76"
        fontWeight="300"
        letterSpacing="-1"
        textAnchor="middle"
        style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}
      >
        GP
      </text>
    </svg>
  );
}

interface SmartLogoProps {
  className?: string;
  size?: number;
  accentColor?: string;
}

export function SmartLogo({ className = '', size = 80, accentColor = 'currentColor' }: SmartLogoProps) {
  const [logoError, setLogoError] = useState(false);

  // Check if logo is available or reset error if image is added
  useEffect(() => {
    setLogoError(false);
  }, []);

  if (logoError) {
    return <GPLogo size={size} className={className} accentColor={accentColor} />;
  }

  return (
    <img
      src="/logo.png"
      alt="Distribution GP"
      width={size * 1.5}
      height={size * 1.5}
      className={`select-none object-contain ${className}`}
      style={{
        maxWidth: `${size * 1.5}px`,
        maxHeight: `${size * 1.5}px`,
        width: 'auto',
        height: 'auto',
      }}
      referrerPolicy="no-referrer"
      onError={() => setLogoError(true)}
    />
  );
}



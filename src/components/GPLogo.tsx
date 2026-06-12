import React, { useState, useEffect } from 'react';

interface GPLogoProps {
  className?: string;
  size?: number; // width and height in px
  accentColor?: string; // e.g. 'emerald' or 'zinc' or 'text-zinc-900'
  bgCircleColor?: string; // custom background circle fill, 'white', 'transparent' etc.
}

export function GPLogo({ className = '', size = 120, accentColor = 'currentColor', bgCircleColor = 'white' }: GPLogoProps) {
  const finalColor = accentColor === 'currentColor' ? 'currentColor' : accentColor;
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
        {/* Top Text Arc at Radius 79.5 (perfectly centered between 68 and 91) */}
        <path
          id="top-arc-path"
          d="M 20.5,100 A 79.5,79.5 0 0,1 179.5,100"
          fill="none"
        />
        {/* Bottom Text Arc at Radius 79.5 (counter-clockwise so letters stand upright pointing inwards) */}
        <path
          id="bottom-arc-path"
          d="M 20.5,100 A 79.5,79.5 0 0,0 179.5,100"
          fill="none"
        />
      </defs>

      {/* Background container circle to match uploaded image logo styled look */}
      {bgCircleColor !== 'none' && bgCircleColor !== 'transparent' && (
        <circle cx="100" cy="100" r="96" fill={bgCircleColor} className="stroke-zinc-100/10" strokeWidth="1" />
      )}

      {/* Outer Solid Thick Circle */}
      <circle
        cx="100"
        cy="100"
        r="91"
        stroke={finalColor}
        strokeWidth="3.2"
        fill="none"
      />
      
      {/* Inner Broken Circle (Top Arc): Radius 68, from angle 215° to 325° (clockwise) */}
      <path
        d="M 44.3,61.0 A 68,68 0 0,1 155.7,61.0"
        stroke={finalColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Inner Broken Circle (Bottom Arc): Radius 68, from angle 145° to 35° (counter-clockwise) */}
      <path
        d="M 44.3,139.0 A 68,68 0 0,0 155.7,139.0"
        stroke={finalColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Top Text "DISTRIBUTION" */}
      <text
        fill={finalColor}
        fontSize="15"
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
        fill={finalColor}
        fontSize="13.5"
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
        y="124"
        fill={finalColor}
        fontSize="76"
        fontWeight="300"
        letterSpacing="-1"
        textAnchor="middle"
        style={{ fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif' }}
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



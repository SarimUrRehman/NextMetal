import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Recreated high-fidelity SVG emblem matching the NEX METALWORKS brand identity:
 * - Hexagonal metal badge with silver bevelled multi-tone border
 * - Industrial bolts and perimeter rivets
 * - Dark graphite core
 * - Circular lens/gauge details at top and bottom
 * - Electric cyan accent lines on the sides
 * - Bold metallic heavy industrial 'NEX' lettering
 * - Framed lower bar containing 'METALWORKS' in wide letter-spacing
 */
export const EmblemSVG: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className = '',
}) => {
  const uniqueId = React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="NexMetal Works Hexagonal Emblem"
      role="img"
    >
      <defs>
        {/* Silver metallic bevel gradient */}
        <linearGradient id={`silver-bevel-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E5E7EB" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="75%" stopColor="#4B5563" />
          <stop offset="100%" stopColor="#1F2937" />
        </linearGradient>

        {/* Brushed steel inner bevel */}
        <linearGradient id={`steel-inner-${uniqueId}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="40%" stopColor="#4B5563" />
          <stop offset="60%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#D1D5DB" />
        </linearGradient>

        {/* Dark core gradient */}
        <radialGradient id={`dark-core-${uniqueId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B1E23" />
          <stop offset="75%" stopColor="#111418" />
          <stop offset="100%" stopColor="#0B0D0F" />
        </radialGradient>

        {/* Cyan electric glow gradient */}
        <linearGradient id={`cyan-glow-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#27B8F0" />
          <stop offset="50%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Rivet specular highlight */}
        <radialGradient id={`rivet-grad-${uniqueId}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#1F2937" />
        </radialGradient>

        {/* Lettering metallic shine */}
        <linearGradient id={`text-metal-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="85%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
      </defs>

      {/* Outer Hexagon with Bevel Shadow */}
      <polygon
        points="100,6 182,53 182,147 100,194 18,147 18,53"
        fill="#090B0D"
        stroke={`url(#silver-bevel-${uniqueId})`}
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Inner Hexagon Frame */}
      <polygon
        points="100,16 172,57 172,143 100,184 28,143 28,57"
        fill={`url(#dark-core-${uniqueId})`}
        stroke={`url(#steel-inner-${uniqueId})`}
        strokeWidth="2.5"
      />

      {/* Hexagonal Inner Guideline Ring */}
      <polygon
        points="100,24 164,61 164,139 100,176 36,139 36,61"
        fill="none"
        stroke="rgba(201, 206, 214, 0.2)"
        strokeWidth="1"
        strokeDasharray="4 2"
      />

      {/* Perimeter Rivets / Hex Bolts (6 corners + 2 edge rivets) */}
      {[
        { cx: 100, cy: 11 },
        { cx: 177, cy: 55 },
        { cx: 177, cy: 145 },
        { cx: 100, cy: 189 },
        { cx: 23, cy: 145 },
        { cx: 23, cy: 55 },
      ].map((pos, idx) => (
        <g key={idx}>
          <circle cx={pos.cx} cy={pos.cy} r="4" fill={`url(#rivet-grad-${uniqueId})`} />
          <circle cx={pos.cx} cy={pos.cy} r="2.2" fill="#111418" />
          <circle cx={pos.cx - 0.8} cy={pos.cy - 0.8} r="0.9" fill="#FFFFFF" />
        </g>
      ))}

      {/* Cyan Accent Lines on Left and Right Sides */}
      <path
        d="M 28 85 L 28 115"
        stroke={`url(#cyan-glow-${uniqueId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 172 85 L 172 115"
        stroke={`url(#cyan-glow-${uniqueId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Top Lens / Gauge Detail */}
      <g>
        <circle cx="100" cy="36" r="8" fill="#111418" stroke={`url(#silver-bevel-${uniqueId})`} strokeWidth="1.5" />
        <circle cx="100" cy="36" r="5" fill="#1F2937" />
        <circle cx="100" cy="36" r="3" fill="#27B8F0" />
        <circle cx="98.5" cy="34.5" r="1" fill="#FFFFFF" />
      </g>

      {/* Bottom Lens / Gauge Detail */}
      <g>
        <circle cx="100" cy="164" r="8" fill="#111418" stroke={`url(#silver-bevel-${uniqueId})`} strokeWidth="1.5" />
        <circle cx="100" cy="164" r="5" fill="#1F2937" />
        <circle cx="100" cy="164" r="3" fill="#27B8F0" />
        <circle cx="98.5" cy="162.5" r="1" fill="#FFFFFF" />
      </g>

      {/* Central Bold Industrial 'NEX' Typography */}
      <g transform="translate(0, 0)">
        {/* Subtle drop shadow for metallic pop */}
        <text
          x="100"
          y="108"
          textAnchor="middle"
          fontFamily="'Russo One', 'Barlow Condensed', sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="4"
          fill="#000000"
          opacity="0.8"
        >
          NEX
        </text>
        <text
          x="99"
          y="106"
          textAnchor="middle"
          fontFamily="'Russo One', 'Barlow Condensed', sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="4"
          fill={`url(#text-metal-${uniqueId})`}
          stroke="#374151"
          strokeWidth="0.8"
        >
          NEX
        </text>
      </g>

      {/* Framed Lower Bar: 'METALWORKS' */}
      <g>
        {/* Frame bar rectangle */}
        <polygon
          points="46,124 154,124 150,142 50,142"
          fill="#0F1114"
          stroke="#27B8F0"
          strokeWidth="1.2"
        />
        <text
          x="100"
          y="137.5"
          textAnchor="middle"
          fontFamily="'Rajdhani', 'Barlow Condensed', sans-serif"
          fontWeight="700"
          fontSize="11"
          letterSpacing="3.5"
          fill="#E5E7EB"
        >
          METALWORKS
        </text>
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const pixelSizes = {
    sm: 36,
    md: 46,
    lg: 58,
    xl: 72,
  };

  const currentPx = pixelSizes[size];

  if (variant === 'emblem') {
    return <EmblemSVG size={currentPx} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Hexagonal Metal Badge Emblem */}
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <EmblemSVG size={currentPx} />
        <div className="absolute inset-0 rounded-full blur-md bg-[#27B8F0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-heading text-xl sm:text-2xl font-black tracking-widest text-white group-hover:text-slate-100 transition-colors uppercase">
            NEX
          </span>
          <span className="font-tech text-base sm:text-lg font-bold tracking-widest text-[#27B8F0] uppercase">
            WORKS
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[2px] w-3 bg-[#27B8F0]/80 rounded-full" />
          <span className="font-tech text-[10px] tracking-[0.24em] font-semibold text-[#C9CED6] uppercase">
            FABRICATION & WELDING
          </span>
        </div>
      </div>
    </div>
  );
};

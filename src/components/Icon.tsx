import React from 'react';

const Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    aria-hidden="true"
    className={className}
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M100 10C50 70 50 130 100 190C150 130 150 70 100 10Z"
      style={{ filter: 'url(#glow)' }}
    />
    <g transform="translate(1, -2)">
        <rect x="96" y="80" width="8" height="8" rx="2" fill="currentColor" />
        <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M100 88 v20" />
        <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M100 108 h-20" />
        <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M100 108 h20" />
        <rect x="76" y="104" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="116" y="104" width="8" height="8" rx="2" fill="currentColor" />
        <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M80 112 v15" />
        <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M120 112 v15" />
        <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M80 127 h40" />
    </g>
  </svg>
);
export default Icon;
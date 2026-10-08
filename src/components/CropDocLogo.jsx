import React from 'react';

export default function CropDocLogo({ className = "h-10", showText = true, textVariant = "dark" }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Icon: Leaf inside viewfinder brackets with circuit lines */}
      <div className="relative w-11 h-11 flex-shrink-0">
        {/* Viewfinder brackets */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600 fill-none stroke-current stroke-[7] stroke-linecap-round stroke-linejoin-round">
          {/* Top-left corner */}
          <path d="M 20,35 V 20 H 35" />
          {/* Top-right corner */}
          <path d="M 65,20 H 80 V 35" />
          {/* Bottom-left corner */}
          <path d="M 20,65 V 80 H 35" />
          {/* Bottom-right corner */}
          <path d="M 65,80 H 80 V 65" />
        </svg>

        {/* Central Leaf with Circuit Traces */}
        <div className="absolute inset-0 flex items-center justify-center p-2.5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            {/* Left side of leaf */}
            <path
              d="M 50,15 C 25,35 25,75 50,85 C 50,85 50,45 50,15 Z"
              fill="url(#leafGrad)"
              className="opacity-90"
            />
            {/* Right side of leaf (darker green with circuit traces) */}
            <path
              d="M 50,15 C 75,35 75,75 50,85 C 50,85 50,45 50,15 Z"
              fill="#047857"
            />
            {/* Main vein stem */}
            <path
              d="M 50,85 L 50,18"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Circuit Branch 1 */}
            <path
              d="M 50,55 L 68,42"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="68" cy="42" r="4.5" fill="#ffffff" />

            {/* Circuit Branch 2 */}
            <path
              d="M 50,40 L 64,30"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="64" cy="30" r="4.5" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline font-bold tracking-tight text-2xl sm:text-3xl leading-none">
            <span className={textVariant === "light" ? "text-white" : "text-emerald-950"}>
              Crop
            </span>
            <span className="text-emerald-600 font-extrabold ml-0.5">
              DOC
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="h-[2px] w-3 bg-emerald-500 rounded-full"></div>
            {/* Heartbeat / ECG line */}
            <svg viewBox="0 0 40 10" className="w-6 h-2 text-emerald-500 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
              <path d="M 0,5 H 12 L 16,1 L 20,9 L 24,5 H 40" />
            </svg>
            <div className="h-[2px] flex-grow bg-emerald-500/30 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}

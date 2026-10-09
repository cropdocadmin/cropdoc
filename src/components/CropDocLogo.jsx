import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function CropDocLogo({ className = "h-10", showText = true, textVariant = "dark", iconOnly = false }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Real uploaded CropDOC logo image */}
      <img 
        src={logoImg} 
        alt="CropDOC Logo" 
        className="h-full w-auto aspect-square object-contain rounded-xl shadow-sm border border-emerald-100/80 bg-white p-0.5 flex-shrink-0" 
      />

      {/* Brand Text */}
      {showText && !iconOnly && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline font-bold tracking-tight text-2xl sm:text-3xl leading-none">
            <span className={textVariant === "light" ? "text-white" : "text-emerald-950"}>
              Crop
            </span>
            <span className="text-emerald-500 font-extrabold ml-0.5">
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

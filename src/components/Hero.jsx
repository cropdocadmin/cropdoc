import React from 'react';
import { Camera, ShieldCheck, Zap, ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import CropDocLogo from './CropDocLogo';

export default function Hero({ onScanClick, activeLang }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50">
      
      {/* Decorative background grid & radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>AI Crop Disease Detection Platform</span>
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">v3.4 AI</span>
            </div>

            {/* Main Headline with exact tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Smart Diagnosis. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700">
                Healthy Crops.
              </span> <br />
              Better Tomorrow.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Turn any smartphone into an instant crop doctor. CropDOC uses advanced AI computer vision to identify crop diseases in under 2 seconds, preventing devastating yield loss and recommending eco-friendly precision treatments.
            </p>

            {/* 3-Step Quick Highlight Banner */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 bg-white/80 backdrop-blur-xs rounded-2xl border border-emerald-100 shadow-sm max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-emerald-50/50">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mb-1 shadow-xs">1</div>
                <span className="text-xs font-bold text-slate-800">Snap Photo</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">Click leaf photo</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-teal-50/50">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold mb-1 shadow-xs">2</div>
                <span className="text-xs font-bold text-slate-800">AI Detects</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">2-second scan</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-green-50/50">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold mb-1 shadow-xs">3</div>
                <span className="text-xs font-bold text-slate-800">Get Treatment</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">Targeted cure</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onScanClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 group"
              >
                <Camera className="w-5 h-5 text-emerald-200 group-hover:rotate-12 transition-transform" />
                <span>Try Live AI Scanner</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#business-model"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-4 rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
              >
                <span>View Business Model</span>
              </a>
            </div>

            {/* Key Assurance Points */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>98.4% Accuracy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Subscription Cost for Small Farmers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card (Interactive Phone Mockup & Scanner Preview) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-400/30 rounded-3xl blur-2xl transform rotate-3 scale-95"></div>

            {/* Simulated Smartphone Screen displaying CropDOC UI */}
            <div className="relative w-full max-w-sm bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-800">
              
              {/* Camera Notch */}
              <div className="w-28 h-5 bg-slate-800 rounded-b-xl mx-auto mb-3 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700"></div>
              </div>

              {/* App Screen Content */}
              <div className="bg-slate-950 rounded-[2rem] p-4 text-white space-y-4 overflow-hidden relative">
                
                {/* App Header inside phone */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <CropDocLogo className="h-7" showText={true} textVariant="light" />
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono border border-emerald-500/30">
                    LIVE SCANNER
                  </span>
                </div>

                {/* Leaf Image inside phone with Scanner Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-4/3 group cursor-pointer" onClick={onScanClick}>
                  <img
                    src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19657?auto=format&fit=crop&w=600&q=80"
                    alt="Tomato Leaf Scan"
                    className="w-full h-full object-cover opacity-90"
                  />
                  
                  {/* Laser Beam animation overlay */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-scan z-20"></div>

                  {/* Corner Viewfinder brackets (Image 1 style) */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400"></div>

                  {/* Simulated Bounding Box around infection */}
                  <div className="absolute top-1/4 left-1/3 w-24 h-20 border-2 border-dashed border-red-500 bg-red-500/10 rounded-lg flex items-start justify-end p-1">
                    <span className="bg-red-600 text-white text-[9px] font-bold px-1 rounded">Early Blight</span>
                  </div>

                  {/* Live Scan indicator badge */}
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-xs text-emerald-400 text-[11px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>AI Confidence: 97.8%</span>
                  </div>
                </div>

                {/* Simulated Result Card inside phone */}
                <div className="bg-slate-900 border border-emerald-900/60 p-3 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Detected Condition</span>
                    <span className="text-xs font-bold text-red-400 bg-red-950/60 border border-red-800 px-2 py-0.5 rounded-md">
                      Tomato Early Blight
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    <strong>Suggested Remedy:</strong> Spray Neem Oil (3ml/L) or Mancozeb 75% WP @ 2.5g/L immediately.
                  </div>
                  <button
                    onClick={onScanClick}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Open Interactive Scanner</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

            {/* Floating Stats Badge Left */}
            <div className="absolute -bottom-6 -left-4 sm:left-2 bg-white p-3.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 z-30 max-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Avg Crop Loss Saved</div>
                <div className="text-base font-extrabold text-emerald-700">₹45,000 / Acre</div>
              </div>
            </div>

            {/* Floating Stats Badge Right */}
            <div className="absolute -top-4 -right-4 sm:right-2 bg-white p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 z-30">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Active Farmers</div>
                <div className="text-sm font-extrabold text-slate-900">120,000+ Active</div>
              </div>
            </div>

          </div>

        </div>

        {/* Global Impact Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-slate-900">50+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Crops Supported</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-emerald-600">&lt; 2 Sec</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Instant AI Diagnosis</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-slate-900">98.4%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">AI Accuracy Rate</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-teal-600">350+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Diseases & Pests Covered</div>
          </div>
        </div>

      </div>
    </section>
  );
}

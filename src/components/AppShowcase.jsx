import React from 'react';
import { Smartphone, WifiOff, Volume2, CloudSun, PhoneCall, Download, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import CropDocLogo from './CropDocLogo';

export default function AppShowcase() {
  return (
    <section id="app-features" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-emerald-950 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Phone Showcase Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing frame */}
            <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-2xl transform -rotate-3 scale-95"></div>

            {/* Smartphone body */}
            <div className="relative w-full max-w-sm bg-slate-950 rounded-[2.5rem] p-4 border-4 border-slate-700 shadow-2xl space-y-4">
              
              <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto"></div>

              {/* App UI */}
              <div className="bg-slate-900 rounded-[2rem] p-5 space-y-4 border border-slate-800">
                <div className="flex items-center justify-between">
                  <CropDocLogo className="h-6" showText={true} textVariant="light" />
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold">
                    OFFLINE ACTIVE
                  </span>
                </div>

                {/* Weather alert widget inside mobile UI */}
                <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/60 border border-emerald-500/40 p-3.5 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-emerald-400 font-mono">TODAY'S SPRAY ADVISORY</div>
                    <div className="text-xs font-bold text-white">Ideal Spraying Window: 4 PM - 7 PM</div>
                    <div className="text-[11px] text-slate-300">Humidity 68% • Wind 6 km/h</div>
                  </div>
                  <CloudSun className="w-8 h-8 text-amber-400 shrink-0" />
                </div>

                {/* Voice Guided Card */}
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center">
                      <Volume2 className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Voice Assistant</div>
                      <div className="text-[10px] text-slate-400">Audio instructions in 12 languages</div>
                    </div>
                  </div>
                  <button className="text-[10px] bg-teal-600 text-white font-bold px-2.5 py-1 rounded-lg">
                    Listen
                  </button>
                </div>

                {/* Agronomist Hotline Button */}
                <div className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-2xl text-center cursor-pointer transition-colors">
                  <div className="text-xs font-extrabold text-white flex items-center justify-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    <span>Talk to Village Agronomist (Free)</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Features breakdown & App Badges */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Application Suite</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Designed for <span className="text-emerald-400">Every Farmer</span> in Every Village
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We built CropDOC with extreme simplicity in mind. Whether you are in a remote field with zero internet connection or need spoken voice guidance in regional dialects, CropDOC has you covered.
            </p>

            {/* Grid of Key Mobile Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">100% Offline AI Model</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  On-device neural net scans leaves instantly without requiring cellular data or Wi-Fi.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Voice-Guided Diagnosis</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Audio alerts read out exact medicine dosages in Hindi, Marathi, Telugu, Tamil & Spanish.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <CloudSun className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Weather Spray Radar</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time microclimate alerts warn when rain or high wind will wash away applied pesticides.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">1-Click Agronomist Call</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Escalate complex or rare crop symptoms directly to verified university plant pathologists.
                </p>
              </div>

            </div>

            {/* App Store Download Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => alert("Redirecting to Google Play Store...")}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer"
              >
                <Download className="w-6 h-6 text-emerald-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">GET IT ON</div>
                  <div className="text-sm font-bold text-white">Google Play Store</div>
                </div>
              </button>

              <button
                onClick={() => alert("Redirecting to Apple App Store...")}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer"
              >
                <Download className="w-6 h-6 text-teal-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">DOWNLOAD ON THE</div>
                  <div className="text-sm font-bold text-white">Apple App Store</div>
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import CropDocLogo from './CropDocLogo';
import { Mail, PhoneCall, MapPin, Heart, Shield, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <CropDocLogo className="h-10" showText={true} textVariant="light" />
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              CropDOC is an AI-powered agricultural health diagnostic platform empowering farmers worldwide with instant leaf disease detection, eco-friendly treatment plans, and precision yield protection.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Tagline: Smart Diagnosis. Healthy Crops. Better Tomorrow.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Platform Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#scanner" className="hover:text-emerald-400 transition-colors">AI Leaf Scanner Demo</a></li>
              <li><a href="#business-model" className="hover:text-emerald-400 transition-colors">Business Model Framework</a></li>
              <li><a href="#yield-calculator" className="hover:text-emerald-400 transition-colors">Yield Loss Calculator</a></li>
              <li><a href="#disease-library" className="hover:text-emerald-400 transition-colors">Plant Disease Database</a></li>
              <li><a href="#app-features" className="hover:text-emerald-400 transition-colors">Offline Mobile App</a></li>
            </ul>
          </div>

          {/* Crops Supported */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Popular Crops
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>🍅 Tomato (Early/Late Blight)</li>
              <li>🌽 Corn / Maize (Rust)</li>
              <li>🌾 Rice / Paddy (Bacterial Blight)</li>
              <li>🥔 Potato (Phytophthora)</li>
              <li>☁️ Cotton & Soybean</li>
            </ul>
          </div>

          {/* Helpline & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Agronomist Helpline
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <PhoneCall className="w-4 h-4" />
                <span>1800-CROP-DOC (Toll-Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>support@cropdoc.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>AgriTech Innovation Center, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} CropDOC AI Inc. All rights reserved. Building AI for sustainable agriculture.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Agronomist Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

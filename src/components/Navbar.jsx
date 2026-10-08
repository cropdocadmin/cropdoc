import React, { useState } from 'react';
import CropDocLogo from './CropDocLogo';
import { LANGUAGES } from '../data/diseasesData';
import { Globe, PhoneCall, Menu, X, Smartphone, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeLang, setActiveLang, onScanClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  const currentLangObj = LANGUAGES.find(l => l.code === activeLang) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center focus:outline-hidden">
            <CropDocLogo className="h-10" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600 text-sm">
            <a href="#scanner" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              AI Scanner Demo
            </a>
            <a href="#business-model" className="hover:text-emerald-600 transition-colors">
              Business Model
            </a>
            <a href="#yield-calculator" className="hover:text-emerald-600 transition-colors">
              ROI Calculator
            </a>
            <a href="#disease-library" className="hover:text-emerald-600 transition-colors">
              Disease Library
            </a>
            <a href="#app-features" className="hover:text-emerald-600 transition-colors">
              Mobile App
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-all"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>{currentLangObj.flag} {currentLangObj.name}</span>
              </button>

              {langDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setActiveLang(lang.code);
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-emerald-50 ${
                        activeLang === lang.code ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-700"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Helpline Badge */}
            <a
              href="tel:1800-CROP-DOC"
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-600 bg-emerald-50 border border-emerald-200/80 px-3 py-2 rounded-lg"
              title="24/7 Helpline for Farmers"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Helpline: <strong>1800-CROP-DOC</strong></span>
            </a>

            {/* Primary CTA */}
            <button
              onClick={onScanClick}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 text-sm"
            >
              <Smartphone className="w-4 h-4" />
              Launch Scanner
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onScanClick}
              className="bg-emerald-600 text-white p-2 rounded-lg text-xs font-semibold"
            >
              Scan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#scanner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-700 font-bold bg-emerald-50 px-3 py-2 rounded-lg"
          >
            🌱 AI Leaf Scanner Demo
          </a>
          <a
            href="#business-model"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-emerald-600 px-3 py-2 font-medium"
          >
            Business Model Framework
          </a>
          <a
            href="#yield-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-emerald-600 px-3 py-2 font-medium"
          >
            Yield Loss & ROI Calculator
          </a>
          <a
            href="#disease-library"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-emerald-600 px-3 py-2 font-medium"
          >
            Disease Library
          </a>
          <a
            href="#app-features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-emerald-600 px-3 py-2 font-medium"
          >
            Mobile App Features
          </a>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Select Language:</span>
            <div className="flex gap-1">
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => setActiveLang(l.code)}
                  className={`px-2 py-1 text-xs rounded-md ${activeLang === l.code ? "bg-emerald-600 text-white font-bold" : "bg-slate-100 text-slate-700"}`}
                >
                  {l.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

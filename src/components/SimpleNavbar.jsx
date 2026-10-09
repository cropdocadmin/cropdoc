import React, { useState } from 'react';
import CropDocLogo from './CropDocLogo';
import { LogIn, LogOut, Globe, ChevronDown, UserCheck, Sparkles, ExternalLink, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { getRemainingDays } from '../utils/dateUtils';

export default function SimpleNavbar({ onOpenLogin }) {
  const { currentLang, setLanguage, t, LANGUAGES_LIST } = useLanguage();
  const { user, logout } = useAuth();
  const [langDropdown, setLangDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const selectedLangObj = LANGUAGES_LIST.find(l => l.code === currentLang) || LANGUAGES_LIST[0];
  const remainingDays = user?.subscriptionExpiresAt ? getRemainingDays(user.subscriptionExpiresAt) : 365;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 py-3 gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center shrink-0 focus:outline-hidden">
            <CropDocLogo className="h-9 sm:h-10" showText={true} />
          </a>

          {/* Minimal Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 shrink-0 font-semibold text-slate-600 text-sm">
            <a href="#product" className="hover:text-emerald-700 transition-colors">
              {t.nav.product}
            </a>
            <a href="#workflow" className="hover:text-emerald-700 transition-colors">
              {t.nav.workflow}
            </a>
            <a href="#pricing" className="hover:text-emerald-700 transition-colors text-emerald-700 font-bold">
              {t.nav.pricing}
            </a>
          </nav>

          {/* Right Controls: Redirect Button, Language Selector & Auth */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Direct Redirect to CropDOC Web App (cropdoc-app.ai.studio) */}
            <a
              href="https://cropdoc-app.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold px-3.5 py-2 rounded-xl shadow-xs hover:shadow-md transition-all text-xs cursor-pointer shrink-0"
            >
              <span>{t.nav.appRedirect}</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
            </a>

            {/* Language Selector Dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 sm:px-3 py-2 rounded-xl transition-all cursor-pointer border border-slate-200"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden xs:inline">{selectedLangObj.flag} {selectedLangObj.name}</span>
                <span className="xs:hidden">{selectedLangObj.flag}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                  {LANGUAGES_LIST.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer ${
                        currentLang === lang.code ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-700 font-medium"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      {currentLang === lang.code && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Authenticated User Profile Status */}
            {user ? (
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border shrink-0 ${
                user.plan === 'premium'
                  ? 'bg-gradient-to-r from-emerald-950 to-teal-900 border-emerald-500 text-white shadow-sm'
                  : 'bg-emerald-50 border-emerald-200 text-slate-900'
              }`}>
                <div className="text-left leading-tight">
                  <div className={`text-xs font-extrabold flex items-center gap-1 ${
                    user.plan === 'premium' ? 'text-amber-400' : 'text-emerald-950'
                  }`}>
                    {user.plan === 'premium' ? (
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                    ) : (
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                    <span className="truncate max-w-[100px] sm:max-w-[130px]">{user.name}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-0.5">
                    {user.plan === 'premium' ? (
                      <>
                        <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider hidden sm:inline">
                          PREMIUM
                        </span>
                        <span className="text-[10px] text-amber-300 bg-amber-400/20 px-1.5 py-0.2 rounded font-mono border border-amber-400/30">
                          ⏳ {remainingDays}d
                        </span>
                      </>
                    ) : (
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                        {user.role} (Free)
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={logout}
                  title="Logout"
                  className={`p-1 rounded-lg transition-colors cursor-pointer ml-1 ${
                    user.plan === 'premium'
                      ? 'text-slate-300 hover:text-white hover:bg-emerald-800/60'
                      : 'text-slate-400 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all text-xs cursor-pointer shrink-0"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{t.nav.login}</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden border-t border-slate-100 py-3 space-y-3 animate-fadeIn">
            <a
              href="https://cropdoc-app.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-extrabold py-2.5 rounded-xl text-xs w-full"
            >
              <span>{t.nav.appRedirect}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="flex justify-around text-xs font-semibold text-slate-700 pt-1">
              <a href="#product" onClick={() => setMobileNavOpen(false)}>{t.nav.product}</a>
              <a href="#workflow" onClick={() => setMobileNavOpen(false)}>{t.nav.workflow}</a>
              <a href="#pricing" onClick={() => setMobileNavOpen(false)} className="text-emerald-700 font-bold">{t.nav.pricing}</a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

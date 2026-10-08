import React, { useState } from 'react';
import CropDocLogo from './CropDocLogo';
import { LogIn, LogOut, Globe, ChevronDown, UserCheck, Sparkles, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { getRemainingDays } from '../utils/dateUtils';

export default function SimpleNavbar({ onOpenLogin }) {
  const { currentLang, setLanguage, t, LANGUAGES_LIST } = useLanguage();
  const { user, logout } = useAuth();
  const [langDropdown, setLangDropdown] = useState(false);

  const selectedLangObj = LANGUAGES_LIST.find(l => l.code === currentLang) || LANGUAGES_LIST[0];
  const remainingDays = user?.subscriptionExpiresAt ? getRemainingDays(user.subscriptionExpiresAt) : 365;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center focus:outline-hidden">
            <CropDocLogo className="h-10" showText={true} />
          </a>

          {/* Minimal Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold text-slate-600 text-sm">
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

          {/* Language Switcher & User Profile / Login */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-all cursor-pointer border border-slate-200"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedLangObj.flag} {selectedLangObj.name}</span>
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
                      className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer ${
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

            {/* Authenticated User Profile Status (WITH REMAINING DAYS DISPLAY) */}
            {user ? (
              <div className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl border ${
                user.plan === 'premium'
                  ? 'bg-gradient-to-r from-emerald-950 to-teal-900 border-emerald-500 text-white shadow-md'
                  : 'bg-emerald-50 border-emerald-200 text-slate-900'
              }`}>
                <div className="text-left">
                  <div className={`text-xs font-extrabold flex items-center gap-1 ${
                    user.plan === 'premium' ? 'text-amber-400' : 'text-emerald-950'
                  }`}>
                    {user.plan === 'premium' ? (
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ) : (
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                    <span>{user.name}</span>
                  </div>
                  <div className={`text-[10px] font-extrabold flex items-center gap-1 ${
                    user.plan === 'premium' ? 'text-emerald-300' : 'text-emerald-700'
                  }`}>
                    {user.plan === 'premium' ? (
                      <>
                        <span className="uppercase tracking-wider">⭐ PREMIUM ({user.role})</span>
                        <span className="text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded font-mono border border-amber-400/30">
                          ⏳ {remainingDays} Days Left
                        </span>
                      </>
                    ) : (
                      <span className="uppercase tracking-wider">{user.role} (Free)</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={logout}
                  title="Logout"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ml-1 ${
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
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 text-xs sm:text-sm cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>{t.nav.login}</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}

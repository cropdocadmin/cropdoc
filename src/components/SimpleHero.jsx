import React from 'react';
import { ArrowRight, LogIn, CheckCircle2, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { getRemainingDays } from '../utils/dateUtils';

export default function SimpleHero({ onOpenLogin, onOpenPayment }) {
  const { t } = useLanguage();
  const { user } = useAuth();

  const remainingDays = user?.subscriptionExpiresAt ? getRemainingDays(user.subscriptionExpiresAt) : 365;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-emerald-50/70 via-white to-slate-50">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Brand / User Badge */}
        {user ? (
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold shadow-xs ${
            user.plan === 'premium'
              ? 'bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border-amber-400 text-amber-300'
              : 'bg-emerald-100 border-emerald-300 text-emerald-800'
          }`}>
            {user.plan === 'premium' ? (
              <>
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>⭐ PREMIUM USER ACTIVE ({user.name.toUpperCase()})</span>
                <span className="bg-amber-400 text-slate-950 text-xs font-mono font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {remainingDays} Days Left
                </span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>LOGGED IN AS {user.name.toUpperCase()} (FREE PLAN)</span>
              </>
            )}
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold shadow-xs">
            <span>{t.hero.badge}</span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t.hero.headline1} <br />
          <span className="text-emerald-600">{t.hero.headline2}</span> <br />
          {t.hero.headline3}
        </h1>

        {/* Plain Product Explanation */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {!user ? (
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <LogIn className="w-5 h-5" />
              <span>{t.hero.loginCta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : user.plan === 'free' ? (
            <button
              onClick={onOpenPayment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
              <span>Upgrade to Premium (₹149/Year)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <div className="inline-flex items-center justify-center gap-2.5 bg-emerald-950 text-emerald-300 font-extrabold text-base px-8 py-4 rounded-xl border border-emerald-500 shadow-md">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Full Premium Protection Enabled ({remainingDays} Days Active)</span>
            </div>
          )}

          <a
            href="#workflow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-4 rounded-xl border border-slate-300 shadow-xs transition-all"
          >
            <span>{t.hero.workflowCta}</span>
          </a>
        </div>

        {/* Core Value Props */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.hero.prop1}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.hero.prop2}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.hero.prop3}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

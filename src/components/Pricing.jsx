import React from 'react';
import { Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { getRemainingDays } from '../utils/dateUtils';

export default function Pricing({ onOpenLogin, onOpenPayment }) {
  const { t } = useLanguage();
  const { user } = useAuth();

  const remainingDays = user?.subscriptionExpiresAt ? getRemainingDays(user.subscriptionExpiresAt) : 365;

  const handlePremiumClick = () => {
    if (!user) {
      onOpenLogin();
    } else if (user.plan === 'free') {
      onOpenPayment();
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>{t.pricing.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.pricing.title1} <span className="text-emerald-600">{t.pricing.title2}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 2 Subscription Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Block 1: Free Subscription Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all space-y-6 flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {t.pricing.freeBadge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">{t.pricing.freeTitle}</h3>
                <p className="text-xs text-slate-500 mt-1">{t.pricing.freeDesc}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">{t.pricing.freePrice}</span>
                <span className="text-xs font-semibold text-slate-500">{t.pricing.freePeriod}</span>
              </div>

              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.freeFeat1}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.freeFeat2}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.freeFeat3}</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                if (!user) onOpenLogin();
              }}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 rounded-xl transition-all cursor-pointer text-sm"
            >
              {user ? (user.plan === 'free' ? 'Current Active Plan' : 'Free Plan') : t.pricing.freeCta}
            </button>
          </div>

          {/* Block 2: Premium Subscription Plan (₹149/year) */}
          <div className="bg-gradient-to-b from-emerald-950 via-teal-950 to-slate-900 rounded-3xl p-8 border-2 border-emerald-400 shadow-2xl space-y-6 flex flex-col justify-between text-white relative transform md:-translate-y-2">
            
            {/* Ribbon Badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>{t.pricing.premiumBadge}</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  FULL FARM PROTECTION
                </span>
                {user?.plan === 'premium' && (
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/20 border border-amber-400/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {remainingDays} Days Left
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  {t.pricing.premiumTitle}
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </h3>
                <p className="text-xs text-slate-300 mt-1">{t.pricing.premiumDesc}</p>
              </div>

              {/* Price display: ₹149 / Year */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-extrabold text-emerald-400">
                  {t.pricing.premiumPrice}
                </span>
                <span className="text-sm font-bold text-emerald-200">{t.pricing.premiumPeriod}</span>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200 font-semibold">
                <li className="flex items-center gap-2.5 text-emerald-300 font-extrabold">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-extrabold shrink-0">✓</span>
                  <span>{t.pricing.premiumFeat1}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.premiumFeat2}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.premiumFeat3}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.premiumFeat4}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{t.pricing.premiumFeat5}</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handlePremiumClick}
              disabled={user && user.plan === 'premium'}
              className={`w-full font-extrabold py-3.5 rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer ${
                user && user.plan === 'premium'
                  ? 'bg-emerald-950 border border-emerald-500 text-emerald-400 cursor-default'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 hover:shadow-emerald-500/30'
              }`}
            >
              {user && user.plan === 'premium' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>⭐ PREMIUM ACTIVE ({remainingDays} DAYS REMAINING)</span>
                </>
              ) : (
                <>
                  <span>{user ? 'Pay ₹149 & Upgrade to Premium' : t.pricing.premiumCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

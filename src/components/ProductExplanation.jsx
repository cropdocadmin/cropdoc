import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductExplanation() {
  const { t } = useLanguage();

  return (
    <section id="product" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <span>{t.product.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.product.title1} <span className="text-emerald-600">{t.product.title2}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.product.subtitle}
          </p>
        </div>

        {/* 2-Column Comparison: The Problem vs The CropDOC Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Problem Card */}
          <div className="bg-red-50/60 border border-red-200/80 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t.product.problemTitle}</h3>
                <p className="text-xs text-red-700 font-semibold">{t.product.problemSub}</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>{t.product.prob1Title}</strong>{t.product.prob1Text}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>{t.product.prob2Title}</strong>{t.product.prob2Text}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>{t.product.prob3Title}</strong>{t.product.prob3Text}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>{t.product.prob4Title}</strong>{t.product.prob4Text}</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-emerald-50/60 border-2 border-emerald-500/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{t.product.solutionTitle}</h3>
                <p className="text-xs text-emerald-800 font-bold">{t.product.solutionSub}</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>{t.product.sol1Title}</strong>{t.product.sol1Text}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>{t.product.sol2Title}</strong>{t.product.sol2Text}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>{t.product.sol3Title}</strong>{t.product.sol3Text}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>{t.product.sol4Title}</strong>{t.product.sol4Text}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

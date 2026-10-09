import React from 'react';
import { Camera, Cpu, Leaf, ArrowRight, Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export default function Workflow({ onOpenLogin, onOpenPayment }) {
  const { t } = useLanguage();
  const { user } = useAuth();

  return (
    <section id="workflow" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background visual gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
            <span>{t.workflow.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t.workflow.title1} CropDOC {t.workflow.title2}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-slate-800/90 border border-slate-700/90 rounded-3xl p-8 space-y-6 relative hover:border-emerald-500 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-lg">
                  {t.workflow.step1Num}
                </span>
                <Camera className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.workflow.step1Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.workflow.step1Desc}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
              {t.workflow.step1Label}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800/90 border border-slate-700/90 rounded-3xl p-8 space-y-6 relative hover:border-teal-500 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-teal-600 text-white font-extrabold flex items-center justify-center text-lg">
                  {t.workflow.step2Num}
                </span>
                <Cpu className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.workflow.step2Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.workflow.step2Desc}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-700/60 text-xs font-mono text-teal-400">
              {t.workflow.step2Label}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800/90 border border-slate-700/90 rounded-3xl p-8 space-y-6 relative hover:border-green-500 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-green-600 text-white font-extrabold flex items-center justify-center text-lg">
                  {t.workflow.step3Num}
                </span>
                <Leaf className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.workflow.step3Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.workflow.step3Desc}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-700/60 text-xs font-mono text-green-400">
              {t.workflow.step3Label}
            </div>
          </div>

        </div>

        {/* CTA Banner with Redirect Button */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border border-emerald-800/80 rounded-3xl p-8 text-center space-y-4 max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl font-extrabold text-white">
            Ready to Scan Your Crops?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Launch the live CropDOC web application directly at cropdoc-app.ai.studio
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://cropdoc-app.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span>{t.workflow.appRedirectCta}</span>
              <ExternalLink className="w-4 h-4 text-slate-950" />
            </a>

            {!user && (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <span>{t.workflow.bannerCta}</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

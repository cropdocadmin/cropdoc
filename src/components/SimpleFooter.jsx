import React from 'react';
import CropDocLogo from './CropDocLogo';
import { LogIn, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SimpleFooter({ onOpenLogin }) {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="space-y-2 text-center md:text-left">
          <CropDocLogo className="h-8" showText={true} textVariant="light" />
          <p className="text-xs text-slate-400">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#product" className="hover:text-emerald-400">{t.footer.product}</a>
          <a href="#workflow" className="hover:text-emerald-400">{t.footer.workflow}</a>
          <a
            href="https://cropdoc-app.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 text-emerald-400 font-bold flex items-center gap-1"
          >
            <span>{t.footer.appRedirect}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button onClick={onOpenLogin} className="hover:text-emerald-400 text-slate-300 font-bold flex items-center gap-1 cursor-pointer">
            <LogIn className="w-3.5 h-3.5" />
            <span>{t.footer.portal}</span>
          </button>
        </div>

        <div className="text-xs text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} {t.footer.rights}
        </div>

      </div>
    </footer>
  );
}

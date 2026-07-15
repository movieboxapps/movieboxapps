/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      {/* Absolute glow bulbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-brand-primary/10 to-brand-accent/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('cta.badge', 'GET STARTED INSTANTLY')}</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-white leading-tight">
            {t('cta.title', 'Unlock Cinematic Quality Streaming Today')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal max-w-2xl mx-auto">
            {t('cta.description', 'Experience absolute cord-cutting freedom. Join over 12 million global viewers enjoying premium movies, TV episodes, and live sports on any device.')}
          </p>
        </div>

        {/* Large Download Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            id="footer-big-download-btn"
            href="https://www.moviebox.com.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-xs sm:text-sm font-black text-brand-bg bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl hover:from-brand-primary-hover hover:to-brand-accent/95 shadow-xl shadow-brand-primary/10 hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
          >
            <Download className="w-6 h-6 text-brand-bg shrink-0" />
            <div className="flex flex-col items-start leading-none text-left">
              <span>{t('cta.download_apk', 'Download MovieBox APK')}</span>
              <span className="text-[9px] font-bold text-brand-bg/85 mt-1">{t('cta.secure_version', 'Secure v4.8.2 Certified • 32.4MB')}</span>
            </div>
          </a>

          {/* Sub credentials */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-brand-muted">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              {t('cta.malware_free', '100% Malware Free Certificate')}
            </span>
            <span>•</span>
            <span>{t('cta.zero_subs', 'Zero Subscription Fees')}</span>
            <span>•</span>
            <span>{t('cta.ad_blocking', 'Ad-Blocking Engine Active')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

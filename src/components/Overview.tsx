/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, Globe, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { STUDIOS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Overview() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      {/* Decorative gradient mesh background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-brand-primary/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('gateway.badge', 'WHAT IS MOVIEBOX?')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white leading-tight">
              {t('gateway.title', 'Centralized Index & Direct Multi-Sourced Mirror Routes')}
            </h2>

            <p className="text-brand-muted font-sans leading-relaxed text-sm sm:text-base">
              {t('gateway.description', 'MovieBox acts as a singular, smart aggregator that lets you search and watch contents globally in high-fidelity on high-speed servers with absolute compatibility.')}
            </p>

            <div className="space-y-4 pt-4 border-t border-brand-surface-sec/60 w-full">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-card flex items-center justify-center border border-brand-surface-sec shrink-0 text-brand-primary">
                  <Search className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-white text-sm">{t('gateway.search_title', 'Aggregated Multi-Search Service Engine')}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {t('gateway.search_desc', 'Our ultra-fast scrapers and dynamic cloud indexes crawl, verify, and consolidate high-quality streaming mirrors. Simply search for a title, select your resolution (ranging from 720p up to full Ultra 4K UHD), choose a localized subtitle, and play instantly.')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-card flex items-center justify-center border border-brand-surface-sec shrink-0 text-brand-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-white text-sm">{t('gateway.catalog_title', 'Universal Cloud Catalog Indexing')}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {t('gateway.catalog_desc', 'By monitoring top content distribution centers worldwide, we guarantee index coverages for brand new cinematic theatrical releases, trending cable events, and premium on-demand platform serials.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full">
              <a
                href="https://www.moviesbox.com.co/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-brand-surface hover:bg-brand-card border border-brand-surface-sec hover:border-brand-primary/20 rounded-xl transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>{t('gateway.installer_btn', 'Get App Installer')}</span>
                <ArrowRight className="w-4 h-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 px-4 py-3 bg-brand-primary/10 rounded-xl border border-brand-primary/15 justify-center">
                <CheckCircle2 className="w-4 h-4 text-brand-primary animate-pulse" />
                <span className="text-xs text-brand-primary font-bold tracking-wide">{t('gateway.no_reg', 'NO REGISTRATION REQUIRED')}</span>
              </div>
            </div>
          </div>

          {/* Supported Networks Sidebar Panel (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 relative shadow-md">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-primary animate-ping"></div>
            
            <div className="space-y-6">
              <div className="flex flex-col space-y-1 border-b border-brand-surface pb-4 text-left">
                <span className="text-[9px] text-brand-muted font-mono tracking-wider uppercase font-bold">{t('gateway.network_monitor', 'NETWORK MONITOR SYSTEM')}</span>
                <h3 className="font-sans font-black text-lg text-white">{t('gateway.networks_studios', 'Supported Networks & Studios')}</h3>
              </div>

              <div className="space-y-3">
                {STUDIOS.map((st) => (
                  <div
                    key={st.name}
                    className="flex items-center justify-between p-3 bg-brand-bg rounded-xl border border-brand-surface-sec/60 hover:border-brand-primary/20 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Placeholder icon representing studio logo */}
                      <div className="w-7 h-7 rounded-lg bg-brand-card border border-brand-surface-sec flex items-center justify-center font-black text-xs text-brand-primary">
                        {st.name[0]}
                      </div>
                      <span className="font-sans font-bold text-sm text-zinc-200">{st.name}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-brand-muted font-mono">{st.count} Indexed</span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-[9px] font-extrabold rounded-md uppercase font-mono">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse inline-block"></span>
                        <span>{st.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-brand-bg rounded-2xl border border-brand-surface-sec text-center">
                <p className="text-[10px] text-brand-muted font-sans leading-normal">
                  * All logos, trademarks, and service brands indexed are the sole property of their respective copyright owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles } from 'lucide-react';
import { COMPARE_MATRIX } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-primary/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('comparison.badge', 'SMART DECISION MATRIX')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('comparison.title', 'How MovieBox Compares')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('comparison.description', 'Stop paying over $70/month for separate streaming networks. See how our integrated premium media aggregator stands against major platforms.')}
          </p>
        </div>

        {/* Table Container - Overflow Horizontal on Mobile */}
        <div className="overflow-x-auto rounded-3xl glass-panel shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-brand-surface-sec/60 bg-brand-surface/40 text-brand-muted font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                <th className="py-5 px-6 font-semibold">{t('comparison.header.metric', 'Feature / Metric')}</th>
                
                {/* Highlighted MovieBox Column */}
                <th className="py-5 px-6 font-extrabold text-brand-primary bg-brand-primary/10 border-x border-brand-primary/15 relative">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                    {t('comparison.header.moviebox', 'MovieBox Premium')}
                  </div>
                </th>
                
                <th className="py-5 px-6 font-semibold">Netflix</th>
                <th className="py-5 px-6 font-semibold">Disney+</th>
                <th className="py-5 px-6 font-semibold">Prime Video</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-brand-surface-sec/60 text-xs sm:text-sm">
              {COMPARE_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-surface/20 transition-all">
                  <td className="py-4.5 px-6 font-sans font-bold text-zinc-300">{t(`comparison.row.${idx}.metric`, row.metric)}</td>
                  
                  {/* MovieBox Premium values (highlighted) */}
                  <td className="py-4.5 px-6 font-bold text-brand-primary bg-brand-primary/10 border-x border-brand-primary/15">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>{t(`comparison.row.${idx}.moviebox`, row.moviebox)}</span>
                    </div>
                  </td>

                  {/* Netflix */}
                  <td className="py-4.5 px-6 text-brand-muted font-medium">
                    {row.netflix.includes('Only') || row.netflix.includes('Ads') ? (
                      <div className="flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-brand-muted/40 shrink-0" />
                        <span>{t(`comparison.row.${idx}.netflix`, row.netflix)}</span>
                      </div>
                    ) : (
                      <span>{t(`comparison.row.${idx}.netflix`, row.netflix)}</span>
                    )}
                  </td>

                  {/* Disney+ */}
                  <td className="py-4.5 px-6 text-brand-muted font-medium">
                    {row.disney.includes('Only') || row.disney.includes('Ads') ? (
                      <div className="flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-brand-muted/40 shrink-0" />
                        <span>{t(`comparison.row.${idx}.disney`, row.disney)}</span>
                      </div>
                    ) : (
                      <span>{t(`comparison.row.${idx}.disney`, row.disney)}</span>
                    )}
                  </td>

                  {/* Prime */}
                  <td className="py-4.5 px-6 text-brand-muted font-medium">
                    {row.prime.includes('Ads') || row.prime.includes('Only') || row.prime.includes('Surcharge') ? (
                      <div className="flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-brand-muted/40 shrink-0" />
                        <span>{t(`comparison.row.${idx}.prime`, row.prime)}</span>
                      </div>
                    ) : (
                      <span>{t(`comparison.row.${idx}.prime`, row.prime)}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="text-[10px] text-brand-muted font-sans mt-5 leading-normal text-center max-w-4xl mx-auto">
          {t('comparison.footnote', '* Price comparisons are based on standard premium tier plans with 4K UHD capabilities published in 2026. Official platform logos and data are registered trademarks of their owners.')}
        </p>
      </div>
    </section>
  );
}

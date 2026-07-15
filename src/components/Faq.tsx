/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldAlert } from 'lucide-react';
import { FAQS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { t } = useLanguage();

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/85 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('faq.badge', 'INFORMATION CENTER')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('faq.description', 'Have questions regarding safety certificates, subscription layers, or installation routes? Here are clear, objective answers.')}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-panel-glow border-brand-primary/35 shadow-lg'
                    : 'glass-panel hover:bg-brand-surface/55 hover:border-brand-primary/20'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4 items-start pr-4">
                    {/* Tiny category chip inside button */}
                    <span className="w-16 px-1.5 py-0.5 text-[8px] font-black bg-brand-card text-brand-primary border border-brand-surface-sec rounded uppercase tracking-wider font-mono shrink-0 mt-1 text-center">
                      {t(`faq.${faq.id}.category`, faq.category)}
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-white leading-snug">
                      {t(`faq.${faq.id}.question`, faq.question)}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-muted/55 shrink-0" />
                  )}
                </button>
 
                {/* Collapsible Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-brand-surface pb-4">
                        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed pt-4 font-sans font-normal pl-0 sm:pl-20">
                          {t(`faq.${faq.id}.answer`, faq.answer)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
 
        {/* Legal Advisory Note box */}
        <div className="p-4 glass-panel rounded-2xl flex gap-3 items-start mt-12 text-left">
          <ShieldAlert className="w-5 h-5 text-brand-muted/70 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-brand-muted uppercase tracking-widest font-mono">{t('faq.disclaimer_title', 'Platform Disclaimer & Advisory Notice')}</span>
            <p className="text-[10px] text-brand-muted/65 leading-normal font-sans font-normal">
              {t('faq.disclaimer_desc', 'MovieBox functions strictly as an interactive metadata search-indexing utility. It provides automated web connections to publicly discoverable stream routes on the web but does not index, store, host, or broadcast proprietary multimedia files itself. All product trademarks, content indexes, and company logos belong entirely to their respective developers.')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

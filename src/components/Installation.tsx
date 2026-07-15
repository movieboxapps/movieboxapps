/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Tv, Monitor, Laptop, AlertTriangle, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GuideStep {
  step: number;
  titleKey: string;
  descKey: string;
}

interface Guide {
  id: string;
  nameKey: string;
  subKey: string;
  icon: React.ComponentType<any>;
  steps: GuideStep[];
  noticeKey: string;
}

const GUIDES: Guide[] = [
  {
    id: 'mobile',
    nameKey: 'guide.mobile.name',
    subKey: 'guide.mobile.sub',
    icon: Smartphone,
    steps: [
      { step: 1, titleKey: 'guide.mobile.step1.title', descKey: 'guide.mobile.step1.desc' },
      { step: 2, titleKey: 'guide.mobile.step2.title', descKey: 'guide.mobile.step2.desc' },
      { step: 3, titleKey: 'guide.mobile.step3.title', descKey: 'guide.mobile.step3.desc' },
      { step: 4, titleKey: 'guide.mobile.step4.title', descKey: 'guide.mobile.step4.desc' }
    ],
    noticeKey: 'guide.mobile.notice'
  },
  {
    id: 'firestick',
    nameKey: 'guide.firestick.name',
    subKey: 'guide.firestick.sub',
    icon: Tv,
    steps: [
      { step: 1, titleKey: 'guide.firestick.step1.title', descKey: 'guide.firestick.step1.desc' },
      { step: 2, titleKey: 'guide.firestick.step2.title', descKey: 'guide.firestick.step2.desc' },
      { step: 3, titleKey: 'guide.firestick.step3.title', descKey: 'guide.firestick.step3.desc' },
      { step: 4, titleKey: 'guide.firestick.step4.title', descKey: 'guide.firestick.step4.desc' }
    ],
    noticeKey: 'guide.firestick.notice'
  },
  {
    id: 'smarttv',
    nameKey: 'guide.smarttv.name',
    subKey: 'guide.smarttv.sub',
    icon: Monitor,
    steps: [
      { step: 1, titleKey: 'guide.smarttv.step1.title', descKey: 'guide.smarttv.step1.desc' },
      { step: 2, titleKey: 'guide.smarttv.step2.title', descKey: 'guide.smarttv.step2.desc' },
      { step: 3, titleKey: 'guide.smarttv.step3.title', descKey: 'guide.smarttv.step3.desc' },
      { step: 4, titleKey: 'guide.smarttv.step4.title', descKey: 'guide.smarttv.step4.desc' }
    ],
    noticeKey: 'guide.smarttv.notice'
  },
  {
    id: 'emulator',
    nameKey: 'guide.emulator.name',
    subKey: 'guide.emulator.sub',
    icon: Laptop,
    steps: [
      { step: 1, titleKey: 'guide.emulator.step1.title', descKey: 'guide.emulator.step1.desc' },
      { step: 2, titleKey: 'guide.emulator.step2.title', descKey: 'guide.emulator.step2.desc' },
      { step: 3, titleKey: 'guide.emulator.step3.title', descKey: 'guide.emulator.step3.desc' },
      { step: 4, titleKey: 'guide.emulator.step4.title', descKey: 'guide.emulator.step4.desc' }
    ],
    noticeKey: 'guide.emulator.notice'
  }
];

export default function Installation() {
  const [activeGuide, setActiveGuide] = useState('mobile');
  const { t } = useLanguage();

  const selectedGuide = GUIDES.find(g => g.id === activeGuide) || GUIDES[0];
  const IconComponent = selectedGuide.icon;

  return (
    <section id="installation" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('guide.badge', 'INSTALLATION SCHEMATICS')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('guide.title', 'Comprehensive Installation Guide')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('guide.description', 'MovieBox is built with native code tailored for each platform. Click your target device below to see a detailed, step-by-step sideload guide.')}
          </p>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Guide Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {GUIDES.map((guide, gIdx) => {
              const GuideIcon = guide.icon;
              const isActive = activeGuide === guide.id;
              return (
                <motion.button
                  key={guide.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gIdx * 0.08 }}
                  id={`guide-btn-${guide.id}`}
                  onClick={() => setActiveGuide(guide.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-surface to-brand-card border-brand-primary/30 shadow-lg shadow-brand-primary/5'
                      : 'bg-brand-surface/20 border-brand-surface-sec/60 hover:border-brand-primary/15 hover:bg-brand-surface/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                      isActive
                        ? 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary'
                        : 'bg-brand-card border-brand-surface-sec text-brand-muted'
                    }`}>
                      <GuideIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-sans font-bold text-sm ${isActive ? 'text-white' : 'text-brand-text-sec'}`}>
                        {t(guide.nameKey)}
                      </span>
                      <span className="text-[10px] text-brand-muted font-mono mt-0.5">{t(guide.subKey)}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-brand-primary translate-x-1' : 'text-brand-muted'}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Steps Timeline (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 relative min-h-[440px] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6">
              {/* Header inside Steps */}
              <div className="flex items-center gap-3 border-b border-brand-surface pb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-black text-sm sm:text-base text-white">
                  {t('guide.timeline_title_prefix', 'How to Install on')} {t(selectedGuide.nameKey)}
                </h3>
              </div>

              {/* Step Timeline */}
              <div className="space-y-6 relative pl-3">
                {/* Visual Connector Line */}
                <div className="absolute top-2 bottom-2 left-[13px] w-0.5 bg-brand-surface-sec"></div>

                {selectedGuide.steps.map((st, sIdx) => (
                  <motion.div
                    key={`${selectedGuide.id}-step-${st.step}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: sIdx * 0.08 }}
                    className="flex gap-4 relative"
                  >
                    <span className="w-7 h-7 rounded-full bg-brand-card border-2 border-brand-primary text-xs text-brand-primary font-bold font-mono flex items-center justify-center shrink-0 z-10 shadow-md">
                      {st.step}
                    </span>
                    <div className="space-y-1.5 pt-0.5">
                      <h4 className="font-sans font-bold text-sm text-white leading-none">{t(st.titleKey)}</h4>
                      <p className="text-xs text-brand-muted leading-relaxed font-sans font-normal">{t(st.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Warning / Advice box */}
            <div className="p-4 bg-amber-500/5 border border-amber-500/15 rounded-2xl flex gap-3 items-start mt-6">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">
                  {t('guide.notice_badge', 'EXPERT NOTICE')}
                </span>
                <p className="text-[10px] text-brand-muted leading-normal font-sans font-normal">{t(selectedGuide.noticeKey)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

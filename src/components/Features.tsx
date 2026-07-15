/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Tv, Download, Languages, Play, Cast, Sliders, Lock, Sparkles, ArrowUpRight } from 'lucide-react';
import { PREMIUM_FEATURES, COMFORT_FEATURES } from '../data';
import { useLanguage } from '../context/LanguageContext';

// Map icon string names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldAlert: ShieldAlert,
  Tv: Tv,
  Download: Download,
  Languages: Languages,
  Play: Play,
  Cast: Cast,
  Sliders: Sliders,
  Lock: Lock
};

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('features.badge', 'PREMIUM CAPABILITIES')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('features.title', 'Engineered with Premium Playback Optimization')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('features.description', 'The MovieBox App matches blazing-fast server networks with an advanced, local multi-sourced stream resolution player to deliver high-fidelity entertainment on all devices.')}
          </p>
        </motion.div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {PREMIUM_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || ShieldAlert;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-brand-surface/40 hover:bg-brand-surface/85 rounded-3xl p-6 sm:p-8 border border-brand-surface-sec/60 hover:border-brand-primary/20 transition-all duration-300 shadow-md hover:shadow-brand-primary/5"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-card flex items-center justify-center border border-brand-surface-sec shadow-inner text-brand-primary group-hover:text-brand-bg group-hover:bg-brand-primary transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans font-bold text-lg text-white group-hover:text-brand-highlight transition-colors duration-300">
                        {t(`features.${feature.id}.title`, feature.title)}
                      </h3>
                      {feature.isPro && (
                        <span className="px-1.5 py-0.5 text-[8px] font-black bg-brand-primary/10 text-brand-primary rounded border border-brand-primary/20 uppercase tracking-widest font-mono">
                          {t('features.pro_badge', 'PRO')}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans font-normal">
                      {t(`features.${feature.id}.desc`, feature.description)}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brand-highlight font-semibold font-mono">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>{t(`features.${feature.id}.benefit`, feature.benefit)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineered Comfort Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-highlight rounded-full border border-brand-highlight/15 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('features.comfort_badge', 'ENGINEERED COMFORT')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('features.comfort_title', 'Built-In Intelligent Engine')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('features.comfort_desc', 'Every detail is tailored to provide a frictionless viewing experience, whether casting to high-end TVs or on a mobile commute.')}
          </p>
        </motion.div>

        {/* Comfort Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMFORT_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || ShieldAlert;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-brand-surface/20 hover:bg-brand-surface/60 rounded-2xl p-6 border border-brand-surface-sec/45 hover:border-brand-primary/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Small Icon Container */}
                  <div className="w-10 h-10 rounded-xl bg-brand-card flex items-center justify-center border border-brand-surface-sec text-brand-highlight group-hover:text-brand-bg group-hover:bg-brand-highlight transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-base text-white group-hover:text-brand-highlight transition-colors duration-300">
                      {t(`features.${feature.id}.title`, feature.title)}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-sans font-normal">
                      {t(`features.${feature.id}.desc`, feature.description)}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-surface-sec/40 flex items-center gap-1.5 text-[10px] text-brand-muted font-mono tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                  <span>{t(`features.${feature.id}.benefit`, feature.benefit)}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

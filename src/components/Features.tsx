/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Tv, Download, Languages, Play, Cast, Sliders, Lock, Sparkles } from 'lucide-react';
import { PREMIUM_FEATURES, COMFORT_FEATURES } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { PremiumFeatureCard, ComfortFeatureCard } from './FeatureCard';

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
          {PREMIUM_FEATURES.map((feature, idx) => (
            <PremiumFeatureCard 
              key={feature.id} 
              feature={feature} 
              idx={idx} 
              iconMap={iconMap} 
            />
          ))}
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
          {COMFORT_FEATURES.map((feature, idx) => (
            <ComfortFeatureCard 
              key={feature.id} 
              feature={feature} 
              idx={idx} 
              iconMap={iconMap} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

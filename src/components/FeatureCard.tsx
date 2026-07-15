/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ShieldAlert, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
  isPro?: boolean;
}

interface FeatureCardProps {
  feature: FeatureItem;
  idx: number;
  iconMap: Record<string, React.ComponentType<any>>;
}

// Custom theme color mappings for each feature ID to make hover states look highly premium and distinctive
const premiumGlowMap: Record<string, {
  glowColor: string;
  iconBgHover: string;
  iconTextHover: string;
  textGlowClass: string;
  borderColorHover: string;
}> = {
  'pref-1': { // Blazing CDN & Server Network
    glowColor: 'rgba(56, 189, 248, 0.20)', // Sky Blue
    iconBgHover: 'group-hover:bg-sky-500 group-hover:text-black group-hover:border-sky-500',
    iconTextHover: 'text-sky-400',
    textGlowClass: 'group-hover:text-sky-400',
    borderColorHover: 'hover:border-sky-500/35'
  },
  'pref-2': { // Adaptive Multi-Source Player
    glowColor: 'rgba(236, 72, 153, 0.20)', // Pink
    iconBgHover: 'group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500',
    iconTextHover: 'text-pink-400',
    textGlowClass: 'group-hover:text-pink-400',
    borderColorHover: 'hover:border-pink-500/35'
  },
  'pref-3': { // Offline Movie Container
    glowColor: 'rgba(168, 85, 247, 0.20)', // Purple
    iconBgHover: 'group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500',
    iconTextHover: 'text-purple-400',
    textGlowClass: 'group-hover:text-purple-400',
    borderColorHover: 'hover:border-purple-500/35'
  },
  'pref-4': { // Cinematic Multi-Language Tracks
    glowColor: 'rgba(245, 158, 11, 0.20)', // Amber
    iconBgHover: 'group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500',
    iconTextHover: 'text-amber-400',
    textGlowClass: 'group-hover:text-amber-400',
    borderColorHover: 'hover:border-amber-500/35'
  }
};

const comfortGlowMap: Record<string, {
  glowColor: string;
  iconBgHover: string;
  textGlowClass: string;
  borderColorHover: string;
}> = {
  'com-1': { // Universal casting
    glowColor: 'rgba(14, 165, 233, 0.18)', // Sky
    iconBgHover: 'group-hover:bg-sky-500 group-hover:text-black',
    textGlowClass: 'group-hover:text-sky-400',
    borderColorHover: 'hover:border-sky-500/25'
  },
  'com-2': { // Advanced play tuner
    glowColor: 'rgba(139, 92, 246, 0.18)', // Violet
    iconBgHover: 'group-hover:bg-violet-500 group-hover:text-white',
    textGlowClass: 'group-hover:text-violet-400',
    borderColorHover: 'hover:border-violet-500/25'
  },
  'com-3': { // Restricted Mode
    glowColor: 'rgba(244, 63, 94, 0.18)', // Rose
    iconBgHover: 'group-hover:bg-rose-500 group-hover:text-white',
    textGlowClass: 'group-hover:text-rose-400',
    borderColorHover: 'hover:border-rose-500/25'
  },
  'com-4': { // Pure streaming layout
    glowColor: 'rgba(16, 185, 129, 0.18)', // Emerald
    iconBgHover: 'group-hover:bg-emerald-500 group-hover:text-black',
    textGlowClass: 'group-hover:text-emerald-400',
    borderColorHover: 'hover:border-emerald-500/25'
  }
};

export function PremiumFeatureCard({ feature, idx, iconMap }: FeatureCardProps) {
  const { t } = useLanguage();
  const IconComponent = iconMap[feature.icon] || ShieldAlert;
  const cardRef = useRef<HTMLDivElement>(null);

  const theme = premiumGlowMap[feature.id] || {
    glowColor: 'rgba(56, 189, 248, 0.15)',
    iconBgHover: 'group-hover:bg-brand-primary group-hover:text-brand-bg group-hover:border-brand-primary',
    iconTextHover: 'text-brand-primary',
    textGlowClass: 'group-hover:text-brand-highlight',
    borderColorHover: 'hover:border-brand-primary/20'
  };

  // Motion physics configuration
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="perspective-1000 w-full"
      id={`premium-feature-container-${feature.id}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className={`group relative bg-brand-surface/45 hover:bg-brand-surface/90 rounded-3xl p-6 sm:p-8 border border-brand-surface-sec/60 transition-all duration-300 shadow-md hover:shadow-lg ${theme.borderColorHover}`}
        id={`premium-feature-card-${feature.id}`}
      >
        {/* Spot light hover glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) => `radial-gradient(circle 200px at ${gx}% ${gy}%, ${theme.glowColor}, transparent 80%)`
            ),
          }}
        />

        <div 
          className="flex flex-col sm:flex-row items-start gap-5 relative z-20"
          style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
        >
          {/* Icon Container with depth */}
          <div 
            className={`w-12 h-12 rounded-2xl bg-brand-card flex items-center justify-center border border-brand-surface-sec shadow-inner ${theme.iconTextHover} ${theme.iconBgHover} transition-all duration-300 shrink-0`}
            style={{ transform: 'translateZ(20px)' }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          {/* Texts content with depth spacing */}
          <div 
            className="flex-1 space-y-3"
            style={{ transform: 'translateZ(10px)' }}
          >
            <div className="flex items-center gap-2">
              <h3 className={`font-sans font-bold text-lg text-white ${theme.textGlowClass} transition-colors duration-300`}>
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
    </div>
  );
}

export function ComfortFeatureCard({ feature, idx, iconMap }: FeatureCardProps) {
  const { t } = useLanguage();
  const IconComponent = iconMap[feature.icon] || ShieldAlert;
  const cardRef = useRef<HTMLDivElement>(null);

  const theme = comfortGlowMap[feature.id] || {
    glowColor: 'rgba(56, 189, 248, 0.12)',
    iconBgHover: 'group-hover:bg-brand-highlight group-hover:text-brand-bg',
    textGlowClass: 'group-hover:text-brand-highlight',
    borderColorHover: 'hover:border-brand-primary/15'
  };

  // Motion physics configuration
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="perspective-1000 w-full h-full"
      id={`comfort-feature-container-${feature.id}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: idx * 0.08 }}
        className={`group bg-brand-surface/20 hover:bg-brand-surface/65 rounded-2xl p-6 border border-brand-surface-sec/45 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-md ${theme.borderColorHover}`}
        id={`comfort-feature-card-${feature.id}`}
      >
        {/* Dynamic spot light hover glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) => `radial-gradient(circle 130px at ${gx}% ${gy}%, ${theme.glowColor}, transparent 80%)`
            ),
          }}
        />

        <div 
          className="space-y-4 relative z-20"
          style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
        >
          {/* Small Icon Container */}
          <div 
            className={`w-10 h-10 rounded-xl bg-brand-card flex items-center justify-center border border-brand-surface-sec text-brand-highlight ${theme.iconBgHover} transition-all duration-300`}
            style={{ transform: 'translateZ(15px)' }}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          <div 
            className="space-y-1.5"
            style={{ transform: 'translateZ(5px)' }}
          >
            <h3 className={`font-sans font-bold text-base text-white ${theme.textGlowClass} transition-colors duration-300`}>
              {t(`features.${feature.id}.title`, feature.title)}
            </h3>
            <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-sans font-normal">
              {t(`features.${feature.id}.desc`, feature.description)}
            </p>
          </div>
        </div>

        <div 
          className="pt-4 mt-4 border-t border-brand-surface-sec/40 flex items-center gap-1.5 text-[10px] text-brand-muted font-mono tracking-wide relative z-20"
          style={{ transform: 'translateZ(8px)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
          <span>{t(`features.${feature.id}.benefit`, feature.benefit)}</span>
        </div>
      </motion.div>
    </div>
  );
}

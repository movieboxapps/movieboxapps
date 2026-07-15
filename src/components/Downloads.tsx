/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Tv as TvIcon, Monitor, Tablet, Download, ShieldCheck, CheckCircle2, Server, HelpCircle, Activity, Info, Sparkles, RefreshCw } from 'lucide-react';
import { DEVICE_CONFIGS } from '../data';
import { useLanguage } from '../context/LanguageContext';

// Map icon string names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  Smartphone: Smartphone,
  Tv2: TvIcon,
  Monitor: Monitor,
  Tablet: Tablet
};

export default function Downloads() {
  const [selectedTab, setSelectedTab] = useState('android');
  const { t } = useLanguage();

  const activeConfig = DEVICE_CONFIGS.find(cfg => cfg.id === selectedTab) || DEVICE_CONFIGS[0];

  return (
    <section id="compatibility" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('sideload.badge', 'SECURE DOWNLOAD NODE')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('sideload.title', 'Get MovieBox For Your Device')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('sideload.description', 'Download our certified virus-free installer. Follow the simple setup guides customized below for smartphones, smart TVs, and streaming sticks.')}
          </p>
        </div>

        {/* Device Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {DEVICE_CONFIGS.map(cfg => {
            const Icon = iconMap[cfg.icon] || Smartphone;
            const isActive = selectedTab === cfg.id;
            return (
              <button
                key={cfg.id}
                id={`device-tab-${cfg.id}`}
                onClick={() => setSelectedTab(cfg.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-tr from-brand-surface to-brand-card text-brand-primary border-brand-primary/30 shadow-lg shadow-brand-primary/10'
                    : 'bg-brand-surface/30 text-brand-muted border-brand-surface-sec hover:text-white hover:bg-brand-surface/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-primary' : 'text-brand-muted'}`} />
                <span>{cfg.name}</span>
                {cfg.isRecommended && (
                  <span className="px-1.5 py-0.5 text-[8px] font-black bg-brand-primary text-brand-bg rounded uppercase leading-none font-sans tracking-wide">
                    {t('sideload.recommended', 'REC')}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Specifications Panel (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-surface pb-4">
                <Info className="w-5 h-5 text-brand-primary" />
                <h3 className="font-sans font-bold text-lg text-white">{t('sideload.specs.title', 'Application Specifications')}</h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-brand-surface-sec/40">
                  <span className="text-brand-muted">{t('sideload.specs.version', 'Latest Version')}</span>
                  <span className="text-brand-primary font-bold font-mono">{activeConfig.version}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-surface-sec/40">
                  <span className="text-brand-muted">{t('sideload.specs.size', 'File Size')}</span>
                  <span className="text-white font-semibold font-mono">{activeConfig.fileSize}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-surface-sec/40">
                  <span className="text-brand-muted">{t('sideload.specs.developer', 'Developer')}</span>
                  <span className="text-white font-semibold">{t('sideload.specs.developer_val', 'MovieBox Lab Entertainment')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-surface-sec/40">
                  <span className="text-brand-muted">{t('sideload.specs.category', 'Category')}</span>
                  <span className="text-brand-highlight font-bold font-sans">{t('sideload.specs.category_val', 'Entertainment & Media Streaming')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-surface-sec/40">
                  <span className="text-brand-muted">{t('sideload.specs.compatibility', 'System Compatibility')}</span>
                  <span className="text-white font-medium text-right max-w-[200px]">
                    {selectedTab === 'android' && t('sideload.specs.comp.android', 'Android 5.0+ / Fire OS 6.0+')}
                    {selectedTab === 'firestick' && t('sideload.specs.comp.firestick', 'Fire OS 6.0+ / Firestick Lite, 4K, Cube')}
                    {selectedTab === 'smarttv' && t('sideload.specs.comp.smarttv', 'Android TV 7.0+ / Sony, TCL, Philips')}
                    {selectedTab === 'ios' && t('sideload.specs.comp.ios', 'iOS 14.0+ / iPadOS 14.0+')}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-surface-sec/40">
                  <span className="text-brand-muted">{t('sideload.specs.updated', 'Last Updated')}</span>
                  <span className="text-brand-text-sec font-semibold font-mono">{activeConfig.releaseDate}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-brand-muted">{t('sideload.specs.license', 'Release License')}</span>
                  <span className="text-red-400 font-extrabold uppercase font-mono tracking-wide">{t('sideload.specs.license_val', 'AD-FREE PREMIUM')}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-brand-surface">
              <div className="flex items-center gap-1.5 p-2 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-primary font-bold uppercase leading-none">{t('sideload.specs.virus_free', 'Virus-Free')}</span>
                  <span className="text-[8px] text-brand-muted font-mono mt-0.5">{t('sideload.specs.clean', '100% Clean')}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 p-2 bg-brand-highlight/5 rounded-xl border border-brand-highlight/10">
                <RefreshCw className="w-4 h-4 text-brand-highlight shrink-0 animate-spin-slow" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-highlight font-bold uppercase leading-none">{t('sideload.specs.auto_update', 'Auto Updates')}</span>
                  <span className="text-[8px] text-brand-muted font-mono mt-0.5">{t('sideload.specs.push', 'Rush-Safe Push')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Control Box (7 cols) */}
          <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-brand-surface pb-4">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-brand-muted font-mono tracking-wider uppercase font-bold">{t('sideload.accelerator_badge', 'DOWNLOAD NODE ACCELERATOR')}</span>
                  <h3 className="font-sans font-black text-lg text-white">
                    {t('sideload.download_direct_prefix', 'Download Direct')}{' '}
                    {selectedTab === 'ios' ? 'IPA' : 'APK'}{' '}
                    {t('sideload.download_direct_suffix', 'Installer')}
                  </h3>
                </div>
                <span className="px-2 py-1 text-[10px] font-black bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-lg">
                  {t('sideload.recommended', 'RECOMMENDED')}
                </span>
              </div>

              <div className="p-4 bg-brand-bg rounded-2xl border border-brand-surface-sec font-mono space-y-1.5 text-left">
                <div className="flex justify-between text-[11px] text-brand-muted">
                  <span>{t('sideload.target_file', 'Target File:')}</span>
                  <span className="text-brand-primary font-bold">{activeConfig.fileName}</span>
                </div>
                <div className="flex justify-between text-[11px] text-brand-muted">
                  <span>{t('sideload.package_hash', 'Package Hash:')}</span>
                  <span className="text-brand-text-sec">SHA-256: 8b2dfa4...c0de</span>
                </div>
              </div>

              {/* Install guide step list preview */}
              <div className="space-y-3 text-left">
                <span className="text-xs font-bold text-brand-text-sec flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
                  {t('sideload.tutorial_preview', 'INSTALLATION TUTORIAL PREVIEW')}
                </span>
                <div className="space-y-2">
                  {activeConfig.steps.slice(0, 2).map((st) => {
                    const stepIndex = `step${st.step}`;
                    const titleKey = `guide.${selectedTab}.${stepIndex}.title`;
                    const descKey = `guide.${selectedTab}.${stepIndex}.desc`;
                    return (
                      <div key={st.step} className="flex items-start gap-2.5 text-xs text-left">
                        <span className="w-5 h-5 rounded bg-brand-card border border-brand-surface-sec text-[10px] text-brand-primary font-mono font-bold flex items-center justify-center shrink-0 shadow-sm">
                          {st.step}
                        </span>
                        <p className="text-brand-muted leading-normal font-sans font-normal">
                          <strong className="text-white">{t(titleKey, st.title)}:</strong> {t(descKey, st.description)}
                        </p>
                      </div>
                    );
                  })}
                  <p className="text-[11px] text-brand-muted italic pl-7.5 font-sans">
                    {t('sideload.more_steps_prefix', '...and')}{' '}
                    {activeConfig.steps.length - 2}{' '}
                    {t('sideload.more_steps_suffix', 'more steps in the complete guide below.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-6 mt-6 border-t border-brand-surface space-y-6">
              <a
                id="direct-download-action-btn"
                href="https://www.moviesbox.com.co/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative group overflow-hidden bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary-hover hover:to-brand-accent/95 text-brand-bg font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/25 transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer select-none"
              >
                <Download className="w-5 h-5 text-brand-bg" />
                <span>{t('sideload.click_to_start', 'Click to Start Download')}</span>
              </a>

              {/* Sub security badges list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-[10px] text-brand-muted font-sans text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{t('sideload.bullets.no_reg', 'No Registration or User Account Needed')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{t('sideload.bullets.no_speed', 'No Speed Limits or Bandwidth Caps')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{t('sideload.bullets.mirrors', 'Dynamic Mirrors with Auto-Failover Backup')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{t('sideload.bullets.ssl', 'Secured with 256-Bit SSL Encryption')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

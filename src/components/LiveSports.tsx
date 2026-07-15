/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Radio, Trophy, Zap, ArrowRight } from 'lucide-react';
import { LIVE_EVENTS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function LiveSports() {
  const [filter, setFilter] = useState<'ALL' | 'LIVE' | 'UPCOMING'>('ALL');
  const { t } = useLanguage();

  const filteredEvents = LIVE_EVENTS.filter(evt => {
    if (filter === 'ALL') return true;
    return evt.status === filter;
  });

  return (
    <section id="live-sports" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/85 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
              <Radio className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('live_sports.badge', 'LIVE SPORTS STREAM')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white leading-tight">
              {t('live_sports.title', 'Live Sports & Premium PPV Events')}
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
              {t('live_sports.description', 'Stream premium sports streams without regional blocks or paywalls. Features live status tags and direct high-speed links.')}
            </p>
          </div>

          {/* Inline Pills */}
          <div className="flex items-center gap-1 bg-brand-surface p-1 rounded-xl border border-brand-surface-sec w-fit self-start md:self-end">
            {(['ALL', 'LIVE', 'UPCOMING'] as const).map(tab => (
              <button
                key={tab}
                id={`sports-filter-${tab.toLowerCase()}`}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === tab
                    ? 'bg-brand-primary text-brand-bg shadow-md shadow-brand-primary/10'
                    : 'text-brand-muted hover:text-white'
                }`}
              >
                {t(`live_sports.filter.${tab.toLowerCase()}`, tab)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt) => {
              const isLive = evt.status === 'LIVE';
              return (
                <motion.div
                  key={evt.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel hover:bg-brand-surface/65 hover:border-brand-primary/25 rounded-3xl p-6 flex flex-col justify-between space-y-6 relative group transition-all text-left shadow-sm hover:shadow-brand-primary/5"
                >
                  <div className="space-y-4">
                    {/* Top strip with badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-brand-muted font-mono tracking-wider uppercase flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-brand-primary" />
                        {t(`live_sports.${evt.id}.sport`, evt.sport)}
                      </span>

                      {isLive ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-[9px] font-extrabold rounded font-mono">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-ping"></span>
                          {t('live_sports.live_status', 'LIVE STREAM')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-highlight/10 text-brand-highlight border border-brand-highlight/20 text-[9px] font-extrabold rounded font-mono">
                          {t('live_sports.upcoming_status', 'UPCOMING')}
                        </span>
                      )}
                    </div>

                    {/* Fixture Team Names & VS indicator */}
                    <div className="flex items-center justify-center gap-4 py-3.5 bg-brand-bg/50 rounded-2xl border border-brand-surface-sec/45">
                      {/* Team Home */}
                      <div className="flex-1 flex flex-col items-center text-center px-2">
                        <div className="w-9 h-9 rounded-full bg-brand-card border border-brand-surface-sec flex items-center justify-center font-black text-xs text-brand-primary">
                          {evt.teamHome[0]}
                        </div>
                        <span className="font-sans font-bold text-xs sm:text-sm text-white mt-1.5 truncate max-w-[120px]">
                          {t(`live_sports.${evt.id}.teamHome`, evt.teamHome)}
                        </span>
                      </div>

                      {/* VS separator */}
                      <div className="px-2.5 py-1 bg-brand-card border border-brand-surface-sec rounded-lg text-[10px] font-black text-brand-muted font-mono">
                        VS
                      </div>

                      {/* Team Away */}
                      <div className="flex-1 flex flex-col items-center text-center px-2">
                        <div className="w-9 h-9 rounded-full bg-brand-card border border-brand-surface-sec flex items-center justify-center font-black text-xs text-brand-primary">
                          {evt.teamAway[0]}
                        </div>
                        <span className="font-sans font-bold text-xs sm:text-sm text-white mt-1.5 truncate max-w-[120px]">
                          {t(`live_sports.${evt.id}.teamAway`, evt.teamAway)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip with channel names and CTA */}
                  <div className="pt-4 border-t border-brand-surface-sec/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-brand-primary animate-pulse' : 'bg-brand-muted'}`}></div>
                      <span className="text-brand-muted font-medium font-mono">{t(`live_sports.${evt.id}.timeInfo`, evt.timeInfo)}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-brand-muted font-mono">
                      <span>{t('live_sports.source_label', 'Source:')}</span>
                      <span className="text-brand-primary font-bold">{t(`live_sports.${evt.id}.channel`, evt.channel)}</span>
                    </div>
                  </div>

                  {/* Absolute subtle hover overlay link icon */}
                  <a
                    href="https://www.moviebox.com.ph/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 cursor-pointer rounded-3xl"
                    aria-label={`Stream ${evt.sport}`}
                  ></a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global Catalog stats banner */}
        <div className="mt-12 p-6 glass-panel-glow rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
              <Zap className="w-5 h-5 text-brand-primary" />
            </div>
            <p className="text-xs sm:text-sm text-brand-muted leading-normal max-w-xl text-left">
              <strong>{t('live_sports.banner.title', 'All-Access PPV Pass Included:')}</strong> {t('live_sports.banner.description', 'From high-definition streams of premier football matches to exclusive main card combat event broadcasts, get fully integrated streams without paying premium sub rates.')}
            </p>
          </div>
          <a
            id="sports-center-cta-btn"
            href="https://www.moviebox.com.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
          >
            <span>{t('live_sports.banner.cta', 'Access Sports Center')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

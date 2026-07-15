/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Download, Sparkles, Tv, Shield, Zap, Flame, Star, Play, Search, Heart, User, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollToFeatures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Decorative Radial Lighting (Luxury Emerald Ambient Glows) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-[150px] pointer-events-none"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Copy (7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span className="text-[10px] font-bold tracking-wider uppercase font-mono">{t('hero.tagline', 'THE ULTIMATE STREAMING PLATFORM')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[1.1] text-white"
            >
              {t('hero.headline', 'Cinema Quality')} <br />
              <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-accent bg-clip-text text-transparent">
                {t('hero.headline_sub', 'Streaming. Anytime. Anywhere.')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-brand-muted max-w-2xl font-sans font-normal leading-relaxed"
            >
              {t('hero.description', 'Experience limitless, ad-free 4K UHD movies, trending TV series, and live global sports on MovieBox. Built on high-speed servers with absolute compatibility. No subscription, no credit card required.')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://www.moviesbox.com.co/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-brand-bg bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl hover:from-brand-primary-hover hover:to-brand-accent/90 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 animate-bounce-slow" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-sm font-black">{t('hero.download_btn', 'Download APK')}</span>
                  <span className="text-[10px] font-bold text-brand-bg/80 mt-0.5">v4.8.2 • 32.4 MB</span>
                </div>
              </a>

              <button
                onClick={handleScrollToFeatures}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-brand-text-sec hover:text-white bg-brand-surface/60 hover:bg-brand-surface border border-brand-surface-sec hover:border-brand-primary/20 rounded-2xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <Film className="w-4 h-4 text-brand-primary" />
                <span>{t('hero.explore_btn', 'Explore Features')}</span>
              </button>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center border border-brand-surface-sec">
                  <Flame className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-brand-muted font-mono tracking-wider">DOWNLOADS</span>
                  <span className="text-xs font-extrabold text-white">200M+ Global</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center border border-brand-surface-sec">
                  <Shield className="w-4 h-4 text-brand-highlight" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-brand-muted font-mono tracking-wider">SECURITY</span>
                  <span className="text-xs font-extrabold text-white">100% Secure</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center border border-brand-surface-sec">
                  <Tv className="w-4 h-4 text-brand-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-brand-muted font-mono tracking-wider">FIDELITY</span>
                  <span className="text-xs font-extrabold text-white">4K Atmos UHD</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center border border-brand-surface-sec">
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-brand-muted font-mono tracking-wider">NETWORK</span>
                  <span className="text-xs font-extrabold text-white">Direct Mirrors</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Device Mockup (5 cols on large screens) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
              className="relative w-72 sm:w-80 h-[560px] sm:h-[620px] rounded-[44px] border-[10px] border-brand-surface-sec bg-brand-bg p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] shadow-black/80 flex flex-col overflow-hidden select-none outline outline-1 outline-brand-primary/10 animate-float"
              style={{
                boxShadow: '0px 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(34, 197, 94, 0.12)'
              }}
            >
              {/* Smartphone Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-brand-surface-sec rounded-b-2xl z-40 flex items-center justify-center">
                <div className="w-12 h-1 bg-brand-card rounded-full mb-1"></div>
                <div className="w-2.5 h-2.5 bg-zinc-950 rounded-full absolute right-6 top-1 border border-brand-surface/40"></div>
              </div>

              {/* In-App Interface Layout */}
              <div className="w-full h-full flex flex-col bg-brand-bg rounded-[32px] overflow-hidden text-white relative font-sans text-xs">
                {/* Simulated Top Status Bar */}
                <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[10px] text-brand-muted font-semibold z-30">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 bg-brand-primary/15 text-brand-primary border border-brand-primary/20 text-[8px] font-bold rounded">4K PRO</span>
                    <span className="w-2.5 h-2.5 bg-brand-primary rounded-full inline-block animate-pulse"></span>
                  </div>
                </div>

                {/* Simulated App Header */}
                <div className="flex items-center justify-between px-4 py-2 z-30 border-b border-brand-surface/30 bg-brand-bg/50 backdrop-blur-md">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-black text-xs text-brand-bg">M</div>
                    <span className="font-extrabold text-xs tracking-tight">MovieBox</span>
                  </div>
                  <div className="flex gap-2">
                    <Search className="w-3.5 h-3.5 text-brand-muted" />
                    <User className="w-3.5 h-3.5 text-brand-muted" />
                  </div>
                </div>

                {/* Simulated Scrollable Area */}
                <div className="flex-1 overflow-y-auto px-3.5 pb-8 space-y-4 scrollbar-none">
                  {/* Category Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pt-3 pb-1 scrollbar-none">
                    <span className="px-2.5 py-1 bg-brand-primary text-[8px] font-extrabold rounded-full text-brand-bg">All Content</span>
                    <span className="px-2.5 py-1 bg-brand-card text-[8px] font-bold text-brand-text-sec rounded-full border border-brand-surface-sec/55">Movies</span>
                    <span className="px-2.5 py-1 bg-brand-card text-[8px] font-bold text-brand-text-sec rounded-full border border-brand-surface-sec/55">TV Series</span>
                    <span className="px-2.5 py-1 bg-brand-card text-[8px] font-bold text-brand-text-sec rounded-full border border-brand-surface-sec/55">Live Sports</span>
                  </div>

                  {/* Feature Poster */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-brand-card group shadow-lg border border-brand-surface-sec/60">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-brand-primary/5 z-0"></div>
                    
                    {/* Simulated visual background for movie poster */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 z-20 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-brand-primary text-[7px] font-black rounded text-brand-bg tracking-wide">TRENDING</span>
                        <span className="text-[9px] text-brand-text-sec flex items-center gap-0.5 font-bold">
                          <Star className="w-2.5 h-2.5 fill-brand-primary stroke-brand-primary" /> 9.4
                        </span>
                      </div>
                      <span className="font-extrabold text-xs tracking-tight leading-none text-white">Dune: Part Two</span>
                      <span className="text-[8px] text-brand-muted font-mono">Sci-Fi • Adventure • 4K UHD</span>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute right-3 bottom-3 w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center shadow-md shadow-brand-primary/30">
                        <Play className="w-3.5 h-3.5 fill-brand-bg stroke-brand-bg translate-x-0.5" />
                      </div>
                    </div>

                    {/* Faux image backdrop using standard abstract styles */}
                    <div className="w-full h-full bg-gradient-to-tr from-brand-surface-sec to-brand-bg flex items-center justify-center opacity-70">
                      <Tv className="w-10 h-10 text-brand-primary/10" />
                    </div>
                  </div>

                  {/* Continue Watching Row */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-[10px] text-zinc-300">Continue Watching</span>
                      <span className="text-[9px] font-bold text-brand-primary">View All</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-brand-card rounded-xl overflow-hidden border border-brand-surface-sec p-1.5 space-y-1.5">
                        <div className="relative aspect-video rounded-lg bg-gradient-to-br from-brand-surface-sec to-brand-bg flex items-center justify-center overflow-hidden">
                          <Play className="w-4 h-4 text-brand-primary/80" />
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-surface">
                            <div className="h-full w-2/3 bg-brand-primary"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[9px] truncate text-white">Gladiator II</span>
                          <span className="text-[7px] text-brand-muted">34m remaining</span>
                        </div>
                      </div>

                      <div className="bg-brand-card rounded-xl overflow-hidden border border-brand-surface-sec p-1.5 space-y-1.5">
                        <div className="relative aspect-video rounded-lg bg-gradient-to-br from-brand-surface-sec to-brand-bg flex items-center justify-center overflow-hidden">
                          <Play className="w-4 h-4 text-brand-primary/80" />
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-surface">
                            <div className="h-full w-1/4 bg-brand-primary"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[9px] truncate text-white">Spider-Man</span>
                          <span className="text-[7px] text-brand-muted">1h 12m left</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live TV Channels Badge */}
                  <div className="bg-gradient-to-r from-brand-primary/5 via-brand-surface/40 to-brand-accent/5 border border-brand-surface-sec/60 p-2.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-ping"></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-[8px] text-white uppercase tracking-wider">LIVE SPORTS EXCLUSIVE</span>
                        <span className="text-[7px] text-brand-muted">Direct Mirror Nodes</span>
                      </div>
                    </div>
                    <span className="text-[7px] bg-brand-primary text-brand-bg font-extrabold px-1.5 py-0.5 rounded leading-none">FREE</span>
                  </div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="border-t border-brand-surface-sec/60 bg-brand-surface/90 px-5 py-2 flex items-center justify-between text-brand-muted text-[8px] z-30">
                  <div className="flex flex-col items-center gap-0.5 text-brand-primary font-bold">
                    <Play className="w-3.5 h-3.5 fill-brand-primary/10" />
                    <span>Watch Now</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
                    <Tv className="w-3.5 h-3.5" />
                    <span>Live TV</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
                    <Heart className="w-3.5 h-3.5" />
                    <span>My List</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
                    <User className="w-3.5 h-3.5" />
                    <span>Profile</span>
                  </div>
                </div>

                {/* Simulated Apple Home Indicator Bar */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-surface-sec rounded-full z-40"></div>
              </div>
            </motion.div>

            {/* Glowing Orbs behind the Mockup */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

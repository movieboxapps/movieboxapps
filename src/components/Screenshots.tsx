/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Sliders, Server, Languages, Laptop, Volume2, Sun, Tv, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Slide {
  id: number;
  titleKey: string;
  defaultTitle: string;
  subtitleKey: string;
  defaultSubtitle: string;
  descriptionKey: string;
  defaultDescription: string;
  icon: React.ComponentType<any>;
  bulletHighlightKey: string;
  defaultBulletHighlight: string;
}

const SLIDES: Slide[] = [
  {
    id: 0,
    titleKey: 'slide.discover.title',
    defaultTitle: 'Discover Tab Dashboard',
    subtitleKey: 'slide.discover.subtitle',
    defaultSubtitle: 'CURATED ENTERTAINMENT HUB',
    descriptionKey: 'slide.discover.description',
    defaultDescription: 'Our primary exploration screen aggregates daily trending movies, recently updated TV episodes, and personalized recommendations based on your local history. Zero accounts or tracking involved.',
    icon: Tv,
    bulletHighlightKey: 'slide.discover.bullet',
    defaultBulletHighlight: 'Curated catalogs, categorized filters, instant watch indicators.'
  },
  {
    id: 1,
    titleKey: 'slide.player.title',
    defaultTitle: 'Advanced Player Controller',
    subtitleKey: 'slide.player.subtitle',
    defaultSubtitle: 'NATIVE VIDEO PLAYBACK ENGINE',
    descriptionKey: 'slide.player.description',
    defaultDescription: 'Engineered for fluid touch devices and mouse control. Control volume, audio tracks, play-rate, and visual brightness through gesture swipes directly on the video container.',
    icon: Sliders,
    bulletHighlightKey: 'slide.player.bullet',
    defaultBulletHighlight: 'Dolby Vision support, adaptive buffering, swipe controls.'
  },
  {
    id: 2,
    titleKey: 'slide.scrapers.title',
    defaultTitle: 'High-Speed Index Scrapers',
    subtitleKey: 'slide.scrapers.subtitle',
    defaultSubtitle: 'REAL-TIME MIRROR ANALYSIS',
    descriptionKey: 'slide.scrapers.description',
    defaultDescription: 'Watch the core engine search and verify mirror pathways in real-time. The scraper evaluates bandwidth speeds and selects the best stream with auto-failover safeguards.',
    icon: Server,
    bulletHighlightKey: 'slide.scrapers.bullet',
    defaultBulletHighlight: 'Multi-threaded crawl engines, live speed ratings, backup links.'
  },
  {
    id: 3,
    titleKey: 'slide.subtitles.title',
    defaultTitle: 'Subtitles Synchronizer Panel',
    subtitleKey: 'slide.subtitles.subtitle',
    defaultSubtitle: 'ACCESSIBILITY & LANGUAGES',
    descriptionKey: 'slide.subtitles.description',
    defaultDescription: 'No more out-of-sync audio. Our dedicated subtitles overlay panel lets you adjust text synchronization down to milliseconds, choose custom fonts, colors, and font scales.',
    icon: Languages,
    bulletHighlightKey: 'slide.subtitles.bullet',
    defaultBulletHighlight: 'SRT offset adjustments, 45+ languages, visual styling presets.'
  }
];

export default function Screenshots() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useLanguage();

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const activeSlide = SLIDES[activeIdx];
  const ActiveIcon = activeSlide.icon;

  return (
    <section id="screenshots" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/85 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <Laptop className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('screenshots.badge', 'VISUAL INTERFACE PREVIEW')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('screenshots.title', 'App UI Screenshots Gallery')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('screenshots.description', 'Explore the clean, intuitive, and highly accessible user interface of MovieBox. Built from the ground up for quick exploration and smooth performance.')}
          </p>
        </div>

        {/* Slideshow Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Screen Simulator (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Widescreen Laptop Shell Container */}
            <div className="relative w-full aspect-[16/10] bg-brand-bg border-[6px] sm:border-[8px] border-brand-surface rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] outline outline-1 outline-brand-surface-sec/40 text-left">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full text-white relative font-sans text-xs flex flex-col"
                >
                  
                  {/* SLIDE 0: DISCOVER DASHBOARD */}
                  {activeIdx === 0 && (
                    <div className="w-full h-full bg-brand-bg p-4 sm:p-6 flex flex-col justify-between space-y-4">
                      {/* Top App bar */}
                      <div className="flex items-center justify-between border-b border-brand-surface-sec pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md bg-brand-primary flex items-center justify-center font-black text-[10px] text-brand-bg">M</div>
                          <span className="font-bold text-xs tracking-tight">MovieBox Player Hub</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2.5 py-0.5 bg-brand-primary/10 text-brand-primary text-[9px] font-bold rounded font-mono">NODE_US_ONLINE</span>
                        </div>
                      </div>

                      {/* Main Featured */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-brand-surface p-4 flex flex-col justify-end space-y-1 border border-brand-surface-sec/40 shadow-md">
                        <img
                          src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
                          alt="Dune Featured"
                          className="absolute inset-0 w-full h-full object-cover opacity-50"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent z-10"></div>
                        <div className="relative z-20 flex flex-col items-start space-y-1">
                          <span className="px-2 py-0.5 bg-brand-primary text-[8px] font-black text-brand-bg rounded uppercase w-fit font-mono">FEATURED BLOCKBUSTER</span>
                          <h4 className="font-bold text-sm sm:text-base leading-none text-white">Dune: Part Two</h4>
                          <p className="text-[10px] text-brand-muted leading-normal max-w-sm font-sans">
                             Stream the award-winning sci-fi masterpiece in real-time 4K with Dolby Atmos streams.
                          </p>
                        </div>
                      </div>

                      {/* Movie listings cards row */}
                      <div className="space-y-2">
                        <span className="font-bold text-zinc-300">Popular Cinema Catalogs</span>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-brand-surface/80 rounded-xl p-2 border border-brand-surface-sec space-y-1">
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-brand-bg">
                              <img
                                src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80"
                                alt="Deadpool & Wolverine"
                                className="absolute inset-0 w-full h-full object-cover opacity-85"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="font-bold text-[10px] block truncate text-brand-text-sec text-center">Deadpool & Wolverine</span>
                          </div>
                          <div className="bg-brand-surface/80 rounded-xl p-2 border border-brand-surface-sec space-y-1">
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-brand-bg">
                              <img
                                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
                                alt="Gladiator II"
                                className="absolute inset-0 w-full h-full object-cover opacity-85"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="font-bold text-[10px] block truncate text-brand-text-sec text-center">Gladiator II</span>
                          </div>
                          <div className="bg-brand-surface/80 rounded-xl p-2 border border-brand-surface-sec space-y-1">
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-brand-bg">
                              <img
                                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80"
                                alt="Beyond the Spider-Verse"
                                className="absolute inset-0 w-full h-full object-cover opacity-85"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="font-bold text-[10px] block truncate text-brand-text-sec text-center">Beyond the Spider-Verse</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 1: PLAYER ENGINE */}
                  {activeIdx === 1 && (
                    <div className="w-full h-full bg-brand-bg p-6 flex flex-col justify-between relative">
                      {/* Simulated Cinema Screen Backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-brand-surface/40 to-brand-primary/5 opacity-80 z-0"></div>

                      <div className="relative z-10 flex items-center justify-between border-b border-brand-surface pb-3">
                        <div className="flex flex-col">
                          <span className="font-bold text-xs text-white">Gladiator II (2025)</span>
                          <span className="text-[9px] text-brand-muted font-mono">Dolby Vision • Atmos 7.1 • UHD 4K</span>
                        </div>
                        <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[9px] font-bold rounded border border-brand-primary/20 font-mono">LIVE_DECODING</span>
                      </div>

                      {/* Center Playback control overlays */}
                      <div className="relative z-10 flex justify-center items-center gap-10">
                        {/* Swipe overlay volume */}
                        <div className="flex flex-col items-center gap-2 bg-brand-surface/90 p-3 rounded-2xl border border-brand-surface-sec text-brand-primary">
                          <Volume2 className="w-4 h-4" />
                          <span className="text-[10px] font-bold font-mono">80%</span>
                        </div>

                        {/* Major play button */}
                        <div className="w-14 h-14 rounded-full bg-brand-primary text-brand-bg flex items-center justify-center shadow-lg shadow-brand-primary/20">
                          <Play className="w-6 h-6 fill-current translate-x-0.5" />
                        </div>

                        {/* Swipe overlay brightness */}
                        <div className="flex flex-col items-center gap-2 bg-brand-surface/90 p-3 rounded-2xl border border-brand-surface-sec text-brand-highlight">
                          <Sun className="w-4 h-4" />
                          <span className="text-[10px] font-bold font-mono">65%</span>
                        </div>
                      </div>

                      {/* Scrubbing track bar */}
                      <div className="relative z-10 space-y-2">
                        <div className="h-1 w-full bg-brand-surface rounded-full overflow-hidden">
                          <div className="h-full w-2/5 bg-brand-primary"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                          <span>00:43:12</span>
                          <span>02:18:45</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 2: SCRAPERS LOG */}
                  {activeIdx === 2 && (
                    <div className="w-full h-full bg-brand-bg p-6 flex flex-col justify-between font-mono text-[10px] text-brand-muted">
                      {/* Terminal header */}
                      <div className="flex items-center justify-between border-b border-brand-surface-sec pb-3">
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-brand-primary animate-pulse" />
                          <span className="font-bold text-white">MovieBox Crawl Indexer v4.8.2</span>
                        </div>
                        <span className="text-brand-primary text-[9px] font-black uppercase">ENGINES_ACTIVE</span>
                      </div>

                      {/* Scrapers log block */}
                      <div className="flex-1 space-y-1.5 overflow-y-auto py-3 text-left">
                        <div className="text-brand-muted/70">&gt; Initializing search query: "Dune Part Two 4K"</div>
                        <div className="text-brand-muted/80">&gt; Indexing open servers mirror clusters...</div>
                        <div className="text-brand-primary flex items-center justify-between">
                          <span>&gt; Connecting mirror_node_alpha_09 (US-East)...</span>
                          <span className="font-bold">SUCCESS (124ms)</span>
                        </div>
                        <div className="text-brand-primary flex items-center justify-between">
                          <span>&gt; Connecting mirror_node_bravo_12 (EU-West)...</span>
                          <span className="font-bold">SUCCESS (186ms)</span>
                        </div>
                        <div className="text-brand-highlight flex items-center justify-between">
                          <span>&gt; Evaluating resolution payloads...</span>
                          <span className="font-bold">COMPRESS_4K_DETECTED</span>
                        </div>
                        <div className="text-brand-primary flex items-center justify-between font-bold">
                          <span>&gt; Active streams synchronized!</span>
                          <span>STABLE NODE CONNECTED</span>
                        </div>
                      </div>

                      {/* Terminal speed bars */}
                      <div className="grid grid-cols-2 gap-4 border-t border-brand-surface-sec pt-3">
                        <div className="space-y-1 text-left">
                          <span className="text-brand-muted/60 text-[9px]">MIRROR CACHE BUFFER:</span>
                          <div className="h-1.5 w-full bg-brand-surface rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-brand-primary"></div>
                          </div>
                        </div>
                        <div className="space-y-1 text-left">
                          <span className="text-brand-muted/60 text-[9px]">CDN DOWNLOAD THREAD:</span>
                          <div className="h-1.5 w-full bg-brand-surface rounded-full overflow-hidden">
                            <div className="h-full w-[92%] bg-brand-highlight"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 3: SUBTITLES SYNCHRONIZER */}
                  {activeIdx === 3 && (
                    <div className="w-full h-full bg-brand-bg p-6 flex flex-col justify-between relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/90 z-0"></div>

                      <div className="relative z-10 flex items-center justify-between border-b border-brand-surface-sec pb-3">
                        <div className="flex gap-1.5">
                          <Languages className="w-4 h-4 text-brand-primary" />
                          <span className="font-bold text-white text-xs">Subtitles Customizer Overlay</span>
                        </div>
                        <span className="px-1.5 py-0.5 bg-brand-primary/10 text-brand-primary rounded text-[9px] font-bold">SRT v4</span>
                      </div>

                      {/* Live subtitle preview rendering */}
                      <div className="flex-1 flex items-center justify-center relative z-10 py-4">
                        <div className="text-center space-y-1.5">
                          <p className="text-[9px] text-brand-muted uppercase tracking-widest font-mono">LIVE PREVIEW SCREEN</p>
                          <p className="text-sm sm:text-base font-bold text-yellow-300 font-sans tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-4">
                            "The universe is a pretty big place, Paul."
                          </p>
                        </div>
                      </div>

                      {/* Offset tuning parameters panel */}
                      <div className="relative z-10 bg-brand-surface/60 rounded-2xl border border-brand-surface-sec p-3.5 space-y-3">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-brand-muted font-semibold font-sans">Subtitle Time Offset:</span>
                          <span className="text-brand-primary font-bold font-mono">-150 ms (Early)</span>
                        </div>

                        {/* Slider bar */}
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-brand-muted/70 font-mono">-1.5s</span>
                          <div className="h-1 flex-1 bg-brand-surface rounded-full relative">
                            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-brand-primary border-2 border-brand-bg rounded-full shadow-md"></div>
                          </div>
                          <span className="text-[10px] text-brand-muted/70 font-mono">+1.5s</span>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Slider Dots & Chevron Controls strip */}
            <div className="flex items-center justify-between gap-6 mt-6 w-full max-w-sm">
              <button
                id="screenshot-prev-btn"
                onClick={prevSlide}
                className="p-3 bg-brand-surface hover:bg-brand-card text-brand-muted hover:text-white rounded-full border border-brand-surface-sec hover:border-brand-primary/20 transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {SLIDES.map((slide) => (
                  <button
                    key={slide.id}
                    id={`screenshot-dot-${slide.id}`}
                    onClick={() => setActiveIdx(slide.id)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIdx === slide.id ? 'bg-brand-primary scale-125' : 'bg-brand-surface-sec'
                    }`}
                    aria-label={`Go to slide ${slide.id + 1}`}
                  />
                ))}
              </div>

              <button
                id="screenshot-next-btn"
                onClick={nextSlide}
                className="p-3 bg-brand-surface hover:bg-brand-card text-brand-muted hover:text-white rounded-full border border-brand-surface-sec hover:border-brand-primary/20 transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Description Panel (5 cols) */}
          <div className="lg:col-span-5 bg-brand-surface/30 border border-brand-surface-sec/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] text-left shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-brand-surface pb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center text-brand-primary">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-muted font-mono tracking-wider uppercase leading-none font-bold">{t(activeSlide.subtitleKey, activeSlide.defaultSubtitle)}</span>
                  <h3 className="font-sans font-black text-lg text-white mt-1.5">{t(activeSlide.titleKey, activeSlide.defaultTitle)}</h3>
                </div>
              </div>

              <p className="text-brand-muted font-sans text-sm leading-relaxed">
                {t(activeSlide.descriptionKey, activeSlide.defaultDescription)}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-surface space-y-4">
              <div className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-brand-text-sec font-medium font-sans leading-normal">
                  <strong>Module highlights:</strong> {t(activeSlide.bulletHighlightKey, activeSlide.defaultBulletHighlight)}
                </p>
              </div>

              <a
                id="screenshots-demo-action-btn"
                href="https://www.moviebox.com.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-brand-primary bg-brand-primary/10 rounded-xl border border-brand-primary/15 hover:bg-brand-primary hover:text-brand-bg transition-all cursor-pointer"
              >
                <span>Launch App Preview</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

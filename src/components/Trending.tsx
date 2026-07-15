/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Play, Flame, Globe, CheckCircle2, ChevronDown, Activity, Wifi } from 'lucide-react';
import { MOVIES, GENRE_DATABASES, COUNTRIES_SUPPORTED } from '../data';
import { useLanguage } from '../context/LanguageContext';

// Map seed backdrops to gradient profiles matching the new theme
const gradientMap: Record<string, string> = {
  dune: 'from-brand-primary/20 via-brand-surface/20 to-brand-bg',
  gladiator: 'from-brand-accent/20 via-brand-surface/20 to-brand-bg',
  deadpool: 'from-brand-highlight/15 via-brand-surface/25 to-brand-bg',
  spiderman: 'from-brand-primary/15 via-brand-accent/10 to-brand-bg'
};

// Metadata representing dynamic features of each active country catalog node
const COUNTRY_METADATA: Record<string, { speed: string; mirrors: number; subtitles: string; status: string; signal: string }> = {
  US: { speed: '142 Mbps', mirrors: 24, subtitles: 'English, Spanish, French', status: 'Optimal Connection', signal: '45ms' },
  GB: { speed: '118 Mbps', mirrors: 18, subtitles: 'English, Welsh, Gaelic', status: 'Optimal Connection', signal: '52ms' },
  CA: { speed: '124 Mbps', mirrors: 15, subtitles: 'English, French, Hindi', status: 'Optimal Connection', signal: '48ms' },
  JP: { speed: '165 Mbps', mirrors: 21, subtitles: 'Japanese, English, Traditional Chinese', status: 'High-Speed Route', signal: '124ms' },
  KR: { speed: '180 Mbps', mirrors: 22, subtitles: 'Korean, English', status: 'High-Speed Route', signal: '118ms' },
  IN: { speed: '98 Mbps', mirrors: 19, subtitles: 'Hindi, Tamil, Telugu, English, Spanish', status: 'Stable Load', signal: '145ms' },
  DE: { speed: '110 Mbps', mirrors: 14, subtitles: 'German, English, Turkish', status: 'Stable Load', signal: '78ms' },
  FR: { speed: '115 Mbps', mirrors: 16, subtitles: 'French, English, Arabic', status: 'Optimal Connection', signal: '64ms' },
  ES: { speed: '105 Mbps', mirrors: 12, subtitles: 'Spanish, Catalan, English, Portuguese', status: 'Stable Load', signal: '82ms' },
  AU: { speed: '128 Mbps', mirrors: 17, subtitles: 'English, Cantonese', status: 'Optimal Connection', signal: '135ms' }
};

export default function Trending() {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleTestConnection = () => {
    setIsTesting(true);
    setTestResult(null);
    setTimeout(() => {
      setIsTesting(false);
      const meta = COUNTRY_METADATA[selectedCountry] || { signal: '60ms', speed: '100 Mbps' };
      setTestResult(`Latency: ${meta.signal} | Speed: ${meta.speed} | Status: Secure Node Authenticated!`);
    }, 1200);
  };

  return (
    <section id="updates" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <Flame className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('trending.badge', 'RECENT UPDATES')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('trending.title', 'Sought-After Cinema Releases')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('trending.description', 'MovieBox indexes original releases within hours of publication. Here is a sneak peek of premium blockbusters currently available in Full Ultra HD inside the app.')}
          </p>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MOVIES.map((movie, idx) => {
            const backgroundGradient = gradientMap[movie.imageSeed] || 'from-brand-surface to-brand-bg';
            return (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group glass-panel rounded-3xl overflow-hidden hover:border-brand-primary/25 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                {/* Visual Cover Poster */}
                <div className={`relative aspect-[16/11] bg-gradient-to-br ${backgroundGradient} p-4 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-0"></div>

                  {/* Header info in poster */}
                  <div className="flex justify-between items-center relative z-10 w-full">
                    <span className="px-2 py-0.5 text-[8px] font-black bg-brand-primary text-brand-bg rounded uppercase leading-none font-mono">
                      {movie.year}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-400 bg-brand-bg/90 px-2 py-0.5 rounded-lg border border-brand-surface-sec/70 font-mono shadow-sm">
                      <Star className="w-3 h-3 fill-yellow-500 stroke-yellow-500" />
                      <span>{movie.rating}</span>
                    </div>
                  </div>

                  {/* Play circle absolute centered */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-11 h-11 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/30">
                      <Play className="w-5 h-5 fill-brand-bg stroke-brand-bg translate-x-0.5" />
                    </div>
                  </div>

                  {/* Title and tags in cover */}
                  <div className="relative z-10 flex flex-col items-start gap-1">
                    <div className="flex flex-wrap gap-1">
                      {movie.genres.map(g => (
                        <span key={g} className="px-1.5 py-0.5 text-[7px] font-extrabold bg-brand-bg/85 text-brand-muted rounded uppercase font-mono border border-brand-surface-sec/40">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-base text-white group-hover:text-brand-highlight transition-colors">
                      {t(`trending.${movie.id}.title`, movie.title)}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-sans font-normal line-clamp-3">
                      {t(`trending.${movie.id}.desc`, movie.description)}
                    </p>
                  </div>

                  <a
                    href="https://www.moviesbox.com.co/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-brand-text-sec bg-brand-bg border border-brand-surface-sec group-hover:bg-brand-primary group-hover:text-brand-bg group-hover:border-brand-primary rounded-xl transition-all shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t('trending.stream_btn', 'Stream in 4K')}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extensive Genre Databases and International Catalogs Supported */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-12 border-t border-brand-surface-sec/45">
          
          {/* Genre databases card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 text-left">
            <h3 className="font-sans font-bold text-lg text-white">{t('trending.genre_db_title', 'Extensive Genre Databases')}</h3>
            <p className="text-xs text-brand-muted leading-normal font-sans">
              {t('trending.genre_db_desc', 'We aggregate and index content from dozens of global streaming networks, perfectly classified into curated categories. Search instantly across:')}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {GENRE_DATABASES.map(g => (
                <span
                  key={g}
                  className="px-3 py-1.5 bg-brand-card text-xs font-semibold text-brand-text-sec rounded-xl border border-brand-surface-sec hover:border-brand-primary/25 hover:text-brand-primary transition-colors cursor-default"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Supported countries card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-primary animate-pulse" />
              <h3 className="font-sans font-bold text-lg text-white">{t('trending.intl_title', 'International Catalogs Supported')}</h3>
            </div>
            
            <p className="text-xs text-brand-muted leading-normal font-sans">
              {t('trending.intl_desc', 'MovieBox supports geo-unrestricted streaming nodes from around the globe, giving you multi-lingual subtitles and high definition streams.')}
            </p>

            {/* Selector Dropdown with flag and catalog indicators */}
            <div className="space-y-2 pt-2">
              <label htmlFor="country-catalog-select" className="text-[10px] text-brand-muted font-mono uppercase tracking-wider block">{t('trending.select_node', 'Select Active Catalog Node:')}</label>
              <div className="relative">
                <select
                  id="country-catalog-select"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setTestResult(null);
                  }}
                  className="w-full bg-brand-bg text-brand-text border border-brand-surface-sec hover:border-brand-primary/40 rounded-xl px-3.5 py-3 text-xs font-bold appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all shadow-md pr-10 font-sans"
                >
                  {COUNTRIES_SUPPORTED.map(country => (
                    <option key={country.code} value={country.code} className="bg-brand-surface text-brand-text">
                      {country.code} - {country.name} {t('trending.catalog_node', 'Catalog Node')}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Dynamic Telemetry Metrics Panel */}
            <div className="bg-brand-bg/85 border border-brand-surface-sec/60 rounded-2xl p-4 space-y-3.5 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-primary/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-brand-muted font-mono uppercase tracking-wider">{t('trending.telemetry_title', 'Node Telemetry Panel')}</span>
                <span className="flex items-center gap-1 text-[9px] font-bold text-brand-primary uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse inline-block" />
                  {COUNTRY_METADATA[selectedCountry]?.status || 'Active Node'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pb-1">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-brand-muted block font-sans">{t('trending.active_mirrors', 'Active Server Mirrors:')}</span>
                  <span className="text-xs font-extrabold text-white font-mono">{COUNTRY_METADATA[selectedCountry]?.mirrors || 15} Channels</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-brand-muted block font-sans">{t('trending.node_speed', 'Estimated Node Speed:')}</span>
                  <span className="text-xs font-extrabold text-brand-primary font-mono">{COUNTRY_METADATA[selectedCountry]?.speed || '100 Mbps'}</span>
                </div>
                <div className="space-y-0.5 col-span-2">
                  <span className="text-[10px] text-brand-muted block font-sans">{t('trending.subtitles_supported', 'Subtitles Supported:')}</span>
                  <span className="text-xs font-semibold text-brand-text-sec truncate block">{COUNTRY_METADATA[selectedCountry]?.subtitles || 'English'}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-brand-surface-sec/40 flex flex-col gap-2">
                <button
                  id="ping-node-btn"
                  onClick={handleTestConnection}
                  disabled={isTesting}
                  className="w-full py-2.5 bg-brand-surface hover:bg-brand-card text-brand-text-sec hover:text-brand-primary border border-brand-surface-sec hover:border-brand-primary/20 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isTesting ? (
                    <>
                      <Activity className="w-3.5 h-3.5 animate-spin text-brand-primary" />
                      <span className="font-mono text-[11px]">{t('trending.pinging', 'PINGING STREAM ROUTE...')}</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="w-3.5 h-3.5 text-brand-primary" />
                      <span>{t('trending.test_mirror', 'Test Mirror Connection')}</span>
                    </>
                  )}
                </button>

                {testResult && (
                  <div className="p-2.5 bg-brand-primary/10 border border-brand-primary/15 rounded-xl text-[10px] text-brand-primary font-mono font-bold text-center animate-in fade-in zoom-in-95 duration-200">
                    {testResult}
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Grid matching selection */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-brand-muted font-mono uppercase tracking-wider block">{t('trending.quick_select', 'Or quick-select country code:')}</span>
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-2 gap-2">
                {COUNTRIES_SUPPORTED.map(country => {
                  const isSelected = country.code === selectedCountry;
                  return (
                    <button
                      key={country.code}
                      id={`node-select-${country.code}`}
                      onClick={() => {
                        setSelectedCountry(country.code);
                        setTestResult(null);
                      }}
                      className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary'
                          : 'bg-brand-bg hover:bg-brand-surface border-brand-surface-sec/60 text-brand-muted hover:text-white'
                      }`}
                    >
                      <div className={`w-6 h-4 rounded flex items-center justify-center font-mono font-black text-[9px] border transition-colors shrink-0 ${
                        isSelected ? 'bg-brand-primary text-brand-bg border-brand-primary' : 'bg-brand-card text-brand-primary border-brand-surface-sec'
                      }`}>
                        {country.code}
                      </div>
                      <span className={`text-[11px] font-bold font-sans truncate ${isSelected ? 'text-brand-primary' : 'text-brand-text-sec'}`}>
                        {country.name}
                      </span>
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-brand-primary ml-auto shrink-0 animate-pulse" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

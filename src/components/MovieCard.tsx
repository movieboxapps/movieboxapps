/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Star, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MovieRelease } from '../types';

interface MovieCardProps {
  movie: MovieRelease;
  idx: number;
}

const movieThemeMap: Record<string, {
  glowColor: string;
  textColorClass: string;
  borderColorClass: string;
  shadowClass: string;
  badgeBg: string;
  btnBgHover: string;
}> = {
  dune: {
    glowColor: 'rgba(245, 158, 11, 0.25)', // Amber
    textColorClass: 'group-hover:text-amber-400',
    borderColorClass: 'hover:border-amber-500/40',
    shadowClass: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)]',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    btnBgHover: 'group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500'
  },
  gladiator: {
    glowColor: 'rgba(239, 68, 68, 0.25)', // Red
    textColorClass: 'group-hover:text-red-400',
    borderColorClass: 'hover:border-red-500/40',
    shadowClass: 'hover:shadow-[0_15px_40px_rgba(239,68,68,0.15)]',
    badgeBg: 'bg-red-500/10 text-red-400 border-red-500/20',
    btnBgHover: 'group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500'
  },
  deadpool: {
    glowColor: 'rgba(225, 29, 72, 0.25)', // Rose/Ruby
    textColorClass: 'group-hover:text-rose-400',
    borderColorClass: 'hover:border-rose-500/40',
    shadowClass: 'hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)]',
    badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    btnBgHover: 'group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500'
  },
  spiderman: {
    glowColor: 'rgba(56, 189, 248, 0.25)', // Sky blue / Cyan
    textColorClass: 'group-hover:text-sky-400',
    borderColorClass: 'hover:border-sky-500/40',
    shadowClass: 'hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)]',
    badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    btnBgHover: 'group-hover:bg-sky-500 group-hover:text-brand-bg group-hover:border-sky-500'
  }
};

export default function MovieCard({ movie, idx }: MovieCardProps) {
  const { t } = useLanguage();
  const theme = movieThemeMap[movie.imageSeed] || {
    glowColor: 'rgba(56, 189, 248, 0.15)',
    textColorClass: 'group-hover:text-brand-highlight',
    borderColorClass: 'hover:border-brand-primary/25',
    shadowClass: 'hover:shadow-[0_15px_40px_rgba(56,189,248,0.1)]',
    badgeBg: 'bg-brand-surface-sec/80 text-brand-muted border-brand-surface-sec/40',
    btnBgHover: 'group-hover:bg-brand-primary group-hover:text-brand-bg group-hover:border-brand-primary'
  };

  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse positions for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animation values for perfectly smooth movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  // Highlight/Glow positions tracking the cursor
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized cursor coordinate from center (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

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
      id={`movie-card-container-${movie.id}`}
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: idx * 0.08 }}
        className={`group relative flex flex-col justify-between h-full rounded-3xl glass-panel border border-brand-surface-sec/40 overflow-hidden transition-all duration-300 ${theme.borderColorClass} ${theme.shadowClass}`}
        id={`movie-card-3d-${movie.id}`}
      >
        {/* Dynamic Glow Spotlight Overlay - tracks the mouse directly! */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) => `radial-gradient(circle 180px at ${gx}% ${gy}%, ${theme.glowColor}, transparent 80%)`
            ),
          }}
        />

        {/* Visual Cover Poster */}
        <div 
          className="relative aspect-[16/11] bg-brand-surface overflow-hidden p-4 flex flex-col justify-between"
          style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
        >
          {movie.imageUrl && (
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-95 transition-all duration-700 z-0"
              referrerPolicy="no-referrer"
              style={{ transform: 'translateZ(-10px)' }}
            />
          )}
          {/* Depth gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/25 to-black/30 z-10"></div>

          {/* Header info in poster */}
          <div 
            className="flex justify-between items-center relative z-20 w-full"
            style={{ transform: 'translateZ(10px)' }}
          >
            <span className="px-2 py-0.5 text-[8px] font-black bg-brand-primary text-brand-bg rounded uppercase leading-none font-mono">
              {movie.year}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-400 bg-brand-bg/90 px-2 py-0.5 rounded-lg border border-brand-surface-sec/70 font-mono shadow-sm">
              <Star className="w-3 h-3 fill-yellow-500 stroke-yellow-500" />
              <span>{movie.rating}</span>
            </div>
          </div>

          {/* Play circle absolute centered with depth */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            style={{ transform: 'translateZ(25px)' }}
          >
            <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/30 transform group-hover:scale-105 transition-transform duration-300">
              <Play className="w-5 h-5 fill-brand-bg stroke-brand-bg translate-x-0.5" />
            </div>
          </div>

          {/* Dummy element to preserve-3d spacing */}
          <div className="relative z-20" style={{ transform: 'translateZ(5px)' }}></div>
        </div>

        {/* Body details */}
        <div 
          className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left"
          style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
        >
          <div className="space-y-2">
            <h3 className={`font-sans font-bold text-base text-white ${theme.textColorClass} transition-colors`}>
              {t(`trending.${movie.id}.title`, movie.title)}
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed font-sans font-normal line-clamp-3">
              {t(`trending.${movie.id}.desc`, movie.description)}
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {movie.genres.map(g => (
              <span 
                key={g} 
                className={`px-1.5 py-0.5 text-[7px] font-extrabold rounded uppercase font-mono border ${theme.badgeBg}`}
              >
                {g}
              </span>
            ))}
          </div>

          <a
            href="https://www.moviebox.com.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-brand-text-sec bg-brand-bg border border-brand-surface-sec rounded-xl transition-all shadow-sm ${theme.btnBgHover}`}
            style={{ transform: 'translateZ(10px)' }}
          >
            <Play className="w-3.5 h-3.5" />
            <span>{t('trending.play', 'Watch Trailer')}</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

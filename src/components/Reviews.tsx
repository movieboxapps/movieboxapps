/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Heart, Award } from 'lucide-react';
import { REVIEWS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-surface-sec/30">
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-surface/80 text-brand-primary rounded-full border border-brand-primary/15 shadow-inner">
            <Heart className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{t('reviews.badge', 'USER VERDICTS')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white">
            {t('reviews.title', 'Reviewed By Streaming Enthusiasts')}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-sans font-normal">
            {t('reviews.description', 'Read real-world testimonials from cord-cutters, home cinema enthusiasts, and travelers who cut subscriptions using MovieBox.')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel hover:bg-brand-surface/65 hover:border-brand-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left group transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                    ))}
                  </div>

                  {review.verified && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-[10px] font-bold rounded-lg font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" /> {t('reviews.verified_download', 'Verified Download')}
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans font-normal italic">
                  "{t(`reviews.${review.id}.comment`, review.comment)}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-brand-surface-sec/55 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Dynamic Initial Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-black text-xs text-brand-bg uppercase shadow-sm">
                    {review.name[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm text-white group-hover:text-brand-highlight transition-colors">
                      {t(`reviews.${review.id}.name`, review.name)}
                    </span>
                    <span className="text-[11px] text-brand-muted font-sans mt-0.5">{t(`reviews.${review.id}.role`, review.role)}</span>
                  </div>
                </div>

                <div className="text-right flex flex-col">
                  <span className="text-[9px] text-brand-muted font-mono uppercase tracking-wider font-bold">{t('reviews.platform', 'PLATFORM')}</span>
                  <span className="text-[11px] text-brand-text-sec font-semibold font-mono">{t(`reviews.${review.id}.device`, review.device)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Verdict Trust Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-brand-surface to-brand-card rounded-3xl border border-brand-surface-sec/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-brand-primary shrink-0 animate-pulse" />
            <div className="space-y-0.5">
              <span className="text-[9px] text-brand-muted font-mono block uppercase font-bold">{t('reviews.trust_badge', 'VERIFIED SAFETY RATING')}</span>
              <p className="text-sm text-brand-text-sec font-sans">
                {t('reviews.trust_text_prefix', 'MovieBox is proudly trusted by over')}{' '}
                <strong>{t('reviews.trust_text_bold', '12 million')}</strong>{' '}
                {t('reviews.trust_text_suffix', 'cord cutters worldwide.')}
              </p>
            </div>
          </div>
          <span className="text-xs text-brand-primary font-mono font-bold">{t('reviews.rating_summary', '★ 4.9/5 RATING ACCORDING TO USER REVIEWS')}</span>
        </div>
      </div>
    </section>
  );
}

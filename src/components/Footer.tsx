/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-bg border-t border-brand-surface-sec/30 py-16 text-brand-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a href="#" onClick={handleScrollToTop} className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-black text-sm text-brand-bg uppercase">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-sm tracking-tight text-white">MovieBox</span>
                <span className="text-[9px] text-brand-primary font-mono tracking-wider font-bold">PREMIUM STREAMING INDEX</span>
              </div>
            </a>
            <p className="text-brand-muted font-sans leading-relaxed max-w-sm">
              MovieBox is a high-speed media aggregator providing direct metadata indexing, robust Dolby playback, and seamless casting setups for home theaters.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-white font-extrabold uppercase tracking-wider font-mono text-[10px]">Jump To Section</h4>
            <ul className="space-y-2 font-sans font-semibold text-brand-muted">
              <li><a href="#features" className="hover:text-brand-primary transition-colors">Premium Features</a></li>
              <li><a href="#compatibility" className="hover:text-brand-primary transition-colors">Compatibility Node</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Unified Gateway</a></li>
              <li><a href="#installation" className="hover:text-brand-primary transition-colors">Platform Guides</a></li>
              <li><a href="#live-sports" className="hover:text-brand-primary transition-colors">Live PPV Sports</a></li>
            </ul>
          </div>

          {/* Resources / Legals Col */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-white font-extrabold uppercase tracking-wider font-mono text-[10px]">Safety & Verification</h4>
            <div className="space-y-3 font-sans">
              <div className="flex items-center gap-2 text-brand-primary font-extrabold text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Malwarebytes Certified Secure</span>
              </div>
              <p className="text-brand-muted leading-normal text-xs font-normal">
                Our dynamic releases are checked and signed using digital certificate verification to protect against intercept modifications.
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Disclaimers Column Block */}
        <div className="pt-10 border-t border-brand-surface-sec/60 space-y-4 text-left">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand-muted/60" />
            <span className="text-[10px] font-extrabold text-brand-muted uppercase tracking-widest font-mono">Disclaimers & External Links Policy</span>
          </div>
          <p className="text-[10px] text-brand-muted/70 leading-normal font-sans font-normal">
            MovieBox operates strictly as a metadata search-indexing engine. All links, stream pathways, and content details are retrieved from publicly discoverable files and servers. We do not host, store, or broadcast copyrighted multimedia content on our servers. MovieBox is not affiliated with, nor endorsed by, individual streaming networks (Netflix, Prime, Disney+ etc.). Download or stream at your discretion.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-brand-surface-sec/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-muted/60 text-[10px] font-mono">
          <span>© 2026 MovieBox Media Lab. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-brand-primary cursor-pointer">Terms of Index</span>
            <span>•</span>
            <span className="hover:text-brand-primary cursor-pointer">Privacy Protocol</span>
            <span>•</span>
            <span className="hover:text-brand-primary cursor-pointer">DMCA Notice</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

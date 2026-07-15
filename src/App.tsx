/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import Overview from './components/Overview';
import Installation from './components/Installation';
import LiveSports from './components/LiveSports';
import Trending from './components/Trending';
import Comparison from './components/Comparison';
import Screenshots from './components/Screenshots';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('features');

  useEffect(() => {
    document.title = "MovieBox App For Unlimited Entertainment, One Powerful Experience";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'features',
        'compatibility',
        'about',
        'installation',
        'live-sports',
        'updates',
        'screenshots',
        'faq'
      ];
      
      const scrollPosition = window.scrollY + 220; // Offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on page load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-brand-bg text-brand-text-sec font-sans selection:bg-brand-primary/30 selection:text-white overflow-x-hidden">
          {/* Sticky Header */}
          <Header activeSection={activeSection} />

          {/* Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* Main Content Layout */}
          <main>
            {/* Full-screen Hero Banner */}
            <Hero />

            {/* Premium Capabilities Grid */}
            <Features />

            {/* Secure Download Node Selector */}
            <Downloads />

            {/* Unified Platform Overview & Studio Indexes */}
            <Overview />

            {/* Multi-device Installation guide timelines */}
            <Installation />

            {/* Live Sports Fixtures stream board */}
            <LiveSports />

            {/* Sought-after Cinema Reels releases */}
            <Trending />

            {/* Smart Decision Comparison Table */}
            <Comparison />

            {/* App UI Screenshots carousel gallery */}
            <Screenshots />

            {/* Cord cutter review cards */}
            <Reviews />

            {/* FAQ Accordion info hub */}
            <Faq />

            {/* Centered CTA Download Block */}
            <CTA />
          </main>

          {/* Clean disclaimers & copyrights footer */}
          <Footer />

          {/* Floating Back to Top button */}
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

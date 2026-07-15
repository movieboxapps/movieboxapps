/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'emerald' | 'midnight' | 'sleek' | 'entertainment';

export interface ThemeColors {
  '--brand-bg': string;
  '--brand-surface': string;
  '--brand-surface-sec': string;
  '--brand-card': string;
  '--brand-primary': string;
  '--brand-primary-hover': string;
  '--brand-accent': string;
  '--brand-highlight': string;
  '--brand-text': string;
  '--brand-text-sec': string;
  '--brand-muted': string;
}

export const THEMES: Record<ThemeType, { name: string; desc: string; colors: ThemeColors }> = {
  emerald: {
    name: 'Emerald Woods',
    desc: 'Deep forest shades infused with sharp modern neon greens.',
    colors: {
      '--brand-bg': '#050B08',
      '--brand-surface': '#0B1512',
      '--brand-surface-sec': '#12201C',
      '--brand-card': '#162823',
      '--brand-primary': '#22C55E',
      '--brand-primary-hover': '#16A34A',
      '--brand-accent': '#14B8A6',
      '--brand-highlight': '#34D399',
      '--brand-text': '#FFFFFF',
      '--brand-text-sec': '#D1FAE5',
      '--brand-muted': '#94A3B8',
    }
  },
  midnight: {
    name: 'Midnight Cinema (Default)',
    desc: 'Classic theater black optimized for dark-room cinema experiences with neon yellow and blue accents.',
    colors: {
      '--brand-bg': '#09090b',
      '--brand-surface': '#141418',
      '--brand-surface-sec': '#1e1e24',
      '--brand-card': '#25252d',
      '--brand-primary': '#fde047',
      '--brand-primary-hover': '#eab308',
      '--brand-accent': '#38bdf8',
      '--brand-highlight': '#60a5fa',
      '--brand-text': '#FFFFFF',
      '--brand-text-sec': '#e4e4e7',
      '--brand-muted': '#a1a1aa',
    }
  },
  sleek: {
    name: 'Sleek Modern (Apple TV Style)',
    desc: 'A minimalist dark steel design highlighting rich Apple-red cues.',
    colors: {
      '--brand-bg': '#27272a', // Dark Silver/Gray
      '--brand-surface': '#18181b',
      '--brand-surface-sec': '#09090b', // Pitch Black
      '--brand-card': '#000000',
      '--brand-primary': '#ffffff', // White
      '--brand-primary-hover': '#f4f4f5',
      '--brand-accent': '#ef4444', // Vivid Red
      '--brand-highlight': '#f87171',
      '--brand-text': '#FFFFFF',
      '--brand-text-sec': '#f4f4f5',
      '--brand-muted': '#a1a1aa',
    }
  },
  entertainment: {
    name: 'Entertainment UI Kit',
    desc: 'A glowing cosmic layout inspired by popular community streaming mockups.',
    colors: {
      '--brand-bg': '#1a1528', // Navy/Purple
      '--brand-surface': '#201a33',
      '--brand-surface-sec': '#251d38', // Deep Indigo
      '--brand-card': '#2d2342',
      '--brand-primary': '#00e5ff', // Bright Cyan
      '--brand-primary-hover': '#00b8d4',
      '--brand-accent': '#ffd700', // Golden Amber
      '--brand-highlight': '#fbbf24',
      '--brand-text': '#FFFFFF',
      '--brand-text-sec': '#e0dbec',
      '--brand-muted': '#9e95b3',
    }
  }
};

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  currentThemeConfig: typeof THEMES[ThemeType];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('moviebox_theme');
    if (saved && saved in THEMES) {
      return saved as ThemeType;
    }
    return 'midnight';
  });

  const setTheme = (newTheme: ThemeType) => {
    if (newTheme in THEMES) {
      setThemeState(newTheme);
      localStorage.setItem('moviebox_theme', newTheme);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const colors = THEMES[theme].colors;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });
  }, [theme]);

  const currentThemeConfig = THEMES[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

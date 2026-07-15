/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  benefit: string;
  isPro?: boolean;
}

export interface InstallStep {
  step: number;
  title: string;
  description: string;
}

export interface DeviceConfig {
  id: string;
  name: string;
  icon: string;
  fileName: string;
  fileSize: string;
  version: string;
  releaseDate: string;
  isRecommended?: boolean;
  steps: InstallStep[];
}

export interface StudioStatus {
  name: string;
  iconUrl?: string;
  status: 'INDEXED' | 'MAINTENANCE' | 'OFFLINE';
  count: string;
}

export interface LiveEvent {
  id: string;
  sport: string;
  category: string;
  teamHome: string;
  teamAway: string;
  logoHome?: string;
  logoAway?: string;
  status: 'LIVE' | 'UPCOMING';
  timeInfo: string;
  channel: string;
  isPPV?: boolean;
}

export interface MovieRelease {
  id: string;
  title: string;
  rating: number;
  year: number;
  genres: string[];
  description: string;
  imageSeed: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  color: string;
  badge?: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  device: string;
  avatarSeed: string;
  stars: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, DeviceConfig, StudioStatus, LiveEvent, MovieRelease, Plan, Review, FAQItem } from './types';

export const PREMIUM_FEATURES: Feature[] = [
  {
    id: 'no-ads',
    icon: 'ShieldAlert',
    title: 'Zero-Ad Streaming Protocol',
    description: 'Unlike standard platforms that interrupt your experience with tedious sponsor roll-ups and unsolicited popups, MovieBox filters out tracking scripts and intrusive marketing overlays to deliver pure, uncompromised playback.',
    benefit: 'Saves up to 18 minutes of runtime on every feature film',
    isPro: true
  },
  {
    id: '4k-stream',
    icon: 'Tv',
    title: 'Precision 4K UHD & High-Fidelity Rendering',
    description: 'Unlock breathtaking color space coverage, HDR10+, and Dolby Vision streams. Our advanced client media player adapts dynamic stream resolutions in real-time to match your network bandwidth.',
    benefit: 'Visual density optimized for modern high-end OLED and QLED screens',
    isPro: true
  },
  {
    id: 'offline',
    icon: 'Download',
    title: 'Smart Cache Offline Downloading',
    description: 'Save full TV seasons and cinema catalog entries directly to local memory. Our proprietary stream container compression minimizes data footprints by up to 40% while preserving crisp 1080p details.',
    benefit: 'Perfect companion for long-distance travel and off-grid viewing',
    isPro: true
  },
  {
    id: 'subtitles',
    icon: 'Languages',
    title: 'Synchronized Multilingual Captions',
    description: 'Access built-in SRT subtitle feeds in more than 45 international languages. Features real-time caption translation with custom opacity sliders, font scaling, and frame-rate synchronization.',
    benefit: 'Tailor global film catalogs to your native reading preferences',
    isPro: true
  }
];

export const COMFORT_FEATURES: Feature[] = [
  {
    id: 'resume',
    icon: 'Play',
    title: 'Cross-Device Timestamp Sync',
    description: 'Saves your exact playback progression on the cloud. Instantly queue next episodes in the background for a frictionless, zero-buffering television marathon.',
    benefit: 'Seamless progress recovery'
  },
  {
    id: 'cast',
    icon: 'Cast',
    title: 'One-Tap Multi-Screen Casting',
    description: 'Fully integrated with Google Chromecast, Apple AirPlay, Smart DLNA, and Roku environments for effortless casting to grand-scale home theater arrays.',
    benefit: 'Grand-scale screen immersion'
  },
  {
    id: 'gestures',
    icon: 'Sliders',
    title: 'Fluid Touch Gestures',
    description: 'Effortlessly swipe to adjust master volume, display brightness, and playback seek positions, specifically designed for ergonomic single-hand mobile use.',
    benefit: 'Intuitive single-hand utility'
  },
  {
    id: 'parental',
    icon: 'Lock',
    title: 'Parental Access Safe Lock',
    description: 'Restrict mature folders and titles behind a secure numeric authorization pin. Keeps your digital environment kid-friendly and safe for family viewing.',
    benefit: 'Protected home theater environments'
  }
];

export const DEVICE_CONFIGS: DeviceConfig[] = [
  {
    id: 'android',
    name: 'Android Mobile & Tablets',
    icon: 'Smartphone',
    fileName: 'MovieBox_v4.8.2_Stable.apk',
    fileSize: '32.4 MB',
    version: 'v4.8.2 (Official Release)',
    releaseDate: 'July 2026',
    isRecommended: true,
    steps: [
      { step: 1, title: 'Obtain Secure APK Package', description: 'Download the authentic, certified installer file from our primary high-speed mirror node.' },
      { step: 2, title: 'Approve Unknown Installer Sources', description: 'Access Settings > Security and toggled option for "Install from Unknown Sources" on your device.' },
      { step: 3, title: 'Run APK Package Installer', description: 'Open your storage directory, click on the downloaded file, and authorize the installation sequence.' },
      { step: 4, title: 'Open and Launch Movies', description: 'Access the brand-new app icon from your launcher, choose a video stream, and watch in UHD.' }
    ]
  },
  {
    id: 'firestick',
    name: 'Amazon Fire TV / Stick / Cube',
    icon: 'Tv2',
    fileName: 'MovieBox_v4.8.2_FireTV.apk',
    fileSize: '32.4 MB',
    version: 'v4.8.2 (Leanback Optimized)',
    releaseDate: 'July 2026',
    steps: [
      { step: 1, title: 'Download "Downloader" Utility', description: 'Visit the Amazon Appstore, search for the lightweight Downloader application, and install it.' },
      { step: 2, title: 'Activate Sideload Privileges', description: 'Navigate to Settings > My Fire TV > Developer Options and turn on install permissions for Downloader.' },
      { step: 3, title: 'Enter Downloader Shortcode', description: 'Launch Downloader, enter the direct path or download address of our TV-optimized APK file, and click Go.' },
      { step: 4, title: 'Complete Setup & Clean APK', description: 'Approve the installation wizard, delete the temporary APK file to preserve device storage, and start streaming.' }
    ]
  },
  {
    id: 'smarttv',
    name: 'Android TV & Media Boxes',
    icon: 'Monitor',
    fileName: 'MovieBox_v4.8.2_AndroidTV.apk',
    fileSize: '35.1 MB',
    version: 'v4.8.2 (Smart Screen Edition)',
    releaseDate: 'July 2026',
    steps: [
      { step: 1, title: 'Transfer APK Installer to USB', description: 'Download the Smart TV-optimized APK to your computer and copy it over to a FAT32 USB storage drive.' },
      { step: 2, title: 'Plug USB in TV & Open Explorer', description: 'Connect the USB drive to your TV console and launch any file explorer application from the Google Play Store.' },
      { step: 3, title: 'Execute Android TV Package', description: 'Select the file name from your storage explorer, select install, and accept the security notification.' },
      { step: 4, title: 'Pin App to Quick Access', description: 'Add MovieBox to your TV main dashboard channel bar to access your library with one-click.' }
    ]
  },
  {
    id: 'ios',
    name: 'Apple iPhone & iPad (iOS)',
    icon: 'Tablet',
    fileName: 'MovieBox_v4.8.2_iOS.ipa',
    fileSize: '38.2 MB',
    version: 'v4.8.2 (iOS Edition)',
    releaseDate: 'July 2026',
    steps: [
      { step: 1, title: 'Acquire Sideload Signer', description: 'Acquire a secure desktop-based sideload installer software such as AltStore, Sideloadly, or Scarlet.' },
      { step: 2, title: 'Fetch IPA Package File', description: 'Download the secure MovieBox iOS-compatible IPA file onto your computer or local iPad storage.' },
      { step: 3, title: 'Deploy to iOS Device', description: 'Link your device to the signer, load the IPA package file, enter developer profile, and sign the application.' },
      { step: 4, title: 'Establish Device Certificate Trust', description: 'Open General Settings > VPN & Device Management, grant system trust permissions to the profile, and launch.' }
    ]
  }
];

export const STUDIOS: StudioStatus[] = [
  { name: 'Netflix', status: 'INDEXED', count: '14,200+' },
  { name: 'Disney+', status: 'INDEXED', count: '8,400+' },
  { name: 'Prime Video', status: 'INDEXED', count: '12,900+' },
  { name: 'Apple TV+', status: 'INDEXED', count: '1,200+' },
  { name: 'Hulu', status: 'INDEXED', count: '7,100+' },
  { name: 'Max (HBO)', status: 'INDEXED', count: '6,800+' },
  { name: 'Paramount+', status: 'INDEXED', count: '4,500+' }
];

export const LIVE_EVENTS: LiveEvent[] = [
  {
    id: 'sports-1',
    sport: 'Premier League Football Match',
    category: 'LIVE STREAM',
    teamHome: 'Manchester City',
    teamAway: 'Arsenal FC',
    status: 'LIVE',
    timeInfo: 'LIVE NOW',
    channel: 'MOVIEBOX SPORTS STREAMING HD'
  },
  {
    id: 'sports-2',
    sport: 'UFC Main Card Event',
    category: 'UPCOMING',
    teamHome: 'Makhachev',
    teamAway: 'Tsarukyan',
    status: 'UPCOMING',
    timeInfo: 'Starts in 2 hours',
    channel: 'SFC PAY-PER-VIEW STREAM',
    isPPV: true
  },
  {
    id: 'sports-3',
    sport: 'NBA Championship Match',
    category: 'LIVE STREAM',
    teamHome: 'Boston Celtics',
    teamAway: 'LA Lakers',
    status: 'LIVE',
    timeInfo: 'LIVE NOW',
    channel: 'ESPN SPORTS LIVE BROADCAST'
  },
  {
    id: 'sports-4',
    sport: 'Formula 1 Grand Prix',
    category: 'UPCOMING',
    teamHome: 'Qualifying Sessions',
    teamAway: 'All Constructors',
    status: 'UPCOMING',
    timeInfo: 'Tomorrow, 06:00 AM',
    channel: 'SKY SPORTS F1 DIRECT'
  }
];

export const MOVIES: MovieRelease[] = [
  {
    id: 'movie-1',
    title: 'Dune: Part Two',
    rating: 9.4,
    year: 2025,
    genres: ['SCI-FI', 'ADVENTURE'],
    description: 'Follow the legendary odyssey of Paul Atreides as he integrates with the Fremen, fighting for survival and vengeance against the conspire-driven families who betrayed his house.',
    imageSeed: 'dune',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-2',
    title: 'Gladiator II',
    rating: 9.1,
    year: 2025,
    genres: ['ACTION', 'DRAMA'],
    description: 'Lucius is thrust back into the brutal arenas of ancient Rome, forced to fight in the legendary Colosseum to reclaim his stolen honor and restore the forgotten glory of the empire.',
    imageSeed: 'gladiator',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-3',
    title: 'Deadpool & Wolverine',
    rating: 8.9,
    year: 2024,
    genres: ['ACTION', 'COMEDY'],
    description: 'An unexpected timeline intersection forces the chaotic mercenary and the brooding mutant to combine forces on a multi-universe path to prevent systematic destruction.',
    imageSeed: 'deadpool',
    imageUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-4',
    title: 'Spider-Man: Beyond the Spider-Verse',
    rating: 9.6,
    year: 2026,
    genres: ['ANIMATION', 'SCI-FI'],
    description: 'Miles Morales undertakes his final reality-bending mission, navigating complex spider-threads and dangerous multiverses to secure the safety of those he holds dearest.',
    imageSeed: 'spiderman',
    imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80'
  }
];

export const GENRE_DATABASES = [
  'Action Thrillers', 'Sci-Fi Future', 'Drama Cinema', 'Mystery Horror',
  'Anime Legends', 'Documentaries', 'Kids Family', 'Laughter Comedy', 'Live Sports', 'Epic History'
];

export const COUNTRIES_SUPPORTED = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'IN', name: 'India' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'ES', name: 'Spain' },
  { code: 'AU', name: 'Australia' }
];

export const COMPARE_MATRIX = [
  {
    metric: 'Monthly Membership Cost',
    moviebox: 'FREE / $0',
    netflix: '$15.49 - $22.99',
    disney: '$13.99 - $17.99',
    prime: '$14.99'
  },
  {
    metric: 'Advertising & Commercials',
    moviebox: 'None / 100% Filtered Out',
    netflix: 'Frequent ads on entry tier',
    disney: 'Frequent ads on entry tier',
    prime: 'Injected into normal content'
  },
  {
    metric: 'Offline Downloading Capabilities',
    moviebox: 'Uncapped & Fully Free',
    netflix: 'Restricted by membership tier',
    disney: 'Premium members only',
    prime: 'Selected titles only'
  },
  {
    metric: 'All-In-One Indexed Library',
    moviebox: 'Yes (Bridges Netflix, Disney+, Prime, Max etc.)',
    netflix: 'Netflix exclusives only',
    disney: 'Disney and Marvel properties only',
    prime: 'Amazon catalog exclusives only'
  },
  {
    metric: 'UHD 4K Sound & Image Fidelity',
    moviebox: 'Included Free on stable nodes',
    netflix: 'Requires Premium tier ($22.99)',
    disney: 'Requires Premium tier ($17.99)',
    prime: 'Requires additional monthly fee'
  },
  {
    metric: 'Simple Television Sideloading',
    moviebox: 'Supported via simple APK steps',
    netflix: 'Yes',
    disney: 'Yes',
    prime: 'Yes'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free Basic Portal',
    price: '$0',
    period: 'forever',
    color: 'border-zinc-800 bg-zinc-950/40 text-zinc-400',
    features: [
      'High Definition Playback (up to 1080p)',
      'Universal Server Access',
      'One-Tap TV casting compatibility',
      'Community Sponsor Integrations'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly Premium Access',
    price: '$4.99',
    period: 'per month',
    popular: true,
    badge: 'POPULAR CHOICE',
    color: 'border-yellow-500/50 bg-yellow-950/10 text-yellow-400',
    features: [
      'Ultra HD & HDR10+ visual streams',
      'Zero-Ad Filter (No video disruptions)',
      'High-Speed Dedicated Mirror Nodes',
      'Advanced Multi-Language Captioning',
      'Stream on up to 2 screens concurrently'
    ]
  },
  {
    id: 'annual',
    name: 'Annual Cinema Pass',
    price: '$39.99',
    period: 'per year',
    badge: 'MAXIMUM VALUE',
    color: 'border-blue-500/50 bg-blue-950/10 text-blue-400',
    features: [
      'All features included in Monthly Premium',
      'Unrestricted PPV Combat & Sports feeds',
      'High-Compression Offline Downloads',
      'Enjoy 30% savings over regular rates',
      'Prioritized library indexing request priority'
    ]
  },
  {
    id: 'lifetime',
    name: 'Lifetime VIP Credentials',
    price: '$59.99',
    period: 'one-time investment',
    badge: 'LIFETIME ACCESS',
    color: 'border-purple-500/50 bg-purple-950/10 text-purple-400',
    features: [
      'Uncapped access forever with zero future fees',
      'Includes absolute Premium & Sport updates',
      'Stream on up to 5 devices concurrently',
      'Dedicated high-bandwidth VIP server route',
      'Premium early access to catalog releases',
      'No recurring billing ever'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    name: 'Marcus Vance',
    role: 'Home Theater Audiophile',
    device: 'Amazon Firestick 4K Max',
    avatarSeed: 'marcus',
    stars: 5,
    comment: 'Honestly, this unified entertainment media player is a game changer. I discarded my combined monthly Netflix and Disney bills since MovieBox streams identical, crystal-clear catalogs with zero buffer or lag directly to my Fire TV system.',
    date: '3 days ago',
    verified: true
  },
  {
    id: 'review-2',
    name: 'Yuki Takahashi',
    role: 'Business Consultant & Jetsetter',
    device: 'Samsung Galaxy Tab S9',
    avatarSeed: 'yuki',
    stars: 5,
    comment: 'The smart offline storage cache has saved me on multiple long-haul flights. I downloaded a complete season of drama in sharp 1080p, took up half the normal file memory space, and watched it smoothly with zero internet required.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 'review-3',
    name: 'Christopher Diaz',
    role: 'Power Mobile User',
    device: 'Google Pixel 8 Pro',
    avatarSeed: 'christopher',
    stars: 5,
    comment: 'I was skeptical of the zero ad claims but this custom browser filters trackers perfectly. Swiping for brightness and audio control on my screen is incredibly clean. Outstanding UX design.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'review-4',
    name: 'Sarah Jenkins',
    role: 'Home Screen Specialist & Parent',
    device: 'Apple iPad Air & Chromecast',
    avatarSeed: 'sarah',
    stars: 5,
    comment: 'Casting movies to our living room TV via Google Cast is incredibly responsive. The app discovers the hardware node instantly, syncs audio flawlessly, and streams movies in amazing resolution without stutter.',
    date: 'Yesterday',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is the MovieBox APK safe and certified to install?',
    answer: 'Absolutely. The MovieBox APK undergoes extensive automated builds and scanning sequences, earning clean status certifications from industry-leading packages like Lookout and Kaspersky. It is guaranteed free from bundled malware, dangerous trackers, or adware scripts.',
    category: 'SAFETY'
  },
  {
    id: 'faq-2',
    question: 'Does this application require recurring subscription fees?',
    answer: 'No, you can enjoy standard, sponsor-supported media catalogs fully free. If you desire ad-free playback, 4K rendering modes, and offline downloading access, we offer extremely cost-effective premium upgrade choices starting at $4.99 with no automated auto-renew commitments.',
    category: 'PRICING'
  },
  {
    id: 'faq-3',
    question: 'Can I set up MovieBox on Firestick, smart screens, and TVs?',
    answer: 'Yes, our media application is fully responsive and leanback-optimized for larger televisions. It sideloads flawlessly onto Amazon Fire TV, Xiaomi Mi Box, Nvidia Shield, and all televisions operating Android TV OS. Quick-cast utility is available for standard smart screens.',
    category: 'COMPATIBILITY'
  },
  {
    id: 'faq-4',
    question: 'How frequently are new movies and television shows indexed?',
    answer: 'Our background indexing engines scan digital libraries, global networks, and cinema databases continuously. Popular blockbusters, seasonal releases, and trending episodes appear with fully synchronized, multi-language subtitle tracks within hours of official releases.',
    category: 'CONTENT'
  },
  {
    id: 'faq-5',
    question: 'Is using MovieBox legal, and should I configure a VPN?',
    answer: 'MovieBox functions as an indexing client and metadata browser, linking to public stream locations without storing copyrighted media on its systems. While not strictly mandatory, we recommend configuring a robust VPN to preserve personal digital privacy and prevent local internet service provider speed throttling.',
    category: 'LEGAL'
  },
  {
    id: 'faq-6',
    question: 'How do I upgrade my application to the latest version?',
    answer: 'The client application features a built-in automated patch checking utility. Upon opening, it checks our servers and prompts you with a clean update wizard if a newer release (like v4.8.2) is available. You can also download direct releases from our certified homepage.',
    category: 'UPDATES'
  }
];

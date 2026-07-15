/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'ko' | 'hi';

export interface Translations {
  [key: string]: {
    [key in Locale]?: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home Portal', es: 'Inicio', fr: 'Accueil' },
  'nav.features': { en: 'Premium Features', es: 'Características', fr: 'Fonctionnalités' },
  'nav.installation': { en: 'Sideload Guides', es: 'Instalación', fr: 'Installation' },
  'nav.compatibility': { en: 'Device Support', es: 'Compatibilidad', fr: 'Compatibilité' },
  'nav.faq': { en: 'Q&A Help', es: 'Preguntas Frecuentes', fr: 'FAQ' },
  'nav.updates': { en: 'Release Notes', es: 'Actualizaciones', fr: 'Mises à jour' },
  'nav.about': { en: 'Overview', es: 'Acerca de', fr: 'À propos' },
  'nav.contact': { en: 'Support', es: 'Contacto', fr: 'Contact' },
  'nav.sideload': { en: 'Sideload Guide', es: 'Sideload', fr: 'Installation' },
  'nav.gateway': { en: 'Secure Gateway', es: 'Pasarela', fr: 'Passerelle' },
  'nav.guide': { en: 'Setup Map', es: 'Guía', fr: 'Guide' },
  'nav.live_sports': { en: 'Live Sports', es: 'Deportes en Vivo', fr: 'Sports en Direct' },
  'nav.trending': { en: 'Trending Reels', es: 'Tendencias', fr: 'Tendances' },
  'nav.pricing': { en: 'Access Tiers', es: 'Planes', fr: 'Tarifs' },
  'nav.screenshots': { en: 'UI Screenshots', es: 'Capturas', fr: 'Captures' },
  'nav.certified': { en: 'v4.8.2 Certified Safe', es: 'v4.8.2 Certificado', fr: 'v4.8.2 Certifié' },
  'nav.download': { en: 'Download MovieBox App', es: 'Descargar APK', fr: 'Télécharger l\'APK' },
  
  // Hero
  'hero.tagline': { en: 'OFFICIAL MOVIEBOX APP PORTAL', es: 'LA PLATAFORMA DE STREAMING DEFINITIVA', fr: 'LA PLATEFORME DE STREAMING ULTIME' },
  'hero.headline': { en: 'MovieBox App - Ultimate Free Cinema & Live Sports Player', es: 'MovieBox App Para', fr: 'MovieBox App Pour', de: 'MovieBox App Für', ja: 'MovieBoxアプリで', ko: 'MovieBox 앱으로', hi: 'MovieBox ऐप के साथ' },
  'hero.headline_sub': { en: 'Stream Safe, Unlimited Entertainment in 4K UHD Across Devices', es: 'Entretenimiento Ilimitado, Una Experiencia Potente', fr: 'Divertissement Illimité, Une Expérience Puissante', de: 'Unbegrenzte Unterhaltung, Ein Kraftvolles Erlebnis', ja: '無制限のエンターテインメント、1つの強力な体験', ko: '무제한 엔터테인먼트, 단 하나의 강력한 경험', hi: 'असीमित मनोरंजन, एक शक्तिशाली अनुभव' },
  'hero.description': { 
    en: 'Unlock the premium power of the official MovieBox App. Sideload the certified, ad-free MovieBox APK on your Android mobile, Amazon Firestick, or Smart TV to stream thousands of high-definition video feeds, global live sports, and multilingual subtitles. Experience complete digital privacy with lightning-fast streaming speeds and zero subscription constraints.', 
    es: 'Disfruta de películas ilimitadas en 4K UHD sin anuncios, series en tendencia y deportes globales en vivo en la aplicación oficial MovieBox App. Sideload el APK seguro en tu dispositivo Android, Firestick o Smart TV sin suscripción ni tarjeta de crédito.', 
    fr: 'Découvrez des films 4K UHD illimités et sans publicité, des séries télévisées tendance et des sports mondiaux en direct sur l\'application officielle MovieBox App. Sideload l\'APK sécurisé sur vos appareils Android, Firestick et Smart TV.' 
  },
  'hero.download_btn': { en: 'Download MovieBox APK', es: 'Descargar APK', fr: 'Télécharger l\'APK' },
  'hero.explore_btn': { en: 'Explore Features', es: 'Explorar Características', fr: 'Découvrir les Fonctions' },
  'hero.active_protection': { en: 'Malware-Free Node', es: 'Protección Activa', fr: 'Protection Active' },
  'hero.safe_node': { en: 'Verified Stable Node', es: 'Nodo Seguro', fr: 'Nœud Sécurisé' },

  // Features Section
  'features.badge': { en: 'PREMIUM CAPABILITIES', es: 'CAPACIDADES PREMIUM', fr: 'CAPACITÉS PREMIUM' },
  'features.title': { en: 'Engineered with Premium Playback Optimization', es: 'Diseñado para Verdaderos Cord Cutters', fr: 'Conçu pour les Vrais Cord Cutters' },
  'features.description': { 
    en: 'The MovieBox App matches blazing-fast server networks with an advanced, local multi-sourced stream resolution player to deliver high-fidelity entertainment on all devices.', 
    es: 'La aplicación MovieBox App combina servidores de alta velocidad con un reproductor dinámico de múltiples fuentes para ofrecer transmisiones estables y de alta resolución.', 
    fr: 'L\'application MovieBox App associe des serveurs haute vitesse à un lecteur de sources multiples dynamique pour fournir des flux de streaming fluides.' 
  },
  'features.pro_badge': { en: 'PRO CAPABILITY', es: 'FUNCIÓN PRO', fr: 'FONCTION PRO' },

  // Installation / Sideload Selector
  'sideload.badge': { en: 'SECURE CHANNELS', es: 'CANALES SEGUROS', fr: 'CANAUX SÉCURISÉS' },
  'sideload.title': { en: 'Download & Sideload MovieBox App Safely', es: 'Instalador de Sideload Seguro', fr: 'Installeur Sideload Sécurisé' },
  'sideload.description': { 
    en: 'Select your operating platform below to view verified step-by-step installation instructions for the certified MovieBox APK.', 
    es: 'Seleccione el nodo de su entorno operativo de destino para iniciar el protocolo de instalación segura.', 
    fr: 'Sélectionnez le nœud de votre environnement d\'exploitation cible pour démarrer le protocole d\'installation sécurisé.' 
  },
  'sideload.recommended': { en: 'RECOMMENDED SOURCE', es: 'RECOMENDADO', fr: 'RECOMMANDÉ' },

  // Overview / Gateway
  'gateway.badge': { en: 'UNIFIED GATEWAY', es: 'PASARELA UNIFICADA', fr: 'PASSERELLE UNIFIÉE' },
  'gateway.title': { en: 'High-Velocity Streaming Nodes & Decoupled Media Proxies', es: 'Índice Centralizado y Rutas de Espejo Multi-Fuente', fr: 'Index Centralisé et Routes Miroirs Multi-Sources' },
  'gateway.description': { 
    en: 'By parsing public high-speed index channels, the MovieBox App acts as a secure container, routing you directly to active, secure content mirrors for a premium experience.', 
    es: 'La aplicación MovieBox App funciona como un analizador seguro que lo conecta directamente con servidores de transmisión activa para una excelente experiencia en alta definición.', 
    fr: 'L\'application MovieBox App fonctionne comme un analyseur sécurisé qui vous connecte directement avec des serveurs de streaming actif pour un rendu visuel incroyable.' 
  },

  // Guide Section
  'guide.badge': { en: 'INSTALLATION SCHEMATICS', es: 'ESQUEMAS DE INSTALACIÓN', fr: 'SCHÉMAS D\'INSTALLATION' },
  'guide.title': { en: 'Secure Sideload and Configuration Guidelines', es: 'Líneas de Tiempo de Protocolos Multi-Dispositivo', fr: 'Chronologies des Protocoles Multi-Appareils' },
  'guide.description': { 
    en: 'Follow our simple, verified steps to deploy the safe MovieBox App on your Android mobile, Firestick, or Smart TV without experiencing performance or resolution capping.', 
    es: 'Siga nuestras sencillas guías de instalación para configurar el APK oficial de MovieBox App en cualquiera de sus dispositivos sin límite de resolución.', 
    fr: 'Suivez nos guides d\'installation simples pour configurer l\'APK officiel de MovieBox App sur tous vos appareils sans limitation de résolution.' 
  },
  'guide.timeline_title_prefix': { en: 'How to Setup MovieBox App on', es: 'Cómo instalar en', fr: 'Comment installer sur' },
  'guide.notice_badge': { en: 'EXPERT SECURITY NOTICE', es: 'AVISO EXPLICATIVO', fr: 'AVIS DE L\'EXPERT' },
  
  // Guide - Mobile
  'guide.mobile.name': { en: 'Android Phone & Tablet', es: 'Teléfono / Tableta', fr: 'Smartphone / Tablette' },
  'guide.mobile.sub': { en: 'Certified APK (Ad-Free & Safe)', es: 'Android e iOS Universal', fr: 'Android et iOS Universel' },
  'guide.mobile.notice': { 
    en: 'No root, developer overrides, or jailbreaks required. Clean digital signature validated by leading antivirus libraries.', 
    es: 'No requiere root ni modificaciones peligrosas. Firma digital limpia y validada por bibliotecas de seguridad líderes.', 
    fr: 'Aucun root ou modification dangereuse requis. Signature numérique propre validée par les meilleures bibliothèques de sécurité.' 
  },
  'guide.mobile.step1.title': { en: 'Acquire Official APK Installer', es: 'Descargar el instalador', fr: 'Télécharger l\'installeur' },
  'guide.mobile.step1.desc': { 
    en: 'Tap the prominent "Download MovieBox App" button on our secure homepage to fetch the official, unmodified APK installation package.', 
    es: 'Haga clic en el botón de descarga para obtener el archivo APK oficial de MovieBox App de forma totalmente directa.', 
    fr: 'Cliquez sur le bouton de téléchargement pour obtenir le fichier APK officiel de MovieBox App de manière directe.' 
  },
  'guide.mobile.step2.title': { en: 'Authorize Unidentified Sources', es: 'Permitir fuentes desconocidas', fr: 'Autoriser les sources inconnues' },
  'guide.mobile.step2.desc': { 
    en: 'Open Settings > Security on your device, and enable installation privileges for "Unknown Sources" or your mobile browser app.', 
    es: 'Vaya a Ajustes > Seguridad y active el permiso para instalar aplicaciones desde fuentes desconocidas para su navegador.', 
    fr: 'Allez dans Paramètres > Sécurité et activez l\'autorisation d\'installer des applications depuis des sources inconnues.' 
  },
  'guide.mobile.step3.title': { en: 'Initialize APK Setup Wizard', es: 'Instalar el archivo', fr: 'Installer le fichier' },
  'guide.mobile.step3.desc': { 
    en: 'Open your local File Manager, navigate to the Downloads directory, and click on the MovieBox APK package to begin installation.', 
    es: 'Abra su gestor de archivos, busque el instalador de MovieBox App en descargas y ejecute el asistente de instalación.', 
    fr: 'Ouvrez votre gestionnaire de fichiers, recherchez l\'installeur de MovieBox App dans les téléchargements et lancez l\'installation.' 
  },
  'guide.mobile.step4.title': { en: 'Stream High-Quality Movies', es: 'Abrir y disfrutar', fr: 'Ouvrir et profiter' },
  'guide.mobile.step4.desc': { 
    en: 'Launch the application from your menu drawer, enjoy the beautiful dark UI, choose any movie, and stream in HDR.', 
    es: 'Inicie la aplicación desde su menú de inicio, disfrute de la interfaz optimizada y comience a transmitir películas en HDR.', 
    fr: 'Lancez l\'application depuis votre écran d\'accueil, profitez de l\'interface fluide et commencez à diffuser en HDR.' 
  },

  // Guide - Firestick
  'guide.firestick.name': { en: 'Amazon Fire TV / Stick / Cube', es: 'Amazon Firestick / Cube', fr: 'Amazon Firestick / Cube' },
  'guide.firestick.sub': { en: 'Optimized Media Remote Layout', es: 'Optimizado para Fire OS', fr: 'Optimisé pour Fire OS' },
  'guide.firestick.notice': { 
    en: 'Seamlessly compatible with Amazon Fire TV Stick Lite, 4K, 4K Max, Fire TV Cube, and smart Fire-enabled television displays.', 
    es: 'Totalmente compatible con todas las versiones de Amazon Fire TV Stick, Fire TV Cube y televisores inteligentes integrados.', 
    fr: 'Totalement compatible avec toutes les versions d\'Amazon Fire TV Stick, Fire TV Cube et téléviseurs intelligents.' 
  },
  'guide.firestick.step1.title': { en: 'Install Downloader Sideloader', es: 'Instalar la aplicación Downloader', fr: 'Installer l\'application Downloader' },
  'guide.firestick.step1.desc': { 
    en: 'Navigate to the Amazon Appstore, search for the official, lightweight "Downloader" application, and install it on your TV.', 
    es: 'Vaya a la tienda oficial de aplicaciones de Amazon, busque la aplicación gratuita "Downloader" e instálela en su televisor.', 
    fr: 'Allez sur l\'Amazon Appstore officiel, recherchez l\'application gratuite "Downloader" et installez-la sur votre téléviseur.' 
  },
  'guide.firestick.step2.title': { en: 'Unlock Sideload Privileges', es: 'Habilitar opciones de desarrollador', fr: 'Activer les options de développement' },
  'guide.firestick.step2.desc': { 
    en: 'Go to Settings > My Fire TV > Developer Options. Turn on Developer permissions and permit Downloader to install unknown apps.', 
    es: 'Vaya a Configuración > Mi Fire TV > Opciones de desarrollador y active el permiso de instalación de apps desconocidas para Downloader.', 
    fr: 'Allez dans Paramètres > Mon Fire TV > Options pour les développeurs et activez l\'autorisation d\'installer des apps inconnues pour Downloader.' 
  },
  'guide.firestick.step3.title': { en: 'Submit APK Shortcode Path', es: 'Ingresar enlace de descarga', fr: 'Saisir le lien de téléchargement' },
  'guide.firestick.step3.desc': { 
    en: 'Launch the Downloader app, input our official download path or direct MovieBox TV shortcode, and click the Go button.', 
    es: 'Abra la aplicación Downloader, ingrese la dirección de descarga directa de MovieBox App y haga clic en Ir.', 
    fr: 'Ouvrez l\'application Downloader, saisissez le chemin de téléchargement direct de MovieBox App et cliquez sur Go.' 
  },
  'guide.firestick.step4.title': { en: 'Deploy & Delete Temp Files', es: 'Instalar e iniciar', fr: 'Installer et lancer' },
  'guide.firestick.step4.desc': { 
    en: 'Complete the installer wizard, delete the temporary APK file to preserve your TV storage space, and launch MovieBox App.', 
    es: 'Instale la aplicación, elimine el archivo temporal para ahorrar almacenamiento y abra la interfaz de MovieBox App.', 
    fr: 'Installez l\'application, supprimez le fichier temporaire pour économiser de l\'espace et lancez MovieBox App.' 
  },

  // Guide - SmartTV
  'guide.smarttv.name': { en: 'Android TV & Smart Screens', es: 'Android TV / Smart TV', fr: 'Android TV / Smart TV' },
  'guide.smarttv.sub': { en: 'Sony, TCL, Hisense, Nvidia Shield', es: 'Sony, TCL, Mi Box, Nvidia Shield', fr: 'Sony, TCL, Mi Box, Nvidia Shield' },
  'guide.smarttv.notice': { 
    en: 'Configures a landscape TV-optimized Leanback UI for effortless physical navigation using standard remote controls.', 
    es: 'Presenta un diseño de interfaz adaptado para pantallas de televisión horizontales con navegación mediante control remoto estándar.', 
    fr: 'Dispose d\'une mise en page d\'interface spécialisée pour les téléviseurs avec navigation par télécommande standard.' 
  },
  'guide.smarttv.step1.title': { en: 'Save APK to USB Drive', es: 'Obtener archivo en USB', fr: 'Copier le fichier sur USB' },
  'guide.smarttv.step1.desc': { 
    en: 'Download our Smart TV-optimized MovieBox APK onto your computer and transfer the file over to a FAT32 USB drive.', 
    es: 'Descargue el archivo APK optimizado para TV de MovieBox App en su ordenador y cópielo en una memoria USB.', 
    fr: 'Téléchargez le fichier APK optimisé pour la TV de MovieBox App sur votre ordinateur et copiez-le sur une clé USB.' 
  },
  'guide.smarttv.step2.title': { en: 'Connect & Locate USB', es: 'Conectar y explorar', fr: 'Brancher et explorer' },
  'guide.smarttv.step2.desc': { 
    en: 'Plug the USB drive into your Smart TV or Media Box and open any File Commander or Explorer app from the TV Play Store.', 
    es: 'Inserte la memoria USB en su televisor y abra cualquier explorador de archivos disponible en la Play Store del televisor.', 
    fr: 'Insérez la clé USB dans votre téléviseur et ouvrez un explorateur de fichiers disponible sur le Play Store de votre TV.' 
  },
  'guide.smarttv.step3.title': { en: 'Trigger Installation File', es: 'Ejecutar instalación', fr: 'Exécuter l\'installation' },
  'guide.smarttv.step3.desc': { 
    en: 'Locate the USB directory, select the MovieBox TV APK file, run the package installer, and accept security popups.', 
    es: 'Seleccione el archivo APK de MovieBox App desde la carpeta USB, confirme la instalación y acepte los avisos del sistema.', 
    fr: 'Sélectionnez le fichier APK de MovieBox App depuis le dossier USB, confirmez l\'installation et acceptez les messages de sécurité.' 
  },
  'guide.smarttv.step4.title': { en: 'Pin App to TV Dashboard', es: 'Añadir a favoritos', fr: 'Ajouter aux favoris' },
  'guide.smarttv.step4.desc': { 
    en: 'Navigate to your active TV Apps strip, click the plus icon, and add MovieBox App to your primary home screen shortcuts.', 
    es: 'Agregue el acceso directo de MovieBox App a su lista de favoritos en el menú principal de su televisor para ingresar con un clic.', 
    fr: 'Ajoutez le raccourci de MovieBox App à votre liste de favoris sur l\'écran d\'accueil de votre téléviseur pour y accéder en un clic.' 
  },

  // Guide - Emulator
  'guide.emulator.notice': { 
    en: 'Allows flawless 4K high-resolution scaling on ultra-wide desktop monitors with keyboard shortcuts and local mouse precision.', 
    es: 'Permite un escalado 4K ideal en monitores de computadora de gran tamaño con soporte para periféricos locales.', 
    fr: 'Permet un affichage 4K idéal sur les moniteurs de bureau grand format avec prise en charge des périphériques locaux.' 
  },
  'guide.emulator.step1.title': { en: 'Deploy Android Emulator', es: 'Descargar BlueStacks / Nox', fr: 'Télécharger BlueStacks / Nox' },
  'guide.emulator.step1.desc': { 
    en: 'Set up an Android emulation utility like BlueStacks, NoxPlayer, or LDPlayer on your Windows PC or Apple macOS workstation.', 
    es: 'Instale una herramienta de emulación de Android limpia y gratuita como BlueStacks o LDPlayer en su ordenador.', 
    fr: 'Installez un outil d\'émulation Android propre et gratuit comme BlueStacks ou LDPlayer sur votre ordinateur.' 
  },
  'guide.emulator.step2.title': { en: 'Acquire Safe APK File', es: 'Descargar MovieBox APK', fr: 'Télécharger MovieBox APK' },
  'guide.emulator.step2.desc': { 
    en: 'Download the certified, secure MovieBox App APK directly from our official website to your computer desktop storage.', 
    es: 'Descargue el paquete APK oficial y verificado de MovieBox App desde nuestro portal en su PC.', 
    fr: 'Téléchargez le pack APK officiel et vérifié de MovieBox App depuis notre portail sur votre PC.' 
  },
  'guide.emulator.step3.title': { en: 'Drop File to Install', es: 'Instalación de arrastrar y soltar', fr: 'Installation par glisser-déposer' },
  'guide.emulator.step3.desc': { 
    en: 'Launch your emulator application and drag the downloaded MovieBox APK file from your computer file explorer directly onto the emulator window.', 
    es: 'Inicie el emulador, arrastre el archivo de MovieBox App hacia la pantalla principal y deje que complete la instalación.', 
    fr: 'Lancez l\'émulateur, glissez le fichier de MovieBox App sur l\'écran principal et laissez-le terminer l\'installation.' 
  },
  'guide.emulator.step4.title': { en: 'Configure Scaling Limits', es: 'Ajustar resolución y transmitir', fr: 'Régler la résolution et diffuser' },
  'guide.emulator.step4.desc': { 
    en: 'Launch MovieBox App, configure your scaling option to Tablet or TV mode in the app settings, and stream in immersive fullscreen.', 
    es: 'Inicie MovieBox App, ajuste la resolución de pantalla a Tableta o TV dentro de la configuración y disfrute del contenido.', 
    fr: 'Lancez MovieBox App, réglez la résolution sur Tablette ou TV dans les configurations et profitez du spectacle.' 
  },

  // Live Sports
  'live_sports.badge': { en: 'LIVE STREAM FIXTURES BOARD', es: 'TABLERO DE PARTIDOS EN VIVO', fr: 'TABLEAU DES MATCHS EN DIRECT' },
  'live_sports.title': { en: 'Real-Time Global Sports Hub on MovieBox App', es: 'Transmisión Directa de Deportes Globales', fr: 'Flux Direct de Sports Mondiaux' },
  'live_sports.description': { 
    en: 'Catch major international championships, pay-per-view match streams, and competitive league events directly on the MovieBox App without encountering geoblocks or sub fees.', 
    es: 'Vea partidos internacionales en vivo, campeonatos de fútbol y transmisiones de boxeo o MMA sin ningún tipo de pago adicional ni bloqueos.', 
    fr: 'Suivez les championnats internationaux en direct, les matchs de football et les combats de boxe ou MMA sans frais supplémentaires ni blocages.' 
  },
  'live_sports.filter.all': { en: 'All Fixtures', es: 'Todos los partidos', fr: 'Tous les événements' },
  'live_sports.filter.live': { en: 'Live Events', es: 'En vivo', fr: 'En direct' },
  'live_sports.filter.upcoming': { en: 'Scheduled', es: 'Próximos', fr: 'À venir' },
  'live_sports.live_status': { en: 'BROADCASTING NOW', es: 'EN VIVO', fr: 'EN DIRECT' },
  'live_sports.upcoming_status': { en: 'UPCOMING MATCH', es: 'PRÓXIMAMENTE', fr: 'À VENIR' },
  'live_sports.source_label': { en: 'Server Link:', es: 'Fuente:', fr: 'Source:' },
  'live_sports.banner.title': { en: 'Full PPV & Sports Access Included:', es: 'Pase PPV de Acceso Total Incluido:', fr: 'Pass PPV Accès Complet Inclus:' },
  'live_sports.banner.description': {
    en: 'Get direct access to football leagues, elite combat sports, and racing broadcasts. Sideload the MovieBox App to bypass monthly bills and expensive subscriptions forever.',
    es: 'Acceda a transmisiones de fútbol de primer nivel, peleas estelares y carreras mundiales. Instale MovieBox App y olvídese de las costosas tarifas mensuales.',
    fr: 'Accédez à des flux de football de haut niveau, des combats stellaires et des courses mondiales. Installez MovieBox App et oubliez les abonnements coûteux.'
  },
  'live_sports.banner.cta': { en: 'Launch Live Feeds', es: 'Acceder al centro deportivo', fr: 'Accéder au centre sportif' },

  // Trending
  'trending.badge': { en: 'SOUGHT-AFTER CINEMA REELS', es: 'ESTRENOS MÁS BUSCADOS', fr: 'SORTIES LES PLUS ATTENDUES' },
  'trending.title': { en: 'Trending Motion Pictures & Series Indexes', es: 'Lanzamientos del Índice Global en Tendencia', fr: 'Sorties de l\'Index Global Tendance' },
  'trending.description': { 
    en: 'Browse trending blockbusters, high-definition catalog cinema, and newly indexed drama series with built-in multi-language subtitle tracks.', 
    es: 'Explore los estrenos más recientes, series completas y películas clásicas disponibles con subtítulos integrados en varios idiomas.', 
    fr: 'Explorez les dernières nouveautés, des séries complètes et des films classiques disponibles avec sous-titres multilingues intégrés.' 
  },

  // Comparison
  'comparison.badge': { en: 'SMART DECISION GUIDANCE', es: 'GUÍA DE DECISIÓN INTELIGENTE', fr: 'GUIDE DE DÉCISION INTELLIGENT' },
  'comparison.title': { en: 'Why MovieBox App Outperforms Standard Streaming Sites', es: 'Por qué los Espectadores Prefieren MovieBox APK', fr: 'Pourquoi les Spectateurs Préfèrent MovieBox APK' },
  'comparison.description': { 
    en: 'Compare our high-definition indexes and ad-blocking performance stats with leading streaming platforms to understand why viewers make the switch.', 
    es: 'Analice nuestra comparación directa contra las alternativas de suscripción de pago para comprobar por qué lideramos en comodidad y velocidad.', 
    fr: 'Analysez notre comparaison directe avec les alternatives d\'abonnement payantes pour voir pourquoi nous menons en termes de confort.' 
  },

  // Plans / Pricing
  'pricing.badge': { en: 'SUBSCRIPTION LAYERS', es: 'CAPAS DE SUSCRIPCIÓN', fr: 'NIVEAUX D\'ABONNEMENT' },
  'pricing.title': { en: 'Choose Your MovieBox App Streaming Package', es: 'Elija su Libertad de Entretenimiento', fr: 'Choisissez votre Liberté de Divertissement' },
  'pricing.description': { 
    en: 'Access the standard public indexing stream routes or upgrade to verified VIP high-bandwidth mirror node servers.', 
    es: 'Acceda a nuestro índice estándar público de transmisión o pase a los servidores de alta velocidad VIP.', 
    fr: 'Accédez à notre index standard public ou passez à des serveurs VIP haute vitesse.' 
  },

  // Screenshots
  'screenshots.badge': { en: 'VISUAL PREVIEWS', es: 'VISTAS PREVIAS VISUALES', fr: 'APERÇUS VISUELS' },
  'screenshots.title': { en: 'Premium User Interface Tour', es: 'Muestra de Interfaz de Usuario', fr: 'Présentation de l\'Interface Utilisateur' },
  'screenshots.description': { 
    en: 'Take a close look at our sleek, intuitive UI screenshots displaying modern dark design elements and lightning-fast navigability.', 
    es: 'Examine capturas de pantalla de nuestra hermosa interfaz optimizada para un uso cómodo de noche.', 
    fr: 'Examinez les captures d\'écran de notre magnifique interface optimisée pour une utilisation de nuit.' 
  },

  // Reviews
  'reviews.badge': { en: 'CORD CUTTER DISPATCHES', es: 'OPINIONES DE CORD CUTTERS', fr: 'AVIS DE CORD CUTTERS' },
  'reviews.title': { en: 'Feedback from Real Cord Cutters', es: 'Opiniones de nuestros Espectadores Globales', fr: 'Paroles de nos Spectateurs Mondiaux' },
  'reviews.description': { 
    en: 'Millions of tech-savvy individuals have installed the MovieBox App to stream global media safely and discard premium subscriptions.', 
    es: 'Millones de entusiastas del streaming utilizan la aplicación MovieBox App para optimizar su experiencia multimedia y ahorrar dinero.', 
    fr: 'Des millions d\'amateurs de streaming utilisent l\'application MovieBox App pour optimiser leur expérience et économiser de l\'argent.' 
  },

  // FAQ
  'faq.badge': { en: 'INFORMATION CENTER', es: 'CENTRO DE INFORMACIÓN', fr: 'CENTRE D\'INFORMATIONS' },
  'faq.title': { en: 'Common MovieBox App Questions answered', es: 'Preguntas Frecuentes', fr: 'Foire Aux Questions' },
  'faq.description': { 
    en: 'Get quick answers to questions regarding installation procedures, platform compatibility, and antivirus clearance.', 
    es: 'Encuentre respuestas rápidas sobre instalación, compatibilidad y seguridad de la aplicación MovieBox App.', 
    fr: 'Trouvez des réponses rapides concernant l\'installation, la compatibilité et la sécurité de l\'application MovieBox App.' 
  },

  // CTA Block
  'cta.badge': { en: 'GET STARTED INSTANTLY', es: 'EMPIECE INSTANTÁNEAMENTE', fr: 'COMMENCEZ INSTANTANÉMENT' },
  'cta.title': { en: 'Download MovieBox App v4.8.2 Instantly', es: 'Desbloquee la Transmisión de Calidad Cinematográfica Hoy', fr: 'Débloquez le Streaming de Qualité Cinema Aujourd\'hui' },
  'cta.description': { 
    en: 'Experience absolute cord-cutting freedom. Join over 12 million global viewers enjoying premium movies, TV episodes, and live sports on any device with MovieBox App.', 
    es: 'Únase hoy a más de 12 millones de usuarios en todo el mundo y acceda a la verdadera libertad de transmisión multimedia con la aplicación MovieBox App.', 
    fr: 'Rejoignez plus de 12 millions d\'utilisateurs dans le monde et accédez à une vraie liberté de diffusion multimédia avec MovieBox App.' 
  },
  'cta.download_apk': { en: 'Download MovieBox APK Now', es: 'Descargar MovieBox APK', fr: 'Télécharger MovieBox APK' },
  'cta.secure_version': { en: 'Official Safe v4.8.2 Release • 32.4MB', es: 'Certificado Seguro v4.8.2 • 32.4MB', fr: 'Certifié Sécurisé v4.8.2 • 32.4MB' },
  'cta.malware_free': { en: '100% Virus & Malware Free Checked', es: 'Certificado 100% Libre de Malware', fr: 'Certifié 100% sans Malware' },
  'cta.zero_subs': { en: 'No Hidden Subscription Rates', es: 'Sin Costos de Suscripción', fr: 'Aucun Frais d\'Abonnement' },
  'cta.ad_blocking': { en: 'Built-in Ad-Blocker Active', es: 'Motor de Bloqueo de Anuncios Activo', fr: 'Bloqueur de Publicités Actif' }
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('moviebox_locale');
    const validLocales = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'hi'];
    if (saved && validLocales.includes(saved)) {
      return saved as Locale;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('moviebox_locale', locale);
    // Dynamically adjust html lang attribute
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string, defaultValue?: string): string => {
    const entry = translations[key];
    if (entry) {
      if (entry[locale]) {
        return entry[locale]!;
      }
      if (entry['en']) {
        return entry['en']!;
      }
    }
    return defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import arTranslation from './locales/ar.json';
import cyTranslation from './locales/cy.json';
import deTranslation from './locales/de.json';
import frTranslation from './locales/fr.json';
import hiTranslation from './locales/hi.json';
import ruTranslation from './locales/ru.json';
import viTranslation from './locales/vi.json';
import zhTranslation from './locales/zh.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    ar: { translation: arTranslation },
    cy: { translation: cyTranslation },
    de: { translation: deTranslation },
    fr: { translation: frTranslation },
    hi: { translation: hiTranslation },
    ru: { translation: ruTranslation },
    vi: { translation: viTranslation },
    zh: { translation: zhTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language.startsWith('pl') ? 'en' : 'pl';
    i18n.changeLanguage(next);
  };

  const isPolish = i18n.language.startsWith('pl');

  return (
    <button onClick={toggle}>
      {isPolish ? 'EN' : 'PL'}
    </button>
  );
}
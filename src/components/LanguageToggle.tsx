'use client';
import Image from "next/image";

import { useTranslation } from 'react-i18next';

interface LanguageBubbleProps {
  width?: number;
  height?: number;
}

export default function LanguageToggle({ width = 100, height = 100 }: LanguageBubbleProps) {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language.startsWith('pl') ? 'en' : 'pl';
    i18n.changeLanguage(next);
  };

  const isPolish = i18n.language.startsWith('pl');

  return (
    <a
      className="relative inline-flex items-center justify-center hover:scale-105 transition duration-200"
      style={{ width, height }}
    >
      <Image
        onClick={toggle}
        src="/images/dialog-bubble.png"
        alt=""
        fill
        className="object-contain"
      />
      <span className="relative -top-1 font-jersey20 text-lg">
        <button onClick={toggle}>
          {isPolish ? 'PL' : 'EN'}
        </button>
      </span>
    </a>
  );
}
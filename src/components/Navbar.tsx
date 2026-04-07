'use client';

import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import SocialBubble from "./SocialBubble";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12">
      <span className="font-island_moments text-white text-xl tracking-wide">
        {t('navbar.title')}
      </span>

      <div className="flex items-center gap-4">
        <LanguageToggle />

        <SocialBubble
          href="https://instagram.com/themariamagdalena_autorka/"
          label="Instagram"
        />
        <SocialBubble
          href="https://instagram.com/themariamagdalena_autorka/"
          label="TikTok"
        />
        <SocialBubble
          href="https://instagram.com/themariamagdalena_autorka/"
          label="Wattpad"
        />
        <SocialBubble
          href="https://instagram.com/themariamagdalena_autorka/"
          label="Empik"
        />
      </div>
    </nav>
  );
}
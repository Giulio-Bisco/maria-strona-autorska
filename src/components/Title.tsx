'use client';
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Title() {
  const { t } = useTranslation();

  return (
    <div className="relative text-center max-w-1/3">
      <Image
        src="/images/heart.png"
        alt=""
        width={80}
        height={80}
        className="absolute -left-11 -top-7"
      />
      <Image
        src="/images/heart.png"
        alt=""
        width={130}
        height={130}
        className="absolute -right-22 -bottom-0 rotate-60"
      />
      <h5 className="font-jersey20 text-xl text-white">@themariamagdalena</h5>
      <h1 className="font-jersey20 text-8xl text-white">{t('hero.title')}</h1>
      <p className="font-island_moments text-6xl text-white">{t('hero.subtitle')}</p>
    </div>
  );
}
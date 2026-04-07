'use client';

import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <Title />
      </div>
    </main>
  )
}

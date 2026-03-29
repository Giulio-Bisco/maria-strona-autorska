import type { Metadata } from "next";
import I18nProvider from '@/components/I18nProvider';
import "./globals.css";
import { Island_Moments, Jersey15, Jersey20, Jersey25 } from "./fonts";

export const metadata: Metadata = {
  title: 'Maria Magdalena Syryńska - Author',
  description: 'Official website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${Island_Moments.variable}
        ${Jersey15.variable}
        ${Jersey20.variable}
        ${Jersey25.variable}
      `}
    >
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
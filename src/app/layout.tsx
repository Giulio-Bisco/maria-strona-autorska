import type { Metadata } from "next";
import I18nProvider from '@/components/I18nProvider';
import "./globals.css";

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
    <html lang="en">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
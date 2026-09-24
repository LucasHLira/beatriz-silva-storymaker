import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Beatriz Mobile | Registros que viram memórias',
  description:
    'Beatriz Mobile — registros audiovisuais para transformar momentos, histórias e experiências em memórias.',
  openGraph: {
    title: 'Beatriz Mobile | Registros que viram memórias',
    description:
      'Beatriz Mobile — registros audiovisuais para transformar momentos, histórias e experiências em memórias.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="grain overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

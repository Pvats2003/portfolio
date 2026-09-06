import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { ScrollProgress } from '@/components/ScrollProgress';
import { site } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Priyanshu Vats — Product × AI × Operations',
    template: '%s — Priyanshu Vats',
  },
  description:
    'Priyanshu Vats is a product-minded AI operator building products, automation systems, and operational infrastructure across AI, robotics, and real-world workflows.',
  keywords: ['Priyanshu Vats', 'Product Manager', 'AI Product', 'Automation', 'Operations', 'Career OS', 'Instawork'],
  authors: [{ name: 'Priyanshu Vats' }],
  openGraph: {
    title: 'Priyanshu Vats — Product × AI × Operations',
    description:
      'Product-minded operator building AI products, automation systems, and operational infrastructure.',
    url: site.url,
    siteName: 'Priyanshu Vats',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Vats — Product × AI × Operations',
    description:
      'Product-minded operator building AI products, automation systems, and operational infrastructure.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        <MotionConfig reducedMotion="user">
          <a
            href="#main"
            className="fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-accent px-4 py-2 text-sm font-medium text-bg transition-transform duration-150 focus:translate-y-0"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navigation />
          <CommandPalette />
          <main id="main">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { BackToTop } from '@/components/ui/BackToTop';
import './globals.css';

// Fonts configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Lokkum Steakhouse - Restaurant Gastronomique à Buchelay (78)',
    template: '%s | Lokkum Steakhouse'
  },
  description: 'Découvrez l\'art de la viande d\'exception au Lokkum Steakhouse à Buchelay. Pièces de bœuf maturées, cuisine gastronomique et service d\'excellence.',
  keywords: [
    'restaurant steakhouse',
    'viande premium',
    'bœuf maturé',
    'restaurant Buchelay',
    'gastronomie française',
    'restaurant 78'
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Lokkum Steakhouse - L\'Art de la Viande d\'Exception',
    description: 'Restaurant gastronomique spécialisé dans les pièces de bœuf d\'exception à Buchelay.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Lokkum Steakhouse',
      }
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-luxury-black text-luxury-cream">
          <main id="main-content" className="relative">
            {children}
          </main>
        </div>
        
        {/* Back to top button - maintenant un composant client */}
        <BackToTop />
      </body>
    </html>
  );
}
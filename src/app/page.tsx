import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MenuHighlights } from '@/components/sections/MenuHighlights';
import { ReservationCTA } from '@/components/sections/ReservationCTA';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Lokkum Steakhouse - Restaurant Gastronomique à Buchelay',
  description: 'Découvrez l\'art de la viande d\'exception au Lokkum Steakhouse. Pièces de bœuf maturées, cuisine gastronomique et service d\'excellence à Buchelay (78).',
  openGraph: {
    title: 'Lokkum Steakhouse - L\'Art de la Viande d\'Exception',
    description: 'Restaurant gastronomique spécialisé dans les pièces de bœuf d\'exception à Buchelay.',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Lokkum Steakhouse - Accueil',
      }
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Menu Highlights */}
        <MenuHighlights />
        
        {/* Reservation CTA */}
        <ReservationCTA />
        
        {/* Testimonials */}
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
}
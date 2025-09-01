import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ReservationCTA } from '@/components/sections/ReservationCTA';

export const metadata: Metadata = {
  title: 'Réservations - Lokkum Steakhouse',
  description: 'Réservez votre table au Lokkum Steakhouse à Buchelay. Réservation en ligne simple et rapide. Confirmation immédiate.',
};

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-luxury-charcoal/30">
          <div className="container-luxury text-center">
            <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
              Réservation
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
              Réservez Votre
              <span className="text-gradient-gold"> Table</span>
            </h1>
            <p className="text-xl text-luxury-cream/80 leading-relaxed max-w-2xl mx-auto">
              Vivez une expérience culinaire d'exception dans notre cadre raffiné.
            </p>
          </div>
        </section>

        {/* Section réservation complète */}
        <ReservationCTA />

        {/* Informations pratiques */}
        <section className="section-padding bg-luxury-charcoal/30">
          <div className="container-luxury">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-luxury-black/50 rounded-2xl p-6 text-center border border-luxury-gold/20">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-luxury-cream mb-3">
                  Confirmation Rapide
                </h3>
                <p className="text-luxury-cream/70 text-sm">
                  Confirmation de votre réservation dans les 2 heures
                </p>
              </div>

              <div className="bg-luxury-black/50 rounded-2xl p-6 text-center border border-luxury-gold/20">
                <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-luxury-cream mb-3">
                  Événements Spéciaux
                </h3>
                <p className="text-luxury-cream/70 text-sm">
                  Anniversaires, demandes en mariage, dîners d'affaires
                </p>
              </div>

              <div className="bg-luxury-black/50 rounded-2xl p-6 text-center border border-luxury-gold/20">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-luxury-cream mb-3">
                  Groupes & Privatisation
                </h3>
                <p className="text-luxury-cream/70 text-sm">
                  Jusqu'à 50 personnes - Espaces privatisables
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
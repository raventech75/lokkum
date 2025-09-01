import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Avis Clients - Lokkum Steakhouse',
  description: 'Découvrez les témoignages de nos clients satisfaits. Plus de 300 avis clients nous font confiance pour des moments d\'exception au Lokkum Steakhouse.',
};

export default function AvisPage() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navigation />
      
      <main>
        {/* Hero Section pour la page Avis */}
        <section className="relative pt-32 pb-20 bg-luxury-charcoal/30">
          <div className="container-luxury text-center">
            <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
              Témoignages
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
              Avis de Nos
              <span className="text-gradient-gold"> Clients</span>
            </h1>
            <p className="text-xl text-luxury-cream/80 leading-relaxed max-w-2xl mx-auto">
              Découvrez ce que pensent nos clients de leur expérience au Lokkum Steakhouse.
            </p>
          </div>
        </section>

        {/* Section témoignages complète */}
        <TestimonialsSection />

        {/* Section statistiques */}
        <section className="section-padding bg-luxury-black">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-luxury-charcoal/50 rounded-xl p-6 border border-luxury-gold/20">
                <div className="text-4xl font-bold text-luxury-gold mb-2">4.8</div>
                <div className="text-luxury-cream/60">Note Moyenne</div>
                <div className="text-luxury-cream/40 text-sm mt-2">Sur 5 étoiles</div>
              </div>
              <div className="bg-luxury-charcoal/50 rounded-xl p-6 border border-luxury-gold/20">
                <div className="text-4xl font-bold text-luxury-gold mb-2">300+</div>
                <div className="text-luxury-cream/60">Avis Clients</div>
                <div className="text-luxury-cream/40 text-sm mt-2">Vérifiés</div>
              </div>
              <div className="bg-luxury-charcoal/50 rounded-xl p-6 border border-luxury-gold/20">
                <div className="text-4xl font-bold text-luxury-gold mb-2">95%</div>
                <div className="text-luxury-cream/60">Satisfaction</div>
                <div className="text-luxury-cream/40 text-sm mt-2">Clients satisfaits</div>
              </div>
              <div className="bg-luxury-charcoal/50 rounded-xl p-6 border border-luxury-gold/20">
                <div className="text-4xl font-bold text-luxury-gold mb-2">5</div>
                <div className="text-luxury-cream/60">Années</div>
                <div className="text-luxury-cream/40 text-sm mt-2">D'excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-luxury-charcoal/30">
          <div className="container-luxury text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-cream mb-6">
              Partagez Votre Expérience
            </h2>
            <p className="text-xl text-luxury-cream/80 mb-8 max-w-2xl mx-auto">
              Votre avis nous aide à améliorer continuellement notre service et guide les futurs clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://maps.google.com/lokkumsteakhouse" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Laisser un Avis Google
              </a>
              <a 
                href="/contact"
                className="btn-secondary"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
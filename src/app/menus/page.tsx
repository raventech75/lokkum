import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { MenuHighlights } from '@/components/sections/MenuHighlights';

export const metadata: Metadata = {
  title: 'Nos Menus - Lokkum Steakhouse',
  description: 'Découvrez notre carte exceptionnelle : pièces de bœuf maturées, entrées raffinées, desserts gourmands et cave d\'exception. Cuisine gastronomique à Buchelay.',
};

export default function MenusPage() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-luxury-charcoal/30">
          <div className="container-luxury text-center">
            <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
              Notre Carte
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
              Nos Menus
              <span className="text-gradient-gold"> d'Exception</span>
            </h1>
            <p className="text-xl text-luxury-cream/80 leading-relaxed max-w-2xl mx-auto">
              Une sélection de pièces de bœuf d'exception, sublimées par notre chef et son équipe.
            </p>
          </div>
        </section>

        {/* Menu complet */}
        <MenuHighlights />

        {/* Informations importantes */}
        <section className="section-padding bg-luxury-black">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-luxury-charcoal/50 rounded-2xl p-8 border border-luxury-gold/20">
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
                  Informations Allergènes
                </h3>
                <p className="text-luxury-cream/70 mb-4">
                  Nos équipes sont formées pour vous renseigner sur la composition de nos plats. 
                  N'hésitez pas à nous signaler vos allergies ou intolérances.
                </p>
                <ul className="text-luxury-cream/60 text-sm space-y-2">
                  <li>• Gluten présent dans certaines préparations</li>
                  <li>• Plats végétariens disponibles sur demande</li>
                  <li>• Informations détaillées auprès de votre serveur</li>
                </ul>
              </div>

              <div className="bg-luxury-charcoal/50 rounded-2xl p-8 border border-luxury-gold/20">
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
                  Origine & Qualité
                </h3>
                <p className="text-luxury-cream/70 mb-4">
                  Nous sélectionnons rigoureusement nos fournisseurs pour vous garantir 
                  des produits d'exception.
                </p>
                <ul className="text-luxury-cream/60 text-sm space-y-2">
                  <li>• Viandes françaises et européennes</li>
                  <li>• Maturation en chambre froide</li>
                  <li>• Produits frais et de saison</li>
                  <li>• Traçabilité complète</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
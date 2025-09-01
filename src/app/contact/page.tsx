import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { restaurantInfo } from '@/data/mock';

export const metadata: Metadata = {
  title: 'Contact - Lokkum Steakhouse',
  description: 'Contactez le Lokkum Steakhouse à Buchelay. Réservations, informations, événements privés. Téléphone, email et plan d\'accès.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-luxury-charcoal/30">
          <div className="container-luxury text-center">
            <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
              Contact
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
              Nous
              <span className="text-gradient-gold"> Contacter</span>
            </h1>
            <p className="text-xl text-luxury-cream/80 leading-relaxed max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour toute question ou réservation.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-luxury-black">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Informations de contact */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-luxury-cream mb-8">
                    Informations Pratiques
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-luxury-gold">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-cream mb-2">Adresse</h3>
                        <p className="text-luxury-cream/70">
                          {restaurantInfo.address.street}<br />
                          {restaurantInfo.address.postalCode} {restaurantInfo.address.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-luxury-gold">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-cream mb-2">Téléphone</h3>
                        <a 
                          href={`tel:${restaurantInfo.contact.phone.replace(/\s/g, '')}`}
                          className="text-luxury-gold hover:text-yellow-500 transition-colors"
                        >
                          {restaurantInfo.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-luxury-gold">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-cream mb-2">Email</h3>
                        <a 
                          href={`mailto:${restaurantInfo.contact.email}`}
                          className="text-luxury-gold hover:text-yellow-500 transition-colors"
                        >
                          {restaurantInfo.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-luxury-gold">🚗</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-cream mb-2">Parking</h3>
                        <p className="text-luxury-cream/70">
                          Parking gratuit devant le restaurant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-luxury-charcoal/50 rounded-2xl p-8 border border-luxury-gold/20">
                  <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-6">
                    Horaires d'Ouverture
                  </h3>
                  <div className="space-y-3">
                    {restaurantInfo.hours.map((hour) => (
                      <div
                        key={hour.day}
                        className="flex justify-between items-center text-luxury-cream/70"
                      >
                        <span className="capitalize font-medium">{hour.dayLabel}</span>
                        <span>
                          {hour.closed ? (
                            <span className="text-red-400">Fermé</span>
                          ) : (
                            <span>
                              {hour.lunch && `${hour.lunch.open}-${hour.lunch.close}`}
                              {hour.lunch && hour.dinner && ' • '}
                              {hour.dinner && `${hour.dinner.open}-${hour.dinner.close}`}
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte/Plan */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-luxury-cream mb-8">
                    Plan d'Accès
                  </h2>
                  
                  <div className="aspect-video rounded-2xl overflow-hidden bg-luxury-charcoal/50 border border-luxury-gold/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🗺️</div>
                      <h3 className="text-luxury-cream font-semibold mb-2">Plan d'accès</h3>
                      <p className="text-luxury-cream/60 text-sm">
                        Carte interactive Google Maps à intégrer
                      </p>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address.street + ', ' + restaurantInfo.address.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 btn-primary"
                      >
                        Voir sur Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions rapides */}
                <div className="bg-luxury-charcoal/50 rounded-2xl p-8 border border-luxury-gold/20">
                  <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-6">
                    Actions Rapides
                  </h3>
                  <div className="space-y-4">
                    <a href="/reservations" className="block btn-primary text-center">
                      Réserver une Table
                    </a>
                    <a 
                      href={`tel:${restaurantInfo.contact.phone.replace(/\s/g, '')}`}
                      className="block btn-secondary text-center"
                    >
                      Appeler le Restaurant
                    </a>
                    <a href="/menus" className="block btn-secondary text-center">
                      Consulter la Carte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
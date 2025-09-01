'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { restaurantInfo } from '@/data/mock';
import {
  CalendarDaysIcon,
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const quickReservationTimes = ['19:00', '19:30', '20:00', '20:30', '21:00'];

const features = [
  {
    icon: SparklesIcon,
    title: 'Ambiance Raffinée',
    description: 'Cadre élégant pour vos soirées d\'exception'
  },
  {
    icon: UsersIcon,
    title: 'Service Personnalisé',
    description: 'Une équipe aux petits soins pour vous'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Réservation Simple',
    description: 'Réservez en ligne en quelques clics'
  }
];

export function ReservationCTA() {
  // Correction : toLocaleDateString avec les bonnes options
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = restaurantInfo.hours.find(
    h => h.day === today
  );

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
          alt="Intérieur élégant du restaurant Lokkum"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-luxury-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 hero-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
                Réservation
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6 leading-tight">
                Réservez Votre
                <span className="text-gradient-gold"> Table</span>
              </h2>
              <p className="text-xl text-luxury-cream/80 leading-relaxed">
                Vivez une expérience culinaire d'exception dans notre cadre raffiné. 
                Notre équipe vous attend pour un moment inoubliable.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury-gold/10 rounded-xl mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <h3 className="font-semibold text-luxury-cream mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-luxury-cream/60 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-luxury-cream/80">
                <PhoneIcon className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span className="font-medium">{restaurantInfo.contact.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3 text-luxury-cream/80">
                <MapPinIcon className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span className="font-medium">
                  {restaurantInfo.address.street}, {restaurantInfo.address.city}
                </span>
              </div>

              {todayHours && !todayHours.closed && (
                <div className="flex items-center space-x-3 text-luxury-cream/80">
                  <ClockIcon className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="font-medium">
                    Ouvert aujourd'hui: {todayHours.dinner?.open} - {todayHours.dinner?.close}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right - Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-luxury-black/60 backdrop-blur-md rounded-2xl p-8 border border-luxury-gold/20 shadow-luxury"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-2">
                Réservation Rapide
              </h3>
              <p className="text-luxury-cream/70">
                Sélectionnez votre créneau préféré
              </p>
            </div>

            {/* Quick Time Selection */}
            <div className="mb-8">
              <label className="block text-luxury-cream font-medium mb-4">
                Créneaux disponibles ce soir
              </label>
              <div className="grid grid-cols-3 gap-3">
                {quickReservationTimes.map((time) => (
                  <button
                    key={time}
                    className="px-4 py-3 rounded-xl bg-luxury-charcoal/50 border border-luxury-gold/30 text-luxury-cream hover:bg-luxury-gold/10 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200 font-medium"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="space-y-4">
              <Button asChild size="lg" fullWidth className="shadow-gold">
                <Link href="/reservations">
                  <CalendarDaysIcon className="w-5 h-5 mr-2" />
                  Réserver en Ligne
                </Link>
              </Button>

              <Button asChild variant="secondary" size="lg" fullWidth>
                <Link href={`tel:${restaurantInfo.contact.phone.replace(/\s/g, '')}`}>
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Appeler le Restaurant
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-luxury-gold/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-luxury-gold mb-1">2-12</div>
                  <div className="text-luxury-cream/60 text-sm">Personnes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-luxury-gold mb-1">24h</div>
                  <div className="text-luxury-cream/60 text-sm">Confirmation</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-luxury-cream/60 text-sm leading-relaxed">
                  Pour les groupes de plus de 8 personnes ou événements privés,
                  <Link href="/contact" className="text-luxury-gold hover:underline ml-1">
                    contactez-nous directement
                  </Link>
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-luxury-gold/20">
              <div className="flex items-center justify-center space-x-6 text-luxury-cream/60 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-green-400">✓</span>
                  <span>Réservation gratuite</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-green-400">✓</span>
                  <span>Annulation 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA for Special Occasions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-luxury-charcoal/60 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 max-w-4xl mx-auto">
            <SparklesIcon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
              Événements Privés & Occasions Spéciales
            </h3>
            <p className="text-luxury-cream/80 mb-6 max-w-2xl mx-auto">
              Anniversaires, demandes en mariage, dîners d'affaires... 
              Nous personnalisons votre expérience pour rendre chaque moment unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="luxury" size="lg">
                <Link href="/evenements-prives">
                  Organiser un Événement
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/contact">
                  Demander un Devis
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
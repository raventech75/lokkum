'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  FireIcon,
  HeartIcon,
  TrophyIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: FireIcon,
    title: 'Cuisson Parfaite',
    description: 'Maîtrise de toutes les techniques de cuisson pour révéler le meilleur de chaque pièce',
  },
  {
    icon: HeartIcon,
    title: 'Passion du Métier',
    description: 'Une équipe passionnée qui met tout son savoir-faire au service de votre plaisir',
  },
  {
    icon: TrophyIcon,
    title: 'Qualité Premium',
    description: 'Sélection rigoureuse des meilleures viandes françaises et européennes',
  },
  {
    icon: UsersIcon,
    title: 'Service d\'Excellence',
    description: 'Un accueil chaleureux et un service attentionné pour une expérience mémorable',
  },
];

const chefQuote = {
  text: "La viande est un art noble qui demande respect, patience et savoir-faire. Chez Lokkum, nous sublimons chaque pièce pour vous offrir une expérience gustative d'exception.",
  author: "Chef Laurent Dubois",
  title: "Chef Exécutif"
};

export function AboutSection() {
  return (
    <section id="about-section" className="section-padding bg-luxury-charcoal/30">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
            Notre Histoire
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
            L'Excellence au Service
            <span className="text-gradient-gold"> de Votre Plaisir</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 leading-relaxed">
            Depuis 5 ans, le Lokkum Steakhouse s'impose comme la référence gastronomique 
            à Buchelay. Notre passion pour la viande d'exception nous guide dans chaque détail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-luxury-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-luxury-cream mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-luxury-cream/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chef Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-luxury-black/50 rounded-2xl p-8 border border-luxury-gold/20"
            >
              <blockquote className="text-luxury-cream/90 italic text-lg leading-relaxed mb-6">
                "{chefQuote.text}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-luxury-black font-bold text-lg">
                    {chefQuote.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-luxury-cream">
                    {chefQuote.author}
                  </div>
                  <div className="text-luxury-gold text-sm">
                    {chefQuote.title}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg">
                <Link href="/menus">
                  Découvrir Notre Carte
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  Nous Contacter
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Images Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop"
                  alt="Chef préparant une pièce de bœuf premium"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-luxury-black/90 backdrop-blur-sm rounded-xl p-6 border border-luxury-gold/30 shadow-luxury"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                    <TrophyIcon className="w-8 h-8 text-luxury-black" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-luxury-cream">5 ans</div>
                    <div className="text-luxury-gold text-sm font-medium">d'Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-gold">
                <Image
                  src="https://images.unsplash.com/photo-1552566820-dbc4d4a87dc3?w=400&h=400&fit=crop"
                  alt="Ambiance raffinée du restaurant"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-gold">
                <Image
                  src="https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop"
                  alt="Pièce de bœuf grillée à la perfection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { menuCategories } from '@/data/mock';
import {
  FireIcon,
  StarIcon,
  ChevronRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const categories = [
  { id: 'viandes', label: 'Viandes Premium', icon: FireIcon },
  { id: 'entrees', label: 'Entrées', icon: SparklesIcon },
  { id: 'desserts', label: 'Desserts', icon: StarIcon },
];

export function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState('viandes');
  
  const activeCategoryData = menuCategories.find(cat => cat.id === activeCategory);
  const highlights = activeCategoryData?.items
    .filter(item => item.signature || item.popular)
    .slice(0, 4) || [];

  return (
    <section className="section-padding bg-luxury-black">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-semibold mb-6">
            Notre Carte
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
            Nos Spécialités
            <span className="text-gradient-gold"> Signature</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 leading-relaxed">
            Découvrez une sélection de nos créations les plus appréciées, 
            préparées avec des produits d'exception.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-gold text-luxury-black shadow-gold' 
                    : 'bg-luxury-charcoal/50 text-luxury-cream hover:bg-luxury-gold/10 hover:text-luxury-gold border border-luxury-gold/20'
                  }
                `}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group card-luxury p-6 hover:shadow-2xl"
            >
              {/* Image - CORRIGÉ pour éviter le flou */}
              {item.image && (
                <div className="aspect-square rounded-xl overflow-hidden mb-6 relative bg-luxury-charcoal/50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    quality={85}
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.signature && (
                      <span className="bg-luxury-gold text-luxury-black text-xs font-bold px-3 py-1 rounded-full">
                        SIGNATURE
                      </span>
                    )}
                    {item.popular && (
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAIRE
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-luxury-cream group-hover:text-luxury-gold transition-colors duration-200 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-luxury-cream/70 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {formatPrice(item.price)}
                  </span>
                  
                  {/* Rating (mock) */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 
                            ? 'text-luxury-gold fill-luxury-gold' 
                            : 'text-luxury-cream/30'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-luxury-cream/60 ml-1">4.8</span>
                  </div>
                </div>

                {/* Allergens & Dietary */}
                {(item.allergens.length > 0 || item.dietary.length > 0) && (
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((diet) => (
                      <span
                        key={diet.type}
                        className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded-full"
                      >
                        {diet.type}
                      </span>
                    ))}
                    {item.allergens.length > 0 && (
                      <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full">
                        Allergènes: {item.allergens.join(', ')}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/menus">
                Voir la Carte Complète
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="secondary" size="lg">
              <Link href="/reservations">
                Réserver une Table
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">25+</div>
              <div className="text-luxury-cream/60">Spécialités Viande</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="text-luxury-cream/60">Produits Frais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">5★</div>
              <div className="text-luxury-cream/60">Service d'Exception</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { customerReviews } from '@/data/mock';
import { formatDate } from '@/lib/utils';
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const platforms = [
  { name: 'Google', logo: '🌟', count: '127 avis', rating: 4.8 },
  { name: 'TripAdvisor', logo: '🦉', count: '89 avis', rating: 4.7 },
  { name: 'Facebook', logo: '👍', count: '156 avis', rating: 4.9 },
];

export function TestimonialsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => 
        prev === customerReviews.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setCurrentReview((prev) => 
      prev === customerReviews.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => 
      prev === 0 ? customerReviews.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      i < rating ? (
        <StarSolidIcon key={i} className="w-5 h-5 text-luxury-gold" />
      ) : (
        <StarIcon key={i} className="w-5 h-5 text-luxury-cream/30" />
      )
    ));
  };

  return (
    <section className="section-padding bg-luxury-charcoal/30">
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
            Témoignages Clients
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-cream mb-6">
            Ce Que Disent Nos
            <span className="text-gradient-gold"> Clients</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 leading-relaxed">
            Plus de 300 avis clients nous font confiance pour des moments d'exception.
          </p>
        </motion.div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-luxury-black/50 rounded-xl p-6 text-center border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{platform.logo}</div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl font-bold text-luxury-gold">
                  {platform.rating}
                </span>
                <div className="flex">
                  {renderStars(Math.floor(platform.rating))}
                </div>
              </div>
              <div className="text-luxury-cream font-semibold mb-1">
                {platform.name}
              </div>
              <div className="text-luxury-cream/60 text-sm">
                {platform.count}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-luxury-black/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-luxury-gold/20"
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {renderStars(customerReviews[currentReview].rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-luxury-cream leading-relaxed mb-8 font-light italic">
                    "{customerReviews[currentReview].comment}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                      <UserCircleIcon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-luxury-cream">
                        {customerReviews[currentReview].customerName}
                      </div>
                      <div className="text-luxury-cream/60 text-sm">
                        {formatDate(customerReviews[currentReview].date, 'short')} • 
                        {customerReviews[currentReview].verified && (
                          <span className="text-green-400 ml-1">✓ Vérifié</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  {customerReviews[currentReview].recommendations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-luxury-gold/20">
                      <div className="text-luxury-cream/60 text-sm mb-2">A recommandé :</div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {customerReviews[currentReview].recommendations.map((rec) => (
                          <span
                            key={rec}
                            className="bg-luxury-gold/10 text-luxury-gold px-3 py-1 rounded-full text-sm"
                          >
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-luxury-black/50 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-all duration-200 backdrop-blur-sm border border-luxury-gold/20"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-luxury-black/50 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-all duration-200 backdrop-blur-sm border border-luxury-gold/20"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentReview(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReview === index
                    ? 'bg-luxury-gold scale-125'
                    : 'bg-luxury-cream/30 hover:bg-luxury-cream/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Restaurant Response */}
        {customerReviews[currentReview].response && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="bg-luxury-gold/5 border border-luxury-gold/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-luxury-black" />
                </div>
                <div className="flex-1">
                  <div className="text-luxury-cream/90 mb-3 leading-relaxed">
                    {customerReviews[currentReview].response?.message}
                  </div>
                  <div className="text-luxury-gold font-semibold text-sm">
                    {customerReviews[currentReview].response?.author} • 
                    <span className="text-luxury-cream/60 ml-1">
                      {customerReviews[currentReview].response && 
                        formatDate(customerReviews[currentReview].response.date, 'short')
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/avis">
              Voir Tous les Avis
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          <div className="mt-8 text-luxury-cream/60 text-sm">
            Votre avis compte ! Partagez votre expérience avec nous.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
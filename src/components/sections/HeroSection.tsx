'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  CalendarDaysIcon,
  PlayCircleIcon,
  ChevronDownIcon,
  StarIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1554679665-f5537cf74366?auto=format&fit=crop&w=1920&h=1080&q=80',
    alt: 'Steaks premium grillés à la perfection',
    title: 'L\'Art de la Viande d\'Exception'
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&h=1080&q=80',
    alt: 'Intérieur élégant du restaurant',
    title: 'Une Ambiance Raffinée'
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1920&h=1080&q=80',
    alt: 'Chef préparant une pièce de bœuf',
    title: 'Savoir-Faire Artisanal'
  }
];

const stats = [
  { value: '4.8/5', label: 'Note moyenne', icon: StarIcon },
  { value: '150+', label: 'Avis clients', icon: StarIcon },
  { value: '5 ans', label: 'D\'expérience', icon: MapPinIcon },
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Images Slider - CORRIGÉ */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={index === 0 ? 95 : 80}
              sizes="100vw"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-luxury-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-luxury text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-6 py-3 mb-8"
          >
            <StarIcon className="w-5 h-5 text-luxury-gold" />
            <span className="text-luxury-gold font-semibold text-sm">
              Restaurant de l'Année 2024 - Yvelines
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-luxury-cream mb-6 leading-tight"
          >
            L'Art de la{' '}
            <span className="text-gradient-gold">Viande</span>
            <br />
            d'Exception
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl lg:text-2xl text-luxury-cream/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez nos pièces de bœuf d'exception, maturées avec soin et sublimées par notre chef. 
            Une expérience gastronomique unique à Buchelay.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="shadow-gold hover:shadow-2xl"
            >
              <Link href="/reservations">
                <CalendarDaysIcon className="w-6 h-6 mr-3" />
                Réserver une Table
              </Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsVideoModalOpen(true)}
              className="group"
            >
              <PlayCircleIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Découvrir en Vidéo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-luxury-cream mb-2">
                  {stat.value}
                </div>
                <div className="text-luxury-cream/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? 'bg-luxury-gold scale-125'
                  : 'bg-luxury-cream/30 hover:bg-luxury-cream/60'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Voir l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Défiler vers le bas"
      >
        <div className="flex flex-col items-center space-y-2 text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-300">
          <span className="text-sm font-medium">Découvrir</span>
          <ChevronDownIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </motion.button>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black/90 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 bg-luxury-charcoal rounded-2xl overflow-hidden shadow-luxury"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-luxury-black/50 hover:bg-luxury-black/70 rounded-full flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-all duration-200"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ×
            </button>
            
            {/* Video Placeholder - Replace with actual video */}
            <div className="aspect-video bg-luxury-charcoal flex items-center justify-center">
              <div className="text-center">
                <PlayCircleIcon className="w-20 h-20 text-luxury-gold mx-auto mb-4" />
                <p className="text-luxury-cream text-lg">
                  Vidéo de présentation du restaurant
                </p>
                <p className="text-luxury-cream/60 text-sm mt-2">
                  Intégration avec Vimeo/YouTube à venir
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
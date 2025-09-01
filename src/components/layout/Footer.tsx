'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { restaurantInfo } from '@/data/mock';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const navigationLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Nos Menus', href: '/menus' },
  { name: 'Réservation', href: '/reservations' },
  { name: 'Avis Clients', href: '/avis' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Mentions Légales', href: '/mentions-legales' },
  { name: 'Politique de Confidentialité', href: '/politique-confidentialite' },
  { name: 'CGV', href: '/cgv' },
  { name: 'Cookies', href: '/cookies' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/lokkumsteakhouse',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/lokkumsteakhouse78',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Google',
    href: 'https://maps.google.com/lokkumsteakhouse',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20">
      {/* Main Footer Content */}
      <div className="container-luxury py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-luxury-black font-bold text-2xl font-serif">L</span>
                  </div>
                  <div className="absolute -inset-1 bg-luxury-gold/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-luxury-cream">
                    Lokkum Steakhouse
                  </div>
                  <div className="text-luxury-gold text-sm">
                    L'Art de la Viande d'Exception
                  </div>
                </div>
              </Link>
            </div>

            <p className="text-luxury-cream/70 leading-relaxed max-w-md">
              Depuis 5 ans, nous sublisons les plus belles pièces de bœuf dans un cadre raffiné 
              à Buchelay. Une expérience gastronomique unique vous attend.
            </p>

            {/* Awards & Certifications */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <StarIcon className="w-5 h-5 text-luxury-gold" />
                <span className="text-luxury-cream text-sm">Restaurant de l'Année 2024</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-luxury-cream/60 text-sm">Suivez-nous:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-luxury-charcoal/50 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-all duration-200 border border-luxury-gold/20 hover:border-luxury-gold/40"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-luxury-cream">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="pt-6 border-t border-luxury-gold/20">
              <h4 className="text-luxury-cream font-medium mb-3">Newsletter</h4>
              <p className="text-luxury-cream/60 text-sm mb-4">
                Recevez nos actualités et offres spéciales
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-luxury-charcoal/50 border border-luxury-gold/30 rounded-l-lg text-luxury-cream text-sm focus:outline-none focus:border-luxury-gold"
                />
                <button className="px-6 py-2 bg-gradient-gold text-luxury-black rounded-r-lg font-semibold text-sm hover:shadow-gold transition-all duration-200">
                  OK
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-luxury-cream">
              Contact
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div className="text-luxury-cream/70 text-sm leading-relaxed">
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.postalCode} {restaurantInfo.address.city}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <Link
                  href={`tel:${restaurantInfo.contact.phone.replace(/\s/g, '')}`}
                  className="text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-200"
                >
                  {restaurantInfo.contact.phone}
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <Link
                  href={`mailto:${restaurantInfo.contact.email}`}
                  className="text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-200"
                >
                  {restaurantInfo.contact.email}
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-6 border-t border-luxury-gold/20">
              <div className="flex items-center space-x-2 mb-4">
                <ClockIcon className="w-5 h-5 text-luxury-gold" />
                <h4 className="text-luxury-cream font-medium">Horaires</h4>
              </div>
              
              <div className="space-y-2 text-sm">
                {restaurantInfo.hours.map((hour) => (
                  <div
                    key={hour.day}
                    className="flex justify-between items-center text-luxury-cream/70"
                  >
                    <span className="capitalize font-medium">{hour.dayLabel}</span>
                    <span>
                      {hour.closed ? (
                        'Fermé'
                      ) : (
                        <>
                          {hour.lunch && `${hour.lunch.open}-${hour.lunch.close}`}
                          {hour.lunch && hour.dinner && ' • '}
                          {hour.dinner && `${hour.dinner.open}-${hour.dinner.close}`}
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-gold/20">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-luxury-cream/60 text-sm">
              © 2024 Lokkum Steakhouse. Tous droits réservés.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-luxury-cream/30">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Made with Love */}
            <div className="text-luxury-cream/60 text-sm flex items-center space-x-2">
              <span>Fait avec</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span>à Buchelay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
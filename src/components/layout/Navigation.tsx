'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Accueil', href: '/', description: 'Découvrir notre univers' },
  { name: 'Nos Menus', href: '/menus', description: 'Carte & spécialités' },
  { name: 'Réservation', href: '/reservations', description: 'Réserver une table' },
  { name: 'Avis', href: '/avis', description: 'Témoignages clients' },
  { name: 'Contact', href: '/contact', description: 'Nous contacter' },
];

const quickActions = [
  {
    icon: PhoneIcon,
    label: 'Appelez-nous',
    value: '+33 1 34 77 85 92',
    href: 'tel:+33134778592',
    color: 'text-green-400'
  },
  {
    icon: MapPinIcon,
    label: 'Adresse',
    value: '15 Ave de la République, Buchelay',
    href: 'https://maps.google.com/?q=Lokkum+Steakhouse+Buchelay',
    color: 'text-blue-400'
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-luxury-black/95 backdrop-blur-md shadow-luxury border-b border-luxury-gold/20'
            : 'bg-transparent'
        )}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-luxury-black font-bold text-xl font-serif">L</span>
                </div>
                <div className="absolute -inset-1 bg-luxury-gold/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-serif font-bold text-luxury-cream group-hover:text-luxury-gold transition-colors duration-200">
                  Lokkum
                </div>
                <div className="text-sm text-luxury-cream/70 -mt-1">
                  Steakhouse
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive(item.href)
                      ? 'text-luxury-gold bg-luxury-gold/10'
                      : 'text-luxury-cream hover:text-luxury-gold hover:bg-luxury-gold/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="tel:+33134778592"
                className="flex items-center space-x-2 text-luxury-cream hover:text-luxury-gold transition-colors duration-200"
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm font-medium">01 34 77 85 92</span>
              </Link>
              <Button
                asChild
                size="default"
                className="shadow-gold"
              >
                <Link href="/reservations">
                  <CalendarDaysIcon className="w-4 h-4 mr-2" />
                  Réserver
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-luxury-cream hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu principal"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-luxury-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-sm bg-luxury-charcoal border-l border-luxury-gold/20 shadow-luxury"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-luxury-gold/20">
                  <div className="text-lg font-serif font-bold text-luxury-gold">
                    Menu Principal
                  </div>
                  <button
                    className="p-2 rounded-lg text-luxury-cream hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            'block px-4 py-3 rounded-xl transition-all duration-200',
                            isActive(item.href)
                              ? 'bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/30'
                              : 'text-luxury-cream hover:bg-luxury-gold/10 hover:text-luxury-gold'
                          )}
                        >
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className="text-sm text-luxury-cream/60 mt-1">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-8 px-6">
                    <div className="text-sm font-semibold text-luxury-gold mb-4">
                      Actions Rapides
                    </div>
                    <div className="space-y-3">
                      {quickActions.map((action, index) => (
                        <motion.a
                          key={action.label}
                          href={action.href}
                          target={action.href.startsWith('http') ? '_blank' : undefined}
                          rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-luxury-gold/5 transition-colors duration-200"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (navigationItems.length + index) * 0.1 }}
                        >
                          <action.icon className={cn('w-5 h-5 mt-0.5', action.color)} />
                          <div>
                            <div className="text-sm font-medium text-luxury-cream">
                              {action.label}
                            </div>
                            <div className="text-xs text-luxury-cream/60 mt-1">
                              {action.value}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-luxury-gold/20">
                  <Button
                    asChild
                    size="lg"
                    fullWidth
                    className="mb-4"
                  >
                    <Link href="/reservations">
                      <CalendarDaysIcon className="w-5 h-5 mr-2" />
                      Réserver une Table
                    </Link>
                  </Button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-luxury-cream/60 text-sm">
                      <ClockIcon className="w-4 h-4" />
                      <span>Ouvert aujourd'hui 19h - 23h</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0a0a0a',
        'luxury-charcoal': '#1a1a1a',
        'luxury-gold': '#d4af37',
        'luxury-cream': '#f8f6f0',
        // Ajouter la palette gold complète
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        }
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
        'gradient-overlay': 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold': '0 10px 25px -3px rgba(212, 175, 55, 0.1)',
      }
    },
  },
  plugins: [],
}
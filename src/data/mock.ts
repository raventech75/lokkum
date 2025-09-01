import { Restaurant, MenuCategory, Review, Event, OperatingHours, Amenity } from '@/types';

// Informations du restaurant
export const restaurantInfo: Restaurant = {
  id: 'lokkum-steakhouse-78',
  name: 'Lokkum Steakhouse',
  description: 'Une expérience gastronomique d\'exception où l\'art de la viande rencontre le raffinement à la française. Découvrez nos pièces de bœuf d\'exception, maturées avec soin et sublimées par notre chef.',
  address: {
    street: '15 Avenue de la République',
    city: 'Buchelay',
    postalCode: '78200',
    country: 'France',
    coordinates: {
      latitude: 49.0167,
      longitude: 1.6833
    }
  },
  contact: {
    phone: '+33 1 34 77 85 92',
    email: 'contact@lokkumsteakhouse78.fr',
    website: 'https://www.lokkumsteakhouse78.fr'
  },
  hours: [
    {
      day: 'monday',
      dayLabel: 'Lundi',
      closed: true
    },
    {
      day: 'tuesday',
      dayLabel: 'Mardi',
      lunch: { open: '11:30', close: '14:30' },
      dinner: { open: '19:00', close: '23:00' }
    },
    {
      day: 'wednesday',
      dayLabel: 'Mercredi',
      lunch: { open: '11:30', close: '14:30' },
      dinner: { open: '19:00', close: '23:30' }
    },
    {
      day: 'thursday',
      dayLabel: 'Jeudi',
      lunch: { open: '11:30', close: '14:30' },
      dinner: { open: '19:00', close: '23:30' }
    },
    {
      day: 'friday',
      dayLabel: 'Vendredi',
      lunch: { open: '11:30', close: '14:30' },
      dinner: { open: '19:00', close: '00:00' }
    },
    {
      day: 'saturday',
      dayLabel: 'Samedi',
      lunch: { open: '11:30', close: '14:30' },
      dinner: { open: '19:00', close: '00:00' }
    },
    {
      day: 'sunday',
      dayLabel: 'Dimanche',
      lunch: { open: '10:30', close: '14:30' },
      dinner: { open: '19:00', close: '23:00' }
    }
  ] as OperatingHours[],
  amenities: [
    {
      id: 'climate',
      name: 'Climatisation',
      icon: 'snowflake',
      description: 'Restaurant climatisé pour votre confort'
    },
    {
      id: 'parking',
      name: 'Parking Gratuit',
      icon: 'car',
      description: 'Places de parking gratuites devant le restaurant'
    },
    {
      id: 'terrace',
      name: 'Terrasse',
      icon: 'sun',
      description: 'Belle terrasse pour les beaux jours'
    },
    {
      id: 'accessibility',
      name: 'Accès PMR',
      icon: 'accessibility',
      description: 'Accès facilité pour personnes à mobilité réduite'
    },
    {
      id: 'private',
      name: 'Privatisation',
      icon: 'users',
      description: 'Possibilité de privatiser pour vos événements'
    },
    {
      id: 'wifi',
      name: 'WiFi Gratuit',
      icon: 'wifi',
      description: 'Connexion WiFi haut débit gratuite'
    }
  ] as Amenity[],
  images: {
    hero: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&h=1080&q=80',
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=1920&h=1080&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1920&h=1080&q=80'
    ],
    interior: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    exterior: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    food: [
      'https://unsplash.com/fr/photos/viande-grillee-a-la-tomate-et-aux-legumes-verts-a-la-poele-noire-eZu7MRgi-mM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      'https://unsplash.com/fr/photos/viande-grillee-a-la-tomate-et-aux-legumes-verts-a-la-poele-noire-eZu7MRgi-mM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=400&h=400&q=80'
    ],
    team: [
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&h=400&q=80'
    ]
  },
  socialMedia: {
    instagram: 'https://instagram.com/lokkumsteakhouse',
    facebook: 'https://facebook.com/lokkumsteakhouse78',
    google: 'https://maps.google.com/lokkumsteakhouse'
  }
};

// Menu complet du restaurant
export const menuCategories: MenuCategory[] = [
  {
    id: 'entrees',
    name: 'Entrées Raffinées',
    description: 'Éveillez vos papilles avec nos créations signature',
    icon: 'utensils',
    order: 1,
    items: [
      {
        id: 'foie-gras',
        name: 'Foie Gras de Canard Mi-Cuit',
        description: 'Foie gras artisanal, chutney de figues, brioche toastée et fleur de sel de Guérande',
        price: 28,
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&h=300&q=80',
        allergens: ['gluten', 'œufs'],
        dietary: [],
        ingredients: ['foie gras de canard', 'figues', 'brioche', 'fleur de sel'],
        signature: true
      },
      {
        id: 'tartare-saumon',
        name: 'Tartare de Saumon Écossais',
        description: 'Saumon fumé label rouge, avocat, câpres, citron vert et toast de pain noir',
        price: 22,
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&h=300&q=80',
        allergens: ['poisson', 'gluten'],
        dietary: [],
        ingredients: ['saumon écossais', 'avocat', 'câpres', 'citron vert']
      },
      {
        id: 'escargots',
        name: 'Escargots de Bourgogne',
        description: 'Six escargots au beurre persillé, ail et fines herbes, pain de campagne',
        price: 16,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&h=300&q=80',
        allergens: ['gluten', 'lait'],
        dietary: [],
        ingredients: ['escargots', 'beurre', 'persil', 'ail']
      }
    ]
  },
  {
    id: 'viandes',
    name: 'Pièces de Bœuf d\'Exception',
    description: 'Nos viandes maturées, cuites selon vos préférences',
    icon: 'beef',
    order: 2,
    items: [
      {
        id: 'cote-boeuf',
        name: 'Côte de Bœuf Black Angus',
        description: 'Pièce de 800g maturée 28 jours, pommes grenailles, légumes de saison',
        price: 85,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&h=300&q=80',
        allergens: [],
        dietary: [],
        ingredients: ['côte de bœuf Black Angus', 'pommes grenailles', 'légumes de saison'],
        cookingStyles: [
          { name: 'bleu', description: 'Saisie à l\'extérieur, crue à l\'intérieur', temperature: '45-50°C' },
          { name: 'saignant', description: 'Rouge au centre, tiède', temperature: '50-55°C' },
          { name: 'à point', description: 'Rosée au centre, chaude', temperature: '55-60°C' },
          { name: 'bien cuit', description: 'Cuite à cœur', temperature: '65°C+' }
        ],
        signature: true,
        popular: true
      },
      {
        id: 'filet-wagyu',
        name: 'Filet de Bœuf Wagyu A5',
        description: 'Pièce exceptionnelle de 250g, purée de truffe, jus corsé',
        price: 120,
        image: 'https://images.unsplash.com/photo-1625300105749-77d295c0f278?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FneXV8ZW58MHx8MHx8fDI=80',
        allergens: ['lait'],
        dietary: [],
        ingredients: ['filet Wagyu A5', 'truffe noire', 'pommes de terre'],
        signature: true
      },
      {
        id: 'entrecote',
        name: 'Entrecôte de Salers',
        description: 'Pièce de 350g, beurre maître d\'hôtel, frites maison',
        price: 35,
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=400&h=300&q=80',
        allergens: ['lait', 'gluten'],
        dietary: [],
        ingredients: ['entrecôte Salers', 'beurre', 'pommes de terre'],
        popular: true
      }
    ]
  },
  {
    id: 'accompagnements',
    name: 'Accompagnements Signature',
    description: 'Sublimez votre pièce avec nos accompagnements maison',
    icon: 'leaf',
    order: 3,
    items: [
      {
        id: 'frites-truffe',
        name: 'Frites à la Truffe',
        description: 'Pommes Bintje, huile de truffe, parmesan râpé',
        price: 12,
        allergens: ['lait'],
        dietary: [{ type: 'vegetarian', icon: 'leaf' }],
        ingredients: ['pommes Bintje', 'huile de truffe', 'parmesan']
      },
      {
        id: 'gratin-dauphinois',
        name: 'Gratin Dauphinois',
        description: 'Pommes de terre, crème fraîche, comté AOP',
        price: 9,
        allergens: ['lait'],
        dietary: [{ type: 'vegetarian', icon: 'leaf' }],
        ingredients: ['pommes de terre', 'crème fraîche', 'comté AOP']
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts Gourmands',
    description: 'Finissez en beauté avec nos créations sucrées',
    icon: 'cake',
    order: 4,
    items: [
      {
        id: 'tarte-chocolat',
        name: 'Tarte au Chocolat Valrhona',
        description: 'Chocolat noir 70%, crème anglaise vanille, éclats de cacao',
        price: 14,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&h=300&q=80',
        allergens: ['gluten', 'œufs', 'lait'],
        dietary: [],
        ingredients: ['chocolat Valrhona', 'crème anglaise', 'vanille'],
        signature: true
      },
      {
        id: 'creme-brulee',
        name: 'Crème Brûlée Vanille',
        description: 'Crème onctueuse à la vanille de Madagascar, sucre caramélisé',
        price: 12,
        allergens: ['œufs', 'lait'],
        dietary: [{ type: 'gluten-free', icon: 'wheat-off' }],
        ingredients: ['crème fraîche', 'vanille Madagascar', 'sucre']
      }
    ]
  },
  {
    id: 'boissons',
    name: 'Cave d\'Exception',
    description: 'Vins sélectionnés et spiritueux premium',
    icon: 'wine',
    order: 5,
    items: [
      {
        id: 'bordeaux-2018',
        name: 'Château Margaux 2018',
        description: 'Grand cru classé, Médoc, notes de fruits rouges et épices',
        price: 280,
        allergens: ['sulfites'],
        dietary: [],
        ingredients: ['raisin', 'sulfites']
      },
      {
        id: 'champagne-cristal',
        name: 'Champagne Cristal Roederer',
        description: 'Cuvée prestige, bulles fines, arômes de fruits blancs',
        price: 350,
        allergens: ['sulfites'],
        dietary: [],
        ingredients: ['raisin', 'sulfites'],
        signature: true
      }
    ]
  }
];

// Avis clients
export const customerReviews: Review[] = [
  {
    id: 'review-1',
    customerName: 'Marie Dubois',
    rating: 5,
    comment: 'Une expérience gastronomique exceptionnelle ! La côte de bœuf était parfaitement cuite et le service irréprochable. L\'ambiance feutrée est parfaite pour un dîner romantique.',
    date: new Date('2024-08-15'),
    verified: true,
    visitType: 'dinner',
    recommendations: ['côte-boeuf', 'tarte-chocolat'],
    response: {
      message: 'Merci Marie pour ce merveilleux avis ! Nous sommes ravis que votre soirée ait été à la hauteur de vos attentes.',
      date: new Date('2024-08-16'),
      author: 'Chef Laurent'
    }
  },
  {
    id: 'review-2',
    customerName: 'Philippe Martin',
    rating: 5,
    comment: 'Restaurant découvert par hasard, quelle belle surprise ! Le filet Wagyu était divin et le personnel aux petits soins. Je recommande vivement !',
    date: new Date('2024-08-10'),
    verified: true,
    visitType: 'dinner',
    recommendations: ['filet-wagyu', 'champagne-cristal']
  },
  {
    id: 'review-3',
    customerName: 'Sophie Laurent',
    rating: 4,
    comment: 'Très bonne adresse pour les amateurs de viande. Seul bémol : le service était un peu long ce soir-là, mais la qualité était au rendez-vous.',
    date: new Date('2024-07-28'),
    verified: true,
    visitType: 'dinner',
    recommendations: ['entrecote']
  }
];

// Événements et promotions
export const upcomingEvents: Event[] = [
  {
    id: 'wine-tasting-sept',
    title: 'Dégustation Bordeaux Prestige',
    description: 'Soirée dégustation avec notre sommelier autour des grands crus de Bordeaux, accompagnée d\'une sélection de charcuterie fine.',
    date: new Date('2024-09-15'),
    type: 'wine_tasting',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&h=400&q=80',
    price: 85,
    maxCapacity: 20,
    currentBookings: 12,
    isRecurring: true,
    recurringPattern: {
      frequency: 'monthly',
      dayOfMonth: 15
    }
  },
  {
    id: 'chef-table-oct',
    title: 'Table du Chef - Menu 7 Services',
    description: 'Expérience exclusive avec notre chef : menu dégustation 7 services, accords mets-vins inclus.',
    date: new Date('2024-10-20'),
    type: 'chef_table',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&h=400&q=80',
    price: 150,
    maxCapacity: 8,
    currentBookings: 3,
    isRecurring: false
  }
];

// Heures d'affluence pour optimiser les réservations
export const busyTimes = [
  { day: 'tuesday', hour: 12, occupancy: 75 },
  { day: 'tuesday', hour: 20, occupancy: 85 },
  { day: 'wednesday', hour: 12, occupancy: 80 },
  { day: 'wednesday', hour: 20, occupancy: 90 },
  { day: 'friday', hour: 20, occupancy: 95 },
  { day: 'saturday', hour: 20, occupancy: 100 },
  { day: 'sunday', hour: 12, occupancy: 70 }
];

// Tables disponibles
export const availableTables = [
  { id: 'T01', capacity: 2, type: 'standard', location: 'interior' },
  { id: 'T02', capacity: 4, type: 'standard', location: 'interior' },
  { id: 'T03', capacity: 6, type: 'standard', location: 'interior' },
  { id: 'T04', capacity: 2, type: 'terrace', location: 'exterior' },
  { id: 'T05', capacity: 4, type: 'terrace', location: 'exterior' },
  { id: 'P01', capacity: 12, type: 'private', location: 'private_room' }
];

export default {
  restaurantInfo,
  menuCategories,
  customerReviews,
  upcomingEvents,
  busyTimes,
  availableTables
};
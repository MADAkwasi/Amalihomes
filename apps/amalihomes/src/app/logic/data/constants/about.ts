import { ValuePropIconName } from '../../../../app/presentation/components/value-prop-icon/constants';

export interface Showroom {
  id: string;
  name: string;
  image: string;
}

export interface ShowroomsData {
  [region: string]: Showroom[];
}

export interface StatItem {
  value: string;
  label: string;
}

export const teamMembers = {
  title: 'Global Presence',
  description:
    'AmaliHomes has expanded globally, bringing exceptional craftsmanship and timeless designs to families around the world. Experience comfort, quality, and style—wherever you are',
  data: [
    {
      id: 1,
      name: 'Martin Hecker',
      position: 'Founder & Chief Executive Officer',
      image: 'https://i.postimg.cc/c4pGPHN7/image.png',
    },
    {
      id: 2,
      name: 'Mattias Owen',
      position: 'Chief Operations Officer',
      image: 'https://i.postimg.cc/C1L3bnj0/image.png',
    },
    {
      id: 3,
      name: 'Amelia Danielson',
      position: 'Chief Design Officer',
      image: 'https://i.postimg.cc/vBqph8zV/image.png',
    },
    {
      id: 4,
      name: 'Jasmine Hassan',
      position: 'Global Finance Officer',
      image: 'https://i.postimg.cc/BQ1d501j/image.png',
    },
  ],
};
export const featuredData = {
  title: "What We're known For",
  image: 'https://i.postimg.cc/vBqph8zV/image.png',
  description:
    'For over three decades, AmaliHomes has been dedicated to building dream homes that surpass expectations in quality, design, and sustainability.',
  data: [
    {
      id: 1,
      icon: ValuePropIconName.Medal,
      title: 'Award Winning designs',
      description: 'Experience innovative and stylish furniture, recognized for excellence.',
    },
    {
      id: 2,
      icon: ValuePropIconName.Badge,
      title: '10-year warranty',
      description: 'Enjoy peace of mind with our durable furniture, backed by a 10-year warranty.',
    },
    {
      id: 3,
      icon: ValuePropIconName.StarTropy,
      title: 'Sustainable materials',
      description: 'Designed for comfort and durability, our furniture is superior above all',
    },
    {
      id: 4,
      icon: ValuePropIconName.Recycle,
      title: 'Quality furniture',
      description: 'Eco-friendly furniture made with responsibly sourced, high-quality materials',
    },
  ],
};
export const regions: Array<keyof typeof showroomsData.data> = ['Africa', 'Europe', 'North America', 'South America'];
export const showroomsData = {
  title: 'Visit Our Showrooms',
  description:
    'Experience the AmaliHomes difference firsthand at one of our global showrooms. Discover premium furniture, expert design advice, and stylish inspirations to transform your space. Step in today',
  data: {
    Africa: [],
    Europe: [
      {
        id: 'germany',
        name: 'Germany',
        image: 'https://i.postimg.cc/pTmpqrvN/image.png',
      },
      {
        id: 'belgium',
        name: 'Belgium',
        image: 'https://i.postimg.cc/RCnWtWGK/image.png',
      },
      {
        id: 'switzerland',
        name: 'Switzerland',
        image: 'https://i.postimg.cc/L6thyGcs/image.png',
      },
      {
        id: 'france',
        name: 'France',
        image: 'https://i.postimg.cc/wvRjDr5g/image.png',
      },
      {
        id: 'italy',
        name: 'Italy',
        image: 'https://i.postimg.cc/GmMLVRqb/image.png',
      },
      {
        id: 'spain',
        name: 'Spain',
        image: 'https://i.postimg.cc/QMH8rzy1/image.png',
      },
    ],
    'North America': [],
    'South America': [],
  },
};
export const statsSection = [
  {
    id: 1,
    title: 'Years of Excellence',
    value: '30+',
  },
  {
    id: 2,
    title: 'Clients',
    value: '15,000+',
  },
  {
    id: 3,
    title: 'Countries',
    value: '12',
  },
  {
    id: 4,
    title: 'Client Satisfaction',
    value: '98%',
  },
];

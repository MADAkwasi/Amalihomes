export interface Link {
  label: string;
  path: string;
}

export const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Cart', path: '/cart' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Offers & Details', path: '/offers-n-details' },
];

export const companyLinks: Link[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/carers' },
  { label: 'News', path: '/news' },
];

export const legalServicesLinks: Link[] = [
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Cookie Policy', path: '/cookie' },
];

export const navLinks: Link[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'News', path: '/news' },
];

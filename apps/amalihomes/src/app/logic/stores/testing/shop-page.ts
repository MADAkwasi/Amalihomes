import { navLinks } from '../../data/constants/links';

export const ShopPageTestData = {
  page: 'home',
  isFetchingContent: false,
  lang: 'en',
  content: {
    body: [
      {
        loginButton: 'Button text',
        navLinks: navLinks,
        locale: new Array(2).fill({ country: 'Country', language: 'Language', _uid: 'id' }),
        component: 'header',
      },
      {
        linksSection: new Array(4).fill({ links: navLinks, title: 'Test title' }),
        inputErrorText: 'Error text',
        subscriptionButton: 'Button text',
        component: 'footer',
      },
    ],
  },
  locale: {
    country: 'USA',
    language: 'English',
    languageCode: 'en',
    countryCode: 'US',
    direction: 'ltr',
  },
  error: {},
};

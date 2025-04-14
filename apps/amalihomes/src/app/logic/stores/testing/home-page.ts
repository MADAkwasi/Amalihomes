import { navLinks } from '../../data/constants/links';

export const HomePageTestData = {
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
        title: 'Test title',
        description: 'Test description',
        images: [{ image: 'image.jpg', name: 'Image alt' }],
        component: 'flashSale',
      },

      {
        each: [
          {
            key: 'products',
            title: 'Text title',
            items: [
              {
                image: 'image.jpg',
                name: 'Item 1',
                _uid: 'id',
              },
            ],
          },
          {
            key: 'arrivals',
            title: 'Text title',
            items: [
              {
                image: 'image.jpg',
                name: 'Item 1',
                _uid: 'id',
              },
            ],
            component: 'category',
          },
        ],
      },
      {
        images: [
          {
            _uid: 'dff3628f-2c7c-473a-804f-b1abb5b8a3c2',
            name: 'Quality Orange Chair',
            image: '//a.storyblok.com/f/331937/525x473/b9f16e0b8f/quality-orange-chair.png',
            component: 'image',
            _editable:
              '<!--#storyblok#{"name": "image", "space": "331937", "uid": "dff3628f-2c7c-473a-804f-b1abb5b8a3c2", "id": "646199362"}-->',
          },
          {
            _uid: 'eb2557e3-e8a4-4906-b0b7-1fcfd98398fb',
            name: 'Single Sofa',
            image: '//a.storyblok.com/f/331937/526x405/3c12536293/yellow-single-sofa.png',
            component: 'image',
            _editable:
              '<!--#storyblok#{"name": "image", "space": "331937", "uid": "eb2557e3-e8a4-4906-b0b7-1fcfd98398fb", "id": "646199362"}-->',
          },
          {
            _uid: 'ff985cc0-ab3f-4afe-b56b-747710161037',
            name: 'Beautiful Yellow Chair',
            image: '//a.storyblok.com/f/331937/526x596/0f9eab4ab8/beautiful-yellow-chair.png',
            component: 'image',
            _editable:
              '<!--#storyblok#{"name": "image", "space": "331937", "uid": "ff985cc0-ab3f-4afe-b56b-747710161037", "id": "646199362"}-->',
          },
          {
            _uid: '7845d880-d4d4-456f-a8cb-77fd8f0436a4',
            name: 'Double Sofa',
            image: '//a.storyblok.com/f/331937/526x505/98113d54ed/double-sofa.png',
            component: 'image',
            _editable:
              '<!--#storyblok#{"name": "image", "space": "331937", "uid": "7845d880-d4d4-456f-a8cb-77fd8f0436a4", "id": "646199362"}-->',
          },
        ],
        component: 'hero',
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

import { FetchState, StoryLanguages } from '../../data/constants';

const navLinks = new Array(5).fill({ text: 'Link text', url: '', _uid: 'id' });

export const GloablPageTestingData = {
  selectedLangage: StoryLanguages.ENGLISH,
  fetchState: FetchState.DEFAULT,
  data: {
    header: {
      loginButton: 'Button text',
      navLinks: navLinks,
      locale: new Array(2).fill({ country: 'Country', language: 'Language', _uid: 'id' }),
    },
    footer: {
      linksSection: new Array(4).fill({ links: navLinks, title: 'Test title' }),
      inputErrorText: 'Error text',
      subscriptionButton: 'Button text',
    },
  },
};

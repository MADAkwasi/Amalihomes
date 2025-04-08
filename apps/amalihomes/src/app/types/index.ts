export interface StoryblokStory<S> {
  name: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    component: string;
    _editable: string;
  } & S;
  slug: string;
  full_slug: string;
}

export interface StoryBlokStories<S = Record<string, StoryblokStory<any>>> {
  stories: Array<S[keyof S]>;
  cv: number;
  rels: string[];
  links: string[];
}

export type StoryblokSections =
  | CategoriesStoryblok
  | CategoryStoryblok
  | FlashSaleStoryblok
  | FooterStoryblok
  | GroupedLinksStoryblok
  | HeaderStoryblok
  | HeroStoryblok
  | ImageStoryblok
  | LanguageStoryblok
  | MeritsStoryblok
  | MeritsItemStoryblok
  | TextLinkStoryblok;

export interface CategoriesStoryblok {
  title: string;
  items?: StoryblokSections[];
  key: string;
  component: 'Categories';
  _uid: string;
  [k: string]: any;
}

export interface CategoryStoryblok {
  each: StoryblokSections[];
  component: 'category';
  _uid: string;
  [k: string]: any;
}

export interface FlashSaleStoryblok {
  images?: StoryblokSections[];
  title: string;
  description: string;
  buttonText: string;
  component: 'flashSale';
  _uid: string;
  [k: string]: any;
}

export interface FooterStoryblok {
  subscriptionTitle: string;
  subscriptionText: string;
  subscriptionButton: string;
  inputPlaceholder: string;
  privacyAcceptanceText: string;
  inputErrorText: string;
  privacyLinkText: string;
  reservedRightsText?: string;
  contactHeading: string;
  contactPhoneNumber: string;
  contactEmail: string;
  legalRights: string;
  linksSection?: StoryblokSections[];
  component: 'footer';
  _uid: string;
  [k: string]: any;
}

export interface GroupedLinksStoryblok {
  title: string;
  key: 'quickLinks' | 'company' | 'legalServices' | 'mobileLink';
  links: StoryblokSections[];
  component: 'groupedLinks';
  _uid: string;
  [k: string]: any;
}

export interface HeaderStoryblok {
  loginButton: string;
  inputPlaceholder: string;
  locale: StoryblokSections[];
  navLinks?: StoryblokSections[];
  component: 'header';
  _uid: string;
  [k: string]: any;
}

export interface HeroStoryblok {
  title: string;
  description: string;
  firstButton: string;
  secondButton: string;
  images: StoryblokSections[];
  component: 'hero';
  _uid: string;
  [k: string]: any;
}

export interface ImageStoryblok {
  image: string;
  name: string;
  component: 'image';
  _uid: string;
  [k: string]: any;
}

export interface LanguageStoryblok {
  country: string;
  language: string;
  component: 'language';
  _uid: string;
  [k: string]: any;
}

export interface MeritsStoryblok {
  title: string;
  description: string;
  items: StoryblokSections[];
  image: string;
  component: 'merits';
  _uid: string;
  [k: string]: any;
}

export interface MeritsItemStoryblok {
  title: string;
  description: string;
  iconName: string;
  component: 'meritsItem';
  _uid: string;
  [k: string]: any;
}

export interface TextLinkStoryblok {
  text: string;
  url?: string;
  component: 'textLink';
  _uid: string;
  [k: string]: any;
}

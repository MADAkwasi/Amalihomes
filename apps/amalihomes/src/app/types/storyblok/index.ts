import { ISbComponentType } from 'storyblok-js-client';
import { ValuePropIconName } from '../../presentation/components/value-prop-icon/constants';

export interface Section extends ISbComponentType<string> {
  title: string;
  description: string;
  images?: StoryblokImages[];
  image?: string;
  buttonText?: string;
  buttons: Button[];
  items?: MeritItem[];
  sliders?: CategorySection[];
  locale: Locale[];
  inputPlaceholder?: string;
  navLinks: StoryblokNavLink[];
  legalRights?: string;
  contactHeading?: string;
  inputErrorText?: string;
  privacyLink: StoryblokNavLink[];
  subscriptionText?: string;
  contactEmail?: string;
  subscriptionTitle?: string;
  reservedRightsText?: string;
  contactPhoneNumber?: string;
  privacyAcceptanceText?: string;
  linksSection: StoryblokRouteLink[];
}

export interface Body extends ISbComponentType<string> {
  body?: Section[];
}

export interface StoryblokImages extends ISbComponentType<string> {
  name: string;
  image: string;
}

export interface MeritItem extends ISbComponentType<string> {
  iconName: ValuePropIconName;
  title: string;
  description: string;
}

export interface CategorySection extends ISbComponentType<string> {
  key: string;
  items: StoryblokImages[];
  title: string;
}

export interface Locale extends ISbComponentType<string> {
  country: string;
  language: string;
}

export interface StoryblokNavLink extends ISbComponentType<string> {
  href: StoryblokLink;
  text: string;
}

export interface StoryblokRouteLink extends ISbComponentType<string> {
  key: string;
  title: string;
  links: StoryblokNavLink[];
}

export interface StoryblokLink extends ISbComponentType<string> {
  id?: string;
  url?: string;
}

export interface Button extends ISbComponentType<string> {
  buttonText: string;
  identifier: string;
}

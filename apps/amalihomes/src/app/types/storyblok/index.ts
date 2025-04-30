import { ISbComponentType, ISbRichtext } from 'storyblok-js-client';
import { ValuePropIconName } from '../../presentation/components/value-prop-icon/constants';

export interface Section extends ISbComponentType<string> {
  title: string;
  description: string;
  images?: StoryblokImage[];
  image: StoryblokImage[];
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
  tabs?: StoryblokTab[];
  salesRep?: SalesRep[];
  contactForm?: StoryblokForm[];
  bgColor: string;
}

export interface Body extends ISbComponentType<string> {
  body?: Section[];
}

export interface StoryblokImage extends ISbComponentType<string> {
  name: string;
  image: string;
  filename?: string;
}

export interface MeritItem extends ISbComponentType<string> {
  iconName: ValuePropIconName;
  title: string;
  description: string;
}

export interface CategorySection extends ISbComponentType<string> {
  key: string;
  items: StoryblokImage[];
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

export interface StoryblokTab extends ISbComponentType<string> {
  title: string;
  content: StoryblokAccordion[];
}

export interface StoryblokAccordion extends ISbComponentType<string> {
  question: string;
  answer: ISbRichtext;
}

export interface SalesRep extends ISbComponentType<string> {
  name: string;
  email: string;
  country: string;
  phoneNumber: string;
  profilePic: StoryblokImage[];
}

export interface StoryblokInputField extends ISbComponentType<string> {
  label: string;
  placeholder: string;
}

export interface StoryblokForm extends ISbComponentType<string> {
  heading: string;
  submitBtn: Button[];
  inputField: StoryblokInputField[];
}

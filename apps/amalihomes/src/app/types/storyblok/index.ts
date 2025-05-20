import { ISbComponentType, ISbRichtext } from 'storyblok-js-client';
import { CookieConsent } from '../cookies';

export interface Section extends ISbComponentType<string> {
  title: string;
  description: string;
  images?: StoryblokImage[];
  image: StoryblokImage[];
  image_url?: string;
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

  // Cookie Banner
  cookie_settings: (Record<keyof CookieConsent, string> & { component: string })[];
  banner_title: string;
  cmp_partner_badge: string;
  cmp_badge_alt_text: string;
  banner_message: string;
  list_title: string;
  expand_btn_text: string;
  expanded_btn_text: string;
  reject_all_btn_text: string;
  close_banner_label: string;

  // About page
  aboutStatistics?: StatSection[];
  aboutFeatured?: Merits[];
  statistics?: StatItem[];
  merit_image?: string;
  icon?: imageFile[];
  leadership?: LeadershipTeam[];
  heading?: string;
  team?: TeamItem[];
  regionTabs?: RegionTab[];
  region?: string;
  showroomItem: Showroom[];
  norooms?: string;
  image_alt_text?: string;
}

export interface Showroom {
  id: string;
  name: string;
  image: ShowroomImage;
}

export interface ShowroomImage {
  name: string;
  id: number | null;
  alt: string | null;
  filename: string;
}

export interface ShowroomItem {
  _uid: string;
  countryName: string;
  image: ShowroomImage;
}

export interface RegionTab {
  _uid: string;
  tabName: string;
  showroomItem: ShowroomItem[];
}

export interface RegionsTab extends ISbComponentType<string> {
  _uid: string;
  tabName: string;
  component: string;
  showroomItem: Showroom[];
  _editable?: string;
}
export interface StatItem extends ISbComponentType<string> {
  _uid: string;
  figure: string;
  component: string;
  statfield: string;
  _editable?: string;
}

export interface StatSection extends ISbComponentType<string> {
  _uid: string;
  title: string;
  description: string;
  component: string;
  statistics: StatItem[];
  _editable?: string;
}

export interface imageFile extends ISbComponentType<string> {
  id: number;
  name: string;
  filename: string;
}

export interface MeritsItem extends ISbComponentType<string> {
  _uid: string;
  title: string;
  description: string;
  component: string;
  image: string;
  _editable?: string;
  icon: imageFile;
}

export interface Merits extends ISbComponentType<string> {
  _uid: string;
  title: string;
  description: string;
  component: string;
  image: string;
  _editable?: string;
  items: MeritsItem[];
}

export interface GlobalPresence extends ISbComponentType<string> {
  heading: string;
  description: string;
}

export interface TeamItem extends ISbComponentType<string> {
  _uid: string;
  name: string;
  role: string;
  image: imageFile;
}

export interface LeadershipTeam extends ISbComponentType<string> {
  _uid: string;
  heading: string;
  description: string;
  team: TeamItem[];
}

export interface TabItem {
  label: string;
  id: string;
  disabled?: boolean;
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
  icon: imageFile;
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

export type FaqEnquiryTabTypes = 'orders' | 'shipping' | 'returns' | 'support';

export interface StoryblokTab extends ISbComponentType<string> {
  title: string;
  enquiryType: FaqEnquiryTabTypes;
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

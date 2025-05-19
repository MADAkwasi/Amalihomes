import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const ShopMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/shop`,
  metaDescription:
    'Explore our wide selection of quality homes and properties at Amalihomes. Find your perfect home with ease and confidence.',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'website',
  pageTitle: 'Shop Homes - Find Your Perfect Property | Amalihomes',
};

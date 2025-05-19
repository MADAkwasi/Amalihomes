import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const NewArrivalsMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/shop/new-arrivals`,
  metaDescription:
    'Discover the latest homes and properties just added to Amalihomes. Stay ahead with our newest listings and find your dream home today.',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'website',
  pageTitle: 'New Arrivals - Latest Listings | Amalihomes',
};

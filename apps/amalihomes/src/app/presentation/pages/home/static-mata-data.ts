import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const HomeMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/`,
  metaDescription: 'Your ultimate destination for premium furniture that blends elegance, comfort, and functionality',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'website',
  pageTitle: 'Amalihomes - Home of quality furniture for every home & office',
};

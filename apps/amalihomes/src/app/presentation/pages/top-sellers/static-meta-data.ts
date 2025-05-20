import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const TopSellersMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/shop/top-sellers`,
  metaDescription:
    'Browse our top-selling furniture at Amalihomes. Discover customer favorites that combine style, comfort, and quality in every piece.',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: 'Top Sellers - Bestselling Furniture | Amalihomes',
};

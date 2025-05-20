import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const FlashSalesMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/shop/flash-sales`,
  metaDescription:
    'Don’t miss out on limited-time deals during our flash sales at Amalihomes. Shop discounted furniture items before they’re gone!',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: 'Flash Sales - Limited-Time Furniture Deals | Amalihomes',
};

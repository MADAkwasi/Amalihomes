import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const ProductDetailsMetaData = (product: { id: string; name: string; description: string }): MetaTagsData => ({
  pageCanonicalLink: `${environment.SERVER_URL}/shop/product/${product.id}`,
  metaDescription: product.description || 'Discover detailed information about this property at Amalihomes.',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: `${product.name} | Amalihomes Property Details`,
});

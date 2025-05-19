import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const SearchResultsMetaData = (searchTerm: string): MetaTagsData => ({
  pageCanonicalLink: `${environment.SERVER_URL}/shop?search=${encodeURIComponent(searchTerm)}`,
  metaDescription: `Search results for "${searchTerm}" on Amalihomes. Find homes and properties matching your query quickly and easily.`,
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'website',
  pageTitle: `Search Results for "${searchTerm}" | Amalihomes`,
});

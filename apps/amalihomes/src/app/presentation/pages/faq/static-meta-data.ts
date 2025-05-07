import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const FaqMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/faqs`,
  metaDescription:
    'Find answers to common questions about orders, shipping, returns, and more at Amalihomes. Get the support you need quickly and easily.',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: 'FAQs - Answers to Your Questions | Amalihomes Support',
};

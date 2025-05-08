import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const AboutMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/about`,
  metaDescription: 'Learn more about Amalitech, our mission, and leadership',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: 'About Us - Know more about us | Amalihomes',
  metaOpenGraphImageAlt: 'Amalitech - About Us',
};

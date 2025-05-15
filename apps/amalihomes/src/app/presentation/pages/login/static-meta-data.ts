import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const LogInMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/login`,
  metaDescription: 'Login to your account and start shopping with us',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: 'Login | Amalihomes',
  metaOpenGraphImageAlt: 'Login to your account and start shopping with us',
};

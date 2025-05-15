import { environment } from '../../../environments/environment';
import { MetaTagsData } from '../../../types/meta-tags';

export const SignUpMetaData: MetaTagsData = {
  pageCanonicalLink: `${environment.SERVER_URL}/signup`,
  metaDescription:
    'Create your Amalihomes account to explore exclusive deals, manage your orders, and enjoy a personalized shopping experience.',
  metaLocale: 'en',
  metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
  metaSiteName: 'Amalihomes',
  metaType: 'article',
  pageTitle: 'Signup | Amalihomes',
  metaOpenGraphImageAlt: 'Create your account and start your journey with Amalihomes',
};

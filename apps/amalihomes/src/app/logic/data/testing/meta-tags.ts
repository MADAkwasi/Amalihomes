import { MetaTagsData } from '../../../types/meta-tags';

export const mockMetaTagsData: MetaTagsData = {
  pageTitle: 'Test Title',
  pageCanonicalLink: 'https://example.com/test',
  metaLocale: 'en_US',
  metaType: 'website',
  metaSiteName: 'Test Site',
  metaDescription: 'Test Description',
  metaKeywords: ['test', 'keywords'],
  metaOpenGraphUrl: 'https://example.com/og',
  metaOpenGraphImageUrl: 'https://example.com/og/image.jpg',
  metaOpenGraphSecureImageUrl: 'https://example.com/og/image-secure.jpg',
  metaOpenGraphImageAlt: 'Test Image Alt',
  metaOpenGraphImageDimension: { width: 1200, height: 630 },
  metaTwitterCard: 'summary_large_image',
  metaRobots: { follow: 'follow', index: 'noindex' },
};

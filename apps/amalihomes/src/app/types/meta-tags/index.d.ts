type RobotIndex = 'index' | 'noindex';
type RobotFollow = 'follow' | 'nofollow';
type ImagePreview = 'max-image-preview:large' | 'max-image-preview:standard' | 'max-image-preview:none';
type NoImageIndexing = 'noimageindex';

type RobotsMetaContent = {
  index?: RobotIndex;
  follow?: RobotFollow;
  preview?: ImagePreview;
  imageIndexing?: NoImageIndexing;
};

type TwitterCard = 'summary_large_image' | 'summary';

type Locale = 'en' | 'en_US' | 'en_UK' | 'de' | 'fr' | ({} & string);

type PageType = 'article' | 'website';

export interface MetaTagsData {
  pageCanonicalLink: string;
  pageTitle: string;
  metaSiteName: string;
  metaLocale: Locale;
  metaType: PageType;
  metaDescription: string;
  metaKeywords?: string[];
  metaOpenGraphUrl?: string;
  metaOpenGraphImageUrl?: string;
  metaOpenGraphSecureImageUrl?: string;
  metaOpenGraphImageAlt?: string;
  metaOpenGraphImageDimension?: { width: number; height: number };
  metaTwitterCard?: TwitterCard;
  metaRobots: RobotsMetaContent;
}

export type RobotsMetaContentKeys = keyof RobotsMetaContent;

export type MetaImagesProps = Pick<
  MetaTagsData,
  | 'metaOpenGraphSecureImageUrl'
  | 'metaOpenGraphImageUrl'
  | 'metaOpenGraphImageDimension'
  | 'metaTwitterCard'
  | 'metaOpenGraphImageAlt'
>;

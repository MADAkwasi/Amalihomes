import {
  CategoryStoryblok,
  FlashSaleStoryblok,
  HeroStoryblok,
  MeritsStoryblok,
  StoryBlokStories,
  StoryblokStory,
} from '../index';

interface Stories {
  heroSection: StoryblokStory<HeroStoryblok>;
  meritsSection: StoryblokStory<MeritsStoryblok>;
  categories: StoryblokStory<CategoryStoryblok>;
  flashSale: StoryblokStory<FlashSaleStoryblok>;
}

export type HomePageStories = StoryBlokStories<Stories>;

export interface HomePageData {
  hero: HeroStoryblok;
  merits: MeritsStoryblok;
  categories: CategoryStoryblok;
  'flash-sale': FlashSaleStoryblok;
}

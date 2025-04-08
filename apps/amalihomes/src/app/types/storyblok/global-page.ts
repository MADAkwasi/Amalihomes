import { FooterStoryblok, HeaderStoryblok, StoryBlokStories, StoryblokStory } from '..';

interface Stories {
  headerSection: StoryblokStory<HeaderStoryblok>;
  footer: StoryblokStory<FooterStoryblok>;
}

export type GlobalPageStories = StoryBlokStories<Stories>;

export interface GlobalPageData {
  header: HeaderStoryblok;
  footer: FooterStoryblok;
}

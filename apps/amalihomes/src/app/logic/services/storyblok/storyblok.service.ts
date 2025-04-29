import { Injectable } from '@angular/core';
import Client, { ISbComponentType, ISbRichtext, ISbStory, ISbStoryParams, RichtextResolver } from 'storyblok-js-client';
import { from, Observable } from 'rxjs';
import { Localization } from '../../data/constants/localization';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoryblokService {
  private readonly sbClient = new Client({
    accessToken: environment.STORY_BLOK_APIKEY || '',
  });

  private readonly richTextResolver = new RichtextResolver();

  public getStoryblokPage(
    slug: string,
    language: Localization['languageCode'] = 'en',
    version: ISbStoryParams['version'] = 'draft',
  ): Observable<ISbStory<ISbComponentType<string>>> {
    const stories = this.sbClient.getStory(slug, {
      version,
      language,
    });

    return from(stories);
  }

  public resolveRichText(richTextField: ISbRichtext): string {
    return this.richTextResolver.render(richTextField);
  }
}

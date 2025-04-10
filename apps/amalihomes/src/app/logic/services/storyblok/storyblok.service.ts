import { Injectable } from '@angular/core';
import Client, { ISbComponentType, ISbStory, ISbStoryParams } from 'storyblok-js-client';
import { from, Observable } from 'rxjs';
import { LanguageCode } from '../../data/constants/localization';

@Injectable({
  providedIn: 'root',
})
export class StoryblokService {
  private readonly sbClient = new Client({
    accessToken: STORYBLOK_APIKEY || '',
  });

  public getStoryblokPage(
    slug: string,
    language: LanguageCode = 'en',
    version: ISbStoryParams['version'] = 'draft',
  ): Observable<ISbStory<ISbComponentType<string>>> {
    const stories = this.sbClient.getStory(slug, {
      version,
      language,
    });

    return from(stories);
  }
}

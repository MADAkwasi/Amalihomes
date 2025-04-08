import { Injectable } from '@angular/core';
import Client, { ISbStoriesParams } from 'storyblok-js-client';
import { StoryBlokStories } from '../../../types';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoryblokService {
  public version: 'draft' | 'published' = 'draft';

  private readonly sbClient = new Client({
    accessToken: STORYBLOK_APIKEY || '',
  });

  public getStories<S extends StoryBlokStories<any>>(params?: ISbStoriesParams) {
    return from(this.sbClient.getStories(params || {}).then((res) => res.data) as Promise<S>);
  }
}

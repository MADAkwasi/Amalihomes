import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TabsComponent } from '../../components/faq-page-components/tabs/tabs.component';
import { HeroComponent } from '../../../shared-ui/components/hero/hero.component';
import { Store } from '@ngrx/store';
import {
  selectLocale,
  selectPageLoadingState,
  selectSection,
} from '../../../logic/stores/selectors/storyblok.selectors';
import { Localization } from '../../../logic/data/constants/localization';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { FaqMetaData } from './static-meta-data';
import { RootLayoutComponent } from '../../layouts/root-layout/root-layout.component';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, TabsComponent, HeroComponent, RootLayoutComponent],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly pageHeadTags = inject(MetaTagsService);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
  protected readonly heroContent = this.store.selectSignal(selectSection('hero'));
  protected readonly isLoading = this.store.selectSignal(selectPageLoadingState);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    let langCode = '';

    if (isPlatformBrowser(this.platformId)) {
      const storedLocale: Localization = JSON.parse(localStorage.getItem('locale') ?? '{}');
      langCode = storedLocale.languageCode ?? this.selectedLanguage()?.languageCode ?? 'en';
    }

    this.store.dispatch(
      StoryblokPageActions.loadPage({
        slug: 'faqs',
        language: langCode,
        version: 'draft',
      }),
    );

    this.pageHeadTags.updateMetaData(FaqMetaData);
  }
}

import { ChangeDetectionStrategy, Component, computed, inject, OnInit, PLATFORM_ID, Signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { HomeFlashSaleComponent } from '../../components/home-flash-sale/home-flash-sale.component';
import { Store } from '@ngrx/store';
import { selectLocale, selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { SliderComponent } from '../../components/slider/slider.component';
import { StoryblokImage } from '../../../types/storyblok';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { HomeMetaData } from './static-mata-data';
import { Localization } from '../../../logic/data/constants/localization';
import { RootLayoutComponent } from '../../layouts/root-layout/root-layout.component';
import { ApplicationStore } from '../../../logic/interfaces/app';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeHeroSectionComponent,
    ValuePropositionComponent,
    HomeFlashSaleComponent,
    SliderComponent,
    RootLayoutComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store<ApplicationStore>);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly productsData = this.store.selectSignal(selectSection('category'));
  protected readonly getImagesByKey = (key: string): Signal<StoryblokImage[]> =>
    computed(() => this.productsData()?.sliders?.find((category) => key === category.key)?.items ?? []);
  protected readonly getTitleByKey = (key: string): Signal<string> =>
    computed(() => this.productsData()?.sliders?.find((category) => key === category.key)?.title ?? '');

  private readonly pageHeadTags = inject(MetaTagsService);

  ngOnInit(): void {
    let langCode = '';

    if (isPlatformBrowser(this.platformId)) {
      const storedLocale: Localization = JSON.parse(localStorage.getItem('locale') ?? '{}');
      langCode = storedLocale.languageCode ?? this.selectedLanguage()?.languageCode ?? 'en';
    }

    this.store.dispatch(
      StoryblokPageActions.loadPage({
        slug: 'home',
        language: langCode,
        version: 'draft',
      }),
    );

    this.pageHeadTags.updateMetaData(HomeMetaData);
  }
}

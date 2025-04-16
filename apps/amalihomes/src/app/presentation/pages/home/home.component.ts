import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { HomeFlashSaleComponent } from '../../components/home-flash-sale/home-flash-sale.component';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectLocale, selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { SliderComponent } from '../../components/slider/slider.component';
import { StoryblokImages } from '../../../types/storyblok';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { HomeMetaData } from './static-mata-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeHeroSectionComponent, ValuePropositionComponent, HomeFlashSaleComponent, SliderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store<ApplicationStore>);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
  protected readonly productsData = this.store.selectSignal(selectSection('category'));
  protected readonly getImagesByKey = (key: string): Signal<StoryblokImages[]> =>
    computed(() => this.productsData()?.sliders?.find((category) => key === category.key)?.items ?? []);
  protected readonly getTitleByKey = (key: string): Signal<string> =>
    computed(() => this.productsData()?.sliders?.find((category) => key === category.key)?.title ?? '');

  private readonly pageHeadTags = inject(MetaTagsService);

  ngOnInit(): void {
    const langCode = localStorage.getItem('langCode') ?? this.selectedLanguage()?.languageCode ?? 'en';

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

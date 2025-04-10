import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { HomeFlashSaleComponent } from '../../components/home-flash-sale/home-flash-sale.component';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectLanguage, selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
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
  private readonly selecetedLanguage = this.store.selectSignal(selectLanguage);
  protected readonly productsData = this.store.selectSignal(selectSection('category'));
  protected readonly getImagesByKey = (key: string): Signal<StoryblokImages[]> =>
    computed(() => this.productsData()?.each?.find((category) => key === category.key)?.items ?? []);

  private readonly pageHeadTags = inject(MetaTagsService);

  ngOnInit(): void {
    this.store.dispatch(
      StoryblokPageActions.loadPage({ slug: 'home-page', language: this.selecetedLanguage(), version: 'draft' }),
    );

    this.pageHeadTags.updateMetaData(HomeMetaData);
  }
}

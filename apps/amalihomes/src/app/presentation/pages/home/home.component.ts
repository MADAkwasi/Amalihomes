import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { HomeFlashSaleComponent } from '../../components/home-flash-sale/home-flash-sale.component';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectHomePageSectionData, selectHomePageStoreField } from '../../../logic/stores/selectors/home-page';
import { HomePageActions } from '../../../logic/stores/actions/home-page';
import { FetchState } from '../../../logic/data/constants';
import { selectGlobalPageStoreField } from '../../../logic/stores/selectors/global-page';
import { SliderComponent } from '../../components/slider/slider.component';
import { CategoryStoryblok, StoryblokSections } from '../../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeHeroSectionComponent, ValuePropositionComponent, HomeFlashSaleComponent, SliderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store<ApplicationStore>);
  private readonly fetchState = this.store.selectSignal(selectHomePageStoreField('fetchState'));
  private readonly selecetedLanguage = this.store.selectSignal(selectGlobalPageStoreField('selectedLanguage'));
  protected readonly productsData = this.store.selectSignal(
    selectHomePageSectionData('categories'),
  ) as Signal<CategoryStoryblok>;
  protected readonly getImagesByKey = (key: string): Signal<StoryblokSections[]> =>
    computed(() => this.productsData()?.each.find((category) => category.key === key)?.items);

  ngOnInit(): void {
    const fetchState = this.fetchState();

    if ([FetchState.DEFAULT, FetchState.FAILED].includes(fetchState)) {
      this.store.dispatch(HomePageActions.fetchHomePageData({ language: this.selecetedLanguage() }));
    }
  }
}

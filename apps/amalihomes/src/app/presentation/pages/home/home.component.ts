import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { HomeFlashSaleComponent } from '../../components/home-flash-sale/home-flash-sale.component';
import { HomeCategorySectionComponent } from '../../components/home-category-section/home-category-section.component';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectHomePageStoreField } from '../../../logic/stores/selectors/home-page';
import { HomePageActions } from '../../../logic/stores/actions/home-page';
import { FetchState } from '../../../logic/data/constants';
import { selectGlobalPageStoreField } from '../../../logic/stores/selectors/global-page';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HomeHeroSectionComponent,
    ValuePropositionComponent,
    HomeFlashSaleComponent,
    HomeCategorySectionComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store<ApplicationStore>);
  private readonly fetchState = this.store.selectSignal(selectHomePageStoreField('fetchState'));
  private readonly selecetedLanguage = this.store.selectSignal(selectGlobalPageStoreField('selectedLanguage'));

  ngOnInit(): void {
    const fetchState = this.fetchState();

    if ([FetchState.DEFAULT, FetchState.FAILED].includes(fetchState)) {
      this.store.dispatch(HomePageActions.fetchHomePageData({ language: this.selecetedLanguage() }));
    }
  }
}

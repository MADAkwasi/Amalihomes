import { ChangeDetectionStrategy, Component, computed, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { StatisticsComponent } from '../../components/about/statistics/statistics.component';
import { FeaturedComponent } from '../../components/about/featured/featured.component';
import { LocationMapComponent } from '../../components/about/location-map/location-map.component';
import { LeadershipComponent } from '../../components/about/leadership/leadership.component';
import { ShowroomGridComponent } from '../../components/about/showroom-grid/showroom-grid.component';
import { Localization } from '../../../logic/data/constants/localization';
import { Store } from '@ngrx/store';
import {
  selectLocale,
  selectPageLoadingState,
  selectSection,
} from '../../../logic/stores/selectors/storyblok.selectors';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { HeroComponent } from '../../../shared-ui/components/hero/hero.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    StatisticsComponent,
    FeaturedComponent,
    LocationMapComponent,
    LeadershipComponent,
    ShowroomGridComponent,
    HeroComponent,
  ],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  protected location = 'Amalitech, Ghana';
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
  protected readonly isLoading = this.store.selectSignal(selectPageLoadingState);
  protected readonly heroData = this.store.selectSignal(selectSection('hero'));
  protected readonly heroContent = computed(() => {
    return this.heroData();
  });

  ngOnInit(): void {
    let langCode = '';
    if (isPlatformBrowser(this.platformId)) {
      const storedLocale: Localization = JSON.parse(localStorage.getItem('locale') ?? '{}');
      langCode = storedLocale.languageCode ?? this.selectedLanguage()?.languageCode ?? 'en';
    }

    this.store.dispatch(
      StoryblokPageActions.loadPage({
        slug: 'about',
        language: langCode,
        version: 'draft',
      }),
    );
  }
}

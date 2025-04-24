import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TabsComponent } from '../../components/faq-page-components/tabs/tabs.component';
import { HeroComponent } from '../../../shared-ui/components/hero/hero.component';
import { faqsData } from '../../../logic/data/constants/faqs';
import { Store } from '@ngrx/store';
import { selectLocale } from '../../../logic/stores/selectors/storyblok.selectors';
import { Localization } from '../../../logic/data/constants/localization';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { AboutUsComponent } from '../../../shared-ui/components/about-us/about-us.component';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, TabsComponent, HeroComponent, AboutUsComponent],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements OnInit {
  protected readonly tabsData = signal(faqsData);
  private readonly store = inject(Store);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
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
  }
}

import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SidebarComponent } from '../../components/account/sidebar/sidebar.component';
import { RootLayoutComponent } from '../root-layout/root-layout.component';
import { HeaderComponent } from '../../components/account/header/header.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLocale } from '../../../logic/stores/selectors/storyblok.selectors';
import { Localization } from '../../../logic/data/constants/localization';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';

@Component({
  selector: 'app-account-layout',
  imports: [CommonModule, SidebarComponent, HeaderComponent, RootLayoutComponent, RouterModule],
  templateUrl: './account-layout.component.html',
})
export class AccountLayoutComponent implements OnInit {
  protected selectedTab = signal('overview');
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);

  ngOnInit(): void {
    let langCode = '';

    if (isPlatformBrowser(this.platformId)) {
      const storedLocale: Localization = JSON.parse(localStorage.getItem('locale') ?? '{}');
      langCode = storedLocale.languageCode ?? this.selectedLanguage()?.languageCode ?? 'en';
    }

    this.store.dispatch(
      StoryblokPageActions.loadPage({
        slug: 'shop/product',
        language: langCode,
        version: 'draft',
      }),
    );
  }
}

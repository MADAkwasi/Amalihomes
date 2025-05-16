import { ChangeDetectionStrategy, Component, computed, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { RouterModule } from '@angular/router';
import { FiltersComponent } from '../../components/filters/filters.component';
import { ChevronDown, LucideAngularModule, SlidersHorizontal, X } from 'lucide-angular';
import { availability, categories, sizes, sortingOptions, styles } from '../../../logic/data/constants/filters';
import { productCategories } from '../../../logic/data/constants/categories';
import { ExhibitionSlidersComponent } from '../../components/exhibition-sliders/exhibition-sliders.component';
import { Localization } from '../../../logic/data/constants/localization';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { selectLocale } from '../../../logic/stores/selectors/storyblok.selectors';
import { RootLayoutComponent } from '../../layouts/root-layout/root-layout.component';

@Component({
  selector: 'app-shop',
  imports: [
    CommonModule,
    SliderComponent,
    TextDirective,
    RouterModule,
    FiltersComponent,
    ButtonComponent,
    LucideAngularModule,
    ExhibitionSlidersComponent,
    RootLayoutComponent,
  ],
  templateUrl: './shop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
  private readonly document = inject(DOCUMENT);
  protected readonly productsData = this.store.selectSignal(selectProducts);
  protected readonly isFilterMenuOpen = signal(false);
  protected readonly isFiltersOpen = signal(true);
  protected readonly icons = { ChevronDown, SlidersHorizontal, X };
  protected readonly catergoriesFilter = signal(categories);
  protected readonly productCategories = signal(productCategories);
  protected readonly sortingOptions = signal(sortingOptions);
  protected readonly sizes = signal(sizes);
  protected readonly availability = signal(availability);
  protected readonly styles = signal(styles);
  protected readonly newArrivals = computed(() =>
    this.productsData().filter((product) => product.status.includes('new arrival')),
  );
  protected readonly topSellers = computed(() =>
    this.productsData().filter((product) => product.status.includes('top seller')),
  );
  protected readonly discountedProducts = computed(() => this.productsData().filter((product) => product.discount));

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

  protected onToggleFilterMenu() {
    this.isFilterMenuOpen.update((prev) => !prev);
    if (this.isFilterMenuOpen()) this.document.body.style.overflowY = 'hidden';
    else this.document.body.style.overflowY = '';
  }

  protected onToggleFilters() {
    this.isFiltersOpen.update((prev) => !prev);
  }

  protected onClearFilters() {
    return;
  }

  protected onApplyFilters() {
    return;
  }
}

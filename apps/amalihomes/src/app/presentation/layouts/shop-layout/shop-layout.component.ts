import { ChangeDetectionStrategy, Component, computed, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { ButtonComponent } from '@amalihomes/shared';
import { ChevronDown, ChevronRight, LucideAngularModule, SlidersHorizontal, X } from 'lucide-angular';
import { FiltersComponent } from '../../components/filters/filters.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLocale } from '../../../logic/stores/selectors/storyblok.selectors';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { availability, categories, sizes, sortingOptions, styles } from '../../../logic/data/constants/filters';
import { productCategories } from '../../../logic/data/constants/categories';
import { Localization } from '../../../logic/data/constants/localization';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { ExhibitionSlidersComponent } from '../../components/exhibition-sliders/exhibition-sliders.component';
import { RootLayoutComponent } from '../root-layout/root-layout.component';
import { selectFilterationKeywords } from '../../../logic/stores/selectors/interactions.selector';

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [
    SliderComponent,
    ButtonComponent,
    LucideAngularModule,
    FiltersComponent,
    ExhibitionSlidersComponent,
    RouterModule,
    RootLayoutComponent,
  ],
  templateUrl: './shop-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopLayoutComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly selectedLanguage = this.store.selectSignal(selectLocale);
  private readonly document = inject(DOCUMENT);
  private readonly route = inject(ActivatedRoute);
  private readonly filterKeywords = this.store.selectSignal(selectFilterationKeywords);
  protected readonly searchQuery = computed(() => this.route.snapshot.queryParamMap.get('search'));
  protected readonly productsData = this.store.selectSignal(selectProducts);
  protected readonly isFilterMenuOpen = signal(false);
  protected readonly isFiltersOpen = signal(true);
  protected readonly icons = { ChevronDown, SlidersHorizontal, X, ChevronRight };
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

  protected isChildOfShop(): boolean {
    return !this.router.url.endsWith('/shop');
  }

  protected activeRoute(): string {
    const url = this.router.url.split('?')[0];
    const segments = url.split('/').filter(Boolean);
    const lastSegment = segments.at(-1) ?? '';
    return lastSegment.replace(/-/g, ' ');
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

  protected formatString(word: string) {
    return word.split(' ').join('-');
  }

  protected onApplyFilters() {
    const filters = this.filterKeywords();
    const queryParams: Record<string, string> = {};
    const filterKeys = ['categories', 'size', 'availability', 'styles'];

    for (const key of filterKeys) {
      const values = filters.find((f) => f.filterBy === key)?.value ?? [];
      if (values.length > 0) queryParams[key] = values.map((v) => this.formatString(v)).join(',');
    }

    const currentParams = { ...this.route.snapshot.queryParams };
    filterKeys.forEach((key) => delete currentParams[key]);

    const currentPath = this.router.url.split('?')[0];

    this.router.navigate([currentPath], {
      queryParams: {
        ...currentParams,
        ...queryParams,
      },
    });

    this.isFilterMenuOpen.set(false);
  }
}

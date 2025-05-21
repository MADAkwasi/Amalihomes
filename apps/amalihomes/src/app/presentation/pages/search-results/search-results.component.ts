import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ResponsivePaginationService } from '../../../logic/services/pagination/responsive-pagination.service';
import { selectSearchResults } from '../../../logic/stores/selectors/dummy-data.selector';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { TextDirective } from '@amalihomes/shared';
import { SearchResultsMetaData } from './static-meta-data';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import {
  applyFilters,
  filterAndSortProducts,
  SortOption,
  sortProducts,
} from '../../../logic/utils/helpers/product-manipulation';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule, ProductCardComponent, PaginationComponent, TextDirective],
  templateUrl: './search-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly responsivePagination = inject(ResponsivePaginationService);
  private readonly pageHeadTags = inject(MetaTagsService);
  protected readonly productsPerPage = this.responsivePagination.getPerPage();
  protected readonly currentPage = signal(1);
  protected readonly searchedKeyword = signal('');
  private readonly productsData = computed(() => {
    const searchedProducts = this.store.selectSignal(selectSearchResults(this.searchedKeyword()));
    return searchedProducts();
  });
  protected readonly filterQuery = toSignal(
    this.route.queryParamMap.pipe(
      map(
        (params) =>
          params.get('categories') ?? params.get('size') ?? params.get('availability') ?? params.get('styles'),
      ),
    ),
    {
      initialValue: null,
    },
  );
  protected readonly displayProducts = signal(this.productsData());
  protected readonly pageProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.productsPerPage();
    const end = this.currentPage() * this.productsPerPage();
    return this.displayProducts().slice(start, end);
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'] ?? '1', 10);
      const keyword = params['search'];

      this.searchedKeyword.set(keyword.toLowerCase());
      this.currentPage.set(isNaN(page) ? 1 : page);
    });
  }

  protected parseQueryParam(param: string | undefined): string[] | undefined {
    if (!param) return undefined;
    return param.split(',').map((v) => v.replace(/-/g, ' '));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category = this.parseQueryParam(params['categories']);
      const size = this.parseQueryParam(params['size']);
      const availability = this.parseQueryParam(params['availability']);
      const styles = this.parseQueryParam(params['styles']);
      const sort = this.parseQueryParam(params['sort']);
      const isFiltering = category || size || availability || styles;

      const filters = { category, size, availability, styles };

      if (isFiltering && sort)
        this.displayProducts.set(filterAndSortProducts(this.productsData(), filters, sort[0] as SortOption));
      else if (sort) this.displayProducts.set(sortProducts(this.productsData(), sort[0] as SortOption));
      else this.displayProducts.set(applyFilters(this.productsData(), filters));
    });

    this.pageHeadTags.updateMetaData(SearchResultsMetaData(this.searchedKeyword()));
  }
}

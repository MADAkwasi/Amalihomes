import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ResponsivePaginationService } from '../../../logic/services/pagination/responsive-pagination.service';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {
  applyFilters,
  filterAndSortProducts,
  SortOption,
  sortProducts,
} from '../../../logic/utils/helpers/product-manipulation';
import { TextDirective } from '@amalihomes/shared';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-filtered-products',
  imports: [CommonModule, TextDirective, ProductCardComponent, PaginationComponent],
  templateUrl: './filtered-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly responsivePagination = inject(ResponsivePaginationService);
  public readonly productsPerPage = this.responsivePagination.getPerPage();
  protected readonly products = this.store.selectSignal(selectProducts);
  protected readonly filteredProducts = signal(this.products());
  protected readonly currentPage = signal(1);
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
  protected readonly pageProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.productsPerPage();
    const end = this.currentPage() * this.productsPerPage();
    return this.filteredProducts().slice(start, end);
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'] ?? '1', 10);
      this.currentPage.set(isNaN(page) ? 1 : page);
    });
  }

  protected parseQueryParam(param: string | undefined): string[] | undefined {
    if (!param) return undefined;
    return param.split(',').map((v) => v.replace(/-/g, ' '));
  }

  protected parseQueryToNumber(num: string): number {
    return Number(num.split(',').join(''));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category = this.parseQueryParam(params['categories']);
      const size = this.parseQueryParam(params['size']);
      const availability = this.parseQueryParam(params['availability']);
      const styles = this.parseQueryParam(params['styles']);
      const sort = this.parseQueryParam(params['sort']);
      const minPrice = this.parseQueryToNumber(params['min-price']);
      const maxPrice = this.parseQueryToNumber(params['max-price']);
      const isFiltering = category || size || availability || styles || minPrice || maxPrice;

      const filters = { category, size, availability, styles, minPrice, maxPrice };

      if (isFiltering && sort)
        this.filteredProducts.set(filterAndSortProducts(this.products(), filters, sort[0] as SortOption));
      else if (sort) this.filteredProducts.set(sortProducts(this.products(), sort[0] as SortOption));
      else this.filteredProducts.set(applyFilters(this.products(), filters));
    });
  }
}

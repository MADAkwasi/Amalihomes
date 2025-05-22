import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectNewArrivals } from '../../../logic/stores/selectors/dummy-data.selector';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TextDirective } from '@amalihomes/shared';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';
import { ResponsivePaginationService } from '../../../logic/services/pagination/responsive-pagination.service';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { NewArrivalsMetaData } from './static-meta-data';
import {
  applyFilters,
  filterAndSortProducts,
  SortOption,
  sortProducts,
} from '../../../logic/utils/helpers/product-manipulation';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-new-arrivals',
  imports: [CommonModule, ProductCardComponent, TextDirective, PaginationComponent],
  templateUrl: './new-arrivals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly responsivePagination = inject(ResponsivePaginationService);
  private readonly pageHeadTags = inject(MetaTagsService);
  public readonly productsPerPage = this.responsivePagination.getPerPage();
  private readonly newArrivals = this.store.selectSignal(selectNewArrivals);
  protected readonly displayProducts = signal(this.newArrivals());
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
    return this.displayProducts().slice(start, end);
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
        this.displayProducts.set(filterAndSortProducts(this.newArrivals(), filters, sort[0] as SortOption));
      else if (sort) this.displayProducts.set(sortProducts(this.newArrivals(), sort[0] as SortOption));
      else this.displayProducts.set(applyFilters(this.newArrivals(), filters));
    });

    this.pageHeadTags.updateMetaData(NewArrivalsMetaData);
  }
}

import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ResponsivePaginationService } from '../../../logic/services/pagination/responsive-pagination.service';
import { selectFlashSales } from '../../../logic/stores/selectors/dummy-data.selector';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { TextDirective } from '@amalihomes/shared';
import { applyFilters } from '../../../logic/utils/helpers/product-manipulation';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { FlashSalesMetaData } from './static-meta-data';

@Component({
  selector: 'app-flash-sales',
  imports: [CommonModule, ProductCardComponent, PaginationComponent, TextDirective],
  templateUrl: './flash-sales.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashSalesComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly responsivePagination = inject(ResponsivePaginationService);
  private readonly flashSales = this.store.selectSignal(selectFlashSales);
  private readonly pageHeadTags = inject(MetaTagsService);
  protected readonly productsPerPage = this.responsivePagination.getPerPage();
  protected readonly displayProducts = signal(this.flashSales());
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

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category = this.parseQueryParam(params['categories']);
      const size = this.parseQueryParam(params['size']);
      const availability = this.parseQueryParam(params['availability']);
      const styles = this.parseQueryParam(params['styles']);

      this.displayProducts.set(applyFilters(this.flashSales(), { category, size, availability, styles }));
    });

    this.pageHeadTags.updateMetaData(FlashSalesMetaData);
  }
}

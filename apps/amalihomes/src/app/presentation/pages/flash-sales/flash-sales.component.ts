import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ResponsivePaginationService } from '../../../logic/services/pagination/responsive-pagination.service';
import { selectFlashSales } from '../../../logic/stores/selectors/dummy-data.selector';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-flash-sales',
  imports: [CommonModule, ProductCardComponent, PaginationComponent, TextDirective],
  templateUrl: './flash-sales.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashSalesComponent {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly responsivePagination = inject(ResponsivePaginationService);
  protected readonly productsPerPage = this.responsivePagination.getPerPage();
  protected readonly flashSales = this.store.selectSignal(selectFlashSales);
  protected readonly currentPage = signal(1);
  protected readonly pageProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.productsPerPage();
    const end = this.currentPage() * this.productsPerPage();
    return this.flashSales().slice(start, end);
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'] ?? '1', 10);
      this.currentPage.set(isNaN(page) ? 1 : page);
    });
  }
}

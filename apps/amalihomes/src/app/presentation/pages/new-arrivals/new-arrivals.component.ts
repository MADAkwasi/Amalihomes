import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TextDirective } from '@amalihomes/shared';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';
import { ResponsivePaginationService } from '../../../logic/services/pagination/responsive-pagination.service';

@Component({
  selector: 'app-new-arrivals',
  imports: [CommonModule, ProductCardComponent, TextDirective, PaginationComponent],
  templateUrl: './new-arrivals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsComponent {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly responsivePagination = inject(ResponsivePaginationService);
  public readonly productsPerPage = this.responsivePagination.getPerPage();
  protected readonly productsData = this.store.selectSignal(selectProducts);
  protected readonly currentPage = signal(1);
  protected readonly newArrivals = computed(() =>
    this.productsData().filter((product) => product.status.includes('new arrival')),
  );
  protected readonly pageProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.productsPerPage();
    const end = this.currentPage() * this.productsPerPage();
    return this.newArrivals().slice(start, end);
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'] ?? '1', 10);
      this.currentPage.set(isNaN(page) ? 1 : page);
    });
  }
}

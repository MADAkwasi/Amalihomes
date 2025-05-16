import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared-ui/components/button/button.component';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { Product } from '../../../types/chatbot';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public readonly productsPerPage = input.required<number>();
  public readonly products = input.required<Product[]>();
  protected readonly icons = { ChevronLeft, ChevronRight };
  protected readonly currentPage = signal(1);
  protected readonly numOfPages = computed(() => {
    const count = this.products().length;
    return Math.ceil(count / this.productsPerPage()) || 1;
  });
  protected readonly pages = computed(() => Array.from({ length: this.numOfPages() }, (_, i) => i + 1));

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page'));
      this.currentPage.set(!isNaN(page) && page > 0 ? page : 1);
    });
  }

  protected onChangePage(direction?: 'next' | 'prev', page?: number): void {
    if (direction === 'next') this.currentPage.update((p) => p + 1);
    else if (direction === 'prev') this.currentPage.update((p) => p - 1);
    else this.currentPage.set(page ?? 1);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage() },
      queryParamsHandling: 'merge',
    });
  }
}

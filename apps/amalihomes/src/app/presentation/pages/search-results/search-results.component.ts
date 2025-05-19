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
  protected readonly productsData = computed(() => {
    const searchedProducts = this.store.selectSignal(selectSearchResults(this.searchedKeyword()));
    return searchedProducts();
  });
  protected readonly pageProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.productsPerPage();
    const end = this.currentPage() * this.productsPerPage();
    return this.productsData().slice(start, end);
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'] ?? '1', 10);
      const keyword = params['search'];

      this.searchedKeyword.set(keyword.toLowerCase());
      this.currentPage.set(isNaN(page) ? 1 : page);
    });
  }

  ngOnInit(): void {
    this.pageHeadTags.updateMetaData(SearchResultsMetaData(this.searchedKeyword()));
  }
}

import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ExhibitionSlidersComponent } from '../../components/exhibition-sliders/exhibition-sliders.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { ShopMetaData } from './static-meta-data';
import { FilteredProductsComponent } from '../../components/filtered-products/filtered-products.component';

@Component({
  selector: 'app-shop',
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule,
    ExhibitionSlidersComponent,
    SearchResultsComponent,
    FilteredProductsComponent,
  ],
  templateUrl: './shop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly pageHeadTags = inject(MetaTagsService);
  protected readonly productsData = this.store.selectSignal(selectProducts);
  private readonly route = inject(ActivatedRoute);
  protected readonly searchQuery = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('search'))), {
    initialValue: null,
  });
  protected readonly filterQuery = toSignal(
    this.route.queryParamMap.pipe(
      map(
        (params) =>
          params.get('categories') ??
          params.get('size') ??
          params.get('availability') ??
          params.get('styles') ??
          params.get('min-price') ??
          params.get('max-price') ??
          params.get('sort'),
      ),
    ),
    {
      initialValue: null,
    },
  );
  protected readonly newArrivals = computed(() =>
    this.productsData().filter((product) => product.status.includes('new arrival')),
  );
  protected readonly topSellers = computed(() =>
    this.productsData().filter((product) => product.status.includes('top seller')),
  );
  protected readonly discountedProducts = computed(() => this.productsData().filter((product) => product.discount));

  ngOnInit(): void {
    this.pageHeadTags.updateMetaData(ShopMetaData);
  }
}

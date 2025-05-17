import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ExhibitionSlidersComponent } from '../../components/exhibition-sliders/exhibition-sliders.component';
import { RootLayoutComponent } from '../../layouts/root-layout/root-layout.component';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, RouterModule, LucideAngularModule, ExhibitionSlidersComponent, RootLayoutComponent],
  templateUrl: './shop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
  private readonly store = inject(Store);
  protected readonly productsData = this.store.selectSignal(selectProducts);
  protected readonly newArrivals = computed(() =>
    this.productsData().filter((product) => product.status.includes('new arrival')),
  );
  protected readonly topSellers = computed(() =>
    this.productsData().filter((product) => product.status.includes('top seller')),
  );
  protected readonly discountedProducts = computed(() => this.productsData().filter((product) => product.discount));
}

import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-home-flash-sale',
  imports: [CommonModule, ButtonComponent, TextDirective],
  templateUrl: './home-flash-sale.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFlashSaleComponent {
  private store = inject(Store<ApplicationStore>);

  public imageData = this.store.selectSignal(selectApplicationImageData);

  public flashSaleImageUrl = computed(() => this.imageData()?.[2]?.image || '');

  public flashSaleName = computed(() => this.imageData()?.[2]?.name || '');
}

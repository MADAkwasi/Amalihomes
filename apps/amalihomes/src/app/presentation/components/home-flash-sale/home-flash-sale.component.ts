import { Component, inject, ChangeDetectionStrategy, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';
import { FlashSaleStoryblok } from '../../../types';

@Component({
  selector: 'app-home-flash-sale',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TextDirective],
  templateUrl: './home-flash-sale.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFlashSaleComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly externalData = input<FlashSaleStoryblok | null>(null);
  private readonly storeData = this.store.selectSignal(selectHomePageSectionData('flash-sale'));
  protected readonly data = computed(() => this.externalData() ?? this.storeData());
}

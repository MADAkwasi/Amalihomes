import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';

@Component({
  selector: 'app-home-flash-sale',
  imports: [CommonModule, ButtonComponent, TextDirective],
  templateUrl: './home-flash-sale.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFlashSaleComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly data = this.store.selectSignal(selectHomePageSectionData('flash-sale'));
}

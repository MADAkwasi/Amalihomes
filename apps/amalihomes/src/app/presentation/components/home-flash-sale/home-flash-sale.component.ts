import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { RouterLink } from '@angular/router';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-home-flash-sale',
  imports: [CommonModule, TextDirective, RouterLink],
  templateUrl: './home-flash-sale.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFlashSaleComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly flashSaleSection = this.store.selectSignal(selectSection('flashSale'));
}

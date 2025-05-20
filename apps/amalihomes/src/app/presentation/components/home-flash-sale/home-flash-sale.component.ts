import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { RouterModule } from '@angular/router';
import { TextDirective } from '@amalihomes/shared';
import { ApplicationStore } from '../../../logic/interfaces/app';

@Component({
  selector: 'app-home-flash-sale',
  imports: [CommonModule, TextDirective, RouterModule],
  templateUrl: './home-flash-sale.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFlashSaleComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly flashSaleSection = this.store.selectSignal(selectSection('flashSale'));
}

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuePropItemComponent } from '../value-prop-item/value-prop-item.component';
import { ApplicationStore } from '../../../logic/stores';
import { Store } from '@ngrx/store';
import { ImageComponent, TextDirective } from '@amalihomes/shared';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';
@Component({
  selector: 'app-value-proposition',
  imports: [CommonModule, ValuePropItemComponent, ImageComponent, TextDirective],
  templateUrl: './value-proposition.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuePropositionComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly data = this.store.selectSignal(selectHomePageSectionData('merits'));
}

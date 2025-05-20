import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuePropItemComponent } from '../value-prop-item/value-prop-item.component';
import { Store } from '@ngrx/store';
import { ImageComponent, TextDirective } from '@amalihomes/shared';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { ApplicationStore } from '../../../logic/interfaces/app';
@Component({
  selector: 'app-value-proposition',
  imports: [CommonModule, ValuePropItemComponent, ImageComponent, TextDirective],
  templateUrl: './value-proposition.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuePropositionComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly meritData = this.store.selectSignal(selectSection('merits'));
}

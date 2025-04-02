import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuePropItemComponent } from '../value-prop-item/value-prop-item.component';
import { ApplicationStore } from '../../../logic/stores';
import { Store } from '@ngrx/store';
import { selectApplicationImageDataByIndex } from '../../../logic/stores/selectors/image-data';
import { merits as MERITS } from '../../../logic/data/constants/merits';
import { ImageComponent, TextDirective } from '@amalihomes/shared';
@Component({
  selector: 'app-value-proposition',
  imports: [CommonModule, ValuePropItemComponent, ImageComponent, TextDirective],
  templateUrl: './value-proposition.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuePropositionComponent {
  protected items = MERITS;

  private imagesStore = inject(Store<ApplicationStore>);

  private sectionImageData = this.imagesStore.selectSignal(selectApplicationImageDataByIndex(1));

  protected sectionImageUrl = computed(() => this.sectionImageData().image);

  protected imageTitle = computed(() => this.sectionImageData().name);
}

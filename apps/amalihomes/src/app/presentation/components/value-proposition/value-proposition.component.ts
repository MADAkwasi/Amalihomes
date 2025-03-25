import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuePropItemComponent } from '../value-prop-item/value-prop-item.component';
import { ApplicationStore } from '../../../logic/stores';
import { Store } from '@ngrx/store';
import { selectApplicationImageDataByIndex } from '../../../logic/stores/selectors/image-data';
import { merits as MERITS } from '../../../logic/data/constants/merits';
import { ImageComponent, TextDirective } from '@amalihomes/shared';

const IMAGE_WIDTH = 482;
const IMAGE_HEIGHT = 620;

@Component({
  selector: 'app-value-proposition',
  imports: [CommonModule, ValuePropItemComponent, ImageComponent, TextDirective],
  templateUrl: './value-proposition.component.html',
})
export class ValuePropositionComponent {
  protected imageDimenesions = { IMAGE_HEIGHT, IMAGE_WIDTH };

  protected items = MERITS;

  private imagesStore = inject(Store<ApplicationStore>);

  private sectionImageData = this.imagesStore.selectSignal(selectApplicationImageDataByIndex(1));

  protected sectionImageUrl = computed(() => this.sectionImageData().image);

  protected imageTitle = computed(() => this.sectionImageData().name);
}

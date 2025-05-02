import { Component, ChangeDetectionStrategy, inject, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { ValuePropItemComponent } from '../../value-prop-item/value-prop-item.component';
import { ImageComponent } from '@amalihomes/shared';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, ResponsiveHeadingComponent, ValuePropItemComponent, ImageComponent],
  templateUrl: './featured.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly data = this.store.selectSignal(selectSection('merits'));
}

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '@amalihomes/shared';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';
@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule, ImageComponent, ResponsiveHeadingComponent],
  templateUrl: './leadership.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadershipComponent {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly data = this.store.selectSignal(selectSection('leadership_team'));
}

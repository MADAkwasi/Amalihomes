import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  imports: [CommonModule, ResponsiveHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  public data = this.store.selectSignal(selectSection('aboutLandingSection'));
}

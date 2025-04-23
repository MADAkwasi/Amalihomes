import { CommonModule } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ValuePropIconName } from './constants';
import {
  HomeAwardIconComponent,
  HomeCouchIconComponent,
  HomeTruckIconComponent,
  HomeMoneyBagIconComponent,
  FeaturedMedalIconComponent,
  FeaturedRecycleIconComponent,
  FeaturedTropyIconComponent,
  FeaturedBadgeIconComponent,
} from '../svg-icons';

@Component({
  selector: 'app-value-prop-icon',
  imports: [
    CommonModule,
    HomeAwardIconComponent,
    HomeCouchIconComponent,
    HomeTruckIconComponent,
    HomeMoneyBagIconComponent,
    FeaturedMedalIconComponent,
    FeaturedRecycleIconComponent,
    FeaturedTropyIconComponent,
    FeaturedBadgeIconComponent,
  ],
  templateUrl: './value-prop-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuePropIconComponent {
  public readonly iconName = input.required<ValuePropIconName>();
}

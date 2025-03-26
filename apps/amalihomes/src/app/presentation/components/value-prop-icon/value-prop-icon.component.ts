import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ValuePropIconName } from './constants';
import {
  HomeAwardIconComponent,
  HomeCouchIconComponent,
  HomeTruckIconComponent,
  HomeMoneyBagIconComponent,
} from '../svg-icons';

@Component({
  selector: 'app-value-prop-icon',
  imports: [
    CommonModule,
    HomeAwardIconComponent,
    HomeCouchIconComponent,
    HomeTruckIconComponent,
    HomeMoneyBagIconComponent,
  ],
  templateUrl: './value-prop-icon.component.html',
})
export class ValuePropIconComponent {
  public readonly iconName = input.required<ValuePropIconName>();
}

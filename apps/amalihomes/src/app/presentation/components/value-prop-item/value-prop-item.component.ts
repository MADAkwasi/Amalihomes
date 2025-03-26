import { Component, input } from '@angular/core';
import { ValuePropIconComponent } from '../value-prop-icon/value-prop-icon.component';
import { TextDirective } from '@amalihomes/shared';
import { ValuePropIconName } from '../value-prop-icon/constants';

@Component({
  selector: 'app-value-prop-item',
  imports: [ValuePropIconComponent, TextDirective],
  templateUrl: './value-prop-item.component.html',
})
export class ValuePropItemComponent {
  public readonly meritDescription = input.required<string>();

  public readonly meritTitle = input.required<string>();

  public readonly iconName = input.required<ValuePropIconName>();
}

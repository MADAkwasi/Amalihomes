import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ValuePropIconComponent } from '../value-prop-icon/value-prop-icon.component';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-value-prop-item',
  imports: [ValuePropIconComponent, TextDirective],
  templateUrl: './value-prop-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuePropItemComponent {
  public readonly meritDescription = input.required<string>();
  public readonly meritTitle = input.required<string>();
  public readonly icon = input.required<string>();
}

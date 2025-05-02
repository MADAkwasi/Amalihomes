import { CommonModule } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-value-prop-icon',
  imports: [CommonModule],
  templateUrl: './value-prop-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuePropIconComponent {
  public readonly icon = input.required<string>();
}

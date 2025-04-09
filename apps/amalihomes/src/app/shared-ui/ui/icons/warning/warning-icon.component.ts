import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-warning-icon',
  imports: [CommonModule],
  templateUrl: './warning-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningIconComponent {
  readonly size = input<number | string>(16);
  readonly strokeWidth = input<number | string>(1.5);
  readonly color = input<string>('#E29400');
}

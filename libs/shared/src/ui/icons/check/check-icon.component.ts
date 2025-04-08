import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-check-icon',
  imports: [CommonModule],
  templateUrl: './check-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent {
  size = input<number | string>(16);
  strokeWidth = input<number | string>(1.5);
  color = input<string>('#348537');
}

import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-check-icon',
  imports: [CommonModule],
  templateUrl: './check-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent {
  public readonly height = input<number | string>(10.5);
  public readonly width = input<number | string>(16);
  public readonly strokeWidth = input<number | string>(1.5);
  public readonly color = input<string>('#348537');
}

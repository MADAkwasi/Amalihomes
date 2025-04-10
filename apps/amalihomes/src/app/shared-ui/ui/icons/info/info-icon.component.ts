import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-info-icon',
  imports: [CommonModule],
  templateUrl: './info-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoIconComponent {
  public readonly size = input<number | string>(16);
  public readonly strokeWidth = input<number | string>(1.5);
  public readonly color = input<string>('#3C5D8D');
}

import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-info-icon',
  imports: [CommonModule],
  templateUrl: './info-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoIconComponent {
  size = input<number | string>(16);
  strokeWidth = input<number | string>(1.5);
  color = input<string>('#3C5D8D');
}

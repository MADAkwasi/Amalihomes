import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-image-icon',
  imports: [CommonModule],
  templateUrl: './image-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageIconComponent {
  public readonly width = input<number>(57);
  public readonly height = input<number>(49);
  public readonly color = input<string>('#B0B0B0');
}

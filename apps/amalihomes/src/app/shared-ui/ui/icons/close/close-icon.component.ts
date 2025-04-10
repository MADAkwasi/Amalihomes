import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-close-icon',
  imports: [CommonModule],
  templateUrl: './close-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconComponent {
  public readonly size = input<number | string>(16);
  public readonly strokeWidth = input<number | string>(1.5);
  public readonly color = input<string>('#E22420');
}

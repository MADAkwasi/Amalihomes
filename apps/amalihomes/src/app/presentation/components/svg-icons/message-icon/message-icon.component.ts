import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-icon',
  imports: [CommonModule],
  templateUrl: './message-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageIconComponent {
  public selected = input(false);
}

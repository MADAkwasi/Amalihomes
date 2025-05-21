import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout-icon',
  imports: [CommonModule],
  templateUrl: './logout-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutIconComponent {
  public selected = input(false);
}

import { ButtonComponent } from '@amalihomes/shared';
import { Component, signal, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './logout-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutModalComponent {
  public show = signal(false);
  public readonly confirmed = output<void>();

  public open() {
    this.show.set(true);
  }

  public close() {
    this.show.set(false);
  }

  public confirmLogout() {
    this.confirmed.emit();
    this.close();
  }
}

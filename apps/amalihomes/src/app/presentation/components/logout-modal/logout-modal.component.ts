import { ButtonComponent } from '@amalihomes/shared';
import { Component, signal, output } from '@angular/core';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './logout-modal.component.html',
})
export class LogoutModalComponent {
  public show = signal(false);
  public readonly confirmed = output<void>();

  open() {
    this.show.set(true);
  }

  close() {
    this.show.set(false);
  }

  confirmLogout() {
    this.confirmed.emit();
    this.close();
  }
}

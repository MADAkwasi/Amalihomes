import { Component, input, computed, signal, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from '../../ui/icons/close/close-icon.component';
import { CheckIconComponent } from '../../ui/icons/check/check-icon.component';
import { InfoIconComponent } from '../../ui/icons/info/info-icon.component';
import { WarningIconComponent } from '../../ui/icons/warning/warning-icon.component';

export type ToastType = 'error' | 'success' | 'info' | 'warning';

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule, CloseIconComponent, CheckIconComponent, InfoIconComponent, WarningIconComponent],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly type = input<ToastType>('info');
  readonly title = input<string>('');
  readonly message = input<string>('');
  readonly duration = input<number>(5000);
  readonly autoClose = input<boolean>(true);

  @Output() closed = new EventEmitter<void>();

  readonly visible = signal<boolean>(true);

  readonly typeClass = computed(() => `toast-${this.type()}`);
  readonly role = computed(() => {
    switch (this.type()) {
      case 'error':
        return 'alert';
      case 'warning':
        return 'alert';
      case 'info':
        return 'status';
      case 'success':
        return 'status';
      default:
        return 'status';
    }
  });

  private timeoutId: number | null = null;

  constructor() {
    if (this.autoClose() && this.duration() > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.close();
      }, this.duration());
    }
  }

  close(): void {
    this.visible.set(false);
    this.closed.emit();

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}

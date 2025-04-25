import { Component, output, ChangeDetectorRef, ChangeDetectionStrategy, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabButtonComponent {
  public readonly label = input<string>('Tab Label');
  public readonly isActive = input<boolean>(false);
  public readonly disabled = input<boolean>(false);

  public readonly selected = output<string>();

  private readonly cdr = inject(ChangeDetectorRef);

  onClick(): void {
    if (!this.disabled() && !this.isActive()) {
      this.selected.emit(this.label());

      this.cdr.markForCheck();
    }
  }
}

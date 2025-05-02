import { Component, ChangeDetectionStrategy, input, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { LucideAngularModule, CircleX } from 'lucide-angular';

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public readonly handleFocus = output<FocusEvent>();
  public readonly handleBlur = output<FocusEvent>();
  public readonly placeholder = input('');
  public readonly id = input('');
  public readonly type = input('text');
  public readonly iconSize = input(20);
  public readonly strokeWidth = input(2);
  public readonly leftIcon = input(false);
  public readonly rightIcon = input(false);
  public readonly containerStyles = input('');
  public readonly error = input(false);
  public readonly warning = input(false);
  public readonly errorMessage = input('');
  public readonly inputStyles = input('');
  public readonly label = input('');
  public readonly control = input<FormControl>(new FormControl(''));
  public readonly disabled = input(false);
  protected readonly errorIcon = CircleX;
  protected readonly classes = computed(() => {
    const base = this.containerStyles() || '';
    if (this.disabled()) return `is-disabled ${base} `;
    return this.error() ? `${base} with-error` : this.warning() ? `${base} with-warning` : base;
  });

  protected onFocus(event: FocusEvent) {
    this.handleFocus.emit(event);
  }
  protected onBlur(event: FocusEvent) {
    this.handleBlur.emit(event);
  }
}

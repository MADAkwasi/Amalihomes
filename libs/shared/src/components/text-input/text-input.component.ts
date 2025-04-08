import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
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
  placeholder = input('');
  id = input('');
  type = input('text');
  iconSize = input(20);
  strokeWidth = input(2);
  leftIcon = input(false);
  rightIcon = input(false);
  containerStyles = input('');
  error = input(false);
  warning = input(false);
  errorMessage = input('');
  inputStyles = input('');
  label = input('');
  control = input<FormControl>(new FormControl(''));
  disabled = input(false);
  errorIcon = CircleX;
  classes = computed(() => {
    const base = this.containerStyles() || '';
    if (this.disabled()) return `is-disabled ${base} `;
    return this.error() ? `${base} with-error` : this.warning() ? `${base} with-warning` : base;
  });
}

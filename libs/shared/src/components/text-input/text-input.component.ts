import { Component, ChangeDetectionStrategy, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  placeholder = input('');
  iconSize = input(20);
  strokeWidth = input(2);
  leftIcon = input(false);
  rightIcon = input(false);
  containerStyles = input('');
  inputStyles = input('');
  control = input<FormControl>(new FormControl(''));

  disabled = signal(false);

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}

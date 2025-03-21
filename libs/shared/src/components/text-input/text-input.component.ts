import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() iconSize = 20;
  @Input() strokeWidth = 2;
  @Input() leftIcon = false;
  @Input() rightIcon = false;
  @Input() containerStyles = '';
  @Input() inputStyles = '';
  @Input() control: FormControl = new FormControl('');

  disabled = false;

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

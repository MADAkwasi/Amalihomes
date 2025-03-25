import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'lib-select-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css',
})
export class SelectInputComponent {
  @Input() placeholder = 'Select an option';
  @Input() options: { value: string; label: string }[] = [];
  @Input() disabled = false;
  @Input() control: FormControl = new FormControl('');
  @Input() label = '';
  @Input() class = '';
  arrowIcon = ChevronDown;

  isOpen = false;

  stoggleDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get selectedLabel(): string {
    const selectedOption = this.options.find((opt) => opt.value === this.control.value);
    return selectedOption ? selectedOption.label : this.placeholder;
  }

  toggleDropdown(): void {
    if (this.disabled) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  selectOption(value: string): void {
    this.control.setValue(value);
    this.isOpen = false;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}

import { Component, input } from '@angular/core';
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
  placeholder = input('Select an option');
  options = input<{ value: string; label: string }[]>([]);
  disabled = input(false);
  control = input<FormControl>(new FormControl(''));
  label = input('');
  class = input('');
  arrowIcon = ChevronDown;

  isOpen = false;

  get selectedLabel(): string {
    const selectedOption = this.options().find((opt) => opt.value === this.control().value);
    return selectedOption ? selectedOption.label : this.placeholder();
  }

  toggleDropdown(): void {
    if (this.disabled()) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  selectOption(value: string): void {
    this.control().setValue(value);
    this.isOpen = false;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}

import { Component, computed, effect, input, signal } from '@angular/core';
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
  cssClass = input('');
  arrowIcon = ChevronDown;
  isOpen = false;
  private controlValue = signal<string>('');
  constructor() {
    effect((onCleanup) => {
      const ctrl = this.control();
      this.controlValue.set(ctrl.value);
      const sub = ctrl.valueChanges.subscribe((value) => {
        this.controlValue.set(value);
      });
      onCleanup(() => sub.unsubscribe());
    });
  }
  computedLabel = computed(() => {
    const selectedOption = this.options().find((opt) => opt.value === this.controlValue());
    return selectedOption ? selectedOption.label : this.placeholder();
  });
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

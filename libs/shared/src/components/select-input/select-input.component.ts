import { Component, computed, input, ChangeDetectionStrategy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'lib-select-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent {
  placeholder = input('Select an option');
  options = input<{ value: string; label: string }[]>([]);
  disabled = input(false);
  control = input<FormControl>(new FormControl(''));
  label = input('');
  arrowIcon = ChevronDown;
  isOpen = signal(false);
  controlValue = signal<string>('');

  constructor() {
    effect((onCleanup) => {
      const control = this.control();
      const sub = control.valueChanges.subscribe((value) => {
        this.controlValue.set(value);
      });
      this.controlValue.set(control.value);
      onCleanup(() => sub.unsubscribe());
    });

    effect((onCleanup) => {
      const handler = (event: MouseEvent) => {
        if (this.isOpen() && !(event.target as HTMLElement).closest('lib-select-input')) {
          this.closeDropdown();
        }
      };
      document.addEventListener('click', handler);
      onCleanup(() => document.removeEventListener('click', handler));
    });
  }

  selectedLabel = computed(() => {
    const selectedOption = this.options().find(({ value }) => value === this.controlValue());
    return selectedOption ? selectedOption.label : this.placeholder();
  });

  toggleDropdown(): void {
    if (this.disabled()) {
      return;
    }
    this.isOpen.update((v) => !v);
  }

  selectOption(value: string): void {
    const control = this.control();
    control.setValue(value);
    this.closeDropdown();
  }

  closeDropdown(): void {
    this.isOpen.set(false);
  }
}

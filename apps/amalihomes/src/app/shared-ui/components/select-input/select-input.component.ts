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
  public readonly placeholder = input('Select an option');
  public readonly options = input<{ value: string; label: string }[]>([]);
  public readonly disabled = input(false);
  public readonly control = input<FormControl>(new FormControl(''));
  public readonly label = input('');
  public readonly arrowIcon = ChevronDown;
  public readonly isOpen = signal(false);
  public readonly controlValue = signal<string>('');
  public readonly selectedLabel = computed(() => {
    const selectedOption = this.options().find(({ value }) => value === this.controlValue());
    return selectedOption ? selectedOption.label : this.placeholder();
  });

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

  public toggleDropdown(): void {
    if (this.disabled()) return;
    this.isOpen.update((v) => !v);
  }

  public selectOption(value: string): void {
    const control = this.control();
    control.setValue(value);
    this.closeDropdown();
  }

  public closeDropdown(): void {
    this.isOpen.set(false);
  }
}

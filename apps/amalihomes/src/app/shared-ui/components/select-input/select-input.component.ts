import { Component, computed, input, ChangeDetectionStrategy, signal, effect, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
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
  private readonly document = inject(DOCUMENT);
  public readonly placeholder = input('Select an option');
  public readonly options = input<{ value: string; label: string }[]>([]);
  public readonly disabled = input(false);
  public readonly control = input<FormControl | null>(null);
  public readonly label = input('');
  protected readonly arrowIcon = ChevronDown;
  protected readonly isOpen = signal(false);
  protected readonly controlValue = signal<string>('');
  protected readonly selectedLabel = computed(() => {
    const selectedOption = this.options().find(({ value }) => value === this.controlValue());
    return selectedOption ? selectedOption.label : this.placeholder();
  });

  constructor() {
    effect((onCleanup) => {
      const control = this.control();
      if (control) {
        const sub = control.valueChanges.subscribe((value) => {
          this.controlValue.set(value);
        });
        this.controlValue.set(control.value);
        onCleanup(() => sub.unsubscribe());
      }
    });

    effect((onCleanup) => {
      const handler = (event: MouseEvent) => {
        if (this.isOpen() && !(event.target as HTMLElement).closest('lib-select-input')) {
          this.closeDropdown();
        }
      };
      this.document.addEventListener('click', handler);
      onCleanup(() => this.document.removeEventListener('click', handler));
    });
  }

  protected toggleDropdown(): void {
    if (this.disabled()) return;
    this.isOpen.update((v) => !v);
  }

  protected selectOption(value: string): void {
    const control = this.control();
    control?.setValue(value);
    this.closeDropdown();
  }

  protected closeDropdown(): void {
    this.isOpen.set(false);
  }
}

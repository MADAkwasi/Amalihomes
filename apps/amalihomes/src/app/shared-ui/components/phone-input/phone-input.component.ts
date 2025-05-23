import { ChangeDetectionStrategy, Component, input, output, signal, effect } from '@angular/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { countryCodes } from '../../../logic/data/account';

@Component({
  selector: 'lib-phone-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './phone-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInputComponent {
  public control = input<FormControl>();
  public label = input<string>('Phone Number');
  protected readonly arrowDown = ChevronDown;
  public readonly countryCodeChanged = output<string>();
  public readonly codes = countryCodes;
  public readonly selectedCode = signal(countryCodes[0]);
  public readonly dropdownOpen = signal(false);

  public toggleDropdown(): void {
    this.dropdownOpen.update((open) => !open);
  }

  public selectCode(code: string): void {
    const selected = countryCodes.find((c) => c.code === code);
    if (selected) {
      this.selectedCode.set(selected);
    }
  }

  constructor() {
    effect(() => {
      this.countryCodeChanged.emit(this.selectedCode().code);
    });
  }
}

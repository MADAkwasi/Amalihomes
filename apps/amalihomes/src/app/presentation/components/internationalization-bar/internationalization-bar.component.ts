import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { localization } from '../../../logic/data/constants/localization';
import { Globe, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-internationalization-bar',
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './internationalization-bar.component.html',
})
export class InternationalizationBarComponent {
  public readonly localization = signal(localization);
  public readonly globeIcon = Globe;
  public currentLocale = computed(() => {
    const defaultLocale = {
      country: 'USA',
      language: 'English',
      languageCode: 'en',
      countryCode: 'US',
      direction: 'ltr',
    };
    return this.localization().find((curLocale) => curLocale.country === defaultLocale.country);
  });
}

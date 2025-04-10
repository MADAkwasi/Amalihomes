import { Component, computed, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, SelectInputComponent, TextDirective, ButtonComponent } from '@amalihomes/shared';
import { localization, countries, languages } from '../../../logic/data/constants/localization';
import { Globe, LucideAngularModule } from 'lucide-angular';
import { InformationCircleIconComponent } from '../svg-icons';
import { Locale } from '../../../types/storyblok';

@Component({
  standalone: true,
  selector: 'app-internationalization-bar',
  imports: [
    CommonModule,
    LucideAngularModule,
    TextDirective,
    ModalComponent,
    SelectInputComponent,
    InformationCircleIconComponent,
    ButtonComponent,
  ],
  templateUrl: './internationalization-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternationalizationBarComponent {
  public readonly locale = input.required<Locale[]>();
  protected readonly localization = signal(localization);
  protected readonly countries = signal(countries);
  protected readonly languages = signal(languages);
  protected readonly supportedCountries = computed(() => {
    const uniqueCountries = new Map<string, string>();

    this.localization().forEach((locale) => {
      if (!uniqueCountries.has(locale.country)) {
        uniqueCountries.set(locale.country, `${locale.country} (${locale.languageCode})`);
      }
    });

    return Array.from(uniqueCountries.values()).join(', ');
  });

  protected readonly globeIcon = Globe;
  protected selectedCountry = signal('USA');
  protected currentLocale = computed(() => {
    return this.locale().find((curLocale) => curLocale.country === this.selectedCountry()) ?? this.localization()[0];
  });

  protected setCountry(country: string): void {
    this.selectedCountry.set(country);
  }
}

import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, SelectInputComponent, TextDirective, ButtonComponent } from '@amalihomes/shared';
import { localization, countries, languages } from '../../../logic/data/constants/localization';
import { Globe, LucideAngularModule } from 'lucide-angular';
import { InformationCircleIconComponent } from '../svg-icons';

@Component({
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
  public readonly localization = signal(localization);
  public readonly countries = signal(countries);
  public readonly languages = signal(languages);

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

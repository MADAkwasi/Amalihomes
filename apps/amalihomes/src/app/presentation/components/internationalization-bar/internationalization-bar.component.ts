import {
  Component,
  computed,
  input,
  signal,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ModalComponent, SelectInputComponent, TextDirective, ButtonComponent } from '@amalihomes/shared';
import { localization, countries, languages } from '../../../logic/data/constants/localization';
import { Globe, LucideAngularModule } from 'lucide-angular';
import { InformationCircleIconComponent } from '../svg-icons';
import { Locale } from '../../../types/storyblok';
import { Store } from '@ngrx/store';
import { selectLocale, selectSelectedSlugAndVersion } from '../../../logic/stores/selectors/storyblok.selectors';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { debounceTime } from 'rxjs/operators';

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
    ReactiveFormsModule,
  ],
  templateUrl: './internationalization-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternationalizationBarComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  public readonly locale = input.required<Locale[]>();
  protected readonly userLocale = this.store.selectSignal(selectLocale);
  private readonly currentPage = this.store.selectSignal(selectSelectedSlugAndVersion);
  protected readonly localization = signal(localization);
  protected readonly countries = signal(countries);
  protected readonly languages = signal(languages);
  protected readonly globeIcon = Globe;

  protected readonly supportedCountries = computed(() =>
    Array.from(
      new Map(this.localization().map((loc) => [loc.country, `${loc.country} (${loc.languageCode})`])).values(),
    ).join(', '),
  );

  protected readonly form = new FormGroup({
    country: new FormControl(''),
    language: new FormControl(''),
  });

  get countryControl(): FormControl {
    return this.form.get('country') as FormControl;
  }

  get languageControl(): FormControl {
    return this.form.get('language') as FormControl;
  }

  ngOnInit(): void {
    this.countryControl.valueChanges.pipe(debounceTime(0)).subscribe(() => this.onChangeLocale());
    this.languageControl.valueChanges.pipe(debounceTime(0)).subscribe(() => this.onChangeLanguage());
  }

  private findLocaleByCode(code: string, type: 'country' | 'language') {
    return this.localization().find((loc) => loc[`${type}Code`] === code);
  }

  private onChangeLocale(): void {
    const selected = this.findLocaleByCode(this.countryControl.value, 'country');
    let newLocale = selected ?? this.localization()[0];

    if (this.form.value.language !== '')
      newLocale = {
        ...newLocale,
        languageCode: this.userLocale()?.languageCode ?? 'en',
        language: this.userLocale()?.language ?? 'English',
      };

    this.store.dispatch(StoryblokPageActions.changeLocale({ locale: newLocale }));

    if (isPlatformBrowser(this.platformId)) localStorage.setItem('locale', JSON.stringify(newLocale));

    this.reloadPageWithCurrentLanguage();
  }

  private onChangeLanguage(): void {
    const selected = this.findLocaleByCode(this.languageControl.value, 'language');
    const langCode = selected?.languageCode ?? 'en';
    const lang = selected?.language ?? 'English';

    this.store.dispatch(StoryblokPageActions.changeLanguage({ langCode, lang }));

    let newLocale = this.userLocale() ?? this.localization()[0];
    newLocale = { ...newLocale, languageCode: langCode, language: lang };

    if (isPlatformBrowser(this.platformId)) localStorage.setItem('locale', JSON.stringify(newLocale));

    this.reloadPageWithCurrentLanguage();
  }

  private reloadPageWithCurrentLanguage(): void {
    const language = this.userLocale()?.languageCode ?? 'en';

    this.store.dispatch(
      StoryblokPageActions.loadPage({
        slug: this.currentPage().slug,
        language,
        version: this.currentPage().version,
      }),
    );
  }
}

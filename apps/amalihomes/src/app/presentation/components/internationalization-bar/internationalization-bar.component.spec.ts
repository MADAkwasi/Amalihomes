import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternationalizationBarComponent } from './internationalization-bar.component';

describe('InternationalizationBarComponent', () => {
  let component: InternationalizationBarComponent;
  let fixture: ComponentFixture<InternationalizationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalizationBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternationalizationBarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('locale', [{ country: 'Country', langauge: 'Language' }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly return localization data for each country', () => {
    component.localization.set([
      { country: 'Austria', language: 'Deutch', languageCode: 'de', countryCode: 'AT', direction: 'ltr' },
      { country: 'Belgium', language: 'French', languageCode: 'fr', countryCode: 'BE', direction: 'ltr' },
      { country: 'Germany', language: 'Deutch', languageCode: 'de', countryCode: 'DE', direction: 'ltr' },
      { country: 'Switzerland', language: 'Deutch', languageCode: 'de', countryCode: 'CH', direction: 'ltr' },
      { country: 'France', language: 'French', languageCode: 'fr', countryCode: 'FR', direction: 'ltr' },
    ]);

    fixture.detectChanges();

    const testCountries = [
      { country: 'Austria', expectedLanguage: 'Deutch' },
      { country: 'Belgium', expectedLanguage: 'French' },
      { country: 'Germany', expectedLanguage: 'Deutch' },
      { country: 'Switzerland', expectedLanguage: 'Deutch' },
      { country: 'France', expectedLanguage: 'French' },
    ];

    testCountries.forEach(({ country, expectedLanguage }) => {
      const selectedLocale = component.localization().find((locale) => locale.country === country);
      expect(selectedLocale?.language).toBe(expectedLanguage);
    });
  });

  it('should have default current locale set to USA', () => {
    expect(component.currentLocale()).toBeDefined();
    expect(component.currentLocale()?.country).toBe('USA');
    expect(component.currentLocale()?.language).toBe('English');
  });

  it('should update currentLocale when selected country changes', () => {
    component.localization.set([
      { country: 'France', language: 'French', languageCode: 'fr', countryCode: 'FR', direction: 'ltr' },
      { country: 'Germany', language: 'German', languageCode: 'de', countryCode: 'DE', direction: 'ltr' },
      { country: 'USA', language: 'English', languageCode: 'en', countryCode: 'US', direction: 'ltr' },
    ]);

    component.setCountry('France');
    fixture.detectChanges();
    expect(component.currentLocale()?.country).toBe('France');
    expect(component.currentLocale()?.language).toBe('French');
    component.setCountry('NonExistent');
    fixture.detectChanges();
    expect(component.currentLocale()?.country).toBe('France');
  });

  it('should correctly compute supportedCountries', () => {
    component.localization.set([
      { country: 'Austria', language: 'German', languageCode: 'de', countryCode: 'AT', direction: 'ltr' },
      { country: 'Germany', language: 'German', languageCode: 'de', countryCode: 'DE', direction: 'ltr' },
      { country: 'Switzerland', language: 'German', languageCode: 'de', countryCode: 'CH', direction: 'ltr' },
    ]);

    fixture.detectChanges();

    expect(component.supportedCountries()).toBe('Austria (de), Germany (de), Switzerland (de)');
  });
});

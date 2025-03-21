import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternationalizationBarComponent } from './internationalization-bar.component';
import { By } from '@angular/platform-browser';

describe('InternationalizationBarComponent', () => {
  let component: InternationalizationBarComponent;
  let fixture: ComponentFixture<InternationalizationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalizationBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternationalizationBarComponent);
    component = fixture.componentInstance;
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

  it('should display country and language in the button text', () => {
    const button = fixture.debugElement.query(By.css('lib-button'));
    const buttonText = button.nativeElement.textContent.trim();

    expect(buttonText).toBe('USA | English');
  });
});

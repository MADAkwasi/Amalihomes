import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { InternationalizationBarComponent } from './internationalization-bar.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { Localization } from '../../../logic/data/constants/localization';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';

describe('InternationalizationBarComponent', () => {
  let component: InternationalizationBarComponent;
  let fixture: ComponentFixture<InternationalizationBarComponent>;
  let store: MockStore;
  const mockLocale: Localization[] = [
    { country: 'USA', language: 'English', languageCode: 'en', countryCode: 'US', direction: 'ltr' },
    { country: 'France', language: 'French', languageCode: 'fr', countryCode: 'FR', direction: 'ltr' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalizationBarComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectStoryblokPageState, value: HomePageTestData.locale }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InternationalizationBarComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.componentRef.setInput('locale', mockLocale);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute supportedCountries correctly', () => {
    component['localization'].set([
      { country: 'Ghana', language: 'English', languageCode: 'en', countryCode: 'GH', direction: 'ltr' },
      { country: 'Germany', language: 'German', languageCode: 'de', countryCode: 'DE', direction: 'ltr' },
    ]);
    expect(component['supportedCountries']()).toBe('Ghana (en), Germany (de)');
  });

  it('should dispatch actions when country value changes', fakeAsync(() => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    component['form'].get('country')?.setValue('FR');

    tick();

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: StoryblokPageActions.changeLocale.type,
      }),
    );

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: StoryblokPageActions.loadPage.type,
      }),
    );
  }));

  it('should dispatch actions when language value changes', fakeAsync(() => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    component['localization'].set([
      { country: 'France', language: 'French', languageCode: 'fr', countryCode: 'FR', direction: 'ltr' },
      { country: 'Germany', language: 'German', languageCode: 'de', countryCode: 'DE', direction: 'ltr' },
    ]);

    component.languageControl.setValue('fr');

    tick();

    expect(dispatchSpy).toHaveBeenCalledWith(
      StoryblokPageActions.changeLanguage({
        langCode: 'fr',
        lang: 'French',
      }),
    );

    expect(dispatchSpy).toHaveBeenCalledWith(expect.objectContaining({ type: StoryblokPageActions.loadPage.type }));
  }));

  it('should default to en when an unknown language is selected', fakeAsync(() => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    component['localization'].set([
      { country: 'USA', language: 'English', languageCode: 'en', countryCode: 'US', direction: 'ltr' },
    ]);

    component.languageControl.setValue('xx');

    tick();

    expect(dispatchSpy).toHaveBeenCalledWith(
      StoryblokPageActions.changeLanguage({
        langCode: 'en',
        lang: 'English',
      }),
    );

    expect(dispatchSpy).toHaveBeenCalledWith(expect.objectContaining({ type: StoryblokPageActions.loadPage.type }));
  }));
});

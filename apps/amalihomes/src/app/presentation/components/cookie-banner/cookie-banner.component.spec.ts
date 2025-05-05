import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieBannerComponent } from './cookie-banner.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';

describe('CookieBannerComponent', () => {
  let component: CookieBannerComponent;
  let fixture: ComponentFixture<CookieBannerComponent>;
  (window as any).gtag = jest.fn();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieBannerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectStoryblokPageState,
              value: mockedStore,
            },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand and show cookie settings list', () => {
    component['showBanner'] = true;
    component['settingsExpanded'] = false;
    component['handleSettingsToggle']();
    expect(component['settingsExpanded']).toBe(true);
  });

  it('should hide cookie banner', () => {
    component['showBanner'] = true;
    component['handleBannerClose']();
    expect(component['showBanner']).toBe(false);
  });

  it('should save and close cookie banner', () => {
    component['showBanner'] = true;
    component['settingsExpanded'] = true;
    component['handleSettingsToggle']();
    expect(component['showBanner']).toBe(false);
    expect(component['settingsExpanded']).toBe(false);
  });

  it('should toggle cookie setting checkbox', () => {
    const initialEnabled = component['cookieSettings']().functionality;
    component['handleSettingChange']('functionality');
    expect(component['cookieSettings']().functionality).toBe(!initialEnabled);
  });
});

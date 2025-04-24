import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieBannerComponent } from './cookie-banner.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CookieBannerComponent', () => {
  let component: CookieBannerComponent;
  let fixture: ComponentFixture<CookieBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieBannerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide cookie banner', () => {
    component['showBanner'] = true;
    component['handleBannerClose']();
    expect(component['showBanner']).toBe(false);
  });

  it('should expand and show cookie settings list', () => {
    component['showBanner'] = true;
    component['settingsExpanded'] = false;
    component['handleSettingsToggle']();
    expect(component['settingsExpanded']).toBe(true);
  });

  it('should save and hide cookie settings list', () => {
    component['showBanner'] = true;
    component['settingsExpanded'] = true;
    component['handleSettingsToggle']();
    expect(component['showBanner']).toBe(false);
    expect(component['settingsExpanded']).toBe(false);
  });

  it('should toggle cookie setting checkbox', () => {
    const index = 0;
    const initialEnabled = component['availableSettings'][index].enabled;
    component['handleSettingChange'](index);
    expect(component['availableSettings'][index].enabled).toBe(!initialEnabled);
  });
});

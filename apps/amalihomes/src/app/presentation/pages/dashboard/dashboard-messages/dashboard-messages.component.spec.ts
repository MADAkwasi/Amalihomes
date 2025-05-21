import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMessagesComponent } from './dashboard-messages.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'apps/amalihomes/src/app/logic/services/platform-detector/platform-detector.service';
import { provideMockStore } from '@ngrx/store/testing';
import { selectUserAuthenticationState } from 'apps/amalihomes/src/app/logic/stores/selectors/auth.selector';

describe('DashboardMessagesComponent', () => {
  let component: DashboardMessagesComponent;
  let fixture: ComponentFixture<DashboardMessagesComponent>;
  let platformDetectorService: PlatformDetectorService;
  const routerSpy = { navigate: jest.fn() };
  const platformDetectorServiceMock = { isPlatformBrowser: jest.fn().mockReturnValue(true) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMessagesComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: PlatformDetectorService, useValue: platformDetectorServiceMock },
        provideMockStore({
          selectors: [{ selector: selectUserAuthenticationState, value: {} }],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMessagesComponent);
    component = fixture.componentInstance;
    platformDetectorService = TestBed.inject(PlatformDetectorService);
    TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selectedTab from URL if on browser', () => {
    expect(platformDetectorService.isPlatformBrowser).toHaveBeenCalled();
  });

  it('should parse date correctly', () => {
    const time = 1747652639708; // May 19, 2025 11:03 UTC
    const parsedDate = component['parseDate'](time);
    expect(parsedDate).toBe('May 19, 11:03 AM');
  });
});

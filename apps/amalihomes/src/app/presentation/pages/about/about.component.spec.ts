import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { isPlatformBrowser } from '@angular/common';
import { Localization } from '../../../logic/data/constants/localization';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { HeroComponent } from '../../../shared-ui/components/hero/hero.component';
import { StatisticsComponent } from '../../components/about/statistics/statistics.component';
import { FeaturedComponent } from '../../components/about/featured/featured.component';
import { LocationMapComponent } from '../../components/about/location-map/location-map.component';
import { LeadershipComponent } from '../../components/about/leadership/leadership.component';
import { ShowroomGridComponent } from '../../components/about/showroom-grid/showroom-grid.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let store: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutComponent,
        HeroComponent,
        StatisticsComponent,
        FeaturedComponent,
        LocationMapComponent,
        LeadershipComponent,
        ShowroomGridComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [
                  {
                    _uid: 'hero1',
                    component: 'hero',
                    heading: 'Welcome to Amalihomes',
                  },
                  {
                    _uid: 'about1',
                    component: 'about',
                    content: 'About Amalihomes',
                  },
                ],
              },
              locale: {
                country: 'USA',
                language: 'English',
                languageCode: 'en',
                countryCode: 'US',
                direction: 'ltr',
              },
            },
          },
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(store, 'dispatch');

    // Mock localStorage
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({ languageCode: 'en' } as Localization));

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize with browser platform', () => {
    fixture.detectChanges();
    expect(isPlatformBrowser(component['platformId'])).toBe(true);
  });

  it('should dispatch loadPage action on init', () => {
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(
      StoryblokPageActions.loadPage({
        slug: 'about',
        language: 'en',
        version: 'draft',
      }),
    );
  });

  it('should use language from localStorage if available', () => {
    const testLanguage = 'fr';
    (Storage.prototype.getItem as jest.Mock).mockReturnValueOnce(
      JSON.stringify({ languageCode: testLanguage } as Localization),
    );

    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        language: testLanguage,
      }),
    );
  });

  it('should display hero section when loaded', () => {
    fixture.detectChanges();
    const hero = fixture.nativeElement.querySelector('lib-hero');
    expect(hero).toBeTruthy();
  });

  it('should render all child components', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-statistics')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-featured')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-location-map')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-leadership')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-showroom-grid')).toBeTruthy();
  });

  it('should pass correct location to map component', () => {
    fixture.detectChanges();
    const map = fixture.nativeElement.querySelector('app-location-map');
    expect(map.getAttribute('ng-reflect-location')).toBe('Amalitech, Ghana');
  });

  afterEach(() => {
    store?.resetSelectors();
    jest.clearAllMocks();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { selectHomePageData } from '../../../logic/stores/selectors/home-page';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    class MockIntersectionObserver implements IntersectionObserver {
      // eslint-disable-next-line no-empty-function
      constructor(private readonly callback: IntersectionObserverCallback) {}

      observe = jest.fn((element: Element) => {
        this.callback(
          [
            {
              isIntersecting: true,
              target: element,
              intersectionRatio: 1,
              boundingClientRect: {} as DOMRectReadOnly,
              intersectionRect: {} as DOMRectReadOnly,
              rootBounds: null,
              time: Date.now(),
            },
          ],
          this,
        );
      });

      unobserve = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn(() => []);
      readonly root: Element | null = null;
      readonly rootMargin: string = '';
      readonly thresholds: ReadonlyArray<number> = [];
    }

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectHomePageData, value: HomePageTestData.data }],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    global.IntersectionObserver = MockIntersectionObserver;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

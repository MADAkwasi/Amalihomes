import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { selectHomePageData } from '../../../logic/stores/selectors/home-page';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    class MockIntersectionObserver implements IntersectionObserver {
      constructor(
        private readonly callback: IntersectionObserverCallback, // eslint-disable-next-line no-empty-function
      ) {}

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
      imports: [SliderComponent, RouterModule],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectHomePageData,
              value: HomePageTestData.data,
            },
          ],
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
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('sliderImages', null);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set categoryType to arrivals', () => {
    fixture.componentRef.setInput('categoryType', 'arrivals');
    fixture.detectChanges();
    const link = component.getProductItemLink('123', 'Test');
    expect(link).toBe('/arrivals/123/Test');
  });
});

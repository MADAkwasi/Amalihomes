import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopComponent } from './shop.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ShopPageTestData } from '../../../logic/stores/testing/shop-page';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectStoryblokPageState, value: ShopPageTestData.content },
            { selector: selectProducts, value: dummyData },
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
    }).compileComponents();

    global.IntersectionObserver = MockIntersectionObserver;
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

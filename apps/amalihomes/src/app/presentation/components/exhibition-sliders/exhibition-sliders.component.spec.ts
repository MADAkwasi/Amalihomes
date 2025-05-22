import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExhibitionSlidersComponent } from './exhibition-sliders.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ExhibitionSlidersComponent', () => {
  let component: ExhibitionSlidersComponent;
  let fixture: ComponentFixture<ExhibitionSlidersComponent>;

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
      imports: [ExhibitionSlidersComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'id') return 'some-test-id';
                return null;
              },
            }),
          },
        },
      ],
    }).compileComponents();

    global.IntersectionObserver = MockIntersectionObserver;
    fixture = TestBed.createComponent(ExhibitionSlidersComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('products', []);
    fixture.componentRef.setInput('url', '');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedComponent } from './featured.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;
  let store: MockStore;

  const initialState = {
    storyblokPage: {
      content: {
        body: [
          {
            component: 'merits',
            title: 'Our Merits',
            description: 'Why choose us',
            image_url: 'test-image.jpg',
            items: [
              {
                _uid: '1',
                title: 'Quality',
                description: 'Top-notch service',
                icon: { filename: 'quality-icon.svg' },
              },
              {
                _uid: '2',
                title: 'Trust',
                description: 'Reliable & honest',
                icon: { filename: 'trust-icon.svg' },
              },
            ],
          },
        ],
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the heading title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Our Merits');
    expect(compiled.textContent).toContain('Why choose us');
  });

  it('should render all value prop items', () => {
    const itemEls: DebugElement[] = fixture.debugElement.queryAll(By.css('[data-testid="merit-item"]'));
    expect(itemEls.length).toBe(2);

    const firstItemText = itemEls[0].nativeElement.textContent;
    const secondItemText = itemEls[1].nativeElement.textContent;

    expect(firstItemText).toContain('Quality');
    expect(firstItemText).toContain('Top-notch service');
    expect(secondItemText).toContain('Trust');
    expect(secondItemText).toContain('Reliable & honest');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCategorySectionComponent } from './home-category-section.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockedTestImageData } from '../../../logic/data/testing/mocked-data';

describe('HomeCategorySectionComponent', () => {
  let component: HomeCategorySectionComponent;
  let fixture: ComponentFixture<HomeCategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCategorySectionComponent, RouterModule],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectApplicationImageData,
              value: mockedTestImageData,
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

    fixture = TestBed.createComponent(HomeCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('categoryTitle', 'Test Category');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display category title', () => {
    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Test Category');
  });

  it('should generate correct product item link', () => {
    const link = component.getProductItemLink('123', 'Test');
    expect(link).toBe('/products/123/Test');
  });

  it('should set categoryType to arrivals', () => {
    fixture.componentRef.setInput('categoryType', 'arrivals');
    fixture.detectChanges();
    const link = component.getProductItemLink('123', 'Test');
    expect(link).toBe('/arrivals/123/Test');
  });
});

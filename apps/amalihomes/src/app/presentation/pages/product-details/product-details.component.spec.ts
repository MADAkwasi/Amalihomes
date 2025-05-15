import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { dummyData } from '../../../logic/stores/mocked-data';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectProducts, value: dummyData },
            { selector: selectStoryblokPageState, value: HomePageTestData.content },
          ],
        }),
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

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

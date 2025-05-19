import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSellersComponent } from './top-sellers.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('TopSellersComponent', () => {
  let component: TopSellersComponent;
  let fixture: ComponentFixture<TopSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellersComponent],
      providers: [
        provideMockStore({ selectors: [{ selector: selectProducts, value: dummyData }] }),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ page: '1' }),
            queryParamMap: of(convertToParamMap({ page: '1' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TopSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

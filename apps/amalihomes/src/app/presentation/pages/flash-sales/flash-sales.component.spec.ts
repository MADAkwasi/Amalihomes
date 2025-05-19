import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashSalesComponent } from './flash-sales.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('FlashSalesComponent', () => {
  let component: FlashSalesComponent;
  let fixture: ComponentFixture<FlashSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashSalesComponent],
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

    fixture = TestBed.createComponent(FlashSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

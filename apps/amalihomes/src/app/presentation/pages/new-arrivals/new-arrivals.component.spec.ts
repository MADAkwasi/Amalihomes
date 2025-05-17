import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArrivalsComponent } from './new-arrivals.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('NewArrivalsComponent', () => {
  let component: NewArrivalsComponent;
  let fixture: ComponentFixture<NewArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalsComponent],
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

    fixture = TestBed.createComponent(NewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

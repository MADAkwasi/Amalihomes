import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFlashSaleComponent } from './home-flash-sale.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { selectHomePageData } from '../../../logic/stores/selectors/home-page';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';

describe('HomeFlashSaleComponent', () => {
  let component: HomeFlashSaleComponent;
  let fixture: ComponentFixture<HomeFlashSaleComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFlashSaleComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectHomePageData, value: HomePageTestData.data }],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFlashSaleComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

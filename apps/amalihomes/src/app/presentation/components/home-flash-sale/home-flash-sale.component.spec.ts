import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFlashSaleComponent } from './home-flash-sale.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockedTestImageData } from '../../../logic/data/testing/mocked-data';

describe('HomeFlashSaleComponent', () => {
  let component: HomeFlashSaleComponent;
  let fixture: ComponentFixture<HomeFlashSaleComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFlashSaleComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectApplicationImageData, value: mockedTestImageData }],
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

  it('should compute flashSaleImageUrl correctly', () => {
    expect(component.flashSaleImageUrl()).toBe(mockedTestImageData[2].image);
  });

  it('should compute flashSaleName correctly', () => {
    expect(component.flashSaleName()).toBe(mockedTestImageData[2].name);
  });

  it('should render the image with correct src and alt attributes', () => {
    fixture.detectChanges();
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(component.flashSaleImageUrl());
    expect(imgElement.alt).toBe(component.flashSaleName() || 'Flash sale section image');
  });
});

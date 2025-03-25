import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFlashSaleComponent } from './home-flash-sale.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockImageData = [
  { id: '1', image: 'image1.jpg', name: 'Image 1' },
  { id: '2', image: 'image2.jpg', name: 'Image 2' },
  { id: '3', image: 'image3.jpg', name: 'Image 3' },
];

describe('HomeFlashSaleComponent', () => {
  let component: HomeFlashSaleComponent;
  let fixture: ComponentFixture<HomeFlashSaleComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFlashSaleComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectApplicationImageData, value: mockImageData }],
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
    expect(component.flashSaleImageUrl()).toBe(mockImageData[2].image);
  });

  it('should compute flashSaleName correctly', () => {
    expect(component.flashSaleName()).toBe(mockImageData[2].name);
  });

  it('should render the image with correct src and alt attributes', () => {
    fixture.detectChanges();
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(component.flashSaleImageUrl());
    expect(imgElement.alt).toBe(component.flashSaleName() || 'Flash sale section image');
  });
});

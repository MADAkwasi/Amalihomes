import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHeroSectionComponent } from './home-hero-section.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockedTestImageData } from '../../../logic/data/testing/mocked-data';

describe('HomeHeroSectionComponent', () => {
  let component: HomeHeroSectionComponent;
  let fixture: ComponentFixture<HomeHeroSectionComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeroSectionComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectApplicationImageData, value: mockedTestImageData }],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeroSectionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('getNextIndexOf should return the next index', () => {
    expect(component.getNextIndexOf(0)).toBe(1);
    expect(component.getNextIndexOf(1)).toBe(2);
    expect(component.getNextIndexOf(2)).toBe(0);
  });

  it('getPreviousIndexOf should return the previous index', () => {
    expect(component.getPreviousIndexOf(0)).toBe(2);
    expect(component.getPreviousIndexOf(1)).toBe(0);
    expect(component.getPreviousIndexOf(2)).toBe(1);
  });

  it('handleNextButtonClick should update selectedIndex and imagePostions', () => {
    component.imagePostions = [0, 1, 2];
    component.selectedIndex = 0;
    component.handleNextButtonClick();
    expect(component.selectedIndex).toBe(1);
  });

  it('handlePreviousButtonClick should update selectedIndex and imagePostions', () => {
    component.imagePostions = [0, 1, 2];
    component.selectedIndex = 0;
    component.handlePreviousButtonClick();
    expect(component.selectedIndex).toBe(2);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuePropositionComponent } from './value-proposition.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockedTestImageData } from '../../../logic/data/testing/mocked-data';

describe('ValuePropositionComponent', () => {
  let component: ValuePropositionComponent;
  let fixture: ComponentFixture<ValuePropositionComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuePropositionComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectApplicationImageData,
              value: mockedTestImageData,
            },
          ],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePropositionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select correct image data from store', () => {
    expect(component['sectionImageData']().image).toBe(mockedTestImageData[1].image);
    expect(component['sectionImageData']().name).toBe(mockedTestImageData[1].name);
  });

  it('should compute correct section image URL', () => {
    expect(component['sectionImageUrl']()).toBe(mockedTestImageData[1].image);
  });

  it('should compute correct image title', () => {
    expect(component['imageTitle']()).toBe(mockedTestImageData[1].name);
  });
});

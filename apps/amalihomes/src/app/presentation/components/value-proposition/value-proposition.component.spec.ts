import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuePropositionComponent } from './value-proposition.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockedTestImageData } from '../../../logic/data/testing/mocked-data';
import { selectHomePageData } from '../../../logic/stores/selectors/home-page';

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
              selector: selectHomePageData,
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
});

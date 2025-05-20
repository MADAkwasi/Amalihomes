import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltersComponent } from './filters.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectFilterationKeywords } from '../../../logic/stores/selectors/interactions.selector';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectFilterationKeywords, value: { filteredBy: '', value: '' } }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

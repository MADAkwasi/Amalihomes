import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFieldComponent } from './search-field.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectIsMenuOpen, selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFieldComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsMenuOpen, value: false },
            { selector: selectIsSearching, value: false },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

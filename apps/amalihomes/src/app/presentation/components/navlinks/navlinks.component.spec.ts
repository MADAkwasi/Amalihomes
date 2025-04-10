import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavlinksComponent } from './navlinks.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectIsMenuOpen, selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NavlinksComponent', () => {
  let component: NavlinksComponent;
  let fixture: ComponentFixture<NavlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavlinksComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsMenuOpen, value: false },
            { selector: selectIsSearching, value: false },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavlinksComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('navLinks', null);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

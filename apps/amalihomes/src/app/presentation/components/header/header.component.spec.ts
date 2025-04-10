import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { selectIsMenuOpen, selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { interactionsActions } from '../../../logic/stores/actions/interactions.action';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';

let store: MockStore;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockSelectIsMenuOpen: MemoizedSelector<any, boolean>;
  let mockSelectIsSearching: MemoizedSelector<any, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsMenuOpen, value: false },
            { selector: selectIsSearching, value: false },
            { selector: selectStoryblokPageState, value: HomePageTestData.content },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {
              paramMap: new Map(),
              queryParamMap: new Map(),
            },
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(Store) as MockStore;
    mockSelectIsMenuOpen = store.overrideSelector(selectIsMenuOpen, false);
    mockSelectIsSearching = store.overrideSelector(selectIsSearching, false);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch openMenu when menu is closed', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    mockSelectIsMenuOpen.setResult(false);
    store.refreshState();
    component.onMenuToggle();
    expect(dispatchSpy).toHaveBeenCalledWith(interactionsActions.openMenu());

    mockSelectIsMenuOpen.setResult(true);
    store.refreshState();
    component.onMenuToggle();
    expect(dispatchSpy).toHaveBeenCalledWith(interactionsActions.closeMenu());
  });

  it('should open the search field when closed and close it when open', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    mockSelectIsSearching.setResult(false);
    store.refreshState();
    component.onOpenSearchField();
    expect(dispatchSpy).toHaveBeenCalledWith(interactionsActions.openSearchField());

    mockSelectIsSearching.setResult(true);
    store.refreshState();
    component.onOpenSearchField();
    expect(dispatchSpy).toHaveBeenCalledWith(interactionsActions.closeSearchField());
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectIsMenuOpen, selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { interactionsActions } from '../../../logic/stores/actions/interactions.action';
import { MemoizedSelector, Store } from '@ngrx/store';

let store: MockStore;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockSelectIsMenuOpen: MemoizedSelector<any, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
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

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show user and cart when authenticated', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();

    const userImage = fixture.debugElement.query(By.css('img[alt="user"]'));
    const shoppingCart = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="shopping-cart-button"]'));
    const loginButton = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="login-button"]'));

    expect(userImage).toBeTruthy();
    expect(shoppingCart).toBeTruthy();
    expect(loginButton).toBeFalsy();
  });

  it('should show a login button when not authenticated', () => {
    component.isAuthenticated = false;
    fixture.detectChanges();

    const userImage = fixture.debugElement.query(By.css('img[alt="user"]'));
    const shoppingCart = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="shopping-cart-button"]'));
    const loginButton = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="login-button"]'));

    expect(userImage).toBeFalsy();
    expect(shoppingCart).toBeFalsy();
    expect(loginButton).toBeTruthy();
  });

  it('should dispatch openMenu when menu is closed', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    mockSelectIsMenuOpen.setResult(false);
    store.refreshState();
    component.onMenuToggle();
    expect(dispatchSpy).toHaveBeenCalledWith(interactionsActions.openMenu());
  });

  it('should dispatch closeMenu when menu is open', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    mockSelectIsMenuOpen.setResult(true);
    store.refreshState();
    component.onMenuToggle();
    expect(dispatchSpy).toHaveBeenCalledWith(interactionsActions.closeMenu());
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
        provideMockStore({
          initialState: {
            interactions: {
              isSearching: false,
              isMenuOpen: false,
            },
          },
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

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show login button when not authenticated', () => {
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const loginButton = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="login-button"]'));
    expect(loginButton).toBeTruthy();
  });

  it('should not show login button when authenticated', () => {
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const loginButton = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="login-button"]'));
    expect(loginButton).toBeFalsy();
  });
});

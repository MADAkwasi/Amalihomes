import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { signal } from '@angular/core';

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

    fixture.componentRef.setInput('navLinks', null);
    fixture.componentRef.setInput('placeholder', null);
    fixture.componentRef.setInput('authBtn', null);
    fixture.componentRef.setInput('isAuthenticated', null);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show login button when not authenticated', () => {
    fixture.componentRef.setInput('isAuthenticated', signal(false));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const loginButton = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="login-button"]'));
      expect(loginButton).toBeTruthy();
    });
  });

  it('should not show login button when authenticated', () => {
    fixture.componentRef.setInput('isAuthenticated', signal(true));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const loginButton = fixture.debugElement.query(By.css('lib-button[buttonIdentifier="login-button"]'));
      expect(loginButton).toBeFalsy();
    });
  });
});

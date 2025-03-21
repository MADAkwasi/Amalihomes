import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

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
    const shoppingCart = fixture.debugElement.query(By.css('lib-button[rightIcon="ShoppingCart"]'));
    const loginButton = fixture.debugElement.query(By.css('lib-button[buttonText="Login"]'));

    expect(userImage).toBeTruthy();
    expect(shoppingCart).toBeTruthy();
    expect(loginButton).toBeFalsy();
  });

  it('should show a login button when not authenticated', () => {
    component.isAuthenticated = false;
    fixture.detectChanges();

    const userImage = fixture.debugElement.query(By.css('img[alt="user"]'));
    const shoppingCart = fixture.debugElement.query(By.css('lib-button[rightIcon="ShoppingCart"]'));
    const loginButton = fixture.debugElement.query(By.css('lib-button[buttonText="Login"]'));

    expect(userImage).toBeFalsy();
    expect(shoppingCart).toBeFalsy();
    expect(loginButton).toBeTruthy();
  });
});

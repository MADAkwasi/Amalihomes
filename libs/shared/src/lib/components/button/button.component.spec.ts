import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent - Text Only', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    // Setup for a text-only button
    component.hasText = true;
    component.buttonText = 'Test Button';
    component.leftIcon = undefined;
    component.rightIcon = undefined;
    component.iconOnly = false;
    fixture.detectChanges();
  });

  it('should display button text when text is true', () => {
    const spanEl = fixture.debugElement.query(By.css('span'));
    expect(spanEl).toBeTruthy();
    expect(spanEl.nativeElement.textContent).toContain('Test Button');
  });
});

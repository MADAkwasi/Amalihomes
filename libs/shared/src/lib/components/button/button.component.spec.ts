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
  });

  it('should display button text when text is true', () => {
    component.buttonText = 'Test Button';
    fixture.detectChanges();
    const spanEl = fixture.debugElement.query(By.css('span'));
    expect(spanEl).toBeTruthy();
    expect(spanEl.nativeElement.textContent).toContain('Test Button');
  });
});

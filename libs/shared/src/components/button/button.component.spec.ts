import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    // Set required input first
    fixture.componentRef.setInput('buttonIdentifier', 'test-id');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the button with default properties', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));

    expect(buttonElement.nativeElement.textContent.trim()).toBe('');
    expect(buttonElement.nativeElement.classList).toContain('primary');
    expect(buttonElement.nativeElement.disabled).toBe(false);
    expect(buttonElement.nativeElement.type).toBe('button');
    expect(buttonElement.nativeElement.getAttribute('data-btn-id')).toBe('test-id');
  });

  it('should update button type and state', () => {
    fixture.componentRef.setInput('type', 'secondary');
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('secondary');
    expect(buttonElement.nativeElement.disabled).toBe(true);
  });

  it('should apply custom button styles', () => {
    fixture.componentRef.setInput('buttonStyles', 'custom-style');
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('custom-style');
  });

  it('should update button title', () => {
    const testTitle = 'Test Button Title';
    fixture.componentRef.setInput('title', testTitle);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.title).toBe(testTitle);
  });

  it('should update button type attribute', () => {
    fixture.componentRef.setInput('buttonType', 'submit');
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.type).toBe('submit');
  });

  it('should emit click events when enabled', () => {
    const emitSpy = jest.spyOn(component.buttonClick, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.nativeElement.click();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should not emit click events when disabled', () => {
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();

    const emitSpy = jest.spyOn(component.buttonClick, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.nativeElement.click();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should update button identifier', () => {
    const newId = 'new-test-id';
    fixture.componentRef.setInput('buttonIdentifier', newId);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.getAttribute('data-btn-id')).toBe(newId);
  });
});

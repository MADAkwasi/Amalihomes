import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './text-input.component';
import { By } from '@angular/platform-browser';

describe('TextInputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply primary variant styles', () => {
    const container = fixture.debugElement.query(By.css('.input-container'));
    expect(container.nativeElement.classList).toContain('primary');
  });

  it('should apply secondary variant styles', () => {
    component.variant = 'secondary';
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.input-container'));
    expect(container.nativeElement.classList).toContain('secondary');
  });

  it('should not display left icon when not provided', () => {
    const icon = fixture.debugElement.query(By.css('.left-icon'));
    expect(icon).toBeFalsy();
  });

  it('should display left icon when provided', () => {
    component.leftIcon = 'search';
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('.left-icon'));
    expect(icon).toBeTruthy();
  });

  it('should update value and emit event on input', () => {
    const mockValue = 'test input';
    let emittedValue: string | undefined;

    component.valueChange.subscribe((value) => (emittedValue = value));

    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = mockValue;
    input.nativeElement.dispatchEvent(new Event('input'));

    expect(component.value).toBe(mockValue);
    expect(emittedValue).toBe(mockValue);
  });

  it('should display correct placeholder', () => {
    const testPlaceholder = 'Enter your name';
    component.placeholder = testPlaceholder;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.placeholder).toBe(testPlaceholder);
  });

  it('should apply w-full class for secondary variant', () => {
    component.variant = 'secondary';
    fixture.detectChanges();

    const hostElement = fixture.debugElement.nativeElement;
    expect(hostElement.classList).toContain('w-full');
  });

  it('should adjust padding when icons are present', () => {
    component.leftIcon = 'search';
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.classList).toContain('with-left-icon');

    component.leftIcon = undefined;
    component.rightIcon = 'eye';
    fixture.detectChanges();
    input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.classList).toContain('with-right-icon');

    component.leftIcon = 'search';
    component.rightIcon = 'eye';
    fixture.detectChanges();
    input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.classList).toContain('with-left-icon');
    expect(input.nativeElement.classList).toContain('with-right-icon');
  });
});

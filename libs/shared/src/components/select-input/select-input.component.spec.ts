import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectInputComponent } from './select-input.component';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SelectInputComponent', () => {
  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInputComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('options', [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]);
    fixture.componentRef.setInput('control', new FormControl(''));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.placeholder()).toBe('Select an option');
    expect(component.disabled()).toBe(false);
    expect(component.isOpen).toBe(false);
    expect(component.label()).toBe('');
  });

  it('should display the label when provided', () => {
    fixture.componentRef.setInput('label', 'Test Label');
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(By.css('.select-label'));
    expect(labelElement).toBeTruthy();
    expect(labelElement.nativeElement.textContent).toContain('Test Label');
  });

  it('should show placeholder when no value is selected', () => {
    expect(component.computedLabel()).toBe('Select an option');
    const placeholderSpan = fixture.debugElement.query(By.css('.placeholder'));
    expect(placeholderSpan).toBeTruthy();
  });

  it('should toggle dropdown on click', () => {
    const trigger = fixture.debugElement.query(By.css('.select-trigger'));

    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpen).toBe(true);
    expect(fixture.debugElement.query(By.css('.dropdown-options'))).toBeTruthy();

    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpen).toBe(false);
    expect(fixture.debugElement.query(By.css('.dropdown-options'))).toBeNull();
  });

  it('should not toggle dropdown when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const trigger = fixture.debugElement.query(By.css('.select-trigger'));
    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpen).toBe(false);
  });

  it('should select an option and update control value', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const options = fixture.debugElement.queryAll(By.css('.option'));
    options[0].nativeElement.click();
    fixture.detectChanges();

    expect(component.control().value).toBe('1');
    expect(component.isOpen).toBe(false);
  });

  it('should close dropdown when clicking outside', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const backdrop = fixture.debugElement.query(By.css('.dropdown-backdrop'));
    backdrop.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpen).toBe(false);
  });

  it('should handle keyboard navigation', () => {
    const trigger = fixture.debugElement.query(By.css('.select-trigger'));

    // Test Enter key
    trigger.triggerEventHandler('keydown.enter', new KeyboardEvent('keydown'));
    fixture.detectChanges();
    expect(component.isOpen).toBe(true);

    // Test Space key
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    jest.spyOn(spaceEvent, 'preventDefault');
    trigger.triggerEventHandler('keydown.space', spaceEvent);
    fixture.detectChanges();
    expect(component.isOpen).toBe(false);
    expect(spaceEvent.preventDefault).toHaveBeenCalled();
  });

  it('should display selected option label', () => {
    fixture.componentRef.setInput('control', new FormControl('2'));
    fixture.detectChanges();

    expect(component.computedLabel()).toBe('Option 2');
    const selectedValue = fixture.debugElement.query(By.css('.selected-value'));
    expect(selectedValue.nativeElement.textContent).toContain('Option 2');
    expect(selectedValue.nativeElement.classList.contains('placeholder')).toBe(false);
  });

  it('should mark selected option with selected class', () => {
    fixture.componentRef.setInput('control', new FormControl('1'));
    component.isOpen = true;
    fixture.detectChanges();

    const options = fixture.debugElement.queryAll(By.css('.option'));
    expect(options[0].nativeElement.classList.contains('selected')).toBe(true);
    expect(options[1].nativeElement.classList.contains('selected')).toBe(false);
  });
});

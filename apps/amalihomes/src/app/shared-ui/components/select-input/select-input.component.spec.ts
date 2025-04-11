import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectInputComponent } from './select-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { FormControl } from '@angular/forms';

describe('SelectInputComponent', () => {
  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;
  let control: FormControl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideAngularModule, SelectInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInputComponent);
    component = fixture.componentInstance;
    control = new FormControl('');
    fixture.componentRef.setInput('control', control);
    fixture.componentRef.setInput('options', [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]);
    fixture.componentRef.setInput('placeholder', 'Select...');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label when provided', () => {
    fixture.componentRef.setInput('label', 'Test Label');
    fixture.detectChanges();
    const labelElement = fixture.nativeElement.querySelector('.select-label');
    expect(labelElement.textContent).toContain('Test Label');
  });

  it('should update selected value when control changes', () => {
    control.setValue('2');
    fixture.detectChanges();
    const selectedValue = fixture.nativeElement.querySelector('.selected-value');
    expect(selectedValue.textContent).toContain('Option 2');
  });

  it('should display placeholder when no option is selected', () => {
    control.setValue('');
    fixture.detectChanges();
    const placeholderSpan = fixture.nativeElement.querySelector('.selected-value.placeholder');
    expect(placeholderSpan.textContent).toBe(' Select... ');
  });

  it('should display selected option label when an option is selected', () => {
    control.setValue('1');
    fixture.detectChanges();
    const selectedValue = fixture.nativeElement.querySelector('.selected-value:not(.placeholder)');
    expect(selectedValue.textContent).toContain('Option 1');
  });

  it('should open dropdown on Enter key', () => {
    const trigger = fixture.nativeElement.querySelector('.select-trigger');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    trigger.dispatchEvent(event);
    fixture.detectChanges();
    expect(component['isOpen']()).toBe(true);
  });

  it('should open dropdown on Space key', () => {
    const trigger = fixture.nativeElement.querySelector('.select-trigger');
    const event = new KeyboardEvent('keydown', { key: ' ' });
    trigger.dispatchEvent(event);
    fixture.detectChanges();
    expect(component['isOpen']()).toBe(true);
  });

  it('should not open dropdown when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const trigger = fixture.nativeElement.querySelector('.select-trigger');
    trigger.click();
    fixture.detectChanges();
    expect(component['isOpen']()).toBe(false);
  });

  it('should select option on click', () => {
    component['isOpen'].set(true);
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll('.option');
    options[0].click();
    expect(control.value).toBe('1');
    expect(component['isOpen']()).toBe(false);
  });

  it('should select option on Enter key', () => {
    component['isOpen'].set(true);
    fixture.detectChanges();
    const option = fixture.nativeElement.querySelector('.option');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    option.dispatchEvent(event);
    expect(control.value).toBe('1');
  });

  it('should have proper accessibility attributes', () => {
    const trigger = fixture.nativeElement.querySelector('.select-trigger');
    expect(trigger.getAttribute('tabindex')).toBe('0');

    component['isOpen'].set(true);
    fixture.detectChanges();
    const option = fixture.nativeElement.querySelector('.option');
    expect(option.getAttribute('tabindex')).toBe('0');
  });

  it('should show placeholder when control value is invalid', () => {
    control.setValue('invalid');
    fixture.detectChanges();
    const placeholderSpan = fixture.nativeElement.querySelector('.placeholder');
    expect(placeholderSpan.textContent).toBe(' Select... ');
  });

  it('should update options when input changes', () => {
    fixture.componentRef.setInput('options', [...component.options(), { value: '3', label: 'Option 3' }]);
    fixture.detectChanges();
    component['isOpen'].set(true);
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll('.option');
    expect(options.length).toBe(3);
  });
});

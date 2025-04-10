import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './text-input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for properties', () => {
    expect(component.placeholder()).toBe('');
    expect(component.iconSize()).toBe(20);
    expect(component.strokeWidth()).toBe(2);
    expect(component.leftIcon()).toBe(false);
    expect(component.rightIcon()).toBe(false);
    expect(component.containerStyles()).toBe('');
    expect(component.inputStyles()).toBe('');
    expect(component.disabled()).toBe(false);
  });

  it('should set disabled state correctly', () => {
    fixture.componentRef.setInput('disabled', true);
    expect(component.disabled()).toBe(true);

    fixture.componentRef.setInput('disabled', false);
    expect(component.disabled()).toBe(false);
  });

  it('should accept input values', () => {
    fixture.componentRef.setInput('placeholder', 'Test placeholder');
    fixture.componentRef.setInput('iconSize', 24);
    fixture.componentRef.setInput('strokeWidth', 3);
    fixture.componentRef.setInput('leftIcon', true);
    fixture.componentRef.setInput('rightIcon', true);
    fixture.componentRef.setInput('containerStyles', 'custom-style');
    fixture.componentRef.setInput('inputStyles', 'input-custom-style');
    fixture.componentRef.setInput('control', new FormControl('test value'));

    fixture.detectChanges();

    expect(component.placeholder()).toBe('Test placeholder');
    expect(component.iconSize()).toBe(24);
    expect(component.strokeWidth()).toBe(3);
    expect(component.leftIcon()).toBe(true);
    expect(component.rightIcon()).toBe(true);
    expect(component.containerStyles()).toBe('custom-style');
    expect(component.inputStyles()).toBe('input-custom-style');
    expect(component.control().value).toBe('test value');
  });
});

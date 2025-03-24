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
    expect(component.placeholder).toBe('');
    expect(component.iconSize).toBe(20);
    expect(component.strokeWidth).toBe(2);
    expect(component.leftIcon).toBe(false);
    expect(component.rightIcon).toBe(false);
    expect(component.containerStyles).toBe('');
    expect(component.inputStyles).toBe('');
    expect(component.disabled).toBe(false);
  });

  it('should set disabled state correctly', () => {
    component.setDisabledState(true);
    expect(component.disabled).toBe(true);

    component.setDisabledState(false);
    expect(component.disabled).toBe(false);
  });
});

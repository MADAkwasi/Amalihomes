import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneInputComponent } from './phone-input.component';
import { FormControl } from '@angular/forms';

describe('PhoneInputComponent', () => {
  let component: PhoneInputComponent;
  let fixture: ComponentFixture<PhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneInputComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('control', new FormControl(''));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default country code', () => {
    expect(component.codes[0].code).toContain('+');
  });

  it('should toggle dropdown visibility', () => {
    expect(component.dropdownOpen()).toBe(false);
    component.toggleDropdown();
    expect(component.dropdownOpen()).toBe(true);
    component.toggleDropdown();
    expect(component.dropdownOpen()).toBe(false);
  });
});

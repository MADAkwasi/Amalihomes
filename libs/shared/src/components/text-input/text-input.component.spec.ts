import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './text-input.component';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, InputComponent],
      providers: [NgControl],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set disabled state', () => {
    component.setDisabledState(true);
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.disabled).toBe(true);
  });
});

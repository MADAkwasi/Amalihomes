import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuePropItemComponent } from './value-prop-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ValuePropItemComponent', () => {
  let component: ValuePropItemComponent;
  let fixture: ComponentFixture<ValuePropItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuePropItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePropItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('meritDescription', 'Test Description');
    fixture.componentRef.setInput('meritTitle', 'Test Title');
    fixture.componentRef.setInput('icon', 'https://example.com/icon.svg');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the merit description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('p');
    expect(descriptionElement.textContent).toContain('Test Description');
  });

  it('should display the merit title', () => {
    const titleElement = fixture.nativeElement.querySelector('h3');
    expect(titleElement.textContent).toContain('Test Title');
  });
});

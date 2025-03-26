import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuePropIconComponent } from './value-prop-icon.component';
import { By } from '@angular/platform-browser';
import { ValuePropIconName } from './constants';

describe('ValuePropIconComponent', () => {
  let component: ValuePropIconComponent;
  let fixture: ComponentFixture<ValuePropIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuePropIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePropIconComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('iconName', ValuePropIconName.Award);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct icon based on input', () => {
    fixture.componentRef.setInput('iconName', ValuePropIconName.Couch);
    fixture.detectChanges();

    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
    expect(svgElement.attributes['aria-label']).toBe('couch icon');
  });
});

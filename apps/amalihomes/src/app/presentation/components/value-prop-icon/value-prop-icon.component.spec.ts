import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuePropIconComponent } from './value-prop-icon.component';
import { By } from '@angular/platform-browser';

describe('ValuePropIconComponent', () => {
  let fixture: ComponentFixture<ValuePropIconComponent>;
  let component: ValuePropIconComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuePropIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePropIconComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render img with provided icon src', () => {
    const testIcon = 'https://example.com/icon.svg';
    fixture.componentRef.setInput('icon', testIcon);
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.src).toBe(testIcon);
  });
});

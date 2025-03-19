import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTextComponent } from './dynamic-text.component';
import { By } from '@angular/platform-browser';

describe('DynamicTextComponent', () => {
  let component: DynamicTextComponent;
  let fixture: ComponentFixture<DynamicTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct tag based on tagName input', () => {
    component.tagName = 'h1';
    component.text = 'Heading 1';
    fixture.detectChanges();
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element).toBeTruthy();
    expect(h1Element.nativeElement.textContent).toBe('Heading 1');

    component.tagName = 'p';
    component.text = 'Paragraph';
    fixture.detectChanges();
    const pElement = fixture.debugElement.query(By.css('p'));
    expect(pElement).toBeTruthy();
    expect(pElement.nativeElement.textContent).toBe('Paragraph');
  });

  it('should apply the correct class name', () => {
    component.tagName = 'p';
    component.text = 'Test Text';
    component.className = 'large-description';
    fixture.detectChanges();
    const pElement = fixture.debugElement.query(By.css('p'));
    expect(pElement.nativeElement.classList.contains('large-description')).toBe(true);
  });

  it('should render default tag (p) when no tagName is provided', () => {
    component.text = 'Default Text';
    fixture.detectChanges();
    const pElement = fixture.debugElement.query(By.css('p'));
    expect(pElement).toBeTruthy();
    expect(pElement.nativeElement.textContent).toBe('Default Text');
  });

  it('should render default text when no text is provided', () => {
    component.tagName = 'h1';
    fixture.detectChanges();
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element.nativeElement.textContent).toBe('');
  });

  it('should apply default styles when no className is provided', () => {
    component.tagName = 'p';
    component.text = 'Test Text';
    fixture.detectChanges();
    const pElement = fixture.debugElement.query(By.css('p'));
    expect(pElement.nativeElement.classList.contains('default')).toBe(false); // No default class
  });
});

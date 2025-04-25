import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabButtonComponent } from './tab-button.component';
import { By } from '@angular/platform-browser';

describe('TabButtonComponent', () => {
  let component: TabButtonComponent;
  let fixture: ComponentFixture<TabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Test Tab');
    fixture.componentRef.setInput('isActive', false);
    fixture.componentRef.setInput('disabled', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent.trim()).toBe('Test Tab');
  });

  it('should emit selected event when clicked and not disabled or active', () => {
    jest.spyOn(component.selected, 'emit');
    fixture.componentRef.setInput('isActive', false);
    fixture.componentRef.setInput('disabled', false);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);

    expect(component.selected.emit).toHaveBeenCalled();
  });

  it('should not emit selected event when clicked and disabled', () => {
    jest.spyOn(component.selected, 'emit');
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);

    expect(component.selected.emit).not.toHaveBeenCalled();
  });

  it('should not emit selected event when clicked and already active', () => {
    jest.spyOn(component.selected, 'emit');
    fixture.componentRef.setInput('isActive', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);

    expect(component.selected.emit).not.toHaveBeenCalled();
  });
});

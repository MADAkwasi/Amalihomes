import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with default values', () => {
    expect(component).toBeTruthy();
    expect(component.type()).toBe('info');
    expect(component['visible']()).toBe(true);
    expect(component.duration()).toBe(5000);
    expect(component.autoClose()).toBe(true);
  });

  it('should display the correct title and message', () => {
    fixture.componentRef.setInput('message', 'Test Message');
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.toast-title'));
    const messageElement = fixture.debugElement.query(By.css('.toast-message'));

    expect(titleElement.nativeElement.textContent).toBe('Test Title');
    expect(messageElement.nativeElement.textContent).toBe('Test Message');
  });

  it('should apply the correct CSS class based on type', () => {
    const types = ['error', 'success', 'info', 'warning'] as const;

    types.forEach((type) => {
      fixture.componentRef.setInput('type', type);
      fixture.detectChanges();

      const container = fixture.debugElement.query(By.css('.toast-container'));
      expect(container.classes[`toast-${type}`]).toBeTruthy();
    });
  });

  it('should display the correct icon based on type', () => {
    const iconMapping = {
      error: '.icon-error',
      success: '.icon-success',
      info: '.icon-info',
      warning: '.icon-warning',
    };

    for (const [type, selector] of Object.entries(iconMapping)) {
      fixture.componentRef.setInput('type', type);
      fixture.detectChanges();

      const icon = fixture.debugElement.query(By.css(selector));
      expect(icon).toBeTruthy();
    }
  });

  it('should close when the close button is clicked', () => {
    jest.spyOn(component.closed, 'emit');
    const closeButton = fixture.debugElement.query(By.css('.toast-close'));
    closeButton.triggerEventHandler('click', null);

    expect(component['visible']()).toBe(false);
    expect(component.closed.emit).toHaveBeenCalled();
  });

  it('should not auto-close if autoClose is false', fakeAsync(() => {
    fixture.componentRef.setInput('autoClose', false);
    fixture.componentRef.setInput('duration', 1000);
    fixture.detectChanges();

    jest.spyOn(component.closed, 'emit');
    expect(component['visible']()).toBe(true);

    tick(2000);

    expect(component['visible']()).toBe(true);
    expect(component.closed.emit).not.toHaveBeenCalled();
  }));

  it('should not auto-close if duration is 0', fakeAsync(() => {
    fixture.componentRef.setInput('autoClose', true);
    fixture.componentRef.setInput('duration', 0);
    fixture.detectChanges();

    jest.spyOn(component.closed, 'emit');
    tick(10000);

    expect(component['visible']()).toBe(true);
    expect(component.closed.emit).not.toHaveBeenCalled();
  }));

  it('should set correct ARIA role based on type', () => {
    const roleMapping = {
      error: 'alert',
      warning: 'alert',
      info: 'status',
      success: 'status',
    };

    for (const [type, expectedRole] of Object.entries(roleMapping)) {
      fixture.componentRef.setInput('type', type);
      fixture.detectChanges();

      const container = fixture.debugElement.query(By.css('.toast-container'));
      expect(container.attributes['role']).toBe(expectedRole);
    }
  });
});

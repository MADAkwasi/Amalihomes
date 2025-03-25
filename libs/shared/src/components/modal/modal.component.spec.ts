import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.position).toBe('top');
    expect(component.modalClass).toBe('');
    expect(component.hasModalBackdrop).toBeFalsy();
    expect(component.isOpen).toBeFalsy();
  });

  it('should toggle modal open/close state', () => {
    // Initial state
    expect(component.isOpen).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.modal-content'))).toBeNull();

    // Open modal
    component.toggleModal();
    fixture.detectChanges();
    expect(component.isOpen).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.modal-content'))).toBeTruthy();

    // Close modal
    component.toggleModal();
    fixture.detectChanges();
    expect(component.isOpen).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.modal-content'))).toBeNull();
  });

  it('should close modal via closeModal()', () => {
    component.isOpen = true;
    fixture.detectChanges();

    component.closeModal();
    fixture.detectChanges();

    expect(component.isOpen).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.modal-content'))).toBeNull();
  });

  it('should respond to input properties', () => {
    // Test position input
    component.position = 'right';
    component.modalClass = 'custom-class';
    component.hasModalBackdrop = true;
    fixture.detectChanges();

    expect(component.position).toBe('right');
    expect(component.modalClass).toBe('custom-class');
    expect(component.hasModalBackdrop).toBeTruthy();
  });

  it('should show/hide backdrop based on hasModalBackdrop', () => {
    component.isOpen = true;

    // Test with backdrop
    component.hasModalBackdrop = true;
    fixture.detectChanges();
    const backdropWithBackground = fixture.debugElement.query(By.css('.modal-backdrop'));
    expect(backdropWithBackground.nativeElement.style.backgroundColor).not.toBe('transparent');

    // Test without backdrop
    component.hasModalBackdrop = false;
    fixture.detectChanges();
    const transparentBackdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
    expect(transparentBackdrop.nativeElement.style.backgroundColor).toBe('');
  });

  it('should close modal when clicking backdrop if hasModalBackdrop is true', () => {
    component.isOpen = true;
    component.hasModalBackdrop = true;
    fixture.detectChanges();

    const backdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
    backdrop.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isOpen).toBeFalsy();
  });

  it('should close modal on escape key', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const backdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
    backdrop.triggerEventHandler('keydown.escape', new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(component.isOpen).toBeFalsy();
  });

  it('should project content correctly', () => {
    const testBed = TestBed.createComponent(ModalComponent);
    testBed.componentInstance.isOpen = true;
    testBed.detectChanges();

    const modalButtonContent = 'Open Modal';
    const modalContentContent = 'Modal Content';

    testBed.nativeElement.innerHTML = `
      <lib-modal>
        <button modalButton>${modalButtonContent}</button>
        <div modalContent>${modalContentContent}</div>
      </lib-modal>
    `;
    testBed.detectChanges();

    const buttonContent = testBed.nativeElement.querySelector('[modalButton]').textContent;
    const modalContent = testBed.nativeElement.querySelector('[modalContent]').textContent;

    expect(buttonContent).toContain(modalButtonContent);
    expect(modalContent).toContain(modalContentContent);
  });
});

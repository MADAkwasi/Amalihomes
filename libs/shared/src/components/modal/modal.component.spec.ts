import { Component } from '@angular/core';
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
    expect(component.position()).toBe('top');
    expect(component.modalClass()).toBe('');
    expect(component.hasModalBackdrop()).toBeFalsy();
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
    // Create a test host component to properly set input signals
    @Component({
      standalone: true,
      template: ` <lib-modal [position]="testPosition" [modalClass]="testClass" [hasModalBackdrop]="testBackdrop" /> `,
      imports: [ModalComponent],
    })
    class TestHostComponent {
      testPosition = 'right';
      testClass = 'custom-class';
      testBackdrop = true;
    }

    const testFixture = TestBed.createComponent(TestHostComponent);
    const modalComponent = testFixture.debugElement.query(By.directive(ModalComponent)).componentInstance;
    testFixture.detectChanges();

    expect(modalComponent.position()).toBe('right');
    expect(modalComponent.modalClass()).toBe('custom-class');
    expect(modalComponent.hasModalBackdrop()).toBeTruthy();
  });

  it('should show/hide backdrop based on hasModalBackdrop', () => {
    // Create a test host component
    @Component({
      standalone: true,
      template: ` <lib-modal [hasModalBackdrop]="testBackdrop" /> `,
      imports: [ModalComponent],
    })
    class TestHostComponent {
      testBackdrop = true;
    }

    const testFixture = TestBed.createComponent(TestHostComponent);
    const modalComponent = testFixture.debugElement.query(By.directive(ModalComponent)).componentInstance;

    // Open the modal
    modalComponent.isOpen = true;

    // Test with backdrop
    testFixture.componentInstance.testBackdrop = true;
    testFixture.detectChanges();
    const backdropWithBackground = testFixture.debugElement.query(By.css('.modal-backdrop'));
    expect(backdropWithBackground.nativeElement.style.backgroundColor).not.toBe('transparent');

    // Test without backdrop
    testFixture.componentInstance.testBackdrop = false;
    testFixture.detectChanges();
    const transparentBackdrop = testFixture.debugElement.query(By.css('.modal-backdrop'));
    expect(transparentBackdrop.nativeElement.style.backgroundColor).toBe('');
  });
});

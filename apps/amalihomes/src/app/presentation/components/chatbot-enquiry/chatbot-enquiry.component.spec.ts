import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotEnquiryComponent } from './chatbot-enquiry.component';
import { DestroyRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBotEnquiryType, EnquiryFormFieldsType } from '../../../types/chatbot';
import { By } from '@angular/platform-browser';

describe('ChatbotEnquiryComponent', () => {
  let component: ChatbotEnquiryComponent;
  let fixture: ComponentFixture<ChatbotEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotEnquiryComponent, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotEnquiryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('formType', ChatBotEnquiryType.orders);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with correct controls', () => {
    expect(component['getControl'](EnquiryFormFieldsType.Orders)).toBeDefined();
    expect(component['getControl'](EnquiryFormFieldsType.Email)).toBeDefined();
    expect(component['getControl'](EnquiryFormFieldsType.Subject)).toBeDefined();
    expect(component['getControl'](EnquiryFormFieldsType.Message)).toBeDefined();
  });

  it('should set isSubmited to true on submit if form is valid', () => {
    component['isSubmited'] = false;
    component['getControl'](EnquiryFormFieldsType.Orders).setValue('#ORD1234');
    component['getControl'](EnquiryFormFieldsType.Email).setValue('test@email.com');
    component['getControl'](EnquiryFormFieldsType.Subject).setValue('Test Subject');
    component['getControl'](EnquiryFormFieldsType.Message).setValue('Test Message');
    component['onSubmit']();
    expect(component['isSubmited']).toBe(true);
  });

  it('should not set isSubmited to true on submit if form is invalid', () => {
    component['isSubmited'] = false;
    component['getControl'](EnquiryFormFieldsType.Message).setErrors({ required: true });
    component['onSubmit']();
    expect(component['isSubmited']).toBe(false);
  });

  it('should set showSelector to true on selectorFieldFocus', () => {
    fixture.componentRef.setInput('formType', ChatBotEnquiryType.orders);
    fixture.detectChanges();
    component['showSelector'] = false;
    component['selectorFieldFocus'](EnquiryFormFieldsType.Orders);
    expect(component['showSelector']).toBe(true);
  });
});

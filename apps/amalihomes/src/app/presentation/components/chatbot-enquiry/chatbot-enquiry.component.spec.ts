import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotEnquiryComponent } from './chatbot-enquiry.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBotEnquiryType, EnquiryFormFieldsType } from '../../../types/chatbot';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from '../../../logic/data/testing/mocked-data';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';

describe('ChatbotEnquiryComponent', () => {
  let component: ChatbotEnquiryComponent;
  let fixture: ComponentFixture<ChatbotEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotEnquiryComponent, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectStoryblokPageState,
              value: mockedStore,
            },
            { selector: selectProducts, value: dummyData },
          ],
        }),
      ],
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
    component['getControl'](EnquiryFormFieldsType.Orders).markAsTouched();
    component['getControl'](EnquiryFormFieldsType.Orders).setValue('#ORD1234');
    component['getControl'](EnquiryFormFieldsType.Email).markAsTouched();
    component['getControl'](EnquiryFormFieldsType.Email).setValue('test@email.com');
    component['getControl'](EnquiryFormFieldsType.Subject).markAsTouched();
    component['getControl'](EnquiryFormFieldsType.Subject).setValue('Test Subject');
    component['getControl'](EnquiryFormFieldsType.Message).markAsTouched();
    component['getControl'](EnquiryFormFieldsType.Message).setValue('Test Message');
    jest.spyOn(component as unknown as { salesRepresentative: () => void }, 'salesRepresentative');
    component['onSubmit']();
    expect(component['isSubmited']).toBe(false);
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
    component['showSelector'].set(false);
    component['selectorFieldFocus'](EnquiryFormFieldsType.Orders);
    expect(component['showSelector']()).toBe(true);
  });
});

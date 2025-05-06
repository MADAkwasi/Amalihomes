import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnChanges,
  OnInit,
  output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, InputComponent, TextDirective } from '@amalihomes/shared';
import { LucideAngularModule, CircleX, ChevronDown } from 'lucide-angular';
import { validators } from './validator';
import {
  ChatBotEnquiryType,
  EnquiryFormType,
  EnquiryFormFieldsType,
  orderEnquiryFormFields,
  generalEnquiryFormFields,
  CMSChatbot,
  ChatbotFormFields,
  ChatbotFormFieldkeys,
} from '../../../types/chatbot';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-chatbot-enquiry',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TextDirective,
    InputComponent,
    ButtonComponent,
    LucideAngularModule,
  ],
  templateUrl: './chatbot-enquiry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotEnquiryComponent implements OnInit, OnChanges {
  public formType = input.required<ChatBotEnquiryType>();
  public selectorValue = input('');
  public selectorValueChanged = output<string>();
  private readonly destroyRef = inject(DestroyRef);
  private readonly store = inject(Store);
  protected readonly chatbotData = this.store.selectSignal(selectSection<CMSChatbot>('chatbot'));
  protected readonly icons = { CircleX, ChevronDown };
  protected readonly formFieldType = EnquiryFormFieldsType;
  private formFieldNames = [] as EnquiryFormFieldsType[];
  protected formInputFiledNames = [] as EnquiryFormFieldsType[];
  protected readonly selectorFieldNames = [EnquiryFormFieldsType.Orders, EnquiryFormFieldsType.Question];
  protected showSelector = false;
  protected isSubmited = false;
  protected pageData = computed(() => {
    if (this.formType() === ChatBotEnquiryType.orders) {
      return this.chatbotData()?.order_enquiry[0].page_data[0];
    } else if (this.formType() === ChatBotEnquiryType.general) {
      return this.chatbotData()?.general_enquiry[0].page_data[0];
    }
    return;
  });
  protected readonly formData = computed(() => {
    const formFeilds = this.chatbotData()?.form_fields[0];
    if (!formFeilds) return;
    const formdata = {} as ChatbotFormFields;
    Object.keys(formFeilds).forEach((key) => {
      formdata[key as ChatbotFormFieldkeys] = formFeilds[key as ChatbotFormFieldkeys][0];
    });
    return formdata;
  });
  private readonly formErrorMessages = computed(() => this.chatbotData()?.form_field_errors[0]);
  private readonly formBuilder = inject(FormBuilder);
  protected form!: FormGroup<EnquiryFormType>;

  protected getControl(controlName: EnquiryFormFieldsType) {
    return this.form.controls[controlName];
  }

  protected getErrorMessage(fieldName: EnquiryFormFieldsType): string {
    const control = this.getControl(fieldName);
    if (!control || !control.errors) return '';
    const firstErrorKey = Object.keys(control.errors)[0];
    return this.formErrorMessages()?.[firstErrorKey] || 'Invalid field';
  }

  protected onSubmit() {
    const errorExists = !!this.formFieldNames.find(
      (fieldName) => this.isErrored(fieldName) || this.getControl(fieldName)?.invalid,
    );
    if (errorExists) return;
    this.isSubmited = true;
  }

  protected isErrored(fieldName: EnquiryFormFieldsType): boolean {
    const control = this.getControl(fieldName);
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const selectedChange = changes['selectorValue'];
    if (selectedChange && !selectedChange.firstChange) {
      let control;
      if (this.formType() === ChatBotEnquiryType.orders) {
        control = this.getControl(EnquiryFormFieldsType.Orders);
      } else if (this.formType() === ChatBotEnquiryType.general) {
        control = this.getControl(EnquiryFormFieldsType.Question);
      }
      if (control) {
        control.patchValue(selectedChange.currentValue);
      }
    }
  }

  ngOnInit(): void {
    let control;
    if (this.formType() === ChatBotEnquiryType.orders) {
      this.buildForm(orderEnquiryFormFields);
      this.formInputFiledNames = orderEnquiryFormFields.filter((field) => field !== EnquiryFormFieldsType.Message);
      control = this.getControl(EnquiryFormFieldsType.Orders);
    } else if (this.formType() === ChatBotEnquiryType.general) {
      this.buildForm(generalEnquiryFormFields);
      this.formInputFiledNames = generalEnquiryFormFields.filter((field) => field !== EnquiryFormFieldsType.Message);
      control = this.getControl(EnquiryFormFieldsType.Question);
    }
    if (control) {
      const subscription = control.valueChanges.subscribe((value) => {
        if (typeof value !== 'string') return;
        this.selectorValueChanged.emit(value);
      });
      this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }
  }

  private buildForm(formFieldNames: EnquiryFormFieldsType[]) {
    this.formFieldNames = formFieldNames;
    this.form = this.formBuilder.group(
      this.formFieldNames.reduce((controls, field) => {
        controls[field] = new FormControl('', validators[field]);
        return controls;
      }, {} as EnquiryFormType),
    );
  }

  protected selectorFieldFocus(fieldName: EnquiryFormFieldsType) {
    if (!this.selectorFieldNames.includes(fieldName)) return;
    this.showSelector = true;
  }
  protected selectorFieldBlur(fieldName: EnquiryFormFieldsType) {
    if (!this.selectorFieldNames.includes(fieldName)) return;
    // Allow for click events on the button
    setTimeout(() => {
      this.showSelector = false;
    }, 50);
  }
}

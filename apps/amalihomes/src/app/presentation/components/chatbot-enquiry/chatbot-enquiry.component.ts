import {
  ChangeDetectionStrategy,
  Component,
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
import { errorMessages, validators } from './validator';
import {
  ChatBotEnquiryType,
  EnquiryFormType,
  EnquiryPageData,
  EnquiryFormFieldsType,
  orderEnquiryFormFields,
  generalEnquiryFormFields,
} from '../../../types/chatbot';
import { mockedEnquiryFiledsData, mockedGeneralEnquiryPageData, mockedOrderEnquiryPageData } from './mocked-data';

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
  protected readonly icons = { CircleX, ChevronDown };
  protected readonly formFieldType = EnquiryFormFieldsType;
  private formFieldNames = [] as EnquiryFormFieldsType[];
  protected formInputFiledNames = [] as EnquiryFormFieldsType[];
  protected readonly selectorFieldNames = [EnquiryFormFieldsType.Orders, EnquiryFormFieldsType.Question];
  protected showSelector = false;
  protected isSubmited = false;
  protected pageData: EnquiryPageData = mockedOrderEnquiryPageData; // TODO: Get from CMS
  protected readonly formData = mockedEnquiryFiledsData; // TODO: Get from CMS
  private readonly formBuilder = inject(FormBuilder);
  protected form!: FormGroup<EnquiryFormType>;

  protected getControl(controlName: EnquiryFormFieldsType) {
    return this.form.controls[controlName];
  }

  protected getErrorMessage(fieldName: EnquiryFormFieldsType): string {
    const control = this.getControl(fieldName);
    if (!control || !control.errors) return '';
    const firstErrorKey = Object.keys(control.errors)[0];
    return errorMessages[firstErrorKey] || 'Invalid field';
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
      this.pageData = mockedOrderEnquiryPageData;
      control = this.getControl(EnquiryFormFieldsType.Orders);
    } else if (this.formType() === ChatBotEnquiryType.general) {
      this.buildForm(generalEnquiryFormFields);
      this.formInputFiledNames = generalEnquiryFormFields.filter((field) => field !== EnquiryFormFieldsType.Message);
      this.pageData = mockedGeneralEnquiryPageData;
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

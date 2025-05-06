import { FormControl } from '@angular/forms';

export interface ChatBotSalesRep {
  name: string;
  image: string;
}

export enum ChatBotTabs {
  home = 'home',
  chat = 'chat',
  help = 'help',
}

export enum ChatBotEnquiryType {
  product = 'product',
  orders = 'orders',
  general = 'general',
}

export enum EnquiryFormFieldsType {
  Orders = 'orderId',
  Question = 'question',
  Email = 'email',
  Subject = 'subject',
  Message = 'message',
}

export type EnquiryPageData = {
  title: string;
  description: string;
  thankyouMessage: string;
  thankyouTitle: string;
  submit_text: string;
};
export type EnquiryFormType = Record<EnquiryFormFieldsType, FormControl<string | null>>;

export const orderEnquiryFormFields: EnquiryFormFieldsType[] = [
  EnquiryFormFieldsType.Orders,
  EnquiryFormFieldsType.Email,
  EnquiryFormFieldsType.Subject,
  EnquiryFormFieldsType.Message,
];

export const generalEnquiryFormFields: EnquiryFormFieldsType[] = [
  EnquiryFormFieldsType.Question,
  EnquiryFormFieldsType.Email,
  EnquiryFormFieldsType.Subject,
  EnquiryFormFieldsType.Message,
];

interface ChatbotFormField {
  label: string;
  placeholder: string;
  type: string;
}

export interface ChatbotFormFields {
  question: ChatbotFormField;
  orderId: ChatbotFormField;
  email: ChatbotFormField;
  subject: ChatbotFormField;
  message: ChatbotFormField;
}

export type ChatbotFormFieldkeys = keyof ChatbotFormFields;
export interface CMSChatbot {
  order_enquiry: {
    orders: [];
    page_data: EnquiryPageData[];
  }[];
  general_enquiry: {
    questions: [];
    page_data: EnquiryPageData[];
  }[];
  form_fields: Record<ChatbotFormFieldkeys, ChatbotFormField[]>[];
}

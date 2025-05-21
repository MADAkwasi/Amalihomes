import { FormControl } from '@angular/forms';
import { FaqEnquiryTabTypes } from './storyblok';

export interface Dimensions {
  height: string;
  width: string;
  depth: string;
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface ShippingInfo {
  weight: number;
  deliveryTime: string;
}

export interface Color {
  name: string;
  hex: string;
  image: string;
}

export enum ProductStatus {
  NewArrival = 'new arrival',
  TopSeller = 'top seller',
}

export type Size = 'small' | 'medium' | 'large';
export type Label = 'top seller' | 'new arrival';

export interface Product {
  _id: string;
  name: string;
  arrivalDate: string;
  price: number;
  discount: number | null;
  stock: number | null;
  description: string;
  dimensions: Dimensions;
  size: Size;
  category: string;
  status: Label[];
  material: string;
  colors: Color[];
  image: string;
  ratings: number;
  reviews: Review[];
  tags: string[];
  shippingInfo: ShippingInfo;
  warranty: string | null;
  returnPolicy: string | null;
  style: string;
}

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
  Products = 'product',
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

export const productEnquiryFormFields: EnquiryFormFieldsType[] = [
  EnquiryFormFieldsType.Products,
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
  product: ChatbotFormField;
  question: ChatbotFormField;
  orderId: ChatbotFormField;
  email: ChatbotFormField;
  subject: ChatbotFormField;
  message: ChatbotFormField;
}

export interface TextValue {
  value: string;
}

export type ChatbotFormFieldkeys = keyof ChatbotFormFields;
export interface CMSChatbot {
  order_enquiry: {
    orders: [];
    page_data: EnquiryPageData[];
  }[];
  general_enquiry: {
    questions: TextValue[];
    page_data: EnquiryPageData[];
  }[];
  product_enquiry: {
    questions: TextValue[];
    page_data: EnquiryPageData[];
  }[];
  form_fields: Record<ChatbotFormFieldkeys, ChatbotFormField[]>[];
  form_field_errors: Record<string, string>[];
  home_page: {
    back_btn_text: string;
    exit_btn_text: string;
    message_title: string;
    avatar_alt_text: string;
    message: string;
    tabs: Record<ChatBotTabs, TextValue[]>[];
    enquiries: Record<ChatBotEnquiryType, TextValue[]>[];
  }[];
  faq_page: {
    message_title: string;
    message: string;
    categories_tiltle: string;
    categories: { available_questions: string; title: string; enquiry_type: FaqEnquiryTabTypes; _uid: string }[];
  }[];
}

export type TawkApi = {
  showWidget: () => void;
  hideWidget: () => void;
  toggle: () => void;
  maximize: () => void;
  minimize: () => void;
  onLoad?: () => void;
  onChatEnded?: () => void;
  onChatMinimized?: () => void;
};

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

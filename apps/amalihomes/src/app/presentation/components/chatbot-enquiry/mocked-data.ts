import { EnquiryPageData } from '../../../types/chatbot';

export const mockedOrderEnquiryPageData: EnquiryPageData = {
  title: 'Order Enquiry',
  description: "Please fill out the form below, and we'll get back to you as soon as possible on your order.",
  thankyouMessage: "Your order enquiry has been sent. We'll respond within 24 hours. Look out for our mail.",
  thankyouTitle: 'Thank you!',
};

export const mockedEnquiryFiledsData = {
  question: {
    label: 'Type of Enquiry',
    placeholder: 'General Question',
    type: 'text',
  },
  orderId: {
    label: 'Order ID',
    placeholder: '#ORD1234',
    type: 'text',
  },
  email: {
    label: 'Email',
    placeholder: 'lisamariekoomson@gmail.com',
    type: 'email',
  },
  subject: {
    label: 'Subject',
    placeholder: 'Write a subject here',
    type: 'text',
  },
  message: {
    label: 'Message',
    placeholder: 'Kindly type your message here...',
    type: 'text',
  },
};

export const mockedGeneralEnquiryPageData: EnquiryPageData = {
  title: 'General Enquiries',
  description: "Please fill out the form below, and we'll get back to you as soon as possible.",
  thankyouMessage: 'Your enquiry has been sent.',
  thankyouTitle: 'Thank you!',
};

export const mockedTestImageData = [
  { id: '1', image: 'image1.jpg', name: 'Image 1' },
  { id: '2', image: 'image2.jpg', name: 'Image 2' },
  { id: '3', image: 'image3.jpg', name: 'Image 3' },
  { id: '4', image: 'image4.jpg', name: 'Image 4' },
  { id: '5', image: 'image5.jpg', name: 'Image 5' },
  { id: '7', image: 'image6.jpg', name: 'Image 6' },
  { id: '7', image: 'image7.jpg', name: 'Image 7' },
  { id: '8', image: 'image8.jpg', name: 'Image 8' },
  { id: '9', image: 'image9.jpg', name: 'Image 9' },
  { id: '10', image: 'image10.jpg', name: 'Image 10' },
  { id: '11', image: 'image11.jpg', name: 'Image 11' },
  { id: '12', image: 'image12.jpg', name: 'Image 12' },
];

const mockedEnquiryPageData = {
  title: 'Page Title',
  description: 'Description',
  thankyouMessage: 'Message',
  thankyouTitle: 'Thank you',
  submit_text: 'Submit',
};

const mockedEnquiryFieldData = {
  label: 'Type of Enquiry',
  placeholder: 'General Question',
  type: 'text',
};

export const mockedStore = {
  page: '',
  isFetchingContent: false,
  content: {
    body: [
      {
        component: 'cookie_consent_banner',
        cookie_settings: [{ component: 'cookie_settings', functionality: 'Functionality', analytics: 'Analytics' }],
        banner_title: 'Cookie Banner Title',
        cmp_partner_badge: 'CMP Partner Badge',
        cmp_badge_alt_text: 'CMP Badge Alt Text',
        banner_message: 'Banner Message',
        list_title: 'List Title',
        expand_btn_text: 'Expand Button Text',
        expanded_btn_text: 'Expanded Button Text',
        reject_all_btn_text: 'Reject All Button Text',
        close_banner_label: 'Close Banner Label',
      },
      {
        component: 'chatbot',
        order_enquiry: [
          {
            orders: [],
            page_data: [mockedEnquiryPageData],
          },
        ],
        general_enquiry: [
          {
            questions: ['Question 1', 'Question 2'],
            page_data: [mockedEnquiryPageData],
          },
        ],
        form_fields: [
          {
            question: [mockedEnquiryFieldData],
            orderId: [mockedEnquiryFieldData],
            email: [mockedEnquiryFieldData],
            subject: [mockedEnquiryFieldData],
            message: [mockedEnquiryFieldData],
          },
        ],
      },
    ],
  },
  locale: 'en',
  error: null,
};

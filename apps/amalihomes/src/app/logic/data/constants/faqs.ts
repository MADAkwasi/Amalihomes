export interface FaqsAccordionData {
  question: string;
  answers: string[];
}

export interface FaqsData {
  title: string;
  content: FaqsAccordionData[] | string;
}

export const faqsData = [
  {
    title: 'Order & Payments',
    content: [
      {
        question: 'How do I place an order?',
        answers: [
          'Browse through our store and select the items you want.',
          'Click “Add to Cart” to add items to your shopping bag.',
          'Proceed to checkout and provide your shipping details.',
          'Choose a payment method and complete the order.',
          'You’ll receive a confirmation email with your order details.',
        ],
      },
      {
        question: 'What payment methods do you accept?',
        answers: [
          'We accept Visa, MasterCard, and American Express.',
          'Mobile Money and PayPal are also supported.',
          'Bank transfer options are available for bulk purchases.',
          'All payments are processed securely.',
          'You’ll receive a receipt once payment is completed.',
        ],
      },
      {
        question: 'Can I modify or cancel my order after placing it?',
        answers: [
          'Orders can only be modified or canceled within 1 hour of placement.',
          'Contact our support team as soon as possible to request changes.',
        ],
      },
      {
        question: 'Will I receive an invoice for my purchase?',
        answers: [
          'Yes, a digital invoice will be sent to your email after purchase.',
          'You can also download it from your account’s order history.',
        ],
      },
      {
        question: 'What should I do if my payment fails?',
        answers: [
          'Ensure your card or payment method has sufficient funds.',
          'Retry the transaction or use a different payment method.',
          'Contact your bank if the issue persists.',
        ],
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    content: [
      {
        question: 'How long does shipping take?',
        answers: [
          'Standard shipping takes 3–5 business days.',
          'Express shipping is available and takes 1–2 business days.',
          'Delivery time may vary based on your location.',
        ],
      },
      {
        question: 'Do you offer international shipping?',
        answers: [
          'Yes, we ship to selected countries worldwide.',
          'International shipping costs and times vary by location.',
          'Duties and taxes may apply based on your country’s regulations.',
        ],
      },
      {
        question: 'Can I track my order?',
        answers: [
          'Yes, you’ll receive a tracking number once your order ships.',
          'Use the tracking link in your email or your account dashboard.',
        ],
      },
      {
        question: 'What happens if I’m not home during delivery?',
        answers: [
          'The courier will leave a notice or attempt a redelivery.',
          'You may also be able to reschedule the delivery or collect it from a pickup point.',
        ],
      },
      {
        question: 'Can I change my delivery address?',
        answers: [
          'Address changes are only possible before the order is shipped.',
          'Please contact customer support promptly to request an update.',
        ],
      },
      {
        question: 'What should I do if my package is delayed?',
        answers: [
          'Check your tracking information for updates.',
          'Contact our support team if the delivery is more than 2 days late.',
        ],
      },
    ],
  },
  {
    title: 'Returns & Funds',
    content: [
      {
        question: 'What is your return policy?',
        answers: [
          'You can return items within 14 days of delivery.',
          'Items must be unused and in original packaging.',
          'Some products like custom orders may not be eligible.',
        ],
      },
      {
        question: 'How do I start a return?',
        answers: [
          'Go to your account and click “Request Return” next to the order.',
          'Follow the on-screen instructions and print the return label.',
        ],
      },
      {
        question: 'When will I receive my refund?',
        answers: [
          'Refunds are processed within 3–7 business days after receiving your return.',
          'It may take additional time for your bank to reflect the refund.',
        ],
      },
    ],
  },
  {
    title: 'Account & Support',
    content: [
      {
        question: 'How do I create an account?',
        answers: [
          'Click on the “Sign Up” button at the top right corner.',
          'Fill in your name, email, and password to register.',
        ],
      },
      {
        question: 'I forgot my password. What do I do?',
        answers: [
          'Click “Forgot Password?” on the login page.',
          'You’ll receive a link to reset your password via email.',
        ],
      },
      {
        question: 'How can I contact support?',
        answers: [
          'You can reach us via live chat, email, or phone.',
          'Support is available Monday to Friday, 9am–5pm.',
        ],
      },
      {
        question: 'Can I update my personal details?',
        answers: ['Yes, go to “My Account” and click “Edit Profile” to update your information.'],
      },
      {
        question: 'Where can I view my order history?',
        answers: ['Login to your account and navigate to the “Orders” section.'],
      },
    ],
  },
];

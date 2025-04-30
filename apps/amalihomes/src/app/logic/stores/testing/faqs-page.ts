import { navLinks } from '../../data/constants/links';

export const FaqsPageTestData = {
  page: 'home',
  isFetchingContent: false,
  lang: 'en',
  content: {
    body: [
      {
        loginButton: 'Button text',
        navLinks: navLinks,
        locale: new Array(2).fill({ country: 'Country', language: 'Language', _uid: 'id' }),
        component: 'header',
      },
      {
        tabs: [
          {
            title: 'Orders & Payments',
            content: [
              {
                _uid: '23a583fa-6e53-4052-8057-a2c4db22eeb9',
                answer: {
                  type: 'doc',
                  content: [
                    {
                      type: 'ordered_list',
                      attrs: {
                        order: 1,
                      },
                      content: [
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Browse through our store and select the items you want.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Click “Add to Cart” to add items to your shopping bag.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: ' Proceed to checkout and provide your shipping details.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Choose a payment method and complete the order.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'You’ll receive a confirmation email with your order details.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                question: 'How do I place an order?',
                component: 'accordion',
                _editable:
                  '\u003C!--#storyblok#{"name": "accordion", "space": "331937", "uid": "23a583fa-6e53-4052-8057-a2c4db22eeb9", "id": "659557191"}--\u003E',
              },
              {
                _uid: '10770813-aea4-4ef2-a944-f4188e510d1f',
                answer: {
                  type: 'doc',
                  content: [
                    {
                      type: 'ordered_list',
                      attrs: {
                        order: 1,
                      },
                      content: [
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'We accept Visa, MasterCard, and American Express.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Mobile Money and PayPal are also supported.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Bank transfer options are available for bulk purchases.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'All payments are processed securely.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'You’ll receive a receipt once payment is completed.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                question: 'What payment methods do you accept?',
                component: 'accordion',
                _editable:
                  '\u003C!--#storyblok#{"name": "accordion", "space": "331937", "uid": "10770813-aea4-4ef2-a944-f4188e510d1f", "id": "659557191"}--\u003E',
              },
              {
                _uid: 'b1fe403e-4902-40e3-81fa-c73617e4f9a5',
                answer: {
                  type: 'doc',
                  content: [
                    {
                      type: 'ordered_list',
                      attrs: {
                        order: 1,
                      },
                      content: [
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Orders can only be modified or cancelled within 1 hour of placement.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Contact our support team as soon as possible to request changes.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                question: 'Can I modify or cancel my order after placing it?',
                component: 'accordion',
                _editable:
                  '\u003C!--#storyblok#{"name": "accordion", "space": "331937", "uid": "b1fe403e-4902-40e3-81fa-c73617e4f9a5", "id": "659557191"}--\u003E',
              },
              {
                _uid: 'dbca1220-f979-4a69-b0fe-8f64070f0125',
                answer: {
                  type: 'doc',
                  content: [
                    {
                      type: 'ordered_list',
                      attrs: {
                        order: 1,
                      },
                      content: [
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Yes, a digital invoice will be sent to your email after purchase.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'You can also download it from your account’s order history.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                question: 'Will I receive an invoice for my purchase?',
                component: 'accordion',
                _editable:
                  '\u003C!--#storyblok#{"name": "accordion", "space": "331937", "uid": "dbca1220-f979-4a69-b0fe-8f64070f0125", "id": "659557191"}--\u003E',
              },
              {
                _uid: '3dc4b19e-9b4a-49fb-bb4b-3c85a640e3c1',
                answer: {
                  type: 'doc',
                  content: [
                    {
                      type: 'ordered_list',
                      attrs: {
                        order: 1,
                      },
                      content: [
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Ensure your card or payment method has sufficient funds.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Retry the transaction or use a different payment method.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list_item',
                          content: [
                            {
                              type: 'paragraph',
                              content: [
                                {
                                  text: 'Contact your bank if the issue persists.',
                                  type: 'text',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                question: 'What should I do if my payment fails?',
                component: 'accordion',
                _editable:
                  '\u003C!--#storyblok#{"name": "accordion", "space": "331937", "uid": "3dc4b19e-9b4a-49fb-bb4b-3c85a640e3c1", "id": "659557191"}--\u003E',
              },
            ],
          },
        ],
      },

      {
        linksSection: new Array(4).fill({ links: navLinks, title: 'Test title' }),
        inputErrorText: 'Error text',
        subscriptionButton: 'Button text',
        component: 'footer',
      },
    ],
  },
  locale: {
    country: 'USA',
    language: 'English',
    languageCode: 'en',
    countryCode: 'US',
    direction: 'ltr',
  },
  error: {},
};

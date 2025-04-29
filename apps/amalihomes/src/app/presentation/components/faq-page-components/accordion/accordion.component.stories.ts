import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { CommonModule } from '@angular/common';
import { StoryblokService } from 'apps/amalihomes/src/app/logic/services/storyblok/storyblok.service';

const mockData = [
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
];

const meta: Meta<AccordionComponent> = {
  title: 'Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [
        {
          provide: StoryblokService,
          useValue: {
            resolveRichText: () => `
              <ol>
                <li>Browse through our store and select the items you want.</li>
                <li>Click “Add to Cart” to add items to your shopping bag.</li>
                <li>Proceed to checkout and provide your shipping details.</li>
                <li>Choose a payment method and complete the order.</li>
                <li>You’ll receive a confirmation email with your order details.</li>
              </ol>
            `,
          },
        },
      ],
    }),
  ],
  argTypes: {
    accordionData: {
      control: 'object',
      description: 'Array of tab data to be displayed',
    },
  },
};

export default meta;

type Story = StoryObj<AccordionComponent>;

export const Tabs: Story = {
  args: {
    accordionData: mockData,
  },
};

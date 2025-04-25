import { Meta, StoryObj } from '@storybook/angular';
import { ContactUsComponent } from './contact-us.component';

const meta: Meta<ContactUsComponent> = {
  title: 'Contact Us',
  component: ContactUsComponent,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'text',
      description: 'Layout position of the contact us form and sales representative contact',
    },
    bgColor: {
      control: 'text',
      description: 'Background color of the contact us section',
    },
    bgImg: {
      control: 'text',
      description: 'Background image of the contact us section',
    },
  },
};

export default meta;
type Story = StoryObj<ContactUsComponent>;

export const Default: Story = {
  args: {
    position: 'form-last',
    bgImg: 'https://example.com/background.jpg',
  },
};

export const WithColorBackground: Story = {
  args: {
    position: 'form-last',
    bgColor: '#f0f0f0',
  },
};

export const FormFirst: Story = {
  args: {
    position: 'form-first',
    bgImg: 'https://example.com/background.jpg',
  },
};

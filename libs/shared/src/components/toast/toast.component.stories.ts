import type { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from './toast.component';

const meta: Meta<ToastComponent> = {
  title: 'shared/Toast',
  component: ToastComponent,
  tags: ['autodocs'],

  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'info', 'warning'],
      description: 'The type of toast message to display',
    },
    title: {
      control: 'text',
      description: 'The title of the toast message',
    },
    message: {
      control: 'text',
      description: 'The content of the toast message',
    },
    duration: {
      control: 'number',
      description: 'Time in milliseconds before the toast auto-closes (0 for no auto-close)',
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether the toast should automatically close after duration',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success Message',
    message: 'This is a success message, because your action completed successfully',
    duration: 0,
    autoClose: false,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error Message',
    message: 'This is an error message, because your action caused an error',
    duration: 0,
    autoClose: false,
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Info Message',
    message: 'This is an info message, because your action caused an error',
    duration: 0,
    autoClose: false,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning Message',
    message: 'This is a warning message, because your action caused an error',
    duration: 0,
    autoClose: false,
  },
};

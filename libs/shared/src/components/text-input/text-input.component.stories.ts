import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './text-input.component';

const meta: Meta<InputComponent> = {
  title: 'Shared/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Name',
    id: 'name',
  },
};

export const LeftIcon: Story = {
  args: {
    placeholder: 'Enter text...',
    leftIcon: true,
    label: 'Email',
    id: 'email',
  },
};

export const RightIcon: Story = {
  args: {
    placeholder: 'Enter text...',
    rightIcon: true,
    label: 'Password',
    type: 'password',
    id: 'password',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter text...',
    error: true,
    errorMessage: 'This field is required',
    label: 'Username',
    type: 'text',
    id: 'username',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Enter email',
    id: 'subemail',
    type: 'text',
  },
};

export const WithWarningInout: Story = {
  args: {
    placeholder: 'Enter Card Number',
    warning: true,
    errorMessage: 'This field is required',
    label: 'Card Number',
    type: 'text',
    id: 'cardnumber',
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: 'Enter email',
    id: 'subemail2',
    type: 'text',
    label: 'This Field is disabled',
    disabled: true,
  },
};

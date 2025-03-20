// input.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './text-input.component';

const meta: Meta<InputComponent> = {
  title: 'Shared/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    placeholder: { control: 'text' },
    leftIcon: {
      control: 'select',
      options: ['search', 'mail', 'lock', 'eye', 'eyeOff'],
    },
    rightIcon: {
      control: 'select',
      options: ['search', 'mail', 'lock', 'eye', 'eyeOff'],
    },
    iconSize: { control: 'number' },
    strokeWidth: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Enter text...',
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Primary.args,
    leftIcon: 'search',
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Primary.args,
    rightIcon: 'eye',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Search...',
  },
};

export const EmailInput: Story = {
  args: {
    ...Primary.args,
    leftIcon: 'mail',
    placeholder: 'Enter your email',
  },
};

export const PasswordInput: Story = {
  args: {
    ...Primary.args,
    leftIcon: 'lock',
    rightIcon: 'eyeOff',
    placeholder: 'Enter password',
  },
};

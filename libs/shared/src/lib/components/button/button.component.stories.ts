import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['primary', 'secondary'] },
    state: { control: 'radio', options: ['default', 'disabled'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    buttonType: { control: 'radio', options: ['submit', 'button'] },
    hasText: { control: 'boolean' },
    leftIcon: {
      control: 'select',
      options: ['search', 'arrowRight', 'check', 'x', 'chevronDown', 'chevronUp'],
    },
    rightIcon: {
      control: 'select',
      options: ['search', 'arrowRight', 'check', 'x', 'chevronDown', 'chevronUp'],
    },
    iconOnly: { control: 'boolean' },
    buttonText: { control: 'text' },
    fullWidth: { control: 'boolean' },
    iconSize: { control: 'number' },
    strokeWidth: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    state: 'default',
    size: 'large',
    hasText: true,
    leftIcon: undefined,
    rightIcon: undefined,
    iconOnly: false,
    buttonText: 'Primary Button',
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Primary.args,
    leftIcon: 'search',
    buttonText: 'Search',
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Primary.args,
    rightIcon: 'arrowRight',
    buttonText: 'Continue',
  },
};

export const IconOnlyButton: Story = {
  args: {
    ...Primary.args,
    hasText: false,
    iconOnly: true,
    leftIcon: 'check',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    state: 'disabled',
  },
};

export const fullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
};

import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './text-input.component';

const meta: Meta<InputComponent> = {
  title: 'Shared/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const LeftIcon: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-text-input placeholder='Enter email' leftIcon="true">
      <leftIcon>📧</leftIcon>
      </lib-text-input>
      <p>{{value}}</p>
    `,
  }),
};

export const RightIcon: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-text-input placeholder="Enter password "rightIcon="true" containerStyles="">
        <rightIcon>👁️</rightIcon>
      </lib-text-input>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

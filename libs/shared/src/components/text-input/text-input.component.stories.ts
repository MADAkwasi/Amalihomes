import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './text-input.component';
import { FormControl } from '@angular/forms';

const meta: Meta<InputComponent> = {
  title: 'Shared/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
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
      <lib-text-input [placeholder]="'Enter email'" [leftIcon]="true">
        <leftIcon>📧</leftIcon>
      </lib-text-input>
    `,
  }),
};

export const RightIcon: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-text-input [placeholder]="'Enter password'" [rightIcon]="true">
        <rightIcon>👁️</rightIcon>
      </lib-text-input>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-text-input [placeholder]="'Disabled input'" [control]="control">
      </lib-text-input>
    `,
    methods: {
      setDisabled: (component: InputComponent) => component.setDisabledState(true),
    },
  }),
  args: {
    control: new FormControl({ value: '', disabled: true }),
  },
};

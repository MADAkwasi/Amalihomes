import type { Meta, StoryObj } from '@storybook/angular';
import { SelectInputComponent } from './select-input.component';
import { FormControl } from '@angular/forms';

const meta: Meta<SelectInputComponent> = {
  title: 'Shared/SelectInput',
  component: SelectInputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    options: { control: 'object' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    placeholder: 'Select an option',
    options: [
      { value: 'ghana', label: 'Ghana' },
      { value: 'germany', label: 'Germany' },
      { value: 'nigeria', label: 'Nigeria' },
    ],
    disabled: false,
    label: 'Country',
  },
  render: (args) => ({
    props: {
      ...args,
      control: args.control || new FormControl(args.options?.[0]?.value || ''),
    },
  }),
};

export default meta;
type Story = StoryObj<SelectInputComponent>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    options: [
      { value: 'english', label: 'English' },
      { value: 'french', label: 'French' },
    ],
    label: 'Language',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Country with default',
    control: new FormControl('germany'),
  },
};

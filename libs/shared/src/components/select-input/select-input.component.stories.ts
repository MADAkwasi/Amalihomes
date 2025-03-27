import type { Meta, StoryObj } from '@storybook/angular';
import { SelectInputComponent } from './select-input.component';

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
};

export default meta;
type Story = StoryObj<SelectInputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options: [
      { value: 'ghana', label: 'Ghana' },
      { value: 'germany', label: 'Germany' },
      { value: 'nigeria', label: 'Nigeria' },
    ],
    disabled: false,
    label: 'Select an option',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'inactive input',
    options: [
      { value: 'english', label: 'english' },
      { value: 'french', label: 'french' },
    ],
    disabled: true,
    label: 'Select an option',
  },
};

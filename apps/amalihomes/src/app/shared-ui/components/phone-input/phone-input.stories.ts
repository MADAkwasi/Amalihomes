import type { Meta, StoryObj } from '@storybook/angular';
import { PhoneInputComponent } from './phone-input.component';
import { FormControl } from '@angular/forms';

const meta: Meta<PhoneInputComponent> = {
  title: 'Shared/Phone Input',
  component: PhoneInputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label text',
    },
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
  }),
};

export default meta;
type Story = StoryObj<PhoneInputComponent>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
  },
};

import { Meta, StoryObj } from '@storybook/angular';
import { TabButtonComponent } from './tab-button.component';

const meta: Meta<TabButtonComponent> = {
  title: 'Shared/Tab Button',
  component: TabButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TabButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Tab Label',
    isActive: false,
    disabled: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Active Tab',
    isActive: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Tab',
    isActive: false,
    disabled: true,
  },
};

export const ActiveAndDisabled: Story = {
  args: {
    label: 'Active & Disabled',
    isActive: true,
    disabled: true,
  },
};

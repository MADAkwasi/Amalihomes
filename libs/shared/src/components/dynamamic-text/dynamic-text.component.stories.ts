import type { Meta, StoryObj } from '@storybook/angular';
import { DynamicTextComponent } from './dynamic-text.component';

const meta: Meta<DynamicTextComponent> = {
  title: 'Shared/Text',
  component: DynamicTextComponent,
  tags: ['autodocs'],
  argTypes: {
    tagName: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    className: {
      control: 'select',
      options: ['default', 'large-description', 'small-description', 'extra-small-description'],
    },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<DynamicTextComponent>;

export const Default: Story = {
  args: {
    tagName: 'p',
    text: 'Hello World',
  },
};

export const H1Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h1',
    text: 'Heading',
  },
};

export const H2Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h2',
    text: 'Heading',
  },
};

export const H3Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h3',
    text: 'Heading',
  },
};

export const H4Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h4',
    text: 'Heading',
  },
};

export const LargeDescription: Story = {
  args: {
    ...Default.args,
    tagName: 'p',
    text: 'Description',
    className: 'large-description',
  },
};

export const SmallDescription: Story = {
  args: {
    ...Default.args,
    tagName: 'p',
    text: 'Description',
    className: 'small-description',
  },
};

export const ExtraSmallDescription: Story = {
  args: {
    ...Default.args,
    tagName: 'p',
    text: 'Description',
    className: 'extra-small-description',
  },
};

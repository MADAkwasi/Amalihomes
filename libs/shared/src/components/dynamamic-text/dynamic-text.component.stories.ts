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
    text: 'Your ultimate destination for premium furniture that blends elegance, comfort, and functionality. Whether youre revamping your living room, upgrading your office ,we bring you an exquisite collection tailored to your taste',
  },
};

export const H1Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h1',
    text: 'Quality Furniture for Every Home & Office',
  },
};

export const H2Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h2',
    text: 'Why Choose Us',
  },
};

export const H3Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h3',
    text: 'Premium Quality & Durability',
  },
};

export const H4Heading: Story = {
  args: {
    ...Default.args,
    tagName: 'h4',
    text: 'Join our newsletter',
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

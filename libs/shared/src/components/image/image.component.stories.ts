import type { Meta, StoryObj } from '@storybook/angular';
import { ImageComponent } from './image.component';

const meta: Meta<ImageComponent> = {
  title: 'Shared/Image',
  component: ImageComponent,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    orientation: { control: 'radio', options: ['portrait', 'landscape'] },
  },
};

export default meta;
type Story = StoryObj<ImageComponent>;

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Landscape Image',
    width: 400,
    height: 300,
    orientation: 'landscape',
  },
};

export const Portrait: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: 'Portrait Image',
    width: 200,
    height: 300,
    orientation: 'portrait',
  },
};

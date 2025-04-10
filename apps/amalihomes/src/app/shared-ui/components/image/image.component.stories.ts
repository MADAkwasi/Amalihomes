import type { Meta, StoryObj } from '@storybook/angular';
import { ImageComponent } from './image.component';

const meta: Meta<ImageComponent> = {
  title: 'Shared/Image',
  component: ImageComponent,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ImageComponent>;

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Landscape Image',
  },
};

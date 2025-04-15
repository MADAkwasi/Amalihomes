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
    class: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ImageComponent>;

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Landscape Image',
    width: 800,
    height: 600,
  },
};

export const Portrait: Story = {
  args: {
    src: 'https://picsum.photos/600/800',
    alt: 'Portrait Image',
    width: 600,
    height: 800,
  },
};

export const WithCustomClass: Story = {
  args: {
    src: 'https://picsum.photos/400/400',
    alt: 'Square Image with rounded corners',
    width: 400,
    height: 400,
    class: 'rounded shadow',
  },
};

export const Placeholder: Story = {
  args: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoPHvh9haWg7lBxDFJGOBc1CaMuxcbMJwIWChEcPHqyJ2b_xt96ZbhKwqAWO6wv_ZhUM&usqp=CAU',
    alt: 'This will show the placeholder',
    width: 300,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This demonstrates the placeholder image that appears when the source fails to load. The component will show the default placeholder image when the provided src fails to load.',
      },
    },
  },
};

export const CustomDimensions: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: 'Custom dimensions image',
    width: 200,
    height: 300,
  },
};

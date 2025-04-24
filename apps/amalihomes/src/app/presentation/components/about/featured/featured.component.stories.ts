import { Meta, StoryObj } from '@storybook/angular';
import { FeaturedComponent } from './featured.component';
import { featuredData } from 'apps/amalihomes/src/app/logic/data/constants/about';

const meta: Meta<FeaturedComponent> = {
  title: 'Featured',
  component: FeaturedComponent,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of leaders to display',
    },
    title: {
      control: 'text',
      description: 'Title of the leadership section',
    },
    description: {
      control: 'text',
      description: 'Description of the leadership section',
    },
    image: {
      control: 'text',
      description: 'Image URL for the leadership section',
    },
  },
};

export default meta;
type Story = StoryObj<FeaturedComponent>;

export const Default: Story = {
  args: {
    data: featuredData.data.slice(0, 2),
    title: 'Global Presence',
    description: 'Meet our leadership team, who are dedicated to driving our mission and vision forward.',
    image: 'https://i.postimg.cc/vBqph8zV/image.png',
  },
};

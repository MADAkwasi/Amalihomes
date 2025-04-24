import { Meta, StoryObj } from '@storybook/angular';
import { HeroComponent } from './hero.component';

const meta: Meta<HeroComponent> = {
  title: 'Hero',
  component: HeroComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the hero section',
    },
    description: {
      control: 'text',
      description: 'Description of the hero section',
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL for the hero section',
    },
  },
};

export default meta;

type Story = StoryObj<HeroComponent>;

export const FaqsPageHero: Story = {
  args: {
    title: 'Frequently Asked Questions',
    description:
      "Find answers to common questions about our products, orders, delivery, and more. If you need further assistance, feel free to contact our support team. We're here to help!",
    imageUrl: '/images/faqs-hero.png',
  },
};

export const AboutPageHero: Story = {
  args: {
    title: 'Amalihomes',
    description:
      'Discover a wide range of high-quality furniture designed to fit your style and space. From cozy living room sets to sleek office essentials, we have everything you need.',
    imageUrl: '/images/about-hero.png',
  },
};

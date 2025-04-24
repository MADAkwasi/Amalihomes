import { Meta, StoryObj } from '@storybook/angular';
import { LeadershipComponent } from './leadership.component';
import { teamMembers } from 'apps/amalihomes/src/app/logic/data/constants/about';

const meta: Meta<LeadershipComponent> = {
  title: 'Leadership',
  component: LeadershipComponent,
  tags: ['autodocs'],
  argTypes: {
    leadershipList: {
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
  },
};

export default meta;
type Story = StoryObj<LeadershipComponent>;

export const Default: Story = {
  args: {
    leadershipList: teamMembers.data,
    title: 'Global Presence',
    description: 'Meet our leadership team, who are dedicated to driving our mission and vision forward.',
  },
};

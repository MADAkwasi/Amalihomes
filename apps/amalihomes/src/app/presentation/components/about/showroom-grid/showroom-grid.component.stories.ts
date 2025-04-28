import { Meta, StoryObj } from '@storybook/angular';
import { ShowroomGridComponent } from './showroom-grid.component';
import { action } from '@storybook/addon-actions';
import { showroomsData } from 'apps/amalihomes/src/app/logic/data/constants/about';

const meta: Meta<ShowroomGridComponent> = {
  title: 'Showroom Grid',
  component: ShowroomGridComponent,
  tags: ['autodocs'],

  argTypes: {
    showroomsTitle: {
      control: 'text',
      description: 'Title of the showroom grid',
      defaultValue: showroomsData.title,
    },
    showroomsDescription: {
      control: 'text',
      description: 'Description of the showroom grid',
      defaultValue: showroomsData.description,
    },
  },
  render: (args) => ({
    props: {
      ...args,
      regionChange: action('regionChange'),
      showroomSelected: action('showroomSelected'),
    },
  }),
};

export default meta;
type Story = StoryObj<ShowroomGridComponent>;

export const Default: Story = {
  args: {
    showroomsData: showroomsData.data,
  },
};

export const WithEmptyRegions: Story = {
  args: {
    showroomsData: {
      Africa: [],
      Europe: [],
      'North America': [],
      'South America': [],
    },
  },
};

export const WithSingleRegion: Story = {
  args: {
    showroomsData: {
      Europe: showroomsData.data['Europe'],
    },
  },
};

import { Meta, StoryObj } from '@storybook/angular';
import { LocationMapComponent } from './location-map.component';

const meta: Meta<LocationMapComponent> = {
  title: 'Location Map',
  component: LocationMapComponent,
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: 'text',
      description: 'Location to be shown on the map',
    },
  },
};

export default meta;
type Story = StoryObj<LocationMapComponent>;

export const Default: Story = {
  args: {
    location: 'Cape Coast Castle, Ghana',
  },
};

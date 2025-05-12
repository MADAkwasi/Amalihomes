import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LocationMapComponent } from './location-map.component';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from 'apps/amalihomes/src/app/logic/data/testing/mocked-data';

const mapData = mockedStore.content.body.find((item) => item.component === 'global_presence');
const meta: Meta<LocationMapComponent> = {
  title: 'Location Map',
  component: LocationMapComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mapData],
              },
            },
          },
        }),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<LocationMapComponent>;

export const Default: Story = {};

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from 'apps/amalihomes/src/app/logic/data/testing/mocked-data';
import { StatisticsComponent } from './statistics.component';

const mapData = mockedStore.content.body.find((item) => item.component === 'aboutLandingSection');
const meta: Meta<StatisticsComponent> = {
  title: 'Statistics',
  component: StatisticsComponent,
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
type Story = StoryObj<StatisticsComponent>;

export const Default: Story = {};

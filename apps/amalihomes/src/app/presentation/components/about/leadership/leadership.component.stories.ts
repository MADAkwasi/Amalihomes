import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LeadershipComponent } from './leadership.component';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from 'apps/amalihomes/src/app/logic/data/testing/mocked-data';

const leadershipData = mockedStore.content.body.find((item) => item.component === 'leadership_team');

const meta: Meta<LeadershipComponent> = {
  title: 'Leadership',
  component: LeadershipComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [leadershipData],
              },
            },
          },
        }),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<LeadershipComponent>;

export const Default: Story = {};

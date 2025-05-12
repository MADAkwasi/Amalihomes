import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ShowroomGridComponent } from './showroom-grid.component';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from 'apps/amalihomes/src/app/logic/data/testing/mocked-data';

const showroomGridData = mockedStore.content.body.find((item) => item.component === 'show_room');

const meta: Meta<ShowroomGridComponent> = {
  title: 'Showroom Grid',
  component: ShowroomGridComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [showroomGridData],
              },
            },
          },
        }),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ShowroomGridComponent>;

export const Default: Story = {};

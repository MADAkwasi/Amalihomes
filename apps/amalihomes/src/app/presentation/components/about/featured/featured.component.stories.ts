import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FeaturedComponent } from './featured.component';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from 'apps/amalihomes/src/app/logic/data/testing/mocked-data';

const meritData = mockedStore.content.body.find((item) => item.component === 'merits');

const meta: Meta<FeaturedComponent> = {
  title: 'Featured',
  component: FeaturedComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [meritData],
              },
            },
          },
        }),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<FeaturedComponent>;

export const Default: Story = {};

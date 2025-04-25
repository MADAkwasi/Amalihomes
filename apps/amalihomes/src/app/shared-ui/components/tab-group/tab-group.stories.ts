import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TabGroupComponent } from './tab-group.component';
import { TabButtonComponent } from '../tab-button/tab-button.component';

const meta: Meta<TabGroupComponent> = {
  title: 'Shared/Tab Group',
  component: TabGroupComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [TabButtonComponent],
    }),
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<TabGroupComponent>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Africa', id: 'africa' },
      { label: 'Europe', id: 'europe' },
      { label: 'North America', id: 'north-america' },
      { label: 'South America', id: 'south-america' },
    ],
    selectedTabIdInput: 'europe',
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { label: 'Africa', id: 'africa' },
      { label: 'Europe', id: 'europe' },
      { label: 'North America', id: 'north-america', disabled: true },
      { label: 'South America', id: 'south-america' },
    ],
    selectedTabIdInput: 'europe',
  },
};

export const NoSelection: Story = {
  args: {
    tabs: [
      { label: 'Africa', id: 'africa' },
      { label: 'Europe', id: 'europe' },
      { label: 'North America', id: 'north-america' },
      { label: 'South America', id: 'south-america' },
    ],
    selectedTabIdInput: '',
  },
};

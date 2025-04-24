import { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

const meta: Meta<TabsComponent> = {
  title: 'Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab data to be displayed',
    },
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Tabs: Story = {
  args: {
    tabs: [
      {
        title: 'Tab 1',
        content: 'Content for Tab 1',
      },
      {
        title: 'Tab 2',
        content: 'Content for Tab 2',
      },
      {
        title: 'Tab 3',
        content: 'Content for Tab 3',
      },
    ],
  },
};

import { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { faqsData } from 'apps/amalihomes/src/app/logic/data/constants/faqs';

const meta: Meta<AccordionComponent> = {
  title: 'Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    accordionData: {
      control: 'object',
      description: 'Array of tab data to be displayed',
    },
  },
};

export default meta;

type Story = StoryObj<AccordionComponent>;

export const Tabs: Story = {
  args: {
    accordionData: faqsData[0].content,
  },
};

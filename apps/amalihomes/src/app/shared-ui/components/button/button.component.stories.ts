import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

type StoryButtonInputs = {
  type: 'primary' | 'secondary' | 'tetiary';
  state: 'default' | 'disabled';
  size: 'small' | 'medium' | 'large';
  buttonType: 'submit' | 'button';
  title: string;
  buttonIdentifier: string;
  buttonStyles: string;
};

const meta: Meta<StoryButtonInputs> = {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['primary', 'secondary', 'tetiary'] },
    state: { control: 'radio', options: ['default', 'disabled'] },
    buttonType: { control: 'radio', options: ['submit', 'button'] },
  },
  args: {
    type: 'primary',
    state: 'default',
    buttonType: 'button',
    title: '',
    buttonIdentifier: 'button-1',
    buttonStyles: '',
  },
};

export default meta;
type Story = StoryObj<StoryButtonInputs>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-button
        [type]="type"
        [state]="state"
        [buttonType]="buttonType"
        [title]="title"
        [buttonIdentifier]="buttonIdentifier"
        [buttonStyles]="buttonStyles"
      >
        <ng-content>Button</ng-content>
      </lib-button>
    `,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    type: 'primary',
  },
  parameters: {
    docs: {
      storyDescription: 'Primary button variant',
    },
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    ...Primary.args,
    type: 'secondary',
  },
};

export const Tetiary: Story = {
  ...Template,
  args: {
    ...Primary.args,
    type: 'tetiary',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    ...Primary.args,
    state: 'disabled',
  },
};

export const WithCustomStyling: Story = {
  ...Template,
  args: {
    ...Primary.args,
    buttonStyles: 'custom-class',
  },
  parameters: {
    docs: {
      source: {
        code: `
          <lib-button
            type="primary"
            buttonIdentifier="custom-btn"
          >
            🚀 Custom Content
          </lib-button>
        `,
      },
    },
  },
};

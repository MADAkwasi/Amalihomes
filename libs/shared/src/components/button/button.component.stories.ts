import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['primary', 'secondary', 'tetiary'] },
    state: { control: 'radio', options: ['default', 'disabled'] },
    buttonType: { control: 'radio', options: ['submit', 'button'] },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    state: 'default',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type" [state]="state" [size]="size" [iconOnly]="iconOnly">
        <span class="icon">button</span>
      </lib-button>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type" [state]="state" [size]="size" [iconOnly]="iconOnly">
        <span class="icon">button</span>
      </lib-button>
    `,
  }),
};
export const Tetiary: Story = {
  args: {
    ...Primary.args,
    type: 'tetiary',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type" [state]="state" [size]="size" [iconOnly]="iconOnly">
        <span class="icon">button</span>
      </lib-button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    state: 'disabled',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type" [state]="state" [size]="size">
        <span class="icon">button</span>
      </lib-button>
    `,
  }),
};

export const IconOnly: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button [type]="type" [state]="state" [size]="size">
        <span class="icon">✖️</span>
      </lib-button>
    `,
  }),
};

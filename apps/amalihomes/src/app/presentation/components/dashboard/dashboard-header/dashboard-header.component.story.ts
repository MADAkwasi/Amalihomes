import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, Bell, User } from 'lucide-angular';
import { ButtonComponent, InputComponent, TextDirective } from '@amalihomes/shared';
import { DashboardHeaderComponent } from './dashboard-header.component';

const meta: Meta<DashboardHeaderComponent> = {
  title: 'CookieBanner',
  component: DashboardHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LucideAngularModule.pick({ Search, Notification: Bell, User }),
        ButtonComponent,
        TextDirective,
        InputComponent,
      ],
      providers: [],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<DashboardHeaderComponent>;

export const Default: Story = {};

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, Bell, User } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { NavaigationPanelComponent } from './navaigation-panel.component';
import { LogoComponent } from '../../svg-icons';
import { MessageIconComponent } from '../../svg-icons/message-icon/message-icon.component';
import { RouterLink } from '@angular/router';

const meta: Meta<NavaigationPanelComponent> = {
  title: 'CookieBanner',
  component: NavaigationPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LucideAngularModule.pick({ Search, Notification: Bell, User }),
        ButtonComponent,
        TextDirective,
        LogoComponent,
        MessageIconComponent,
        RouterLink,
      ],
      providers: [],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<NavaigationPanelComponent>;

export const Default: Story = {};

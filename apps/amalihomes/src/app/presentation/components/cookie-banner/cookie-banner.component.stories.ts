import { Meta, StoryObj } from '@storybook/angular';
import { CookieBannerComponent } from './cookie-banner.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, Check } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';

const meta: Meta<CookieBannerComponent> = {
  title: 'CookieBanner',
  component: CookieBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, LucideAngularModule.pick({ X, Check }), ButtonComponent, TextDirective],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<CookieBannerComponent>;

export const Default: Story = {};

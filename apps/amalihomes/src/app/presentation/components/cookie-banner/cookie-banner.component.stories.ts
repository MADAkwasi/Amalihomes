import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CookieBannerComponent } from './cookie-banner.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, Check } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { provideMockStore } from '@ngrx/store/testing';
import { mockedStore } from 'apps/amalihomes/src/app/logic/data/testing/mocked-data';

const meta: Meta<CookieBannerComponent> = {
  title: 'CookieBanner',
  component: CookieBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, LucideAngularModule.pick({ X, Check }), ButtonComponent, TextDirective],
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockedStore.content.body.find((item) => item.component === 'cookie_consent_banner')],
              },
            },
          },
        }),
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<CookieBannerComponent>;

export const Default: Story = {};

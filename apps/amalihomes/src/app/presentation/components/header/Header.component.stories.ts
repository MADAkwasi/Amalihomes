import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { selectUserAuthenticationState } from '../../../logic/stores/selectors/auth.selector';
import { mockedStore } from '../../../logic/data/testing/mocked-data';
import { mockHeaderData, MockedUser, mockRoutes } from '../../../logic/data/header';

const cookieBannerData = mockedStore.content.body.find((item) => item.component === 'cookie_consent_banner');

const meta: Meta<HeaderComponent> = {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockHeaderData, cookieBannerData],
              },
              locale: mockHeaderData.locale[0],
            },
            interactions: {
              isMenuOpen: false,
              isSearching: false,
            },
            auth: {
              user: null,
            },
          },
          selectors: [
            {
              selector: selectUserAuthenticationState,
              value: { user: null },
            },
          ],
        }),
        provideRouter(mockRoutes),
        importProvidersFrom(HttpClientModule),
      ],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

const commonParameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
};

export const Default: Story = {
  parameters: commonParameters,
};

export const LoadingState: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: null,
            },
            interactions: {
              isMenuOpen: false,
              isSearching: false,
            },
            auth: {
              user: null,
            },
          },
        }),
      ],
    }),
  ],
  parameters: commonParameters,
};

export const WithSearchOpen: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockHeaderData, cookieBannerData],
              },
              locale: mockHeaderData.locale[0],
            },
            interactions: {
              isMenuOpen: false,
              isSearching: true,
            },
            auth: {
              user: null,
            },
          },
        }),
      ],
    }),
  ],
  parameters: commonParameters,
};

export const Authenticated: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockHeaderData, cookieBannerData],
              },
              locale: mockHeaderData.locale[0],
            },
            interactions: {
              isMenuOpen: false,
              isSearching: false,
            },
            auth: {
              user: MockedUser.user,
            },
          },
          selectors: [
            {
              selector: selectUserAuthenticationState,
              value: { user: MockedUser.user },
            },
          ],
        }),
      ],
    }),
  ],
  parameters: commonParameters,
};

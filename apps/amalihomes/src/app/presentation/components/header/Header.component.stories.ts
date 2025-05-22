import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { localization } from '../../../logic/data/constants/localization';
import { selectUserAuthenticationState } from '../../../logic/stores/selectors/auth.selector';
import { mockedStore } from '../../../logic/data/testing/mocked-data';

const mockRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: class HomeComponent {} },
  { path: 'shop', component: class ShopComponent {} },
  { path: 'about', component: class AboutComponent {} },
  { path: 'faqs', component: class FAQsComponent {} },
  { path: 'news', component: class NewsComponent {} },
  {
    path: 'account',
    children: [
      { path: 'overview', component: class AccountOverviewComponent {} },
      { path: 'orders', component: class OrdersComponent {} },
      { path: 'addresses', component: class AddressesComponent {} },
      { path: 'payment-methods', component: class PaymentMethodsComponent {} },
      { path: 'settings', component: class SettingsComponent {} },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

const cookieBannerData = mockedStore.content.body.find((item) => item.component === 'cookie_consent_banner');

const mockHeaderData = {
  component: 'header',
  key: 'header',
  navLinks: [
    { href: { id: 'home', url: '/home' }, text: 'Home' },
    { href: { id: 'shop', url: '/shop' }, text: 'Shop' },
    { href: { id: 'about', url: '/about' }, text: 'About' },
    { href: { id: 'faqs', url: '/faqs' }, text: 'FAQs' },
    { href: { id: 'news', url: '/news' }, text: 'News' },
  ],
  buttonText: 'Login',
  inputPlaceholder: 'Search product...',
  locale: localization,
};

const MockedUser = {
  user: {
    id: '123',
    email: 'john.doe@example.com',
    phone: '+233123456789',
    full_name: 'John Doe',
    username: 'johndoe',
    avatar_url: 'https://example.com/avatar.jpg',
  },
};

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

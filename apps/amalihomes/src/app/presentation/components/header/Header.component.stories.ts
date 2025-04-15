import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { localization } from '../../../logic/data/constants/localization';

const mockRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: {} as any },
  { path: 'shop', component: {} as any },
  { path: 'about', component: {} as any },
  { path: 'faqs', component: {} as any },
  { path: 'news', component: {} as any },
  { path: '**', redirectTo: '/home' },
];

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
                body: [mockHeaderData],
              },
              locale: mockHeaderData.locale[0],
            },
            interactions: {
              isMenuOpen: false,
              isSearching: false,
            },
          },
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

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isAuthenticated: false,
  },
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
          },
        }),
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithSearchOpen: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockHeaderData],
              },
              locale: mockHeaderData.locale[0],
            },
            interactions: {
              isMenuOpen: false,
              isSearching: true,
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

export const AuthenticatedUser: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockHeaderData],
              },
              locale: mockHeaderData.locale[0],
            },
            interactions: {
              isMenuOpen: false,
              isSearching: false,
            },
          },
        }),
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isAuthenticated: true,
  },
};

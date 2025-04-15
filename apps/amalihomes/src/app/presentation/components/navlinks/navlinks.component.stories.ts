import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { NavlinksComponent } from './navlinks.component';
import { Routes } from '@angular/router';

const mockRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: {} as any },
  { path: 'shop', component: {} as any },
  { path: 'about', component: {} as any },
  { path: 'faqs', component: {} as any },
  { path: 'news', component: {} as any },
  { path: '**', redirectTo: '/home' },
];

const meta: Meta<NavlinksComponent> = {
  title: 'NavLinks',
  component: NavlinksComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            interactions: {
              isMenuOpen: false,
            },
          },
        }),
        provideRouter(mockRoutes),
      ],
    }),
  ],
  tags: ['autodocs'],
  args: {
    navLinks: [
      { href: { id: 'home', url: '/home' }, text: 'Home' },
      { href: { id: 'shop', url: '/shop' }, text: 'Shop' },
      { href: { id: 'about', url: '/about' }, text: 'About' },
      { href: { id: 'faqs', url: '/faqs' }, text: 'FAQs' },
      { href: { id: 'news', url: '/news' }, text: 'News' },
    ],
  },
};

export default meta;

type Story = StoryObj<NavlinksComponent>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};

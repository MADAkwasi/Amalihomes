import { Routes } from '@angular/router';
import { localization } from '../../../logic/data/constants/localization';

export const mockRoutes: Routes = [
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

export const mockHeaderData = {
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

export const MockedUser = {
  user: {
    id: '123',
    email: 'john.doe@example.com',
    phone: '+233123456789',
    full_name: 'John Doe',
    username: 'johndoe',
    avatar_url: 'https://example.com/avatar.jpg',
  },
};

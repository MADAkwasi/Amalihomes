import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./presentation/pages/home/home.component').then((Default) => Default.HomeComponent),
  },
  {
    path: 'shop',
    loadComponent: () => import('./presentation/pages/shop/shop.component').then((Default) => Default.ShopComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./presentation/pages/about/about.component').then((Default) => Default.AboutComponent),
  },
  {
    path: 'faqs',
    loadComponent: () => import('./presentation/pages/faq/faq.component').then((Default) => Default.FaqComponent),
  },
  {
    path: 'news',
    loadComponent: () => import('./presentation/pages/news/news.component').then((Default) => Default.NewsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./presentation/components/not-found/not-found.component').then((Default) => Default.NotFoundComponent),
  },
];

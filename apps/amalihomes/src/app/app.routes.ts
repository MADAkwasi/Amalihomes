import { Route } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'shop',
  //   loadComponent: () => import('./presentation/pages/shop/shop.component').then((Default) => Default.ShopComponent),
  // },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./presentation/pages/about/about.component').then((Default) => Default.AboutComponent),
  // },
  // {
  //   path: 'faqs',
  //   loadComponent: () => import('./presentation/pages/faq/faq.component').then((Default) => Default.FaqComponent),
  // },
  // {
  //   path: 'news',
  //   loadComponent: () => import('./presentation/pages/news/news.component').then((Default) => Default.NewsComponent),
  // },
  {
    path: '**',
    loadComponent: () =>
      import('./presentation/pages/under-construction/under-construction.component').then(
        (Default) => Default.UnderConstructionComponent,
      ),
  },
  // {
  //   path: '**',
  //   loadComponent: () =>
  //     import('./presentation/components/not-found/not-found.component').then((Default) => Default.NotFoundComponent),
  // },
];

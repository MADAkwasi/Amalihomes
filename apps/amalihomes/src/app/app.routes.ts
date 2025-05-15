import { Route } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./presentation/pages/signup/signup.component').then((Default) => Default.SignupComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./presentation/pages/login/login.component').then((Default) => Default.SignInComponent),
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
    path: 'shop/product/:productId',
    loadComponent: () =>
      import('./presentation/pages/product-details/product-details.component').then(
        (Default) => Default.ProductDetailsComponent,
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./presentation/pages/under-construction/under-construction.component').then(
        (Default) => Default.UnderConstructionComponent,
      ),
  },
];

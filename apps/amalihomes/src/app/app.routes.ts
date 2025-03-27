import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./presentation/pages/home/home.component').then((Default) => Default.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./presentation/components/not-found/not-found.component').then((Default) => Default.NotFoundComponent),
  },
];

import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./presentation/pages/home/home.component').then((Default) => Default.HomeComponent),
  },

  {
    path: '**',
    component: AppComponent,
  },
];

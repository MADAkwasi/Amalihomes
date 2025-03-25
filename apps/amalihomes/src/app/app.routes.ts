import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./presentation/pages/home/home.component').then((Default) => Default.HomeComponent),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '**',
    component: AppComponent,
  },
];

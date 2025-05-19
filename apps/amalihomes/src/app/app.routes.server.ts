import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'login',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'signup',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'faqs',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shop',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shop/product/:productId',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dashboard',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];

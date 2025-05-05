import { createNodeRequestHandler, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { angularAppRouter, environment } from './backend';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = environment.PRODUCTION
  ? resolve(serverDistFolder, '../../static')
  : resolve(serverDistFolder, '../browser');

const app = express();

// Handle static files
app.use(
  express.static(browserDistFolder, {
    maxAge: environment.PRODUCTION ? '1d' : 0,
    index: false,
    redirect: false,
  }),
);

if (!environment.PRODUCTION) {
  const devBlockingRequests = ['/null'];

  app.get(devBlockingRequests, (req, res) => res.status(404).end(`404 Not Found`));
}

// Handle all other request using angular router
app.get('*', angularAppRouter);

// Handle application errors errors
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).end();
});

// Start the server if this module is the main entry point.
if (isMainModule(import.meta.url)) {
  const port = environment.SERVER_PORT ?? 3000;

  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
// NOTE: DO NOT CHANGE VARIABLE NAME `reqHandler`
export const reqHandler = createNodeRequestHandler(app);

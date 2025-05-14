import { AngularNodeAppEngine, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';

export const angularAppRouter = express.Router();

const angularApp = new AngularNodeAppEngine();
/**
 * Handle all other requests by rendering the Angular application.
 */
angularAppRouter.use('*', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

import { Application } from 'express';
import { AppRoutes } from './routes';

export default function routes(app: Application): void {
  AppRoutes.forEach((route) => {
    app[route.method]('/api/v1' + route.path, route.middlewares, route.controller);
  });
}

import { Request } from 'express';
import { debounce } from '../utils';

const activeRoute = (routeArr: any, path: string) =>
  routeArr[0].routes.filter((route: any) => route.path === path);
const notFoundRoute = (routeArr: any, path: string) =>
  routeArr[0].routes.filter((route: any) => route.path === 'not-found');

export const renderRoutes = (routesArray: any, req: Request | null): string => {
  let path: string;
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
    console.log('path', path);
  } else {
    path = req ? req.originalUrl : '/';
  }
  let route: any = activeRoute(routesArray, path);
  if (!route.length) {
    route = notFoundRoute(routesArray, path);
  }
  const component = new route[0].component();
  return component.render();
};

export const onUrlChange = (cb: any) => {
  window.addEventListener('popstate', () => {
    debounce(cb, 10);
  });
  cb();
};

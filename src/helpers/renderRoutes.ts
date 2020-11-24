export const renderRoutes = (routesArray: any): string => {
  const activeRoute = routesArray[0].routes.filter(
    (route: any) => route.path === window.location.pathname
  );
  if (!activeRoute.length) return '<h1>Page Not found</h1>';
  const component = new activeRoute[0].component();
  return component.render();
};

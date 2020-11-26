export const pushUrl = (href: string) => {
  history.pushState({}, '', href);
  window.dispatchEvent(new Event('popstate'));
};

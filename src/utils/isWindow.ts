export const isWindow = (cb: any) => {
  const windowReady = setInterval(() => {
    if (typeof window !== 'undefined') {
      cb();
      clearInterval(windowReady);
    }
  }, 10);
};

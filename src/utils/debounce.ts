export const debounce = (func: any, delay: any) => {
  let debounceTimer: any;
  return (function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(), delay);
  })();
};

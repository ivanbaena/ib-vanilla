import { debounce } from '../utils';
interface ConfigProps {
  attributes: boolean;
  childList: boolean;
  subtree: boolean;
  characterData: boolean;
}

export class Observe {
  constructor() {}
  static domObserver = (
    target: string,
    params: ConfigProps,
    initProps: any
  ) => {
    // Select the node that will be observed for mutations
    const root = document.querySelector('#root');
    let targetNode = document.querySelector(target);

    // If no targetNode exit
    if (!root) return;

    // initlize element props
    initProps(targetNode);

    // Options for the observer (which mutations to observe)
    const config = { ...params };
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList: any, observer: any) {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          targetNode = document.querySelector(target);
          if (targetNode) {
            debounce(() => initProps(targetNode), 10);
          }
        } else if (mutation.type === 'attributes') {
          console.log(
            'The ' + mutation.attributeName + ' attribute was modified.'
          );
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(root, config);

    // // Later, you can stop observing
    // observer.disconnect();
  };
}

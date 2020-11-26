import { debounce } from '../utils';
interface ConfigProps {
  attributes: boolean;
  childList: boolean;
  subtree: boolean;
  characterData: boolean;
}

export const observe = (
  target: string,
  params: ConfigProps,
  initProps: any
) => {
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector('#root');
  let link = document.querySelector('#link');

  // If no target exit
  if (!targetNode) return;
  // initlize element props
  initProps(link);
  // Options for the observer (which mutations to observe)
  const config = { ...params };
  // Callback function to execute when mutations are observed
  const callback = function (mutationsList: any, observer: any) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
      console.log(mutation);

      if (mutation.type === 'childList') {
        link = document.querySelector('#link');
        console.log('A child node has been added or removed.', link);
        if (link) {
          debounce(() => initProps(link), 1000);
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
  observer.observe(targetNode, config);

  // // Later, you can stop observing
  // observer.disconnect();
};

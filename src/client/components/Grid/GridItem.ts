import { createProps, hasString } from './helpers/';

export interface GridItemProps {
  id?: string | undefined;
  class?: string | undefined;
  gridColumnStart?: string | number;
  gridColumnEnd?: string | number;
  gridRowStart?: string | number;
  gridRowEnd?: string | number;
  gridArea?: string | number;
  justifySelf?: string;
  alignSelf?: string;
  placeSelf?: string;
}
export class GridItem {
  static render(children: string, props: GridItemProps) {
    const itemProps = {
      container: {},
      item: props,
      isContainer: false,
    };

    const style = createProps(itemProps);
    const className = `grid item ${hasString(props.class)}`;
    const hasId =
      hasString(props.id).length !== 0
        ? `id='${hasString(props.id).trim()}'`
        : ''.trim();
    return `<div ${hasId} class='${className.trim()}' style='${style}'>${children}</div>`;
  }
}

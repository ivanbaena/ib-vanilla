import { sheet, insertRule } from '../../sheet';
import { styles } from './Container.css';
import { createProps, hasString } from './helpers/';

export interface ContainerProps {
  id?: string | undefined;
  class?: string | undefined;
  inlineGrid?: Boolean;
  gridTemplateColumns?: string | undefined;
  gridTemplateRows?: string | undefined;
  gridTemplateAreas?: string | undefined;
  grid?: string | undefined;
  gap?: string | undefined;
  placeContent?: string | undefined;
  gridAutoColumns?: string | undefined;
  gridAutoRows?: string | undefined;
}
insertRule(sheet, styles);
export class Container {
  static render(children: string, props: ContainerProps) {
    const containerProps = {
      container: props,
      item: {},
      isContainer: true,
    };
    const style = createProps(containerProps);
    const grid = props.inlineGrid ? 'inline-grid' : 'grid';
    const className = `${grid} container ${hasString(props.class)}`;
    const hasId =
      hasString(props.id).length !== 0
        ? `id='${hasString(props.id).trim()}'`
        : ''.trim();

    return `<div ${hasId} class='${className.trim()}' style="${style}">${children}</div>`;
  }
}

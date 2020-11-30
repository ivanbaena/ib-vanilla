export const createProps = ({
  container: {
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    grid,
    gap,
    placeContent,
    gridAutoColumns,
    gridAutoRows,
  },
  item: {
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
    gridArea,
    justifySelf,
    alignSelf,
    placeSelf,
  },
  isContainer,
}: {
  container: any;
  item: any;
  isContainer: boolean;
}) => {
  let props: { [key: string]: string | undefined } = isContainer
    ? {
        'grid-template-columns': gridTemplateColumns,
        'grid-template-rows': gridTemplateRows,
        'grid-template-areas': gridTemplateAreas,
        grid: grid,
        gap: gap,
        'place-content': placeContent,
        'grid-auto-columns': gridAutoColumns,
        'grid-auto-rows': gridAutoRows,
      }
    : {
        'grid-column-start': gridColumnStart,
        'grid-column-end': gridColumnEnd,
        'grid-row-start': gridRowStart,
        'grid-row-end': gridRowEnd,
        'grid-area': gridArea,
        'justify-self': justifySelf,
        'align-self': alignSelf,
        'place-self': placeSelf,
      };
  let propString = '';
  for (const prop in props) {
    if (typeof props[prop] !== 'undefined') {
      propString += `${prop}:${props[prop]};`;
    }
  }

  return propString;
};

export const hasString = (str: string | undefined) =>
  typeof str === 'undefined' ? '' : str;

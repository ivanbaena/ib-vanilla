/* Constructed css sheet - chrome only */
// export const sheet: undefined | CSSStyleSheet =
//   typeof window !== 'undefined' ? new CSSStyleSheet() : undefined;

// const style: HTMLStyleElement | undefined =
//   typeof window !== 'undefined' ? document.createElement('style') : undefined;

class Sheet {
  constructor(public id: string) {
    this.id = id;
    const a = document.createElement('style');
    a.id = id;
    return a;
  }
}

export const sheet: null | HTMLStyleElement | any =
  typeof window !== 'undefined' ? new Sheet('main') : null;

export const insertRule = (
  sheet: HTMLStyleElement | null,
  style: string
): void => {
  typeof window !== 'undefined' && sheet && clientSheet(sheet, style);
};

export const inlineStyle = (style: string): string => {
  return `
    <style>
      ${style.replace(/\n|\r/g, '').trim()}
    </style>
  `
    .replace(/\n|\r/g, '')
    .trim();
};

export const clientSheet = (sheet: HTMLStyleElement, styleString: string) => {
  if (typeof window !== 'undefined') {
    const domReady = setInterval(() => {
      let in_dom = document.head.contains(sheet);
      if (in_dom) {
        const cssSheet: CSSStyleSheet | null | any = sheet.sheet;
        cssSheet?.insertRule(styleString);
        clearInterval(domReady);
        return;
      }
    }, 10);
  }
};

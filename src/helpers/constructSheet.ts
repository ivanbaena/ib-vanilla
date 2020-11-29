export const constructSheet = (
  styleSheet: HTMLStyleElement | null
): StyleSheet | CSSStyleSheet | null => {
  if (!styleSheet) return null;
  // Apply the stylesheet to document:
  const Document: Document = document;
  // Document.adoptedStyleSheets = [styleSheet];
  const style = Document.head.appendChild(styleSheet);
  return style.sheet;
};

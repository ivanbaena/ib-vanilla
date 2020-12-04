export interface ComponentInterface {
  state?: any;
  render(): string | void;
  didRender?(): void;
  didUpdate?(): void;
}

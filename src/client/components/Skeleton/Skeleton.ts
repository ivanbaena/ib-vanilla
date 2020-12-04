interface SkeletonProps {
  style: string;
  component: Function;
}
export class Skeleton {
  static render(props: SkeletonProps): string {
    return `${props.component(props.style)}`;
  }
}

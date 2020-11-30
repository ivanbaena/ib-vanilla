interface SkeletonProps {
  style: string;
  component: string;
}
export class Skeleton {
  static render(props: SkeletonProps): string {
    return `${props.component}`;
  }
}

import { skeletonColor } from '../../styles/';

export const LinkSkeleton: { style: string; component: Function } = {
  style: `background-color: ${skeletonColor}; height: 30px;width: 90px;margin-right: 1rem;`,
  component: (
    style: string
  ): string => `<div class="skeleton link" style="${style}"></div>
`,
};

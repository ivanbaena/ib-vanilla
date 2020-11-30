import { skeletonColor } from '../../styles/';

export const LinkSkeleton: { style: string; component: string } = {
  style: `<style>
  .skeleton {
    background-color: ${skeletonColor};
  }
  .link {
    height: 30px;
    width: 90px;
    margin-right: 1rem;
  }
</style>`,
  component: `<div class="skeleton link" style="background-color: ${skeletonColor}; height: 30px;width: 90px;margin-right: 1rem;"></div>
`,
};

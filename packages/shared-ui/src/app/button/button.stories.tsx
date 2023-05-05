import type { Meta } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  args: {
    children: 'Fancy Button',
    variant: 'contained',
  },
};
export default Story;

export const Primary = {
  args: {},
};

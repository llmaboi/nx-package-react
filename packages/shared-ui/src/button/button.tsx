import MuiButton from '@mui/material/Button';
import { ComponentProps } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ComponentProps<typeof MuiButton>) {
  return <MuiButton {...props} />;
}

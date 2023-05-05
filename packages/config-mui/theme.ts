import { createTheme } from '@mui/material/styles';
import { red, deepPurple } from '@mui/material/colors';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red[400],
    },
  },
});

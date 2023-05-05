import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { StorybookConfig } from '@storybook/react-vite';
import { theme } from 'config-mui';
import { Preview, Decorator } from '@storybook/react';

const withMuiTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withMuiTheme],
};

export default preview;

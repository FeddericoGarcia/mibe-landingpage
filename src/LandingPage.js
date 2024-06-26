import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import PersonInformation from './components/PersonInformation';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import Description from './components/Description';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Description />
        <Testimonials />
        <Divider />
        <PersonInformation />
        <Pricing />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
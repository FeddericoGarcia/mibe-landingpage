import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import PersonInformation from './components/PersonInformation';
import Footer from './components/Footer';
import Description from './components/Description';
import getLPTheme from './getLPTheme';

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
        <PersonInformation />
        <Testimonials />
        <Contact/>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
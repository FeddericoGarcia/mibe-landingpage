import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

//TODO: ENLAZAR LAS URL DE LAS SECTION-ID CUANDO SE TERMINEN

const logoStyle = {
  width: '250px',
  height: 'auto',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'no-wrap',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box style={logoStyle} onClick={() => scrollToSection('hero')}> 
            < SelfImprovementIcon  sx={{ fontSize: '40px', mr: 2, color:"text.primary" ? "text.primary" : "text.secondary.dark" }} />
              <Typography variant="h6" color="text.primary" sx={{
                  fontFamily: 'Playwrite NZ',
                  fontOpticalSizing: 'auto',
                  fontWeight: '600',
                  fontStyle: 'normal',
              }} >
                Miriam Bengolea
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                ml: '-18px',
                px: '20px',
              }}
            >
              <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                <MenuItem
                  onClick={() => scrollToSection('taichi')}
                  sx={{ py: '6px',px: '12px'}}
                >
                  <Typography variant="body2" color="text.primary" id='typograMontserrat'>
                    Tai-chi
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('chikung')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" id='typograMontserrat'>
                    Chi-kung
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('testimonials')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" id='typograMontserrat'>
                  Testimonios
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('quien-soy')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" id='typograMontserrat'>
                    ¿Quien soy?
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('contacto')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" id='typograMontserrat'>
                    Contáctame
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <Divider />
                  <MenuItem onClick={() => scrollToSection('taichi')} id='typograMontserrat'>
                    Tai-chi
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('chikung')} id='typograMontserrat'>
                    Chi-kung
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')} id='typograMontserrat'>
                    Testimonios
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('quien-soy')} id='typograMontserrat'>
                  ¿Quien soy?
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('contacto')} id='typograMontserrat'>
                  Contáctame
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
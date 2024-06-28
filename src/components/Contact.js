import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <Container
      id="contacto"
      sx={{
        // pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
            id="typograMontserrat"
            component="h2"
            variant="h2"
            mb="1rem"
            sx={{
                color: (theme) =>
                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
            }}
            >
          Contáctame
        </Typography>
        <Typography variant="body1" color="text.primary">
          Completá el formulario y a la brevedad me contactaré contigo para asesorarte sobre mis cursos
        </Typography>
      </Box>
      
      <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: '1px solid',
                borderColor:'primary.main',
                // background: 'linear-gradient(#033363, #021F3B)'
              }}
            >
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'grey.100',
                    gap: 2.5,
                    '& > :not(style)': { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                    {/* TODO: AJUSTAR ESTILOS DEL LABEL AL CLICKEAR */}

                  <TextField id="name" label="Nombre completo" variant="outlined" sx={{color: "FFF"}}/>
                  <TextField id="telephone" label="Teléfono" variant="outlined" />
                  <TextField id="email" label="Correo electrónico" variant="outlined" />

                </Box>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="__blank"
                >
                  Enviar
                </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
    </Container>
  );
}
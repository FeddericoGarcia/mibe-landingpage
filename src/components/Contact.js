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
import { alpha } from '@mui/material';

export default function Contact() {
  return (
    <Container
      id="contacto"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        mt: '7em'
      }}
    >
      <Box
        sx={{
          width: { xs:'75%', sm: '80%'},
          textAlign: 'center' ,
          pb: '1em'
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
            sm={8}
            md={5}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                outline: '1px solid',
                outlineColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? alpha('#BFCCD9', 0.5)
                    : alpha('#9CCCFC', 0.1),
                boxShadow: (theme) =>
                  theme.palette.mode === 'light'
                    ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                    : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
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

                  <TextField id="name" label="Nombre completo" variant="outlined"/>
                  <TextField id="telephone" label="Teléfono" variant="outlined" />
                  <TextField id="email" label="Correo electrónico" variant="outlined" />
                  <TextField id="text" placeholder="Hola, quisiera más información sobre tus clases..." variant="outlined" multiline rows={4} />

                </Box>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href="#"
                  target="__blank"
                  sx={{
                    letterSpacing: '.2em',
                  }}
                >
                  {'Enviar'.toUpperCase()}
                </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
    </Container>
  );
}
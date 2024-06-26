import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    name: 'Beatriz Jimenez',
    occupation: 'Alumna',
    testimonial:
    "¡No puedo creer cuánto ha transformado mi vida el Tai Chi! Las clases con la Prof. Miriam Bengolea son realmente inspiradoras y promueven no sólo la fuerza física, sino también la paz mental"
  },
  {
    name: 'Silvia Rivero',
    occupation: 'Alumna',
    testimonial:
      "Las clases de Tai Chi han cambiado las reglas del juego para mí. He notado mejoras en mi equilibrio, flexibilidad y bienestar general. Además, el ambiente tranquilo hace que sea fácil relajarse después de un largo día",
  },
  {
    name: 'Cindy Baker',
    occupation: 'Alumna',
    testimonial:
      'El Tai Chi me ha ayudado a encontrar la armonía y el equilibrio interior. La orientación y la experiencia de la profesora Miriam crean una atmósfera enriquecedora, haciendo de cada clase una experiencia única y enriquecedora',
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonios
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
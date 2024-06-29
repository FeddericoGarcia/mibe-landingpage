import * as React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


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
    name: 'Cindy A.',
    occupation: 'Alumna',
    testimonial:
      'El Tai Chi me ha ayudado a encontrar la armonía y el equilibrio interior. La orientación y la experiencia de la profesora Miriam crean una atmósfera enriquecedora, haciendo de cada clase una experiencia única y enriquecedora',
  },
  {
    name: 'Hernan Rodriguez',
    occupation: 'Alumno',
    testimonial:
    'No puedo explicar lo bien que me ha realizado tomar las clases con la Prof. Miriam, la explicación que imparte es muy recomendada, es un cambio total para mi vida'
  },
];

const settingsSlider = {
  dots: true,
  infinite: true,
  speed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
};

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pb: { xs: 8, sm: 16 },
        mt: { xs: 8, sm: 16 },
        mb: { xs: 8, sm: 16 },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          pb: "3rem",
          pt: "2rem"
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary" id="typograMontserrat">
          Testimonios
        </Typography>
      </Box>
      <Slider {...settingsSlider} >
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                m: "5em",
                p: "2em"                
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{
                  lineHeight: 2,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}>
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
      </Slider >
    </Container>
  );
}

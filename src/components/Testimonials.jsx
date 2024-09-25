import * as React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const userTestimonials = [
  {
    name: "Beatriz Salvatierra",
    occupation: "Alumna",
    testimonial:
      "¡No puedo creer cuánto ha transformado mi vida el Tai Chi! Las clases con la Prof. Miriam Bengolea son realmente inspiradoras y promueven no sólo la fuerza física, sino también la paz mental",
  },
  {
    name: "Silvia Gonzalez",
    occupation: "Alumna",
    testimonial:
      "Las clases de Tai Chi han cambiado las reglas del juego para mí. He notado mejoras en mi equilibrio, flexibilidad y bienestar general. Además, el ambiente tranquilo hace que sea fácil relajarse después de un largo día",
  },
  {
    name: "Andrea Montoya",
    occupation: "Alumna",
    testimonial:
      "El Tai Chi me ha ayudado a encontrar la armonía y el equilibrio interior. La orientación y la experiencia de la profesora Miriam crean una atmósfera enriquecedora, haciendo de cada clase una experiencia única y enriquecedora",
  },
  {
    name: "Hernan Rodriguez Basualdo",
    occupation: "Alumno",
    testimonial:
      "No puedo explicar lo bien que me ha realizado tomar las clases con la Prof. Miriam, la explicación que imparte es muy recomendada, es un cambio total para mi vida",
  },
];

const settingsSlider = {
  dots: true,
  infinite: true,
  speed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        heigth: "auto",
        width: "auto",
        overflow: "hidden",
        mb: { xs: 4, sm: 6, md: 12 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          pb: "3rem",
          pt: "2rem",
        }}
      >
        <Typography
          className="typograhyPlaywrite"
          component="h2"
          variant="h2"
          mb="1rem"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}
        >
          Testimonios
        </Typography>
      </Box>
      <Box sx={{
        height: "auto",
        width: "100%",
      }}>
        <Slider {...settingsSlider}>
          {userTestimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              margin={3}
              key={index}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  p: { xs: 0, sm: 0, md: "2em" },
                  marginInline: "2rem",
                  width: "auto",
                }}
              >
                <CardContent sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 2,
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      position: "relative",
                      p: "2.2rem",
                    }}
                  >
                    <FormatQuoteRoundedIcon sx={{
                      transform: "rotate(180deg)",
                      fontSize: "6rem",
                      position: "absolute",
                      left: "-1.5rem",
                      top: "-2rem",
                      opacity: .6
                    }} />
                    {testimonial.testimonial}
                    <FormatQuoteRoundedIcon sx={{
                      fontSize: "6rem",
                      position: "absolute",
                      right: "-1.5rem",
                      bottom: "-3.5rem",
                      opacity: .6
                    }} />

                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
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
        </Slider>
      </Box>
    </Container>
  );
}

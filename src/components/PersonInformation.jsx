import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PersonInformation() {
  return (
    <Box sx={{
      mb: { xs: 4, sm: 6, md: 8 },
      p: { xs: 2, sm: 6, md: 8 },
      height: "auto",
      width: "100%"
    }}>
      <Container id="quien-soy" maxWidth="md" sx={{
        display: "flex",
        flexDirection: {
          xs: "column", sm: "column", md: "row"
        },
        alignItems: "center"
      }}>
        <Stack spacing={4}>
          <Typography
            className="typograhyPlaywrite"
            component="h2"
            variant="h2"
            mb="1.8rem"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "primary.main" : "primary.light",
            }}
          >
            ¿Quien Soy?
          </Typography>
          <Box sx={{
            heigth: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "flex-start",
            textAlign: "left",
            position: 'relative'
          }}>

            <Typography variant="body1" fontSize="1rem" sx={{ mb: 3, p: 2 }}>
              Me llamo <b>Miriam Bengolea</b>, soy docente con más de 30 años compartiendo conocimiento, actualmente me dedico a enseñar estas bellas artes marciales.
              Como profesora de Tai Chi y Chi Kung (Qigong), me dedico a ayudar a las personas a encontrar la paz interior, el equilibrio y la armonía a través de estas antiguas prácticas chinas.
              Me enorgullece decir que mis enseñanzas han transformado positivamente la vida de muchas personas, mejorando su equilibrio emocional, flexibilidad y bienestar general de salud.
              Mis crusos son orientados a cualquier persona y edad, suelo brindarlos en espacios abiertos para que toda persona interesada pueda apreciar lo hermoso y delicado que son estas artes.
              Y en otras ocasiones suelo brindar clases más personalizadas.
            </Typography>
          </Box>
        </Stack>
        <Box sx={{
          width: "100%",
          height: "auto",
          mt: { xs: 2, sm: 6, md: 8 },
          p: { xs: 2, sm: 6, md: 0 },
          objectFit: "cover",
          overflow: "hidden",
          minWidth: "400px",
          '& > img': {
            width: "100%",
            height: "auto",
            borderRadius: "7% 25% 6% 25% / 7% 25% 7% 25%",
          }
        }}>
          <img
            src="https://res.cloudinary.com/dipoe9wir/image/upload/v1726697060/miriam-en-madrid_yftjd6.jpg"
            alt="Profesora Miriam Bengolea"
          />
        </Box>
      </Container>
    </Box>

  )
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PersonInformation() {
  return (
    <Box mt="5em" sx={{
      pb: { xs: 4, sm: 6, md: 8 }
    }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Box id="quien-soy" height={450} sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "flex-start",
                textAlign: "left",
                position: 'relative'
            }}>
                <Typography
                    className="typograhyPlaywrite"
                    component="h2"
                    variant="h2"
                    mb="2rem"
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "light" ? "primary.main" : "primary.light",
                    }}
                  >
                ¿ Quien Soy?
                </Typography>
                
                <Typography variant="body1" fontSize="1rem" sx={{ mb: 3, width: '50%' }}>
                Hola 👋, me llamo <b>Miriam Bengolea</b>, soy docente con más de 30 años compartiendo conocimiento, actualmente me dedico a enseñar estas bellas artes marciales. 
                Como profesora de Tai Chi y Chi Kung (Qigong), me dedico a ayudar a las personas a encontrar la paz interior, el equilibrio y la armonía a través de estas antiguas prácticas chinas.
                Me enorgullece decir que mis enseñanzas han transformado positivamente la vida de muchas personas, mejorando su equilibrio emocional, flexibilidad y bienestar general de salud.
                Mis crusos son orientados a cualquier persona y edad, suelo brindarlos en espacios abiertos para que toda persona interesada pueda apreciar lo hermoso y delicado que son estas artes.
                Y en otras ocasiones suelo brindar clases más personalizadas.
                </Typography>
            </Box>
{/* TODO: SOLUCIONAR RENDERIZADO DE IMG */}

            {/* <Box> */}
              <img
                alt="Miriam Bengolea"
                src="../../img/favicon.ico"
                width="100%"
                sx={{ borderRadius: 3 }}
              />
            {/* </Box> */}
          </Stack>
        </Container>
    </Box>

  )
}
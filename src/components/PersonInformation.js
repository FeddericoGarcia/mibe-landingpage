import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PersonInformation() {
  return (
    <Box >
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
                    id="typograMontserrat"
                    component="h2"
                    variant="h2"
                    mb="1rem"
                    sx={{
                        color: (theme) =>
                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    }}
                    >
                ¿ Quien Soy?
                </Typography>
                
                <Typography variant="body1" fontSize="1rem" sx={{ mb: 3, width: '50%' }}>
                Hola 👋, soy <b>Miriam Bengolea</b>, docente con más de 30 años impartiendo conocimiento. Como profesora de Tai Chi y Chi Kung (Qigong), me dedico a ayudar a las personas a encontrar la paz interior, el equilibrio y la armonía a través de estas antiguas prácticas chinas
                Me enorgullece decir que mis enseñanzas han transformado positivamente la vida de muchas personas, mejorando su equilibrio, flexibilidad y bienestar general.
                </Typography>
            </Box>
          </Stack>
        </Container>
    </Box>

  )
}
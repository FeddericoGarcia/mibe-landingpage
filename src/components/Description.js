import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import SportsMartialArtsRoundedIcon from '@mui/icons-material/SportsMartialArtsRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';

export default function Description() {
  return (
    <Box pb={"4em"}>
        <Container maxWidth="md">
          <Stack spacing={12}>
            <Box id="taichi" minHeight={370} sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "flex-start",
                textAlign: "left",
                position: 'relative',
                p: { xs:8, md:12 },
                marginBottom: { xs:"25em", sm:15, md:100 }
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
                Tai Chi
                </Typography>
                
                <Typography variant="body1" fontSize="1rem" sx={{ mb: 3, width: '50%', zIndex: 1 }}>
                Es un arte marcial chino conocido por sus movimientos lentos y elegantes que promueven la serenidad, 
                la concentración y la paz interior. Es una forma de ejercicio que mejora el equilibrio, la flexibilidad 
                y la fuerza muscular, también tiene beneficios para reducir el estrés, lo que lo convierte 
                en una práctica popular para la salud y el bienestar general.
                </Typography>
                <SportsMartialArtsRoundedIcon sx={{
                    position: 'absolute',
                    right: 0,
                    top: 70,
                    color: (theme) =>
                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    fontSize: {xs:'12em', sm:'19em', md:'22em', lg:'25em'},
                    filter: (theme) =>
                            theme.palette.mode === 'light' ? "drop-shadow(10px 5px 5px #0009)" : "drop-shadow(10px 5px 5px #CCC9)",
                    mb: 3,
                    mt: {xs:20, sm:15, md: 3},
                    mr: {xs:0, sm:-3, md: 3},
                }}/>
            </Box>
            <Box id="chikung" sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "flex-end",
                textAlign: "right",
                position: 'relative',
                p: { xs:8, sm:10, md:12 },
                // m: { xs:8, sm:10, md:12 }
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
                Chi Kung
                </Typography>
                <Typography variant="body1" fontSize="1rem" sx={{ mb: 5, width: '50%', zIndex: 1}}>
                También conocido como <b>Qigong</b>, es un sistema chino de ejercicios de meditación, respiración y movimientos. 
                Es una práctica que implica la coordinación de diferentes patrones de respiración con posturas y movimientos 
                físicos para potenciar y equilibrar el flujo de Chi (<i>energía vital</i>) en el cuerpo, promoviendo la salud, 
                la tranquilidad y la longevidad.
                </Typography>
                <Box sx={{
                }}>
                    <SportsGymnasticsRoundedIcon sx={{
                        position: 'absolute',
                        left: 0,
                        top: 70,
                        color: (theme) =>
                            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        fontSize: {xs:'12em', sm:'19em', md:'22em', lg:'25em'},
                        filter: (theme) =>
                            theme.palette.mode === 'light' ? "drop-shadow(10px 5px 5px #0009)" : "drop-shadow(10px 5px 5px #CCC9)",
                        mb: 3,
                        mt: {xs:20, sm:15, md: 3},
                        ml: {xs:0, sm:-2, md: 3},
                    }}/>
                </Box>
            </Box>
            <Divider/>
          </Stack>
        </Container>
    </Box>

  )
}
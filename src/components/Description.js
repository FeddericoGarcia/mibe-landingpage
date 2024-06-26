import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';
import SportsMartialArtsRoundedIcon from '@mui/icons-material/SportsMartialArtsRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
//TODO: AGREGAR SVG AL COSTADO DEL TEXTO

export default function Description() {
  return (
    <Box >
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Box id="taichi" height={450} sx={{
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
                Tai Chi
                </Typography>
                
                <Typography variant="body1" fontSize="1rem" sx={{ mb: 3, width: '50%' }}>
                Es un arte marcial chino conocido por sus movimientos lentos y elegantes que promueven la serenidad, 
                la concentración y la paz interior. Es una forma de ejercicio que mejora el equilibrio, la flexibilidad 
                y la fuerza muscular, también tiene beneficios para reducir el estrés, lo que lo convierte 
                en una práctica popular para la salud y el bienestar general.
                </Typography>
                <SportsMartialArtsRoundedIcon sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    color: (theme) =>
                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    fontSize: '20rem',
                    mb: 3,
                    mt: 3,
                    mr: 3,
                }}/>
            </Box>
            <Divider/>
            <Box id="chikung" height={450} sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "flex-end",
                textAlign: "right",
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
                Chi Kung
                </Typography>
                <Typography variant="body1" fontSize="1rem" sx={{ mb: 3, width: '50%'}}>
                También conocido como <b>Qigong</b>, es un sistema chino de ejercicios de meditación, respiración y movimiento. 
                Es una práctica que implica la coordinación de diferentes patrones de respiración con posturas y movimientos 
                físicos para potenciar y equilibrar el flujo de Chi (<i>energía vital</i>) en el cuerpo, promoviendo la salud, 
                la tranquilidad y la longevidad.
                </Typography>
                <SelfImprovementRoundedIcon sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    color: (theme) =>
                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    fontSize: '20rem',
                    mb: 3,
                    mt: 3,
                    ml: 3,
                }}/>
            </Box>
          </Stack>
        </Container>
    </Box>

  )
}
import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//TODO: TERMINAR FOTO HERO SEGUN TEMA

// const fetchImg = ( theme ) =>{
//   if(theme.palette.mode === 'light') {
//     'url("https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-ocaso_xctl7z.webp")'
//   } else { 
//     'url("https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-bosque_kbkzcu.webp")'
//   }
// }

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row'},
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3rem, 10vw, 4rem)',
              width: "110%",
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Armoniza&nbsp;
            </Typography>
            cuerpo y espíritu
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            variant="subtitle1"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Encuentra tu&nbsp;
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              equilibrio interior&nbsp;
            </Typography>
            y conecta con&nbsp;
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              la paz
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              >
              Prof. Miriam Bengolea
            </Typography>
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            background: 'url("https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-ocaso_xctl7z.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
            transition: 'filter 0.3s ease',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
import * as React from 'react';
import { alpha, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { scrollToSection } from '../helpers/scrollToSection';


export default function Hero({ mode }) {

  const fetchImg = mode === "light"
    ? `url("https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-ocaso_xctl7z.webp")`
    : `https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-bosque_kbkzcu.webp`


  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
        height: 'auto',
        backgroundImage:
          mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: "column", sm: "column", md: 'row' },
          alignItems: 'center',
          p: { xs: 8, sm: 6, md: 4 },
          pt: { xs: 14, sm: 10, md: 4 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={1} useFlexGap sx={{
          alignItems: "center",
          zIndex: 1,
          width: {
            xs: '100%',
            sm: '100%',
          }
        }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3rem, 2.0vw, 4rem)',
              width: "100%",
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 2.0vw, 4rem)',
                color: mode === 'light' ? 'primary.main' : 'primary.light',
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
            sx={{ alignSelf: 'center', width: '100%'}}
          >
            Con mis cursos encontrarás tu&nbsp;
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                color: mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              equilibrio interior&nbsp;
            </Typography>
            y conectarás con&nbsp;
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                color: mode === 'light' ? 'primary.main' : 'primary.light',
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
          <Button onClick={() => scrollToSection("contacto")} sx={{
            width: 300,
          }}>
            Obtén más información
            <Box ml={1} component="span" sx={{ fontWeight: 600 }}>
              &gt;
            </Box>
          </Button>
        </Stack>
        <Box
          id="image"
          sx={() => ({
            mt: { xs: 3, sm: 5 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage: { fetchImg },
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
            transition: 'filter 0.3s ease',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
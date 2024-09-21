import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { scrollToSection } from '../helpers/scrollToSection';


export default function Hero({ mode }) {

  const fetchImg = mode === "dark"
    ? `https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-ocaso_xctl7z.webp`
    : `https://res.cloudinary.com/dipoe9wir/image/upload/v1726269701/personas-taichi-bosque_kbkzcu.webp`

  const styleImg = {
    height: "auto",
    maxHeight: "100vh",
    width: '100%!important',
    backgroundImage: { fetchImg },
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    webkitmaskImage: "linear-gradient(to bottom, black 50%, transparent 98%)",
    maskImage: "linear-gradient(to bottom, black 50%, transparent 98%)",
  }

  const toggleColor = mode === 'light' ? 'primary.main' : 'primary.light'

  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
        height: '100vh',
      })}
    >
      <Container
        sx={{
          height: "100%",
          display: 'flex',
          flexDirection: { xs: "column", sm: "column", md: 'row' },
          alignItems: 'center',
          justifyContent: "center",
          position: "relative",
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
              justifyContent: "center",
              textAlign: 'center',
              fontSize: 'clamp(3rem, 2.0vw, 4rem)',
              width: "100%",
            }}
          >
            <Typography
              component="span"
              variant="h1"
              color={toggleColor}
              sx={{
                fontSize: 'clamp(3rem, 2.0vw, 4rem)',
              }}
            >
              Armoniza&nbsp;
            </Typography>
            cuerpo y espíritu
          </Typography>
          <Typography
            textAlign="center"
            variant="subtitle1"
            sx={{ opacity: .9, textShadow: "0 0 1px #000" }}
          >
            Con mis cursos encontrarás tu&nbsp;
            <Typography
              component="span"
              variant="subtitle1"
              color={toggleColor}
            >
              equilibrio interior&nbsp;
            </Typography>
            y conectarás con&nbsp;
            <Typography
              component="span"
              variant="subtitle1"
              color={toggleColor}
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
            mt: 5,
            border: "1px solid #1F7A1F",
            textShadow: "0 0 1px #0009"
          }}>
            Obtén más información
            <Box ml={1} component="span" sx={{ fontWeight: 600 }}>
              &gt;
            </Box>
          </Button>
        </Stack>
      </Container>
      <Box id="image" style={styleImg} sx={{
        '& > img': {
          width: { xs: "170%", sm: "120%", md: "100%" },
          height: 'auto',
          objectFit: 'cover',
        }
      }}>
        <img
          src={fetchImg}
          alt="Foto de personas realizando TaiChi"
        ></img>
      </Box>
    </Box>
  );
}
import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { alpha } from "@mui/material";

export default function Contact() {
  return (
    <Container
      id="contacto"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        mb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          pb: "1em",
        }}
      >
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
          Contáctame
        </Typography>
        <Typography variant="body1" color="text.primary">
          Completá el formulario y a la brevedad me contactaré contigo para
          asesorarte sobre mis cursos
        </Typography>
      </Box>

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={8} md={5}>
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              outline: "1px solid",
              outlineColor: (theme) =>
                theme.palette.mode === "light"
                  ? alpha("#86ae86", 0.5)
                  : alpha("#529252", 0.1),
              boxShadow: (theme) =>
                theme.palette.mode === "light"
                  ? `0 0 12px 8px ${alpha("#1F7A1F", 0.2)}`
                  : `0 0 24px 12px ${alpha("#1F7A1F", 0.2)}`,
              position: "relative"
            }}>
              <Box sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? `url(https://res.cloudinary.com/dipoe9wir/image/upload/v1726613145/MB-Logo-2_ee9aa8.png)`
                    : `url(https://res.cloudinary.com/dipoe9wir/image/upload/v1726613145/MB-Logo-1_npgizo.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: .1,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}></Box>
            <CardContent>
              <Box
                component="form"
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "grey.100",
                  gap: 2.5,
                  zIndex: 1,
                  "& > :not(style)": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                {/* TODO: AJUSTAR ESTILOS DEL LABEL AL CLICKEAR */}

                <TextField
                  id="name"
                  label="Nombre completo"
                  variant="outlined"
                />
                <TextField id="telephone" label="Teléfono" variant="outlined" />
                <TextField
                  id="email"
                  label="Correo electrónico"
                  variant="outlined"
                />
                <TextField
                  id="text"
                  placeholder="Hola, quisiera más información sobre tus clases..."
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Box>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                component="a"
                href="#"
                target="__blank"
                sx={{
                  fontFamily: "Montserrat",
                  letterSpacing: ".1em",
                  fontWeight: 600,
                  transition: "background 400ms ease-out",
                  '&:hover': {
                    backgroundImage: "linear-gradient(to bottom, #136C13, #51BC51)",
                    boxShadow: "0 0 1px rgba(81, 188, 81, 0.7), 1px 1.5px 2px -1px rgba(81, 188, 81, 0.65), 4px 4px 12px -2.5px rgba(81, 188, 81, 015)"
                  }
                }}
              >
                {"Enviar".toUpperCase()}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

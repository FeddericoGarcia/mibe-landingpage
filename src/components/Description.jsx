import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import SportsMartialArtsRoundedIcon from "@mui/icons-material/SportsMartialArtsRounded";
import SportsGymnasticsRoundedIcon from "@mui/icons-material/SportsGymnasticsRounded";

import SecondaryButton from "./SecondaryButton"

const styleIcon = {
  // m: { xs: 4, sm: 6, md: 8 },
  color: (theme) =>
    theme.palette.mode === "light"
      ? "primary.main"
      : "primary.light",
  fontSize: { xs: "14rem", sm: "14rem", md: "18rem", lg: "20rem" },
  filter: (theme) =>
    theme.palette.mode === "light"
      ? "drop-shadow(10px 5px 5px #0009)"
      : "drop-shadow(10px 5px 5px #CCC9)",
}

export default function Description() {
  return (
    <Container maxWidth="md" heigth="100vh" sx={{ mb: "5rem" }}>
      <Stack spacing={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              heigth: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SportsMartialArtsRoundedIcon sx={styleIcon} />
          </Box>
          <Box
            id="taichi"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              position: "relative",
              p: { xs: 2, sm: 6, md: 8 },
            }}
          >
            <Typography
              className="typograhyPlaywrite"
              component="h2"
              variant="h2"
              mb="2rem"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Tai Chi
            </Typography>

            <Typography
              variant="body1"
              fontSize="1rem"
              sx={{
                mb: 3,
                zIndex: 1,
              }}
            >
              Es un arte marcial chino conocido por sus movimientos lentos y
              elegantes que promueven la serenidad, la concentración y la paz
              interior, también llamado <b>Taichi Chuan</b>. Es una forma de ejercicio que mejora el equilibrio, la
              flexibilidad y la fuerza muscular, también tiene beneficios para
              reducir el estrés, lo que lo convierte en una práctica popular
              para la salud y el bienestar general.
            </Typography>
            <SecondaryButton href="https://es.wikipedia.org/wiki/Taich%C3%AD" title="Conocé más sobre Tai chi" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            id="chikung"
            sx={{
              width: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              textAlign: "right",
              position: "relative",
              p: { xs: 2, sm: 6, md: 8 },
            }}
          >
            <Typography
              className="typograhyPlaywrite"
              component="h2"
              variant="h2"
              mb="2rem"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Chi Kung
            </Typography>
            <Typography
              variant="body1"
              fontSize="1rem"
              sx={{
                mb: 3,
                zIndex: 1,
              }}
            >
              También conocido como <b>Qigong</b>, es un sistema chino de
              ejercicios de meditación, respiración y movimientos. Es una
              práctica que implica la coordinación de diferentes patrones de
              respiración con posturas y movimientos físicos para potenciar y
              equilibrar el flujo de Chi (<i>energía vital</i>) en el cuerpo,
              promoviendo la salud, la tranquilidad y la longevidad.
            </Typography>
            <SecondaryButton href="https://es.wikipedia.org/wiki/Chi_kung" title="Conocé más sobre Chi kung" />
          </Box>
          <Box
            sx={{
              width: "100%",
              heigth: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SportsGymnasticsRoundedIcon sx={styleIcon} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

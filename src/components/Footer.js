import * as React from "react";

import { Box, Container, IconButton, Link, Stack } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function copyright() {
  return (
    <Box variant="body2" color="text.secondary" mt={1}>
      Copyright ©&nbsp;
      <Link href="#">Miriam Bengolea&nbsp;</Link>
      {new Date().getFullYear()}
      <Box sx={{ pt: "1em" }}>
        Made with ❤ by&nbsp;
        <Link
          href="https://github.com/FeddericoGarcia"
          color="inherit"
          target="__blank"
        >
          Fedderico Garcia
        </Link>
      </Box>
    </Box>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {copyright()}
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://api.whatsapp.com/send?phone=5493513002576&text=¡Hola!%20Podr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20clases%20de%20taichi? "
            aria-label="Whatsapp"
            target="__blank"
            sx={{ alignSelf: "center" }}
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/miriam.bengolea.39"
            aria-label="Facebook"
            target="__blank"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/bengoleamiriam/"
            aria-label="Instagram"
            target="__blank"
            sx={{ alignSelf: "center" }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}

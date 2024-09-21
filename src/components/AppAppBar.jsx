import * as React from "react";
import PropTypes from "prop-types";

import {
  Box,
  AppBar,
  Button,
  Container,
  Drawer,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { scrollToSection } from '../helpers/scrollToSection'
import ToggleColorMode from "./ToggleColorMode";

const logoStyle = {
  width: "250px",
  height: "auto",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flex: "no-wrap",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, () => {
      setOpen(false)
    })
  }

  const fetchImg = mode === "light"
    ? `https://res.cloudinary.com/dipoe9wir/image/upload/v1726613145/MB-Logo-2_ee9aa8.png`
    : `https://res.cloudinary.com/dipoe9wir/image/upload/v1726613145/MB-Logo-1_npgizo.png`

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 4,
        animation: "adj-navbar linear both",
        animationTimeline: "scroll()",
        animationRange: "0 500px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "dark"
                ? `0 0 1px rgba(255,255,255, 0.1), 1px 1.5px 2px -1px rgba(255,255,255, 0.15), 4px 4px 12px -2.5px rgba(255,255,255, 0.15)`
                : "0 0 1px rgba(1,1,1, 0.7), 1px 1.5px 2px -1px rgba(1,1,1, 0.65), 4px 4px 12px -2.5px rgba(1,1,1, 0.65)",
          })}
        >
          <Box style={logoStyle} onClick={() => handleScrollToSection("hero")}>
            <img
              src={fetchImg}
              alt="logo"
              width={48}
              height="auto"
            ></img>
            <Typography
              variant="h6"
              color="text.primary"
              className="typograhyPlaywrite"
            >
              Miriam Bengolea
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              ml: "-18px",
              px: "20px",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem
                onClick={() => handleScrollToSection("taichi")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                >
                  Tai-chi
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollToSection("chikung")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                >
                  Chi-kung
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollToSection("quien-soy")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                >
                  ¿Quien soy?
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollToSection("testimonials")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                >
                  Testimonios
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollToSection("contacto")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                >
                  Contáctame
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "40dvw",
                  p: 2,
                  bgcolor: "transparent",
                  // (theme) => (
                  //   theme.palette.mode === "ligth"
                  //     ? "rgba(0, 0, 0, 0.4)"
                  //     : "rgba(0, 0, 0, 0.4)"
                  // ),
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    flexGrow: 1,
                  }}
                >
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                </Box>
                {/* <Divider /> */}
                <MenuItem
                  onClick={() => handleScrollToSection("taichi")}
                >
                  Tai-chi
                </MenuItem>
                <MenuItem
                  onClick={() => handleScrollToSection("chikung")}
                >
                  Chi-kung
                </MenuItem>
                <MenuItem
                  onClick={() => handleScrollToSection("quien-soy")}
                >
                  ¿Quien soy?
                </MenuItem>
                <MenuItem
                  onClick={() => handleScrollToSection("testimonials")}
                >
                  Testimonios
                </MenuItem>
                <MenuItem
                  onClick={() => handleScrollToSection("contacto")}
                >
                  Contáctame
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;

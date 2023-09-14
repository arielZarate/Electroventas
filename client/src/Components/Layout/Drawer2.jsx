import React from "react";
import { styled as styles } from "@mui/material/styles";
import styled from "styled-components";

//dependencias material-ui
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Button,
  Container,
  IconButton,
  Toolbar,
  Drawer,
  Box,
  Grid,
} from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import SortBar from "./SortBar";
import Footer from "./Footer";
const drawerWidth = 240;

export default function Drawer2({ sidebar, children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleCloseDrawer}>
        <Box
          sx={{
            marginTop: 20,
            padding: 0,
            //display: "flex", // Añadido
          }}
        >
          <Box
            style={{ marginLeft: open ? drawerWidth : 0, flex: 1 }} // Añadido
          >
            <AppBar
              elevation={3}
              position="relative"
              sx={{
                height: 50,
                background: "white",
                zIndex: 2,
                //marginLeft: -10,
                //marginRight: 20,
              }}
            >
              <Toolbar>
                <IconButton
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    color: "grey",
                    marginLeft: `${open ? drawerWidth - 40 : 0}px`,
                  }}
                >
                  {open ? <TuneIcon /> : <MenuIcon />}
                </IconButton>

                <SortBar />
              </Toolbar>
            </AppBar>
          </Box>

          <Box>
            <Drawer
              position="fixed"
              sx={{
                overflowX: "none",
                "& .MuiDrawer-paper": {
                  position: "absolute",
                  top: "auto",
                  width: drawerWidth,
                  boxSizing: "border-box",
                  background: "transparent",
                  transition: "all .4s ease-in-out!important",
                  overflowX: "none!important",
                  zIndex: "0!important",
                  border: "none",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <Container>
                {React.cloneElement(sidebar, { handleCloseDrawer })}
              </Container>
            </Drawer>

            <Main style={{ marginLeft: open ? drawerWidth : 0 }}>
              {children}
              <Footer />
            </Main>
          </Box>
        </Box>
      </ClickAwayListener>
    </>
  );
}

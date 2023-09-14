import * as React from "react";
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

export default function DrawerLeft({ sidebar, children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      {/*   <ClickAwayListener onClickAway={handleCloseDrawer}>
        <Box
          sx={{
            marginTop: 20,
            padding: 0,
           // display: "flex", // Añadido
          }}
        >
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

          <Main
            style={{
              // marginLeft: open ? drawerWidth : 0
              background: "transparent",
            }}
          >
            {children}
            <Footer />
          </Main>
        </Box>
      </ClickAwayListener> */}
      <Box
        sx={{
          marginTop: 20,
          padding: 0,
          display: "flex", // Añadido
        }}
      >
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
          {React.cloneElement(sidebar, { handleCloseDrawer })}
        </Drawer>

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
              display: "flex", // Añadido
              justifyContent: "space-between", // Añadido
            }}
          >
            <Toolbar>
              <IconButtonBox
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  color: "grey",
                }}
              >
                {open ? <TuneIcon /> : <MenuIcon />}
              </IconButtonBox>

              <SortBar />
            </Toolbar>
          </AppBar>

          <Main
            style={{
              marginLeft: open ? 5 : 0,
              background: "transparent",
            }}
          >
            {children}
            <Footer />
          </Main>
        </Box>
      </Box>
    </>
  );
}
const Main = styled.div`
  position: relative;
  background: transparent;
  transition: margin-left 0.4s ease-in-out !important;
  overflow-x: none !important;
`;
const IconButtonBox = styles(IconButton)` 
transition: all .4s ease-in-out!important;
margin-right:10px
`;
const AppBar = styles(MuiAppBar)`
display: flex;
justify-content: center;
width: 100%
`;

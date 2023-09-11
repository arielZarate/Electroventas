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

import SortBar from "./SortBar";
import Footer from "./Footer";
const drawerWidth = 240;

export default function DrawerLeft({ sidebar, children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        marginTop: 20,
        padding: 0,
      }}
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
          <IconButtonBox
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "grey",
              marginLeft: `${open ? drawerWidth - 40 : 0}px`,
            }}
          >
            {open ? <TuneIcon /> : <MenuIcon />}
          </IconButtonBox>

          {/* sort bars componenent */}

          <SortBar />
        </Toolbar>
      </AppBar>

      {/* podria ser container  */}
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
          <Container>{sidebar}</Container>
        </Drawer>

        <Main style={{ marginLeft: open ? drawerWidth : 0 }}>
          {children}
          <Footer />
        </Main>
      </Box>
    </Box>
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

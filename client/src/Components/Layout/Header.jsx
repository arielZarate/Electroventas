import * as React from "react";
import PropTypes from "prop-types";

//dependencias de material
import {
  Badge,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  IconButton,
  AppBar,
  Button,
  Typography,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material/";

// MenuIcon,

import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineMail,
} from "react-icons/ai";
import { FaBolt, FaUsers } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { ListItemIcon } from "@mui/material";

//==============SearchBar================
import SearchBar from "./SearchBar";

//==============================================================================
//drawer
const drawerWidth = 240;

const navItems = [
  {
    name: "Casa",
    path: "/Home",
    icon: <AiFillHome />,
  },
  {
    name: "Outlet",
    path: "/oulet",
    icon: <FaBolt />,
  },
  {
    name: "contacto",
    path: "/contact",
    icon: <AiOutlineMail />,
  },
  {
    name: "Sobre Nosotros",
    path: "/About",
    icon: <FaUsers />,
  },
];

//========================================================================================

function DrawerAppBar(props) {
  /*   const { window } = props; */
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const ListDrawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ backgroundColor: "#242424", color: "white" }}
    >
      <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
        Electroventas
      </Typography>
      <Divider sx={{ background: "#fefefe", padding: "1px" }} />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{item.icon} </ListItemIcon>
              <ListItemText primary={item.name} sx={{ marginLeft: "-30px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ padding: "8px 0px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none", md: "none" },
            }}
          >
            <AiOutlineMenu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Electroventas
          </Typography>

          {/* search */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <SearchBar />
          </Box>
          {/* fin */}

          {/* bandera */}

          <Box sx={{ display: { xs: "flex", sm: "block" } }}>
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <AiOutlineShoppingCart />
              </Badge>
            </IconButton>

            <Button
              href="#"
              variant="outlined"
              color="inherit"
              sx={{ my: 1, mx: 1.5 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>

        <Divider
          sx={{
            width: "100%",
            backgroundColor: "#fefefe",
          }}
        />

        {/* Barra de busqueda inferior */}
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <SearchBar
            mobileStyles={{
              backgroundColor: "#d6d6d6",
              borderRadius: "0",
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="outlined"
              /*   startIcon={item.icon} */
              sx={{ color: "#fff" }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {ListDrawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

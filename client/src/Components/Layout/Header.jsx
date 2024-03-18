import React, { useState } from "react";
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
  Link,
  Menu,
  MenuItem,
} from "@mui/material/";

// MenuIcon,

import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineMail,
} from "react-icons/ai";
import { FaBolt, FaUsers, FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { ListItemIcon } from "@mui/material";

//==============SearchBar================
import SearchBar from "./SearchBar";

//=============CartDialog==========================
import CartDialog from "../Cart/CartDialog";

import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/feactures/Thunks/user";
import { Notification } from "../../helpers/Notification/Notification";
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
  const dispatch = useDispatch();

  ///SELECTOR

  const isLogged = useSelector((state) => state.userStore.isLogged);

  // Manejar el clic en el botón de cierre de sesión
  const handleLogout = () => {
    dispatch(logoutUser()); // Llamar al thunk de logoutUser al hacer clic en el botón

    setTimeout(() => {
      Notification("info", `Session cerrada correctamente`, "center-end", 3000);

      // Actualizar el estado global para reflejar el cierre de sesión
    }, 1500);
  };

  //================cart dialog =====================
  const [cartDialogOpen, setCartDialogOpen] = useState(false);

  /* 
  TODO: MENU STATE
  */

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartDialogOpen = () => {
    setCartDialogOpen(true);
  };

  //TODO: state mobile
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

          <Box sx={{ display: { xs: "flex", sm: "inline-block" } }}>
            <IconButton
              aria-label="show 3 new notifications"
              color="inherit"
              onClick={handleCartDialogOpen} // Añade este evento onClick
            >
              <Badge badgeContent={3} color="error">
                <AiOutlineShoppingCart size={30} />
              </Badge>
            </IconButton>

            <Box sx={{ display: { xs: "flex", sm: "inline-block" } }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <FaUserCircle size={30} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {isLogged ? (
                  <>
                    <MenuItem
                      onClick={handleClose}
                      component={RouterLink}
                      to="/profile"
                    >
                      Perfil
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      onClick={handleClose}
                      component={RouterLink}
                      to="/auth/login"
                    >
                      Iniciar Sesión
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      component={RouterLink}
                      to="/auth/register"
                    >
                      Crear cuenta
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
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

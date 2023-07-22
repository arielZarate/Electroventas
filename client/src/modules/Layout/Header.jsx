import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";

import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineMail,
} from "react-icons/ai";
import { FaBolt, FaUsers } from "react-icons/fa";
//===========searchBar=============
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { ListItemIcon } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//==============================================================================
//drawer
const drawerWidth = 240;
const navItems1 = ["Casa", "Productos", "Sobre nosotros", "contacto"];
//==============================================================================

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

/* ,const arrayNav2 = [
  { name: "Instagram", path: "#", icon: <GroupAdd /> },

{ name:'Iniciar sesion',
  path: '/login',  
  icon:  <Lock/>
} 
];*/

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

  /*   const container =
    window !== undefined ? () => window().document.body : undefined; */

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
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Electroventas
          </Typography>

          {/* serach */}
          <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar Producto "
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* fin de serach */}

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
            backgroundColor: "#ffffff",
          }}
        />

        {/* Barra de busqueda inferior */}
        <Box
          sx={{
            display: {
              xs: "",
              sm: "none",
              background: "white",
              display: "flex",
              justifyContent: "center",
              margin: 0,
              padding: "1px",
              borderRadius: "1px",
            },
          }}
        >
          <TextField
            id="search"
            label="Buscar productos"
            variant="filled"
            color="primary"
            fullWidth
            size="small"
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
          /*   container={container} */
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

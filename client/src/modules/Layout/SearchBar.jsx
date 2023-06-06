import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, InputBase, Box, alpha } from "@mui/material";

function SearchBar() {
  // Estilos
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    width: "100%", // Ajustamos el ancho al 100%
    maxWidth: "20rem", // Establecemos el ancho máximo en 25 rem
    display: "flex",
    alignItems: "center",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    marginLeft: theme.spacing(1),
    flex: 1,
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Box>
      <Search>
        <SearchIcon />
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}

export default SearchBar;

/* import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { styled, InputBase, Box, alpha } from "@mui/material";
function SearchBar() {
  //estilos
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "70%",
    margin: "0 auto", // Agregar esta línea

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
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
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <>
      <Box>
        <Search sx={{}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </>
  );
}

export default SearchBar;
 */

import React from "react";
import Link from "@mui/material/Link";
export default function NavBar() {
  return (
    <>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ mx: 1.5, color: "#ffffff" }}
        >
          Casa Icono
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ mx: 1.5, color: "#ffffff" }}
        >
          Categoria
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ mx: 1.5, color: "#ffffff" }}
        >
          Ofertas
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ mx: 1.5, color: "#ffffff" }}
        >
          Sobre Nosotros
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ mx: 1.5, color: "#ffffff" }}
        >
          Contacto
        </Link>
      </nav>
    </>
  );
}

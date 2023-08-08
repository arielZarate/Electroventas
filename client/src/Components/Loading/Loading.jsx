import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { ImSpinner4, ImSpinner11 } from "react-icons/im";
import { TbFidgetSpinner } from "react-icons/tb";

import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "spin 1s linear infinite",
        "@keyframes spin": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        fontSize: "50px", // Cambiar el tamaño del icono a 48px (ajusta el valor según lo necesites)

        height: "40vh",
      }}
    >
      <ImSpinner11 />
    </Box>
  );
}

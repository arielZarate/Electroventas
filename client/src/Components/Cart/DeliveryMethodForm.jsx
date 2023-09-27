import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Box,
  IconButton,
  Typography,
  Paper,
  Button,
  FormHelperText,
} from "@mui/material";
import { FaTruck } from "react-icons/fa";

const DeliveryMethodForm = () => {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(
    "Elije un metodo de envio"
  );

  const handleRadioChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setInput(value);
    setHelperText(" ");
    //setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === "local") {
      setHelperText("ha seleccionado local");
      // setError(false);
    } else if (input === "vendedor") {
      setHelperText("ha seleccionado vendedor");
      //setError(true);
    } else {
      setHelperText("Por favor seleccione una opcion.");
      //setError(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          marginY: "16px",
          borderRadius: "5px",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaTruck />
        </IconButton>
        <Typography variant="h6">METODO DE ENVIO</Typography>
      </Box>
      <form /* onSubmit={handleSubmit(onSubmit)} */ onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel id="deliveryMethod">Metodo de envio</FormLabel>
          <RadioGroup
            aria-labelledby="metodo de envio"
            defaultValue="female"
            name="deliveryMethod"
            value={input}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="local"
              control={<Radio />}
              label="$0  Retirar en local"
            />
            <FormControlLabel
              value="vendedor"
              control={<Radio />}
              label="$0  Acordar con vendedor"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>

          {/* <Box sx={{ marginTop: "16px" }}>
            <Button
              type="submit"
              variant="contained"
              // color={isValid && isDirty ? "primary" : "error"}
              fullWidth
              // disabled={!isValid}

              sx={{ padding: "16px" }}
            >
              Enviar
            </Button>
          </Box> */}
        </FormControl>
      </form>
    </>
  );
};

export default DeliveryMethodForm;

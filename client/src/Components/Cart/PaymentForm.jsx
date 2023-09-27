import * as React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  IconButton,
  Paper,
} from "@mui/material";

import { FaCreditCard } from "react-icons/fa";

export default function PaymentForm() {
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
          <FaCreditCard />
        </IconButton>
        <Typography variant="h6">METODO DE PAGO</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
      {/*  <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
    </>
  );
}

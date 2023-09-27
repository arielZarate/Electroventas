import React from "react";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Paper,
  styled,
  Button,
} from "@mui/material";
//import ShippingForm from "./ShippingForm";
import DeliveryMethodForm from "./DeliveryMethodForm";
//import PaymentMethodForm from "./PaymentMethodForm";
//import OrderSummary from "./OrderSummary";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importar el icono
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const CheckoutForm = () => {
  return (
    <ContentBox>
      <CssBaseline />

      <AppBar
        position="static"
        color="primary"
        elevation={2}
        component="nav"
        sx={{
          //marginRight: "3rem",
          padding: "20px 0px",
          borderRadius: "2px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Electroventas
          </Typography>

          <Box sx={{ display: { xs: "flex", sm: "block" } }}>
            {/*  <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <AiOutlineShoppingCart />
              </Badge>
            </IconButton>
 */}
            <Button
              href="#"
              variant="outlined"
              color="inherit"
              sx={{ my: 1, mr: 5 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Paper sx={{ paddingX: "30px", margin: "10px" }}>
        <Grid container spacing={2} sx={{ marginY: "10px" }}>
          {/* Formulario de Dirección de Envío */}
          <Grid item xs={12} md={4}>
            <AddressForm />
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Formulario de Método de Envío */}
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} lg={12} xl={12}>
                <DeliveryMethodForm />
              </Grid>
            </Grid>

            {/* Formulario de Método de Pago */}
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} lg={12} xl={12}>
                <PaymentForm />
              </Grid>
            </Grid>
          </Grid>

          {/* Resumen de Compra */}
          <Grid item xs={12} md={4}>
            <Review />
          </Grid>
        </Grid>
      </Paper>
    </ContentBox>
  );
};

export default CheckoutForm;

const ContentBox = styled(Box)({
  marginRight: "50px",
  marginBottom: "4vh",
  padding: "10px",
  minHeight: "150vh", // Altura mínima para que el contenido se vea centrado
  //backgroundColor: "#f0f0f0",
  backgroundColor: "#e6e4e4",
});

import React from "react";
import { Button, Typography, Container, Grid, Card } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  // Aquí puedes utilizar el estado para mantener un registro de los productos seleccionados
  // y la cantidad, por ejemplo:
  // const [cartItems, setCartItems] = useState([]);

  return (
    <Container sx={{ marginTop: 20, backgroundColor: "#ebebeb" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          {/* Aquí puedes mostrar una lista de productos en el carrito */}
          {/* Ejemplo: */}
          {/* {cartItems.map((item, index) => (
            <Card key={index}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body1">{item.price}</Typography>
              {/* Agrega más detalles según tus necesidades */}
          {/* </Card>
          ))} */}
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ maxHeight: "100%", height: "100%" }}>
            <Typography variant="h5" sx={{ margin: 2 }}>
              Carrito de Compras
            </Typography>
            {/* Puedes agregar un resumen del carrito aquí, como el total, cantidad de productos, etc. */}
            {/* Ejemplo: */}
            {/* <Typography variant="subtitle1">Total: $XXX</Typography>
            <Typography variant="subtitle1">Cantidad de productos: {cartItems.length}</Typography> */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCartIcon />}
              fullWidth
            >
              Proceder al Checkout
            </Button>
            <Button variant="outlined" fullWidth>
              Continuar Comprando
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;

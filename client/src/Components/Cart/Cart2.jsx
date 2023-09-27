import React, { useState, useEffect } from "react";
import array from "../../utils/productos.json";
import { Box, Typography } from "@mui/material";

const Cart = () => {
  //console.log("array de productos", productos);
  const [cartItems, setCartItems] = useState([array.productos]);

  /*   useEffect(() => {
    setCartItems([array.productos]);
  }, []); */

  console.log("cartItems", cartItems[0]);
  /*   const addToCart = () => {
    setCartItems([...cartItems]);
  }; */

  const removeFromCart = (productId) => {
    setCartItems(cartItems[0].filter((item) => item.id !== productId));
  };

  return (
    <Box sx={{ marginTop: 20 }}>
      <Typography variant="h4" color="initial">
        Carrito de Compras
      </Typography>
      {/* <ul style={{ marginTop: "10rem" }}>
        {cartItems[0]?.map((item) => (
          <li key={item.id}>
            {`#${item.id} `} {item.nombre} - ${item.precio}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul> */}
    </Box>
  );
};

export default Cart;

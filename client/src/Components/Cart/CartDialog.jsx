import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const CartDialog = ({ open, handleClose, cartItems }) => {
  // Calcula el subtotal y otros detalles del carrito aquí
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Carrito de Compras</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText primary={`Subtotal: $${subtotal}`} />
          </ListItem>
          <Divider />
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`Precio: $${item.price} - Cantidad: ${item.quantity}`}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;

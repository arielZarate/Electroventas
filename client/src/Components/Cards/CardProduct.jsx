import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Stack,
  IconButton,
  CardHeader,
} from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";

//TODO: acounting
import {
  formatPriceARS,
  formatPriceUSD,
} from "../../helpers/Accounting/Accounting"; // Asegúrate de ajustar la ruta

import { BsFillCartPlusFill } from "react-icons/bs";

export default function CardProduct(props) {
  const {
    name,
    description,
    Images,
    model,
    brand,
    price,
    rating,
    id,
  } = props.data;

  const [statusRating, setRating] = useState(rating);

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <Card
        sx={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <CardHeader
          action={
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{ marginRight: "10px" }}
            >
              {formatPriceARS(price)}
            </Typography>
          }
          title={
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              {name}
            </Typography>
          }
          subheader="Stock disponible"
        />
        <Link to={`/products/${id}`}>
          <CardMedia
            component="img"
            sx={{
              pt: "0%",
              width: "100%",
              height: "220px", // Asegúrate de añadir 'px' al final
              objectFit: "cover", // Esto ajusta la imagen manteniendo la relación de aspecto
            }}
            image={Images[0].url}
            alt={name}
          />
        </Link>
        <CardContent>
          <Typography /* variant="body2" color="textSecondary" */ paragraph>
            {description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 1,
          }}
        >
          {/* <IconButton>
              <MdFavorite />
            </IconButton> */}
          <IconButton aria-label="add to cart">
            <BsFillCartPlusFill fontSize={30} />
          </IconButton>

          <Stack spacing={2}>
            <Rating
              name="half-rating-read"
              value={statusRating} // Asignar el valor de la calificación desde el estado "rating"
              onChange={handleRatingChange} // Asignar la función de manejo de cambio
              precision={0.5}
              readOnly
            />
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}

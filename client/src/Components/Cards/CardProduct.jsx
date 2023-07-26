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
} from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

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

  // console.log("QUE LINDA SON LAS TETAS DE EIAAA ♥♥♥♥♥🚀🚀");
  return (
    <>
      <Card sx={{ height: "500px", display: "flex", flexDirection: "column" }}>
        <Link to={`/products/${id}`}>
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "0%",
              width: "200",
              height: "250px",
            }}
            image={Images[0].url}
            alt={name}
          />
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/*   <Typography>{model}</Typography> */}
          <Typography variant="h4">${price}</Typography>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 1,
          }}
        >
          <CardActions>
            <Button size="large" variant="contained">
              comprar
            </Button>
          </CardActions>

          <Button
            variant="contained"
            size="medium"
            startIcon={<MdFavorite />}
            color="warning"
          >
            Favorito
          </Button>
        </Box>
      </Card>
    </>
  );
}

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
/* 
"name": "Tester Digital",
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/329/380/products/tester-31-f972816a81a567ccd716517781235703-640-0.jpg",
    "brand": "dhv",
    "model": "HBT56",
    "description": "ESTE TESTER ES INNOVADOR SISTEMA DE PANTALLA COLOR TODOS LOS RANGOS ESTÁN ESPECIFICADOS EN UNA DE LAS FOTOGRAFÍAS. LA MARCA HABOTEST ES UNA DE LAS DOS MEJORES EN EL MERCADO .NO PUEDO PONER MAS ESPECIFICACIONES POR QUE LA PAGINA ME TOMA QUE ESTOY ESCRIBIENDO EN HTML. PARA TODA INFORMACIÓN TÉCNICAS EN UNA DE LAS FOTOGRAFÍAS. VER EN FOTOGRAFÍA NÚMERO 7 LOS DETALLES TÉCNICOS.",
    "price": 1500,
    "rating": 4,

*/

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

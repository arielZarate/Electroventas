import React, { useEffect, useState } from "react";
import { Star } from "@mui/icons-material";
import { styled } from "@mui/system";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  CardActions,
  CardActionArea,
  Divider,
  Stack,
  Rating,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getProductByID } from "../../redux/feactures/Thunks/products";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const CardDetail = () => {
  //================================================================
  const product = {
    name: "Electric Appliance",
    code: "897349",
    price: "$199.99",
    image: "https://picsum.photos/id/1/800/600",
    additionalImages: [
      "https://picsum.photos/id/2/800/600",
      "https://picsum.photos/id/3/800/600",
      "https://picsum.photos/id/4/800/600",
    ],
    averageRating: 4,
    statuStock: "disponible",
    reviewCount: 117,
    description: `Somos LIBERCAM Tienda oficial.

Representantes e Importadores directos de
SPICA y SKMEI Tiendas oficiales.

Más de 10 años vendiendo en Mercado Libre.
1 millón de compradores nos eligieron y recomendaron. 100% de calificaciones positivas. Elegidos por Mercado Libre como mejores vendedores de todo el sitio.
Somos MERCADO LÍDER PLATINUM`,
    caracteristica: `
      Tensión máxima CA: 700V
Tensión máxima CC: 1000V
Corriente máxima CA: 20 mA
Corriente máxima CC: 200 mA
Frecuencia máxima: 200 Hz
     `,
  };

  //================================================================

  const detail = useSelector((state) => state.products.detail);

  //console.log("detail: ", detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);

  const { name, description, brand, Images, model, price, rating } = detail;

  // console.log(name, description, brand, Images, model, price, rating);
  // console.log(Images);

  /*   const handleImage = (image) => {
    setImage(image.url);
  }; */

  const ImageContainer = styled("div")({
    /*     width: "100%", // Ancho deseado
    height: "auto", // Altura automática para mantener la relación de aspecto
    maxWidth: "100%", // Asegura que la imagen no exceda el ancho del contenedor
    maxHeight: "300px", // Altura máxima deseada

    width: "100%",
    height: "500px", */
    position: "relative",
  });

  const Image = styled("img")({
    height: "500px",
    objectFit: "cover", // Ajusta la imagen para llenar el contenedor sin distorsión
    objectPosition: "center center", // Centra la imagen dentro del contenedor
    width: "100%",
    /*   height: "100%", */
    // objectFit: "contain",
  });

  //=====================================
  const ThumbnailContainer = styled("div")({
    position: "absolute",
    top: "8px",
    left: "8px",
    display: "flex",
    gap: "2px",
  });

  const Thumbnail = styled("img")({
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "scale(1.1)",
    },
  });

  /*   const [originalImage, setOriginalImage] = useState(image);

  const [selectedImage, setSelectedImage] = useState(image);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageOriginal = () => {
    setSelectedImage(originalImage);
  }; */

  return (
    <Box>
      <Container sx={{ marginTop: 20 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <ImageContainer>
                <Card>
                  {Images &&
                    Images.map((itera) => {
                      return (
                        <CardMedia
                          component={Image}
                          //alt={`foto del ${name}`}
                          sx={{ height: 400 }}
                          image={itera.url}
                          /*   onClick={handleImage} */
                        />
                      );
                    })}

                  {/* 
                  <ThumbnailContainer>
                    {product.additionalImages.map((image, index) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleThumbnailClick(image)}
                      />
                    ))}
                  </ThumbnailContainer> */}
                </Card>
              </ImageContainer>
            </Grid>
            <Grid item xs={3} md={3}>
              <Card sx={{ maxHeight: "100%", height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {name}
                  </Typography>
                  {/*    <Typography
                    px
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                    sx={{ marginY: "1px" }}
                  >
                    {`Codigo:  ${id}`}
                  </Typography> */}

                  <Typography variant="subtitle2" component="p">
                    {`  stock:  `}
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{
                        color:
                          product.statuStock === "disponible"
                            ? "#4caf50"
                            : "#f44336",
                      }}
                    >
                      {`disponible`}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="h4"
                    color="textSecondary"
                    sx={{ marginY: 1 }}
                  >
                    {price}
                  </Typography>

                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <Typography variant="subtitle2" color="textSecondary">
                    {product.averageRating} reviews
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained" color="warning" fullWidth>
                    Comprar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    fullWidth
                  >
                    Agregar a carrito
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<WhatsAppIcon />}
                    fullWidth
                  >
                    WhatsApp
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid xs={9} md={9}>
              <TableContainer sx={{ backgroundColor: "#e0e0e0" }}>
                <Typography
                  variant="h5"
                  color="initial"
                  sx={{ textAlign: "start", marginTop: "2rem" }}
                >
                  Caracteristicas Principales
                </Typography>
                <Table>
                  <TableBody>
                    {/*       {data.map((row, index) => ( 
    
                   ))}
                               */}
                    <TableRow /*  key={id} */>
                      <TableCell>Modelo</TableCell>
                      <TableCell>{model}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Marca</TableCell>
                      <TableCell>{brand}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>descripcion</TableCell>
                      <TableCell>{description}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Divider sx={{ marginY: "3rem" }} />
            <Grid xs={11} md={11}>
              <Box
                sx={{
                  backgroundColor: "#bdbdbd",
                  height: "10rem",
                  marginTop: "5rem",
                }}
              >
                <Typography variant="h5" color="initial" sx={{ margin: 1 }}>
                  comentario
                </Typography>
                <Divider />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CardDetail;
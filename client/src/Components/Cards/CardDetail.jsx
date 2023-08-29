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
import Comments from "../Comments/Comments";
import { useParams } from "react-router-dom";

//TODO: acounting
import {
  formatPriceARS,
  formatPriceUSD,
} from "../../helpers/Accounting/Accounting"; // Asegúrate de ajustar la ruta

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
  objectPosition: "center ", // Centra la imagen dentro del contenedor
  width: "100%",
  /*   height: "100%", */
  // objectFit: "contain/COVER",
});

const CardDetail = () => {
  const detail = useSelector((state) => state.productStore.detail);
  const { name, description, brand, Images, model, price, rating } = detail;
  const [statusRating, setRating] = useState(rating);

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);

  return (
    <Box>
      <Container sx={{ marginTop: 20 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <ImageContainer>
                <Card>
                  {Images &&
                    Images.map((itera, index) => {
                      return (
                        <CardMedia
                          key={index} // Utilizamos el índice como clave única
                          component={Image}
                          //alt={`foto del ${name}`}
                          sx={{ height: 400 }}
                          image={itera.url}
                          /*   onClick={handleImage} */
                        />
                      );
                    })}
                </Card>
              </ImageContainer>
            </Grid>
            <Grid item xs={4} md={4}>
              <Card sx={{ maxHeight: "100%", height: "100%" }}>
                <CardContent>
                  <Typography variant="h4" component="h2">
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
                        color: "disponible" ? "#4caf50" : "#f44336",
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
                    {formatPriceARS(price)}
                  </Typography>

                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      value={statusRating} // Asignar el valor de la calificación desde el estado "rating"
                      onChange={handleRatingChange} // Asignar la función de manejo de cambio
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <Typography variant="subtitle2" color="textSecondary">
                    {`115`} reviews
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
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    fullWidth
                  >
                    Comprar
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

            {/* table  */}
            <Grid item xs={10} md={10}>
              <TableContainer component={Paper} sx={{ backgroundColor: "" }}>
                <Typography
                  variant="h5"
                  color="initial"
                  sx={{ textAlign: "start", marginTop: "2rem" }}
                >
                  Caracteristicas Principales
                </Typography>
                <Table aria-aria-label="table-description">
                  <TableBody>
                    <TableRow sx={{ backgroundColor: "#f2f2f2" }}>
                      <TableCell>Modelo</TableCell>
                      <TableCell>{model}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Marca</TableCell>
                      <TableCell>{brand}</TableCell>
                    </TableRow>
                    <TableRow sx={{ backgroundColor: "#f2f2f2" }}>
                      <TableCell>Descripcion</TableCell>
                      <TableCell>{description}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Divider sx={{ marginY: "3rem", color: "black" }} />
            <Grid item xs={11} md={11}>
              <Comments />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CardDetail;

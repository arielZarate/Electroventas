import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material"; //selector

import axios from "axios";
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { FcNews } from "react-icons/fc";

import { Clear } from "@mui/icons-material";

//redux
import { useSelector, useDispatch } from "react-redux";

//thunks
import { AddProduct } from "../../redux/feactures/Thunks/products";
import { getBrands } from "../../redux/feactures/Thunks/brand";
import { getCategories } from "../../redux/feactures/Thunks/category";

// inicio de componnet
const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
  } = useForm({
    defaultValues: {
      brand: "", // Establecer el valor inicial del selector a una opción vacía o el valor que desees.
    },
  });

  // Nuevo estado para almacenar las imágenes seleccionadas
  const [selectedImages, setSelectedImages] = useState([]);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  //============SELECTORES=================
  const _brands = useSelector((state) => state.brandStore.brands);
  //console.log(_brands);
  const _categories = useSelector((state) => state.categoryStore.categories);
  //console.log(_categories);

  //=====useEfecct==========

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  // Función para manejar el cambio de imágenes seleccionadas
  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files) {
      // Convertir la lista de FileList a un array y almacenar en el estado
      setSelectedImages([...files]);
    } else {
      setSelectedImages([]);
    }
  };

  //envio de formulario
  const onSubmit = async (data, event) => {
    event.preventDefault(); // Prevenir recarga del formulario
    //console.log(data);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("model", data.model);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("rating", data.rating);
      formData.append("brand", data.brand);
      formData.append("categoryId", data.categoryId);

      // Agregar imágenes al FormData
      formData.append("image", selectedImages[0]); // El primer archivo seleccionado para "image"

      // Agregar imágenes al FormData
      /*   selectedImages.forEach((image) => {
        formData.append("image", image); // Agregar los archivos al FormData
        // console.log("image", image);
      }); */
      // formData.append("image2", data.image2[0]); // El primer archivo seleccionado para "image2"
      //formData.append("image3", data.image3[0]); // El primer archivo seleccionado para "image3"

      //console.log(formData.getAll());

      /*    for (const entry of formData.entries()) {
        const [key, value] = entry;
        console.log(key, value); // Imprime cada clave y valor en el FormData
      } */

      // Si utilizas Redux, puedes enviar el FormData al Thunk AddProduct
      // Ejemplo: dispatch(AddProduct(formData))
      dispatch(AddProduct(formData)); // Llamar al middleware para agregar el producto

      /*       const response = await axios.post(
        // `${Global.url_back_local}/products/`,
        "http://localhost:3000/api/products/",
        formData
      ); // Llama a la función que agrega el producto en el servidor */
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 20,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ marginBottom: 20 }}>
        <CssBaseline />

        <Box
          component="form"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Avatar sx={{ bgcolor: "" }}>
              <FcNews size={50} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Formulario de Productos
            </Typography>
          </Box>

          {/* input datos */}
          <FormControl fullWidth variant="outlined" error={!!errors.name}>
            <TextField
              {...register("name", {
                required: "Debe llenar el campo Nombre de Producto",
              })}
              error={!!errors.name}
              label="Nombre de producto"
              type="text"
              fullWidth
            />
            {isSubmitted && errors.name && (
              <FormHelperText> {errors.name.message}</FormHelperText>
            )}
          </FormControl>

          {/* inciio de images */}

          <Box sx={{ marginY: 2 }}>
            <FormControl fullWidth variant="outlined" error={!!errors.image}>
              <TextField
                type="file"
                {...register("image", {
                  required: "Debe seleccionar una imagen",
                })}
                error={!!errors.image}
                id="outlined-basic"
                label=""
                variant="outlined"
                fullWidth
                onChange={handleImageChange}
                //agregado para la vision previa
              />

              {isSubmitted && errors.image && (
                <FormHelperText> {errors.image.message}</FormHelperText>
              )}

              {selectedImages.length > 0 && (
                <div>
                  <h6>Vista previa de las imágenes seleccionadas:</h6>
                  {selectedImages.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Vista previa ${index + 1}`}
                      style={{
                        width: "200px",
                        height: "auto",
                        marginX: "20px",
                      }}
                    />
                  ))}
                </div>
              )}
            </FormControl>
          </Box>

          {/* fin de la image */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginY: 2,
            }}
          >
            <FormControl fullWidth variant="outlined" error={!!errors.model}>
              <TextField
                {...register("model", {
                  required: "Debe llenar el campo Modelo",
                })}
                error={!!errors.model}
                label="Modelo"
                type="text"
                fullWidth
              />
              {isSubmitted && errors.model && (
                <FormHelperText> {errors.model.message}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth variant="outlined" error={!!errors.brand}>
              <InputLabel id="brand-label">Marcas</InputLabel>
              <Select
                {...register("brand", {
                  required: "Debe llenar el campo Marca",
                })}
                labelId="brand-label"
                label="Marcas"
                id="brand"
                defaultValue="NONE" // Establecer el valor inicial a null
              >
                <MenuItem value="NONE">
                  <em>None</em>
                </MenuItem>

                {_brands.map((b) => (
                  <MenuItem key={b.id} value={b.names}>
                    {b.names}
                  </MenuItem>
                ))}
              </Select>

              {isSubmitted && errors.brand && (
                <FormHelperText> {errors.brand.message}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth variant="outlined" error={!!errors.price}>
              <TextField
                {...register("price", {
                  required: "Debe llenar el campo Precio",
                })}
                error={!!errors.price}
                label="Precio"
                type="text"
                fullWidth
              />
              {isSubmitted && errors.price && (
                <FormHelperText> {errors.price.message}</FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginY: 2,
            }}
          >
            <FormControl
              fullWidth
              variant="outlined"
              error={!!errors.description}
            >
              <TextField
                {...register("description", {
                  required: "Debe llenar el campo Description",
                })}
                error={!!errors.description}
                label="Descripción"
                multiline
                rows={4}
              />

              {isSubmitted && errors.description && (
                <FormHelperText> {errors.description.message}</FormHelperText>
              )}
            </FormControl>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormControl fullWidth variant="outlined" error={!!errors.rating}>
                <TextField
                  {...register("rating", {
                    required: "Debe llenar el campo",
                  })}
                  error={!!errors.rating}
                  label="Calificación"
                  type="text"
                  defaultValue="3"
                />
                {isSubmitted && errors.rating && (
                  <FormHelperText> {errors.rating.message}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.categoryId}
              >
                <InputLabel id="category-label">Categorias</InputLabel>
                <Select
                  {...register("categoryId", {
                    required: "complete el campo",
                  })}
                  labelId="category-label"
                  label="Categoria"
                  id="categoryId"
                  defaultValue="NONE" // Establecer el valor inicial a null
                >
                  {/* 
                  <MenuItem value="NONE">
                    <em>None</em>
                  </MenuItem> */}

                  {_categories.map((c, index) => (
                    <MenuItem key={c.id} value={c.id}>
                      {c.names}
                    </MenuItem>
                  ))}
                </Select>

                {isSubmitted && errors.categoryId && (
                  <FormHelperText> {errors.categoryId.message}</FormHelperText>
                )}
              </FormControl>
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ height: 50 }}
          >
            Crear Producto
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductForm;

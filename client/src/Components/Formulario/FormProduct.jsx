import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Avatar } from "@mui/material";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material"; //selector
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { FcNews } from "react-icons/fc";

//redux
import { useSelector, useDispatch } from "react-redux";

//thunks
import { AddProduct } from "../../redux/feactures/Thunks/products";
import { getBrands } from "../../redux/feactures/Thunks/brand";
import { getCategories } from "../../redux/feactures/Thunks/category";

// inicio de componnet
const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  // const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  //============SELECTORES=================
  const _brands = useSelector((state) => state.brandStore.brands);
  // console.log(_brands);
  const _categories = useSelector((state) => state.categoryStore.categories);
  //console.log(_categories);

  //=====useEfecct==========

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  //envio de formulario
  const onSubmit = (data, event) => {
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
      formData.append("category", data.category);

      // Agregar imágenes al FormData
      formData.append("image", data.image[0]); // El primer archivo seleccionado para "image"
      // formData.append("image2", data.image2[0]); // El primer archivo seleccionado para "image2"
      //formData.append("image3", data.image3[0]); // El primer archivo seleccionado para "image3"

      //console.log(formData.getAll());

      for (const entry of formData.entries()) {
        const [key, value] = entry;
        console.log(key, value); // Imprime cada clave y valor en el FormData
      }

      // Si utilizas Redux, puedes enviar el FormData al Thunk AddProduct
      // Ejemplo: dispatch(AddProduct(formData))
      // dispatch(AddProduct(data)); // Llamar al middleware para agregar el producto
    } catch (error) {
      console.error(error.message);
    }
  };

  /*   const handleCustomFileButtonClick = () => {
    fileInputRef.current.click();
  }; */

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
          /* inportante poner el encType */
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
          <TextField {...register("name")} label="Nombre" required fullWidth />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginY: 2,
            }}
          >
            {/*      <TextField
              {...register("image")}
              type="file"
              label="principal"
              required
              fullWidth
            /> */}
            {/*    <TextField
              {...register("image2")}
              label="alternativa 1"
              fullWidth
            />
          */}

            <label
              htmlFor="image"
              style={{
                display: "inline-block",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <div
                style={{
                  /*  width: "100% !important", */
                  height: "50px",
                  backgroundColor: "#e0e0e0", // Color de fondo del cuadradito
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "30px",
                  borderRadius: "10px",
                }}
              >
                <Typography>Seleccionar Imagen</Typography>{" "}
                {/* Texto dentro del cuadradito */}
              </div>
              <input
                type="file"
                id="image"
                {...register("image")}
                style={{ display: "none" }}
                required
              />
            </label>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginY: 2,
            }}
          >
            <TextField
              {...register("model")}
              label="Modelo"
              required
              fullWidth
            />

            <FormControl sx={{ minWidth: 350 }}>
              <InputLabel id="select-brand">Marca</InputLabel>
              <Select
                {...register("brand")}
                labelId="select-brand"
                id="select-brand"
                /*   value={age} */
                required
                label="Marca"
                /*  onChange={handleChange} */
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {_brands.map((b) => (
                  <MenuItem value={b.id}>{b.names}</MenuItem>
                ))}
              </Select>
              {/*    <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>

            <TextField
              {...register("price")}
              label="Precio"
              type="text"
              required
              fullWidth
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginY: 2,
            }}
          >
            <TextField
              {...register("description")}
              label="Descripción"
              multiline
              rows={4}
              required
              fullWidth
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <TextField
                {...register("rating")}
                label="Calificación"
                type="text"
                required
                fullWidth
              />

              <FormControl sx={{ minWidth: 350 }}>
                <InputLabel id="select-brand">Categorias</InputLabel>
                <Select
                  {...register("category")}
                  labelId="select-brand"
                  id="select-brand"
                  label="Categoria"
                  /*        value={nanana} */

                  /*  onChange={handleChange} */
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  {_categories.map((c, index) => (
                    <MenuItem value={c.id}>{c.names}</MenuItem>
                  ))}
                </Select>
                {/*   <FormHelperText>With label + helper text</FormHelperText>  */}
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

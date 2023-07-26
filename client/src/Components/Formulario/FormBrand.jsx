import React, { useState } from "react";
//import { useForm } from "react-hook-form"; no lo uso
import { TextField, Button, Box, Typography, Avatar } from "@mui/material";
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { FcNews } from "react-icons/fc";

//hooks
import { useSelector, useDispatch } from "react-redux";
import { AddBrand } from "../../redux/feactures/Thunks/brand";
export default function FormBrand() {
  //const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [brands, setBrands] = useState([""]); // Estado para almacenar los valores de las marcas

  // ======onchange============
  const handleChange = (index, event) => {
    const newBrands = [...brands];
    newBrands[index] = event.target.value;
    setBrands(newBrands);
  };

  //setea las brands , agrega
  const handleAddBrand = () => {
    setBrands([...brands, ""]);
  };

  //setea las brands , elimina 1 desde el indice mandado por param
  const handleRemoveBrand = (index) => {
    const newBrands = [...brands];
    newBrands.splice(index, 1);
    setBrands(newBrands);
  };

  //envia el formulario , onSubmit
  const handleSendBrand = (event) => {
    event.preventDefault(); // Prevenir recarga del formulario

    try {
      // Aquí puedes realizar las acciones que desees con los valores de las marcas
      //console.log(brands);
      dispatch(AddBrand(brands)); // Llamar al middleware para agregar el producto
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ marginBottom: 20 }}>
          <CssBaseline />

          <Box component="form" onSubmit={handleSendBrand}>
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
                Formulario Marcas
              </Typography>
            </Box>

            {/* input datos */}
            {brands.map((brand, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  marginY: 2,
                }}
              >
                <TextField
                  /*  name={`brand-${index}`} */
                  name="names"
                  value={brand}
                  onChange={(event) => handleChange(index, event)}
                  label="Marca"
                  required
                  fullWidth
                />
                {index === brands.length - 1 && (
                  <Button type="button" onClick={handleAddBrand}>
                    Agregar Marca
                  </Button>
                )}
                {index !== brands.length - 1 && (
                  <Button
                    type="button"
                    onClick={() => handleRemoveBrand(index)}
                  >
                    Eliminar Marca
                  </Button>
                )}
              </Box>
            ))}

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              /*  fullWidth */
              sx={{
                width: "86%",
                height: "40px",
                /*  backgroundColor: "#9032bbec", */ //no hace falta ya que secondary es violeta
              }}
            >
              Crear Marca
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

/* 


















import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Avatar } from "@mui/material";
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { FcNews } from "react-icons/fc";

//hooks
import { useSelector, useDispatch } from "react-redux";
export default function FormBrand() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  //metodo submit de react-hook-form
  const onSubmit = (data, event) => {
    event.preventDefault(); // Prevenir recarga del formulario
    //console.log(data);

    try {
      // dispatch(AddProduct(data)); // Llamar al middleware para agregar el producto
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ marginBottom: 20 }}>
          <CssBaseline />

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                Formulario Marcas
              </Typography>
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
                {...register("brand")}
                label="Marca"
                required
                fullWidth
              />
            </Box>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Crear Producto
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
 */

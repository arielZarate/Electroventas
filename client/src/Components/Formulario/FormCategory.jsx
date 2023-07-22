import React, { useState } from "react";
//import { useForm } from "react-hook-form"; no lo uso
import { TextField, Button, Box, Typography, Avatar } from "@mui/material";
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { FcNews } from "react-icons/fc";

//hooks
import { useSelector, useDispatch } from "react-redux";
import { AddCategory } from "../../redux/feactures/Thunks/category";
export default function FormCategory() {
  //const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([""]); // Estado para almacenar los valores de las marcas

  // ======onchange============
  const handleChange = (index, event) => {
    const newCategory = [...categories];
    newCategory[index] = event.target.value;
    setCategories(newCategory);
  };

  //setea las brands , agrega
  const handleAddCategory = () => {
    setCategories([...categories, ""]);
  };

  //setea las brands , elimina 1 desde el indice mandado por param
  const handleRemoveCategory = (index) => {
    const newCategory = [...categories];
    newCategory.splice(index, 1);
    setCategories(newCategory);
  };

  //envia el formulario , onSubmit
  const handleSendCategory = (event) => {
    event.preventDefault(); // Prevenir recarga del formulario

    try {
      // Aquí puedes realizar las acciones que desees con los valores de las marcas
      console.log(categories);
      dispatch(AddCategory(categories)); // Llamar al middleware para agregar el producto
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

          <Box component="form" onSubmit={handleSendCategory}>
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
                Formulario Categorias
              </Typography>
            </Box>

            {/* input datos */}
            {categories.map((cate, index) => (
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
                  name="category"
                  value={cate}
                  onChange={(event) => handleChange(index, event)}
                  label="agregar categoria"
                  required
                  fullWidth
                />
                {index === categories.length - 1 && (
                  <Button type="button" onClick={handleAddCategory}>
                    Agregar Categoria
                  </Button>
                )}
                {index !== categories.length - 1 && (
                  <Button
                    type="button"
                    onClick={() => handleRemoveCategory(index)}
                  >
                    Eliminar Categoria
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
              Crear Categoria
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

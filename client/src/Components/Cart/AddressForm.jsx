import React, { useState } from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Paper,
  TextField,
  Typography,
  Grid,
  Button,
  FormHelperText,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log("se hizo click");
    console.log(data);
  };

  /* validador de Cuil */
  const formatCuil = (cuil) => {
    const formattedCUIL = cuil
      .replace(/\D/g, "")

      .replace(/^(\d{2})(\d{1,8})(\d{1})$/, "$1-$2-$3");
    return formattedCUIL.slice(0, 13);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          marginY: "16px",
          borderRadius: "5px",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            margin: "0px",
          }}
        >
          <FaMapMarkerAlt />
        </IconButton>
        <Typography variant="h6">DIRECCION DE ENVIO</Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Correo Electronico"
                  fullWidth
                  autoComplete="ingrese correo"
                  variant="outlined"
                  autoFocus={true}
                  error={Boolean(errors?.email)}
                  helperText={errors.email ? errors.email.message : ""}
                />
              )}
              rules={{
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^(?=.*[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com))/,
                  message: "Ingresa un correo válido de Gmail o Hotmail",
                },
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre"
                  fullWidth
                  autoComplete="nombre de familia"
                  variant="outlined"
                  error={Boolean(errors?.firstName)}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              )}
              rules={{
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "El nombre solo puede contener letras",
                },
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Apellido"
                  fullWidth
                  autoComplete="apellido de familia"
                  variant="outlined"
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              )}
              rules={{
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "El apellido solo puede contener letras",
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="cuil"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="CUIL"
                  fullWidth
                  autoComplete="ingrese su cuil"
                  variant="outlined"
                  value={formatCuil(field.value)}
                  onChange={(e) => field.onChange(formatCuil(e.target.value))}
                  error={Boolean(errors.cuil)}
                  helperText={errors.cuil ? errors.cuil.message : ""}
                />
              )}
              rules={{
                required: "El campo CUIL es obligatorio",
                pattern: {
                  // value: /^\d{2}-\d{7,8}-\d{1}$/,
                  message: "El CUIL debe tener el formato XX-XXXXXXXX-X",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Telefono Celular"
                  fullWidth
                  autoComplete="nombre telefono celular"
                  variant="outlined"

                  // error={Boolean(errors.phone)}
                  //helperText={errors.phone ? errors.phone.message : ""}
                />
              )}
              /*  rules={{
                required: "Este campo es obligatorio",
              }} */
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="address"
                  label="Direccion"
                  fullWidth
                  autoComplete="nombre direccion"
                  variant="outlined"
                  error={Boolean(errors.address)}
                  helperText={errors.address ? errors.address.message : ""}
                />
              )}
              rules={{
                required: "El campo direccion  es obligatorio",
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              //required
              id="city"
              name="city"
              label="Ciudad"
              fullWidth
              autoComplete="ingrese ciudad "
              variant="outlined"
              {...register("city", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Por favor ingrese solo letras",
                },
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 letras",
                },
              })}
              error={Boolean(errors.city)}
              helperText={errors.city ? errors.city.message : ""}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              id="state"
              name="state"
              label="Provincia"
              fullWidth
              variant="outlined"
              {...register("state", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Por favor ingrese solo letras",
                },
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 letras",
                },
              })}
              error={Boolean(errors.state)}
              helperText={errors.state ? errors.state.message : ""}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              // required
              id="codePostal"
              name="codePostal"
              label="Codigo Postal"
              fullWidth
              autoComplete="ingrese su codigo postal"
              variant="outlined"
              {...register("codePostal")}

              //error={Boolean(errors.codePostal)}
              ///helperText={errors.codePostal ? errors.codePostal.message : ""}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              // required
              id="country"
              name="country"
              label="Pais"
              fullWidth
              autoComplete="ingrese pais"
              variant="outlined"
              {...register("country", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Por favor ingrese solo letras",
                },
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 letras",
                },
              })}
              error={Boolean(errors.country)}
              helperText={errors.country ? errors.country.message : ""}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginY: "14px" }}>
          <Grid item xs={12}>
            <TextField
              // required
              id="company"
              name="company"
              label="Empresa"
              fullWidth
              autoComplete="nombre de su empresa"
              variant="outlined"
              {...register(
                "company" /* {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Por favor ingrese solo letras",
                },
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 letras",
                },
              } */
              )}
              /*  error={Boolean(errors.company)}
              helperText={errors.company ? errors.company.message : ""} */
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="facture-label">Tipo de Factura</InputLabel>
              <Select
                labelId="facture-label"
                id="facture"
                name="facture"
                label="Tipo de Factura"
                defaultValue=""
                error={Boolean(errors.facture)}
                {...register(
                  "facture" /* , {
                  required: "Este campo es obligatorio",
                } */
                )}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="A">FACTURA A</MenuItem>
                <MenuItem value="B">FACTURA B</MenuItem>
              </Select>

              <FormHelperText error={Boolean(errors.facture)}>
                {errors.facture && errors.facture.message}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AddressForm;

/*    <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Utilice esta direccion para detalle de pago"
          />
        </Grid>  */

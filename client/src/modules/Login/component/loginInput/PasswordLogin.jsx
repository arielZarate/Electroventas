import React, { useState } from "react";

import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Alert,
} from "@mui/material";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { purple, indigo } from "@mui/material/colors";

//funcion
function PasswordLogin({ input, handleChange, error }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Stack>
        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          value={input.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <AiOutlineEye color={indigo[300]} />
                  ) : (
                    <AiOutlineEyeInvisible color={indigo[300]} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={error.password ? true : false}
          helperText={error.password ? error.password : ""}
        />

        {/*   {errors.password && (
                  <p style={{color:'red'}}>{errors.password}</p>
              )}*/}

        {/* {errors.password !== undefined ? (
                  <Alert severity="error" sx={{ margin: "150x 0" }}>
                      {errors.password}
                  </Alert>
              ) : null} */}
      </Stack>
    </>
  );
}

export default PasswordLogin;

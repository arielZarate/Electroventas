import React, { useState } from 'react'

import { Stack, IconButton, InputAdornment, TextField ,Alert} from '@mui/material';
import { Icon } from '@iconify/react';




//funcion
function PasswordLogin({ input, handleChange,errors }) {
    const [showPassword, setShowPassword] = useState(false);
  return (
        <>
        <Stack>
              <TextField
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={input.password} 
                  onChange={ handleChange}
                  InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                  <Icon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                              </IconButton>
                          </InputAdornment>
                      ),
                  }}
              // helperText={errors.password?errors.password:{}}
              />
          
            {/*   {errors.password && (
                  <p style={{color:'red'}}>{errors.password}</p>
              )}*/}

              {errors.password !== undefined ? (
                  <Alert severity="error" sx={{ margin: "150x 0" }}>
                      {errors.password}
                  </Alert>
              ) : null}
        </Stack>

      </>
    
  )
}

export default PasswordLogin

import React from 'react'
import { Stack, TextField ,Alert} from '@mui/material';

function EmailLogin({ input,  handleChange,error }) {
  return (

    <>

      <Stack>
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          autoFocus={true}
          value={input.email}
          onChange={handleChange}
           error={error.email?true:false}
          helperText={error.email?error.email:''}

    
        />



        
      {/*  

      =====opcion2 Error===========
      {errors.email && (
          <p style={{color:'red'}}>{errors.email}</p>
        )}

     
      ======== opcion 3 Error==========

       {errors.email !== undefined ? (
          <Alert severity="error" sx={{ margin: "10px 0" }}>
            {errors.email}
          </Alert>
        ) : null} 
        
        
        */}
      </Stack>
    
    </>
   


  
  )
}

export default EmailLogin

import React from 'react'
import { Stack, TextField ,Alert} from '@mui/material';

function EmailLogin({ input,  handleChange,errors }) {
  return (

    <>

      <Stack>
        <TextField
          name="email"
          type='email'
          label="email"
          variant="outlined"
          value={input.email}
          onChange={handleChange}
        /*   errors={errors} */
       /*    helperText={errors?errors.email:{}} */
        />
      {/*   {errors.email && (
          <p style={{color:'red'}}>{errors.email}</p>
        )} */}
        {errors.email !== undefined ? (
          <Alert severity="error" sx={{ margin: "10px 0" }}>
            {errors.email}
          </Alert>
        ) : null}
      </Stack>
    
    </>
   


  
  )
}

export default EmailLogin

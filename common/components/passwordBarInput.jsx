import {useState} from "react"

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function PasswordBarInput({label, value, object, setObject, sx={}}) {

    const [showPassword, setShowPassword] = useState(false)

    const handleData = input => e =>{
      console.log(object,)
        setObject({...object, [input]: e.target.value})
    }

    const handleClickShowPassword = ()=> setShowPassword(!showPassword)

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (<>
    <FormControl sx={sx} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleData(label)}
          required
          />
        </FormControl>
    </>
   )
}

export default PasswordBarInput

/**
 *  <FormControl sx={sx}>
      <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
      <Input
        required
        value={value}
        type={showPassword?"text":"password"}
        onChange={handleData(label)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={()=>{setShowPassword(prevState => !prevState)}}>
            </IconButton>
          </InputAdornment>
        }
      />
     </FormControl>
 */
/* <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                ><Visibility />
                </IconButton>
              </InputAdornment> */
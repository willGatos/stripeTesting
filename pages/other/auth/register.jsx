import {useState} from 'react'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import Link from 'next/Link'

import BarInput from '../../common/components/BarInput'
import PasswordBarInput from "../../common/components/PasswordBarInput"
import useCheckToken from "../../common/hooks/useCheckToken"
import signHandler from '../../common/helpers/signHandler'
import AuthFormWrapper from '../../common/components/AuthFormWrapper'

function register() {
  const [registerObject, setRegisterObject] = useState({
    clientName :"",
    email: "",
    password: "",
    confirmationPassword: ""
  })

  const setApiCall = useCheckToken();
  const Router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();
    const toSendRegisterObject = {
      clientName: registerObject.clientName,
      email: registerObject.email,
      password: registerObject.password,
    }
    setApiCall("post", "http://localhost:3001/user/signup", toSendRegisterObject)
    .then( response => {
      Router.push('/auth/verification');
    })
    .catch(()=>console.log("Error De Nuevo"))
    
  }

  const handleData = input => e =>{
    setRegisterObject({...registerObject, [input]: e.target.value})
  }

  return (
    <AuthFormWrapper onSubmit={onSubmit}>
          <BarInput
            name={"clientName"}
            sx={{width:"320px"}}
            label={"Nombre"}
            value={registerObject.clientName}
            object={registerObject}
            setObject={setRegisterObject}
          />
          <BarInput
            name={"email"}
            sx={{width:"320px"}}
            label={"Email"}
            value={registerObject.email}
            object={registerObject}
            setObject={setRegisterObject}
          />
          <TextField
            type={"password"}
            name={"password"}
            sx={{width:"320px"}}
            value={registerObject.password}
            label={"Contraseña"}
            onChange={handleData("password")}
            required
            variant="standard"
         />
          <TextField
            type={"password"}
            name={"confirmationPassword"}
            sx={{width:"320px"}}
            value={registerObject.confirmationPassword}
            label={"Confirmación Contraseña"}
            onChange={handleData("confirmationPassword")}
            required
            variant="standard"
          />
          {registerObject.password !== registerObject.confirmationPassword 
          && <p>Las Contraseñas no son Iguales</p>}
          <div className='flex text-center justify-center align-center'>
            <p>¿Ya estás con nosotros? /</p>
            <Link href={"/auth/login"}> Inicia Sesión</Link>
          </div>
          <button className="redButton" type="submit">Suscribirse</button>
      </AuthFormWrapper>
  )
}

export default register
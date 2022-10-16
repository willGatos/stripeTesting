import BarInput from "../../common/components/BarInput"
import Button from "../../common/components/Button"
import AuthFormWrapper from "../../common/components/AuthFormWrapper"
import signHandler from "../../common/helpers/signHandler";
import UserContext from "../../common/helpers/userContext";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function sendEmailToRecoverPass() {
  const [email, setEmail] = useState("")

  const [stateOfEmail, setStateOfEmail] = useState("")

  const onSubmit = (event) =>{
    event.preventDefault();
    setStateOfEmail("Loading")

    axios.post("http://localhost:3001/user/sendEmailToChangePassword", { email })
    .then((response)=>{

      if(response.data) setStateOfEmail("success")
      else setStateOfEmail("fail")

      console.log(stateOfEmail, "Hola")

    })
    .catch(()=>setStateOfEmail("fail"))
  }

  const handleData = e => setEmail(e.target.value)

  return (
    <>
    {stateOfEmail == "fail"
    && <p>Error</p>}
    {stateOfEmail == "success" 
    && <p>Éxito</p>}
    {stateOfEmail == "Loading"
    && <p>Cargando</p>}
      <AuthFormWrapper onSubmit={onSubmit}>
        <h3>Cambiar Contraseña</h3>
        <p>¿Has olvidado tú contraseña? Te tenemos cubierto. Escribe tú correo y sigue los pasos.</p>
        <TextField
          name={"email"}
          sx={{width:"320px"}}
          value={email}
          label={"Email"}
          onChange={handleData}
          required
          variant="standard"
        />
        <button type="submit">Enviar Email</button>
      </AuthFormWrapper>
    </>
  )
}

export default sendEmailToRecoverPass
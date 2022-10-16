import AuthFormWrapper from "../../common/components/AuthFormWrapper"
import { TextField } from "@mui/material"
import {useState, useContext} from "react";
import axios from "axios";
import signHandler from "../../common/helpers/signHandler";
import UserContext from "../../common/helpers/userContext";
import { useRouter } from 'next/router'

function Verification() {
const [formValues, setFormValues] = useState({
    email: "", 
    verificationCode: ""
})

    const {setClientData} = useContext(UserContext)
    const Router = useRouter();

    const onSubmit = (event) =>{
        event.preventDefault()

        axios.post("http://localhost:3001/user/verification", formValues)
        .then((response)=> {

        const {accessToken, clientData} = response.data;

        signHandler(accessToken, clientData, setClientData);

        Router.push('/');
        })
        .catch((e) => console.log("Error De Nuevo", e))
    }

  const handleChange = input => e =>{
    console.log(formValues)
    setFormValues({...formValues, [input]: e.target.value})
  }

  return (
    <AuthFormWrapper onSubmit={onSubmit}>
        <TextField
            required
            label="Email"
            autoComplete="off"
            value={formValues.email}
            name="email"
            color="primary"
            variant="standard"
            onChange={handleChange("email")}
          />
          <TextField
            label="Código de Verificación"
            autoComplete="off"
            type="text"
            name="verificationCode"
            color="primary"
            variant="standard"
            placeholder="_ _ _ _"
            value={formValues.verificationCode}
            onChange={handleChange("verificationCode")}
          />

          <button
          type="submit"
          > Valida
          </button>

          <button
          type="submit"
          > Reenviar Correo
          </button>
    </AuthFormWrapper>
  )
}

export default Verification
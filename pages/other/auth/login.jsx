import {useState, useContext} from "react"
import Link from "next/Link"
import axios from "axios"
import { useRouter } from 'next/router'

import TextField from "@mui/material/TextField";

import UserContext from "../../common/helpers/userContext";
import signHandler from "../../common/helpers/signHandler"

function Login() {
  const [loginObject, setLoginObject] = useState({ 
  email: "", 
  password: "",
  confirmationPassword: ""
  });

  const {setClientData} = useContext(UserContext);
  const Router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault()
    const toSendLoginObject = {email: loginObject.email, password: loginObject.password}
    axios.post("http://localhost:3001/user/signin", toSendLoginObject)
    .then((response)=> {
      console.log("Response Data from Server ",response.data)
      const {accessToken, clientData} = response.data;
      signHandler(accessToken, clientData, setClientData)
      Router.push('/');
    })
    .catch((e) => console.log("Error De Nuevo", e))
  }

  const handleData = input => e =>{
    setLoginObject({...loginObject, [input]: e.target.value})
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="authContainer" style={{zIndex: -100}}>
      <form 
        className=" formContainer align-start flex flex-column justify-center"
        style={{paddingTop: "30px", zIndex: 100}}
        onSubmit={onSubmit}>

        <TextField
          name={"email"}
          sx={{width:"320px"}}
          value={loginObject.email}
          label={"Email"}
          onChange={handleData("email")}
          required
          variant="standard"
        />

        <TextField
          type={"password"}
          name={"password"}
          sx={{width:"320px"}}
          value={loginObject.password}
          label={"Contraseña"}
          onChange={handleData("password")}
          required
          variant="standard"
        />
        <div>
          <Link href={"sendEmailToRecoverPass"}>¿ Se ha olvidado de su contraseña ?</Link> / 
          <Link href={"/register"}>Suscribirte</Link>
        </div>
        <button className="redButton" type="submit">Iniciar Sesión</button>
        
      </form>
    </div>
  )
}

export default Login
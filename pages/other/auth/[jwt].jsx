import React from 'react'
import BarInput from "../../common/components/BarInput"
import Button from "../../common/components/Button"
import AuthFormWrapper from "../../common/components/AuthFormWrapper"
import signHandler from "../../common/helpers/signHandler";
import UserContext from "../../common/helpers/userContext";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

function password() {
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        password: "",
        passwordConfirmation: ""
      })

      const [stateOfPasswordSended, setStateOfPasswordSended] = useState("")
      const Router = useRouter();
      const { jwt } = Router.query

      const onSubmit = (event)=>{
        event.preventDefault();

        setStateOfPasswordSended("Loading")

        axios.post("http://localhost:3001/user/changePassword", {
            password: passwordConfirmation.password,
            jwt
        })
        .then((response)=>{
        setStateOfPasswordSended("changed")
          setTimeout(()=>{
            Router.push("/")
          },3000)

        })
        .catch(()=>setStateOfPasswordSended("fail"))
    
      }
      return (
        <> 
        {stateOfPasswordSended ? "success" : "fail"}
          <AuthFormWrapper onSubmit={onSubmit}>
              <BarInput
              name={"password"}
              sx={{width:"320px"}}
              label={"Contraseña"}
              value={passwordConfirmation.password}
              object={passwordConfirmation}
              setObject={setPasswordConfirmation}/>
              <BarInput
              name={"passwordConfirmation"}
              sx={{width:"320px"}}
              label={"Contraseña"}
              value={passwordConfirmation.passwordConfirmation}
              object={passwordConfirmation}
              setObject={setPasswordConfirmation}
              />
              <button type='submit' >Cambiar Contraseña</button>
          </AuthFormWrapper>
        </>
      )
}

export default password
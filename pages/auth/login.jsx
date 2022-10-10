import BarInput from "../../common/components/BarInput"
import PasswordBarInput from "../../common/components/passwordBarInput"
import {useState} from "react"
import Link from "next/Link"
import useCheckToken from "../../common/hooks/useCheckToken"

function login() {
  const [loginObject, setLoginObject] = useState({ email: "", password: ""})
  const setApiCall = useCheckToken();


  const onSubmit = (event) => {
    event.preventDefault();
    const toSendLoginObject = {email: loginObject.email, password: loginObject.password}
    setApiCall("post", "http://localhost:3001/user/signin", toSendLoginObject)
    .then(()=> console.log("Iam here"))
    .catch(()=>console.log("Error De Nuevo"))
  }

  return (
    <div className="authContainer" style={{}}>
      <form style={{paddingTop: "30px"}} onSubmit={onSubmit}>
        <div className="formContainer align-start flex flex-column justify-center">
          <BarInput
            name={"email"}
            sx={{width:"320px"}}
            value={loginObject.email}
            label={"Email"}
            object={loginObject}
            setObject={setLoginObject}
          />

          <PasswordBarInput
            name={"password"}
            sx={{width:"320px"}}
            label={"Contraseña"}
            value={loginObject.password}
            object={loginObject}
            setObject={setLoginObject}
          />
          <div>
            <Link href={"/sendEmailToRecoverPass"}>¿ Se ha olvidado de su contraseña ?</Link> / 
            <Link href={"/register"}>Suscribirte</Link>
          </div>
          <button className="redButton" type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  )
}

export default login
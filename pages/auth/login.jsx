import BarInput from "../../common/components/BarInput"
import {useState} from "react"
import Link from "next/Link"
function login() {
  const [loginObject, setLoginObject] = useState({ Email: "", Contraseña: ""})

  return (
    <div>
      <BarInput
      value={loginObject.Email}
      label={"Email"}
      object={loginObject}
      setObject={setLoginObject}
      />
      <BarInput
      value={loginObject.Contraseña}
      object={loginObject}
      label={"Contraseña"}
      setObject={setLoginObject}
      />
      <div>
        <Link href={"/sendEmailToRecoverPass"}>¿ Se ha olvidado de su contraseña ?</Link>
        <Link href={"/register"}>Suscribirte</Link>
      </div>
    </div>
  )
}

export default login
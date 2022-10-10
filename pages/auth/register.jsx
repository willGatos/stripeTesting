import {useState} from 'react'
import BarInput from '../../common/components/BarInput'
import Link from 'next/Link'
function register() {
  const [registerObject, setRegisterObject] = useState({
    Nombre :"",
    Email: "",
    Contraseña: "",
  })

  return (
    <form>
      <BarInput
      label={"Nombre"}
      value={register.Nombre}
      object={registerObject}
      setObject={setRegisterObject}
      />
      <BarInput
      label={"Email"}
      value={register.Email}
      object={registerObject}
      setObject={setRegisterObject}/>
      <BarInput
      label={"Contraseña"}
      value={register.Contraseña}
      object={registerObject}
      setObject={setRegisterObject}/>
      <p>¿ Ya estás con nosotros ?</p><Link href={"/login"}>Iniciar Sesión</Link>
    </form>
  )
}

export default register
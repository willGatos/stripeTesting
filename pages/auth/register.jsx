import {useState} from 'react'
import BarInput from '../../common/components/BarInput'
import PasswordBarInput from "../../common/components/passwordBarInput"
import Link from 'next/Link'
import useCheckToken from "../../common/hooks/useCheckToken"

function register() {
  const [registerObject, setRegisterObject] = useState({
    name :"",
    email: "",
    password: "",
  })
  const setApiCall = useCheckToken();


  const onSubmit = (event) => {
    event.preventDefault();
    const toSendRegisterObject = {
      username: registerObject.name,
      email: registerObject.email,
      password: registerObject.password}
    setApiCall("post", "http://localhost:3001/user/signup", toSendRegisterObject)
    .then(()=> console.log("Iam here"))
    .catch(()=>console.log("Error De Nuevo"))
    
  }

  return (
    <div className="authContainer" style={{}}>
      <form style={{paddingTop: "30px"}} onSubmit={onSubmit}>
        <div className="formContainer align-start flex flex-column justify-center">
          <BarInput
            name={"name"}
            sx={{width:"320px"}}
            label={"Nombre"}
            value={register.name}
            object={registerObject}
            setObject={setRegisterObject}
          />
          <BarInput
            name={"email"}
            sx={{width:"320px"}}
            label={"Email"}
            value={register.email}
            object={registerObject}
            setObject={setRegisterObject}
          />
          <PasswordBarInput
            name={"password"}
            sx={{width:"320px"}}
            label={"Contraseña"}
            value={register.password}
            object={registerObject}
            setObject={setRegisterObject}
          />
          <div className='flex text-center justify-center align-center'>
            <p>¿ Ya estás con nosotros? /</p>
            <Link href={"/auth/login"}> Inicia Sesión</Link>
          </div>
          <button className="redButton" type="submit">Suscribirse</button>
        </div>
      </form>
    </div>
  )
}

export default register
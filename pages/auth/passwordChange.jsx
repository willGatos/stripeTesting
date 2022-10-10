import React from 'react'
import BarInput from '../../common/components/BarInput'
import Button from '../../common/components/Button'

function passwordChange() {
  return (
    <div>
        <BarInput
        name={"password"}
        sx={{width:"320px"}}
        label={"Contraseña"}
        value={loginObject.password}
        object={loginObject}
        setObject={setLoginObject}/>
        <BarInput
        name={"passwordConfirmation"}
        sx={{width:"320px"}}
        label={"Contraseña"}
        value={loginObject.passwordConfirmation}
        object={loginObject}
        setObject={setLoginObject}
        />
        <Button>Cambiar Contraseña</Button>
    </div>
  )
}

export default passwordChange
import BarInput from "../../common/components/BarInput"
import Button from "../../common/components/Button"
function sendEmailToRecoverPass() {
  return (
    <div>
      <h3>Cambiar Contraseña</h3>
      <p>¿Has olvidado tú contraseña? Te tenemos cubierto. Escribe tú correo y sigue los pasos.</p>
      <BarInput/>
      <Button>Enviar Email</Button>
    </div>
  )
}

export default sendEmailToRecoverPass
import MilyTravel from "../../public/MilyTravel.png"
import Link from "next/Link"
import Avatar from "@mui/material"

function Navbar({children}) {

  return (
    <>
      <navbar>
          <img style={{width: "100px"}} src={MilyTravel.src} alt='MilyTravel'/>
          <div>
            <Link href={"/auth/login"}>Iniciar Sesión</Link>
            <Link href={"/auth/register"}>Suscribirse</Link>
          </div>
      </navbar>
      {children}
    </>
  )
}

export default Navbar